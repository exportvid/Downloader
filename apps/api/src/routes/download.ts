import type { FastifyInstance, FastifyReply } from 'fastify';
import { z } from 'zod';
import type { ApiErrorBody } from '@exportvid/shared';
import { config } from '../config';
import { resolveAsset, contentTypeFor } from '../lib/assetLookup';
import { safeStreamFetch } from '../lib/urlSafety';
import { createByteLimiter } from '../lib/limitedStream';

const querySchema = z.object({
  requestId: z.string().uuid(),
  assetId: z.string().uuid(),
});

function notFound(reply: FastifyReply, message: string) {
  const body: ApiErrorBody = { error: { code: 'NOT_FOUND', message } };
  return reply.status(404).send(body);
}

/**
 * Streams a directly-downloadable asset straight through from the source.
 * Merge-required assets are not handled here — the client always calls
 * /api/v1/download/prepare first, which routes those through the queue and
 * only ever hands the browser a URL that's ready to stream immediately, so
 * we never buffer a large file in JS and never block this request on ffmpeg.
 */
export function registerDownloadRoute(app: FastifyInstance) {
  app.get('/api/v1/download', async (req, reply) => {
    const parsed = querySchema.safeParse(req.query);
    if (!parsed.success) {
      const body: ApiErrorBody = { error: { code: 'INVALID_URL', message: 'requestId and assetId are required' } };
      return reply.status(400).send(body);
    }

    const resolved = await resolveAsset(parsed.data.requestId, parsed.data.assetId);
    if (!resolved) {
      return notFound(reply, 'This download link has expired. Please paste the link again.');
    }
    const { asset, internal, filename } = resolved;

    if (internal.kind !== 'direct') {
      const body: ApiErrorBody = { error: { code: 'INVALID_URL', message: 'Use /api/v1/download/prepare for this asset.' } };
      return reply.status(409).send(body);
    }

    let upstream;
    try {
      upstream = await safeStreamFetch(internal.url, { headers: internal.httpHeaders });
    } catch (err) {
      req.log.error(err, 'download proxy failed');
      const body: ApiErrorBody = { error: { code: 'EXTRACTION_FAILED', message: 'Could not reach the source file.' } };
      return reply.status(502).send(body);
    }

    if (upstream.statusCode >= 400) {
      upstream.body.destroy();
      return notFound(reply, 'The source no longer has this file available.');
    }

    const contentLength = upstream.headers['content-length'];
    const declaredSize = Array.isArray(contentLength) ? Number(contentLength[0]) : Number(contentLength);
    if (declaredSize && declaredSize > config.MAX_DOWNLOAD_BYTES) {
      upstream.body.destroy();
      const body: ApiErrorBody = { error: { code: 'EXTRACTION_FAILED', message: 'File exceeds the maximum supported size.' } };
      return reply.status(413).send(body);
    }

    reply.header('Content-Type', contentTypeFor(asset.container));
    reply.header('Content-Disposition', `attachment; filename="${filename}"`);
    if (declaredSize) reply.header('Content-Length', String(declaredSize));
    reply.header('Cache-Control', 'no-store');

    const limiter = createByteLimiter(config.MAX_DOWNLOAD_BYTES);
    limiter.on('error', () => {
      reply.raw.destroy();
    });
    return reply.send(upstream.body.pipe(limiter));
  });
}
