import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import type { ApiErrorBody } from '@exportvid/shared';
import { getOrRunExtraction } from '../lib/cache';
import { ExtractionInputError } from '../extraction';
import { detectPlatform } from '@exportvid/shared';
import { logExtractionEvent } from '../lib/db';

const bodySchema = z.object({
  url: z.string().min(1).max(2048),
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
  app.post('/api/v1/extract', async (req, reply) => {
    const parsed = bodySchema.safeParse(req.body);
    if (!parsed.success) {
      const body: ApiErrorBody = { error: { code: 'INVALID_URL', message: 'A valid `url` field is required' } };
      return reply.status(400).send(body);
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
