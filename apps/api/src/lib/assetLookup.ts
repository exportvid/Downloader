import type { ExtractionResult, MediaAsset } from '@exportvid/shared';
import { getExtractionByRequestId } from './cache';
import { safeFilename } from './filename';
import type { InternalAsset } from '../extraction/normalize';

export interface ResolvedAsset {
  result: ExtractionResult;
  asset: MediaAsset;
  internal: InternalAsset;
  filename: string;
}

export async function resolveAsset(requestId: string, assetId: string): Promise<ResolvedAsset | null> {
  const extraction = await getExtractionByRequestId(requestId);
  if (!extraction) return null;
  const asset = extraction.result.assets.find((a) => a.id === assetId);
  const internal = extraction.internal.get(assetId);
  if (!asset || !internal) return null;
  const filename = safeFilename(extraction.result.title, extraction.result.platform, asset.container);
  return { result: extraction.result, asset, internal, filename };
}

export function contentTypeFor(container: string): string {
  const map: Record<string, string> = {
    mp4: 'video/mp4',
    webm: 'video/webm',
    m4a: 'audio/mp4',
    mp3: 'audio/mpeg',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
  };
  return map[container.toLowerCase()] ?? 'application/octet-stream';
}
