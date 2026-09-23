import { execFile } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { Worker, type Job } from 'bullmq';
import { config } from './config';
import { assertSafeUrl } from './lib/urlSafety';
import { publishTempFile, localTmpDir } from './lib/storage';
import { logMergeJobEvent } from './lib/db';
import { MERGE_QUEUE_NAME, type MergeJobData, type MergeJobResult } from './queue/mergeQueue';

function headersArg(headers?: Record<string, string>): string[] {
  if (!headers || Object.keys(headers).length === 0) return [];
  const lines = Object.entries(headers)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\r\n');
  return ['-headers', `${lines}\r\n`];
}

async function runFfmpegMerge(data: MergeJobData): Promise<string> {
  await mkdir(localTmpDir(), { recursive: true });

  // Re-validate both source URLs at merge time — they were extracted minutes
  // earlier and this process is about to fetch them directly.
  await assertSafeUrl(data.videoUrl);
  await assertSafeUrl(data.audioUrl);

  const outPath = path.join(localTmpDir(), `${randomUUID()}.${data.container}`);
  const args = [
    '-y',
    ...headersArg(data.httpHeaders),
    '-i',
    data.videoUrl,
    ...headersArg(data.httpHeaders),
    '-i',
    data.audioUrl,
    '-c',
    'copy',
    '-movflags',
    '+faststart',
    outPath,
  ];

  await new Promise<void>((resolve, reject) => {
    execFile(config.FFMPEG_PATH, args, { timeout: 120_000, maxBuffer: 16 * 1024 * 1024 }, (err, _stdout, stderr) => {
      if (err) {
        reject(new Error(`ffmpeg failed: ${stderr?.slice(-2000) || err.message}`));
        return;
      }
      resolve();
    });
  });

  return outPath;
}

const worker = new Worker<MergeJobData, MergeJobResult>(
  MERGE_QUEUE_NAME,
  async (job: Job<MergeJobData>) => {
    const startedAt = Date.now();
    try {
      const outPath = await runFfmpegMerge(job.data);
      const stored = await publishTempFile(
        outPath,
        `${job.data.requestId}/${job.data.assetId}.${job.data.container}`,
        `video/${job.data.container}`,
        job.data.titleHint,
      );
      logMergeJobEvent({ requestId: job.data.requestId, assetId: job.data.assetId, succeeded: true, processingMs: Date.now() - startedAt });
      return stored;
    } catch (err) {
      logMergeJobEvent({
        requestId: job.data.requestId,
        assetId: job.data.assetId,
        succeeded: false,
        errorMessage: err instanceof Error ? err.message.slice(0, 500) : 'unknown error',
        processingMs: Date.now() - startedAt,
      });
      throw err;
    }
  },
  {
    connection: { url: config.REDIS_URL },
    concurrency: 2,
  },
);

worker.on('failed', (job, err) => {
  // eslint-disable-next-line no-console
  console.error(`[worker] merge job ${job?.id} failed:`, err.message);
});

// eslint-disable-next-line no-console
console.log('[worker] media-merge worker started');
