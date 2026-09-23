import path from 'node:path';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import type { FastifyInstance } from 'fastify';
import { localTmpDir, isR2Configured } from '../lib/storage';

/**
 * Local-development-only fallback for serving ffmpeg-merged files when R2
 * credentials aren't configured. Never mounted in a real deployment scenario
 * beyond local dev — production should always have R2 configured.
 */
export function registerTmpMediaRoute(app: FastifyInstance) {
  app.get('/tmp-media/*', async (req, reply) => {
    if (isR2Configured) {
      return reply.status(404).send();
    }
    const wildcard = (req.params as Record<string, string>)['*'] ?? '';
    const key = wildcard.replace(/\\/g, '/');
    if (key.includes('..') || key.startsWith('/')) {
      return reply.status(400).send();
    }
    const filePath = path.join(localTmpDir(), key);
    if (!filePath.startsWith(localTmpDir())) {
      return reply.status(400).send();
    }
    try {
      await stat(filePath);
    } catch {
      return reply.status(404).send();
    }
    reply.header('Cache-Control', 'no-store');
    const filename = (req.query as Record<string, string>).filename;
    if (filename) {
      reply.header('Content-Disposition', `attachment; filename="${filename}"`);
    }
    return reply.send(createReadStream(filePath));
  });
}
