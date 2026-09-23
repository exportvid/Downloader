import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import type { ApiErrorBody } from '@exportvid/shared';
import { mergeQueue } from '../queue/mergeQueue';

const paramsSchema = z.object({ jobId: z.string().min(1) });

export function registerJobsRoute(app: FastifyInstance) {
  app.get('/api/v1/jobs/:jobId', async (req, reply) => {
    const parsed = paramsSchema.safeParse(req.params);
    if (!parsed.success) {
      const body: ApiErrorBody = { error: { code: 'INVALID_URL', message: 'jobId is required' } };
      return reply.status(400).send(body);
    }

    const job = await mergeQueue.getJob(parsed.data.jobId);
    if (!job) {
      const body: ApiErrorBody = { error: { code: 'NOT_FOUND', message: 'Unknown job' } };
      return reply.status(404).send(body);
    }

    const state = await job.getState();
    if (state === 'completed') {
      return reply.status(200).send({ status: 'completed', ...job.returnvalue });
    }
    if (state === 'failed') {
      return reply.status(200).send({ status: 'failed', error: job.failedReason });
    }
    return reply.status(200).send({ status: 'processing' });
  });
}
