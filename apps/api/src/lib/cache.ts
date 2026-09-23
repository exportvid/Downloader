import { createHash } from 'node:crypto';
import { config } from '../config';
import { redis } from './redis';
import type { NormalizedExtraction } from '../extraction/normalize';
import { runExtraction } from '../extraction';

function urlKey(sourceUrl: string): string {
  const hash = createHash('sha256').update(sourceUrl.trim().toLowerCase()).digest('hex');
  return `ev:byurl:${hash}`;
}
function resultKey(requestId: string): string {
  return `ev:result:${requestId}`;
}

interface SerializedExtraction {
  result: NormalizedExtraction['result'];
  internal: [string, NormalizedExtraction['internal'] extends Map<string, infer V> ? V : never][];
}

async function readCachedResult(requestId: string): Promise<NormalizedExtraction | null> {
  const raw = await redis.get(resultKey(requestId));
  if (!raw) return null;
  const parsed = JSON.parse(raw) as SerializedExtraction;
  return { result: parsed.result, internal: new Map(parsed.internal) };
}

async function writeCachedResult(normalized: NormalizedExtraction): Promise<void> {
  const payload: SerializedExtraction = {
    result: normalized.result,
    internal: Array.from(normalized.internal.entries()),
  };
  const ttl = config.EXTRACTION_CACHE_TTL_SECONDS;
  await redis
    .multi()
    .set(resultKey(normalized.result.requestId), JSON.stringify(payload), 'EX', ttl)
    .set(urlKey(normalized.result.sourceUrl), normalized.result.requestId, 'EX', ttl)
    .exec();
}

export async function getExtractionByRequestId(requestId: string): Promise<NormalizedExtraction | null> {
  return readCachedResult(requestId);
}

// In-process dedupe: if two requests for the same URL land on this instance
// while an extraction is already running, the second one awaits the first's
// result instead of shelling out to yt-dlp again.
const inFlight = new Map<string, Promise<NormalizedExtraction>>();

export async function getOrRunExtraction(sourceUrl: string): Promise<NormalizedExtraction> {
  const key = urlKey(sourceUrl);

  const cachedId = await redis.get(key);
  if (cachedId) {
    const cached = await readCachedResult(cachedId);
    if (cached) return cached;
  }

  const existing = inFlight.get(key);
  if (existing) return existing;

  const promise = runExtraction(sourceUrl)
    .then(async (normalized) => {
      await writeCachedResult(normalized);
      return normalized;
    })
    .finally(() => {
      inFlight.delete(key);
    });

  inFlight.set(key, promise);
  return promise;
}
