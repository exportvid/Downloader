import { createReadStream } from 'node:fs';
import { mkdir, readdir, rename, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { config, r2Configured } from '../config';

const LOCAL_TMP_DIR = path.join(process.cwd(), '.tmp-media');

const s3 = r2Configured
  ? new S3Client({
      region: 'auto',
      endpoint: config.R2_ENDPOINT ?? `https://${config.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: config.R2_ACCESS_KEY_ID!,
        secretAccessKey: config.R2_SECRET_ACCESS_KEY!,
      },
    })
  : null;

export interface StoredFile {
  /** URL the client can download directly (signed R2 URL, or local dev route). */
  downloadUrl: string;
  expiresAt: string;
}

/**
 * Publishes a locally-produced (e.g. ffmpeg-merged) file for temporary download.
 * Uses R2 when configured; otherwise falls back to serving it from a local tmp
 * dir via the API itself, which is fine for local development only.
 */
export async function publishTempFile(
  localPath: string,
  objectKey: string,
  contentType: string,
  filename: string,
): Promise<StoredFile> {
  const ttl = config.TEMP_FILE_TTL_SECONDS;
  const expiresAt = new Date(Date.now() + ttl * 1000).toISOString();
  const contentDisposition = `attachment; filename="${filename}"`;

  if (s3) {
    const body = createReadStream(localPath);
    const { size } = await stat(localPath);
    await s3.send(
      new PutObjectCommand({
        Bucket: config.R2_BUCKET,
        Key: objectKey,
        Body: body,
        ContentType: contentType,
        ContentLength: size,
        ContentDisposition: contentDisposition,
      }),
    );
    const url = config.R2_PUBLIC_BASE_URL
      ? `${config.R2_PUBLIC_BASE_URL.replace(/\/$/, '')}/${objectKey}`
      : await getSignedUrl(
          s3,
          new GetObjectCommand({
            Bucket: config.R2_BUCKET,
            Key: objectKey,
            ResponseContentDisposition: contentDisposition,
            ResponseContentType: contentType,
          }),
          { expiresIn: ttl },
        );
    scheduleR2Cleanup(objectKey, ttl);
    // The copy in R2 is the one the user downloads. Drop the worker's local file right away.
    unlink(localPath).catch(() => {});
    return { downloadUrl: url, expiresAt };
  }

  // Local dev fallback: keep the file where it is and serve it via /tmp-media/:key.
  const servedPath = path.join(LOCAL_TMP_DIR, objectKey);
  await mkdir(path.dirname(servedPath), { recursive: true });
  await rename(localPath, servedPath);
  scheduleLocalCleanup(servedPath, ttl);
  return { downloadUrl: `/tmp-media/${objectKey}?filename=${encodeURIComponent(filename)}`, expiresAt };
}

export function localTmpDir(): string {
  return LOCAL_TMP_DIR;
}

function scheduleR2Cleanup(objectKey: string, ttlSeconds: number) {
  setTimeout(() => {
    s3?.send(new DeleteObjectCommand({ Bucket: config.R2_BUCKET, Key: objectKey })).catch(() => {});
  }, ttlSeconds * 1000).unref();
}

function scheduleLocalCleanup(localPath: string, ttlSeconds: number) {
  setTimeout(() => {
    unlink(localPath).catch(() => {});
  }, ttlSeconds * 1000).unref();
}

export const isR2Configured = r2Configured;

const SWEEP_INTERVAL_MS = 5 * 60 * 1000;
/** Extra time past the TTL before the sweeper steps in, so it never races the normal timer or a download in progress. */
const SWEEP_GRACE_MS = 2 * 60 * 1000;
const TEMP_OBJECT_KEY = /^[0-9a-f-]{36}\/[0-9a-f-]{36}\.[a-z0-9]+$/i;

async function sweepLocalDir(dir: string, cutoff: number): Promise<number> {
  let removed = 0;
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return 0;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removed += await sweepLocalDir(full, cutoff);
      continue;
    }
    try {
      if ((await stat(full)).mtimeMs < cutoff) {
        await unlink(full);
        removed += 1;
      }
    } catch {
      /* file vanished or is in use; try again next sweep */
    }
  }
  return removed;
}

async function sweepR2(cutoff: number): Promise<number> {
  if (!s3) return 0;
  let removed = 0;
  let token: string | undefined;
  do {
    const page = await s3.send(new ListObjectsV2Command({ Bucket: config.R2_BUCKET, ContinuationToken: token }));
    const stale = (page.Contents ?? [])
      .filter((o) => o.Key && TEMP_OBJECT_KEY.test(o.Key) && o.LastModified && o.LastModified.getTime() < cutoff)
      .map((o) => ({ Key: o.Key! }));
    if (stale.length > 0) {
      await s3.send(new DeleteObjectsCommand({ Bucket: config.R2_BUCKET, Delete: { Objects: stale, Quiet: true } }));
      removed += stale.length;
    }
    token = page.IsTruncated ? page.NextContinuationToken : undefined;
  } while (token);
  return removed;
}

/**
 * Deletes temp files older than the TTL. The per-file timers in this module are lost if the process restarts,
 * so this sweep is what guarantees the retention period stated in the Privacy Policy.
 */
export async function sweepExpiredTempFiles(): Promise<{ local: number; r2: number }> {
  const cutoff = Date.now() - config.TEMP_FILE_TTL_SECONDS * 1000 - SWEEP_GRACE_MS;
  const [local, r2] = await Promise.all([sweepLocalDir(LOCAL_TMP_DIR, cutoff), sweepR2(cutoff)]);
  return { local, r2 };
}

/** Runs one sweep now (catching leftovers from a crash) and then every few minutes. */
export function startTempSweeper(): void {
  const run = () =>
    sweepExpiredTempFiles()
      .then(({ local, r2 }) => {
        // eslint-disable-next-line no-console
        if (local + r2 > 0) console.log(`[sweeper] removed ${local} local and ${r2} R2 expired temp files`);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[sweeper] sweep failed', err);
      });
  void run();
  setInterval(run, SWEEP_INTERVAL_MS).unref();
}
