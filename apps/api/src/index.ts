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
import { turnstileEnabled } from './lib/turnstile';

async function main() {
  const app = Fastify({
    logger: {
      level: config.NODE_ENV === 'production' ? 'info' : 'debug',
      transport: config.NODE_ENV === 'production' ? undefined : { target: 'pino-pretty' },
    },
    // Caddy is the only hop in front of the API. Trusting exactly one hop means a client can't pick its own IP
    // by sending an X-Forwarded-For header.
    trustProxy: (_address: string, hop: number) => hop < 1,
    bodyLimit: 1024 * 16,
  });

  await app.register(helmet, { contentSecurityPolicy: false });
  await app.register(cors, { origin: config.WEB_ORIGIN, methods: ['GET', 'POST'] });
  // One registration. Routes without their own `config.rateLimit` share this per-IP budget; routes with one get
  // a separate counter (ROUTE_LIMITS in lib/limits.ts). Registering the plugin twice would count some requests twice.
  await app.register(rateLimit, {
    global: true,
    max: 60,
    timeWindow: '1 minute',
    redis,
    nameSpace: 'ev:rl:',
    keyGenerator: (req) => req.ip,
    errorResponseBuilder: (_req, ctx) => ({
      statusCode: ctx.statusCode,
      error: { code: 'RATE_LIMITED', message: "You're sending requests too fast. Please wait a moment and try again." },
    }),
  });

  registerExtractRoute(app);
  registerDownloadRoute(app);
  registerPrepareDownloadRoute(app);
  registerJobsRoute(app);
  registerHealthRoute(app);
  registerTmpMediaRoute(app);

  app.setNotFoundHandler((_req, reply) => {
    reply.status(404).send({ error: { code: 'NOT_FOUND', message: 'Not found' } });
  });

  if (!turnstileEnabled && config.NODE_ENV === 'production') {
    app.log.warn('TURNSTILE_SECRET_KEY is not set. Extraction is open to bots, protected only by rate limits.');
  }

  await app.listen({ port: config.PORT, host: config.HOST });
  app.log.info(`ExportVid API listening on http://${config.HOST}:${config.PORT}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Fatal error starting API', err);
  process.exit(1);
});
