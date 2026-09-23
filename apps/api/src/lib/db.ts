import { PrismaClient } from '@prisma/client';
import { config } from '../config';

export const prisma = config.DATABASE_URL ? new PrismaClient() : null;

/** Fire-and-forget monitoring write. Never throws — a metrics outage must not break extraction. */
export function logExtractionEvent(data: { platform: string; outcome: string; processingMs: number }): void {
  if (!prisma) return;
  prisma.extractionEvent
    .create({ data: { platform: data.platform, outcome: data.outcome as never, processingMs: data.processingMs } })
    .catch((err) => console.error('[monitoring] failed to log extraction event', err));
}

export function logMergeJobEvent(data: { requestId: string; assetId: string; succeeded: boolean; errorMessage?: string; processingMs: number }): void {
  if (!prisma) return;
  prisma.mergeJobEvent.create({ data }).catch((err) => console.error('[monitoring] failed to log merge event', err));
}
