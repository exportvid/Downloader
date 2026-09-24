import type { FastifyInstance } from 'fastify';
import { redis } from '../lib/redis';

export function registerHealthRoute(app: FastifyInstance) {
  // Uptime monitors call this often, so it stays out of the rate limiter.
  app.get('/health', { config: { rateLimit: false } }, async (_req, reply) => {
    let redisOk = false;
    try {
      redisOk = (await redis.ping()) === 'PONG';
    } catch {
      redisOk = false;
    }
    return reply.status(redisOk ? 200 : 503).send({ ok: redisOk, redis: redisOk });
  });
}
