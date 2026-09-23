import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import type { ApiErrorBody } from '@exportvid/shared';
import { resolveAsset } from '../lib/assetLookup';
import { mergeQueue } from '../queue/mergeQueue';

const querySchema = z.object({
  requestId: z.string().uuid(),
  assetId: z.string().uuid(),
});

/**
 * The client always calls this first. It returns instantly either way:
 * - direct asset: the ready-to-stream download URL (no upstream request made here)
 * - merge-required asset: a queued jobId to poll via /api/v1/jobs/:jobId
 * This keeps the browser's download click a single native navigation either
 * way, never a JS-buffered fetch of the whole file.
 */
export function registerPrepareDownloadRoute(app: FastifyInstance) {
  app.get('/api/v1/download/prepare', async (req, reply) => {
    const parsed = querySchema.safeParse(req.query);
    if (!parsed.success) {
      const body: ApiErrorBody = { error: { code: 'INVALID_URL', message: 'requestId and assetId are required' } };
      return reply.status(400).send(body);
    }
    const { requestId, assetId } = parsed.data;

    const resolved = await resolveAsset(requestId, assetId);
    if (!resolved) {
      const body: ApiErrorBody = { error: { code: 'NOT_FOUND', message: 'This download link has expired. Please paste the link again.' } };
      return reply.status(404).send(body);
    }
    const { internal, filename } = resolved;

    if (internal.kind === 'direct') {
      const url = `/api/v1/download?${new URLSearchParams({ requestId, assetId }).toString()}`;
      return reply.status(200).send({ kind: 'direct', url });
    }

    const job = await mergeQueue.add('merge', {
      requestId,
      assetId,
      videoUrl: internal.videoUrl,
      audioUrl: internal.audioUrl,
      container: internal.container,
      httpHeaders: internal.httpHeaders,
      titleHint: filename,
    });
    return reply.status(202).send({ kind: 'merge', jobId: job.id });
  });
}
