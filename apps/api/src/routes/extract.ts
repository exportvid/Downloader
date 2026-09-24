import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import type { ApiErrorBody } from '@exportvid/shared';
import { getOrRunExtraction } from '../lib/cache';
import { ExtractionInputError } from '../extraction';
import { detectPlatform } from '@exportvid/shared';
import { logExtractionEvent } from '../lib/db';
import { verifyTurnstile } from '../lib/turnstile';
import { LIMITS, ROUTE_LIMITS, consumeQuota, sendRateLimited } from '../lib/limits';

const bodySchema = z.object({
  url: z.string().min(1).max(2048),
  turnstileToken: z.string().max(4096).optional(),
});

const codeToStatus: Record<ExtractionInputError['code'], number> = {
  UNSUPPORTED_URL: 400,
  INVALID_URL: 400,
  PRIVATE_OR_PROTECTED_CONTENT: 403,
  NOT_FOUND: 404,
  EXTRACTION_FAILED: 502,
  TIMEOUT: 504,
};

export function registerExtractRoute(app: FastifyInstance) {
  app.post('/api/v1/extract', { config: { rateLimit: ROUTE_LIMITS.extract } }, async (req, reply) => {
    const parsed = bodySchema.safeParse(req.body);
    if (!parsed.success) {
      const body: ApiErrorBody = { error: { code: 'INVALID_URL', message: 'A valid `url` field is required' } };
      return reply.status(400).send(body);
    }

    const verification = await verifyTurnstile(parsed.data.turnstileToken, req.ip);
    if (!verification.ok) {
      req.log.info({ reason: verification.reason }, 'turnstile verification failed');
      const body: ApiErrorBody = { error: { code: 'VERIFICATION_FAILED', message: 'Could not verify this request. Refresh the page and try again.' } };
      return reply.status(403).send(body);
    }

    // Checked after verification so a bot without a valid token can't use up a real visitor's hourly quota.
    const hourly = await consumeQuota('extract-hour', req.ip, LIMITS.extractPerHour, 60 * 60);
    if (!hourly.allowed) {
      return sendRateLimited(reply, hourly.retryAfterSeconds, "You've reached the hourly limit. Please try again later.");
    }

    const startedAt = Date.now();
    const platformGuess = detectPlatform(parsed.data.url.trim())?.platform ?? 'unknown';

    try {
      const { result } = await getOrRunExtraction(parsed.data.url.trim());
      logExtractionEvent({ platform: result.platform, outcome: 'SUCCESS', processingMs: Date.now() - startedAt });
      return reply.status(200).send(result);
    } catch (err) {
      if (err instanceof ExtractionInputError) {
        logExtractionEvent({ platform: platformGuess, outcome: err.code, processingMs: Date.now() - startedAt });
        const body: ApiErrorBody = { error: { code: err.code, message: err.message } };
        return reply.status(codeToStatus[err.code]).send(body);
      }
      req.log.error(err, 'extraction failed unexpectedly');
      logExtractionEvent({ platform: platformGuess, outcome: 'INTERNAL_ERROR', processingMs: Date.now() - startedAt });
      const body: ApiErrorBody = { error: { code: 'INTERNAL_ERROR', message: 'Something went wrong. Please try again.' } };
      return reply.status(500).send(body);
    }
  });
}
