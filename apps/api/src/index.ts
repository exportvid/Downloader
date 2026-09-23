import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import { config } from './config';
import { redis } from './lib/redis';
import { registerExtractRoute } from './routes/extract';
import { registerDownloadRoute } from './routes/download';
import { registerPrepareDownloadRoute } from './routes/prepareDownload';
import { registerJobsRoute } from './routes/jobs';
import { registerHealthRoute } from './routes/health';
import { registerTmpMediaRoute } from './routes/tmpMedia';

async function main() {
  const app = Fastify({
    logger: {
      level: config.NODE_ENV === 'production' ? 'info' : 'debug',
      transport: config.NODE_ENV === 'production' ? undefined : { target: 'pino-pretty' },
    },
    trustProxy: true,
    bodyLimit: 1024 * 16,
  });

  const rateLimitErrorResponseBuilder = () => ({
    error: { code: 'RATE_LIMITED', message: "You're sending requests too fast. Please wait a moment and try again." },
  });

  await app.register(helmet, { contentSecurityPolicy: false });
  await app.register(cors, { origin: config.WEB_ORIGIN, methods: ['GET', 'POST'] });
  await app.register(rateLimit, {
    global: true,
    max: 30,
    timeWindow: '1 minute',
    redis,
    keyGenerator: (req) => req.ip,
    errorResponseBuilder: rateLimitErrorResponseBuilder,
  });

  // Extraction is the expensive path (shells out to yt-dlp) — cap it tighter
  // than the global limit.
  app.register(async (scoped) => {
    await scoped.register(rateLimit, {
      max: 10,
      timeWindow: '1 minute',
      redis,
      keyGenerator: (req) => req.ip,
      errorResponseBuilder: rateLimitErrorResponseBuilder,
    });
    registerExtractRoute(scoped);
  });

  registerDownloadRoute(app);
  registerPrepareDownloadRoute(app);
  registerJobsRoute(app);
  registerHealthRoute(app);
  registerTmpMediaRoute(app);

  app.setNotFoundHandler((_req, reply) => {
    reply.status(404).send({ error: { code: 'NOT_FOUND', message: 'Not found' } });
  });

  await app.listen({ port: config.PORT, host: config.HOST });
  app.log.info(`ExportVid API listening on http://${config.HOST}:${config.PORT}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Fatal error starting API', err);
  process.exit(1);
});
