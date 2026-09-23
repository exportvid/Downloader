import type { FastifyInstance } from 'fastify';
import { redis } from '../lib/redis';

export function registerHealthRoute(app: FastifyInstance) {
  app.get('/health', async (_req, reply) => {
    let redisOk = false;
    try {
      redisOk = (await redis.ping()) === 'PONG';
    } catch {
      redisOk = false;
    }
    return reply.status(redisOk ? 200 : 503).send({ ok: redisOk, redis: redisOk });
  });
}
