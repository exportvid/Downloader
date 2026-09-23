import { Queue } from 'bullmq';
import { config } from '../config';

export interface MergeJobData {
  requestId: string;
  assetId: string;
  videoUrl: string;
  audioUrl?: string;
  container: string;
  httpHeaders?: Record<string, string>;
  titleHint: string;
}

export interface MergeJobResult {
  downloadUrl: string;
  expiresAt: string;
}

export const MERGE_QUEUE_NAME = 'media-merge';

export const mergeQueue = new Queue<MergeJobData, MergeJobResult>(MERGE_QUEUE_NAME, {
  connection: { url: config.REDIS_URL },
  defaultJobOptions: {
    attempts: 2,
    backoff: { type: 'fixed', delay: 2000 },
    removeOnComplete: { age: 900 },
    removeOnFail: { age: 3600 },
  },
});
