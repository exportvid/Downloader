import { createReadStream } from 'node:fs';
import { mkdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
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
    return { downloadUrl: url, expiresAt };
  }

  // Local dev fallback: keep the file where it is and serve it via /tmp-media/:key.
  await mkdir(LOCAL_TMP_DIR, { recursive: true });
  scheduleLocalCleanup(localPath, ttl);
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
