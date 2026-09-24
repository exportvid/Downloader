import type { FastifyReply } from 'fastify';
import type { ApiErrorBody } from '@exportvid/shared';
import { redis } from './redis';

/** Per-IP, per-minute limits for each route. Each route keeps its own counter. */
export const ROUTE_LIMITS = {
  extract: { max: 10, timeWindow: '1 minute' },
  prepare: { max: 30, timeWindow: '1 minute' },
  download: { max: 30, timeWindow: '1 minute' },
  // The website polls a merge job every 1.5 seconds, which is 40 calls a minute per job.
  jobs: { max: 150, timeWindow: '1 minute' },
} as const;

/**
 * Limits the per-route rate limiter can't express: longer quotas that sit on top of the per-minute limit,
 * and caps on how many downloads one visitor streams at the same time.
 */
export const LIMITS = {
  /** Extractions per IP per hour, on top of the per-minute route limit. */
  extractPerHour: 60,
  /** Merge jobs per IP per 10 minutes. Each one runs ffmpeg on the worker. */
  mergesPer10Min: 6,
  /** Merge jobs waiting in the queue before new ones are turned away for everyone. */
  maxQueuedMerges: 25,
  /** Downloads one IP can stream through the API at the same time. */
  concurrentDownloads: 4,
} as const;

/** How long a download slot survives if the process dies before releasing it. */
const SLOT_TTL_SECONDS = 60 * 60;

export interface QuotaResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

// Starts the window on the first hit only, and returns the count with the seconds left. Atomic in one round trip.
const FIXED_WINDOW = `
local count = redis.call('INCR', KEYS[1])
if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end
return {count, redis.call('TTL', KEYS[1])}
`;

/** Fixed-window counter. Counts the request whether or not it is allowed, so hammering doesn't reset the window. */
export async function consumeQuota(name: string, ip: string, max: number, windowSeconds: number): Promise<QuotaResult> {
  const [count, ttl] = (await redis.eval(FIXED_WINDOW, 1, `ev:quota:${name}:${ip}`, windowSeconds)) as [number, number];
  return { allowed: count <= max, retryAfterSeconds: Math.max(1, ttl) };
}

function slotKey(ip: string) {
  return `ev:slots:download:${ip}`;
}

export async function activeDownloads(ip: string): Promise<number> {
  return Number((await redis.get(slotKey(ip))) ?? 0);
}

/** Takes a download slot. Returns a release function, or null when the visitor already has too many streams open. */
export async function acquireDownloadSlot(ip: string): Promise<(() => void) | null> {
  const key = slotKey(ip);
  const results = await redis.multi().incr(key).expire(key, SLOT_TTL_SECONDS).exec();
  const count = Number(results?.[0]?.[1] ?? 0);
  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    redis.decr(key).catch(() => {});
  };
  if (count > LIMITS.concurrentDownloads) {
    release();
    return null;
  }
  return release;
}

export function sendRateLimited(reply: FastifyReply, retryAfterSeconds: number, message: string) {
  const body: ApiErrorBody = { error: { code: 'RATE_LIMITED', message } };
  return reply.header('Retry-After', String(retryAfterSeconds)).status(429).send(body);
}
