import { randomUUID } from 'node:crypto';
import type { ContentType, ExtractionResult, MediaAsset, Platform } from '@exportvid/shared';
import { config } from '../config';
import type { PlatformMatch } from '@exportvid/shared';
import type { YtDlpFormat, YtDlpInfo } from './ytdlp';

/** Server-only detail needed to actually serve a MediaAsset's bytes. Never sent to the client. */
export type InternalAsset =
  | { kind: 'direct'; url: string; httpHeaders?: Record<string, string> }
  | { kind: 'merge'; videoUrl: string; audioUrl: string; container: string; httpHeaders?: Record<string, string> };

export interface NormalizedExtraction {
  result: ExtractionResult;
  internal: Map<string, InternalAsset>;
}

function humanLabel(f: { height?: number; width?: number; ext?: string; isAudioOnly?: boolean; isImage?: boolean }): string {
  if (f.isImage) return `Original ${(f.ext ?? 'jpg').toUpperCase()}`;
  if (f.isAudioOnly) return `Audio (${(f.ext ?? 'm4a').toUpperCase()})`;
  if (f.height) return `${f.height}p ${(f.ext ?? 'mp4').toUpperCase()}`;
  return `${(f.ext ?? 'mp4').toUpperCase()}`;
}

// yt-dlp convention: a codec field explicitly set to the string 'none' means
// that track is definitely absent. `undefined`/`null` means "not probed" —
// several extractors (e.g. Twitter's progressive `http-*` formats) leave both
// vcodec and acodec unset on formats that are, in fact, complete muxed files.
// Treating "unprobed" as absent would wrongly hide those as video-only/silent.
function hasVideoTrack(f: { vcodec?: string }): boolean {
  return f.vcodec !== 'none';
}
function hasAudioTrack(f: { acodec?: string }): boolean {
  return f.acodec !== 'none';
}
function isMuxed(f: YtDlpFormat): boolean {
  return hasVideoTrack(f) && hasAudioTrack(f) && Boolean(f.height);
}
function isVideoOnly(f: YtDlpFormat): boolean {
  return hasVideoTrack(f) && !hasAudioTrack(f) && Boolean(f.height);
}
function isAudioOnly(f: YtDlpFormat): boolean {
  return !hasVideoTrack(f) && hasAudioTrack(f);
}

function refineContentType(platform: Platform, likely: ContentType, info: YtDlpInfo): ContentType {
  if (platform === 'instagram') {
    const entries = info.entries ?? [];
    if (entries.length > 1) return 'instagram_carousel';
    const hasVideo = Boolean(info.formats?.some((f) => f.vcodec && f.vcodec !== 'none')) || Boolean(info.vcodec && info.vcodec !== 'none');
    if (!hasVideo && likely !== 'instagram_profile_picture') return 'instagram_photo';
    return likely === 'unknown' ? 'instagram_post' : likely;
  }
  if (platform === 'reddit') {
    if (info.ext === 'gif') return 'reddit_gif';
    const hasVideo = Boolean(info.formats?.some((f) => f.vcodec && f.vcodec !== 'none')) || Boolean(info.vcodec && info.vcodec !== 'none');
    return hasVideo ? 'reddit_video' : 'reddit_image';
  }
  if (platform === 'twitter') {
    const hasVideo = Boolean(info.formats?.some((f) => f.vcodec && f.vcodec !== 'none')) || Boolean(info.vcodec && info.vcodec !== 'none');
    return hasVideo ? 'twitter_video' : 'twitter_photo';
  }
  return likely;
}

/** Builds the client-facing asset list, deduped by resolution, best quality first. */
function buildVideoAssets(info: YtDlpInfo, internal: Map<string, InternalAsset>): MediaAsset[] {
  const formats = info.formats ?? [];
  const assets: MediaAsset[] = [];
  const seenHeights = new Set<number>();

  const muxed = formats
    .filter(isMuxed)
    .filter((f) => (f.height ?? 0) > 0)
    .sort((a, b) => (b.height ?? 0) - (a.height ?? 0));

  for (const f of muxed) {
    const height = f.height ?? 0;
    if (seenHeights.has(height)) continue;
    seenHeights.add(height);
    const id = randomUUID();
    assets.push({
      id,
      label: humanLabel({ height: f.height, ext: f.ext }),
      container: f.ext,
      codec: f.vcodec,
      width: f.width,
      height: f.height,
      fps: f.fps,
      bitrate: f.tbr ? Math.round(f.tbr * 1000) : undefined,
      filesize: f.filesize ?? f.filesize_approx,
      videoOnly: false,
      audioOnly: false,
      hasAudio: true,
    });
    internal.set(id, { kind: 'direct', url: f.url, httpHeaders: f.http_headers });
  }

  // No muxed stream at any resolution (common for HLS/DASH-only sources): pair
  // best video-only with best audio-only and merge server-side on download.
  if (assets.length === 0) {
    const bestVideo = formats.filter(isVideoOnly).sort((a, b) => (b.height ?? 0) - (a.height ?? 0))[0];
    const bestAudio = formats.filter(isAudioOnly).sort((a, b) => (b.tbr ?? 0) - (a.tbr ?? 0))[0];
    if (bestVideo && bestAudio) {
      const id = randomUUID();
      const container = 'mp4';
      assets.push({
        id,
        label: humanLabel({ height: bestVideo.height, ext: container }),
        container,
        codec: bestVideo.vcodec,
        width: bestVideo.width,
        height: bestVideo.height,
        fps: bestVideo.fps,
        bitrate: bestVideo.tbr ? Math.round(bestVideo.tbr * 1000) : undefined,
        filesize:
          bestVideo.filesize && bestAudio.filesize ? bestVideo.filesize + bestAudio.filesize : undefined,
        videoOnly: false,
        audioOnly: false,
        hasAudio: true,
      });
      internal.set(id, {
        kind: 'merge',
        videoUrl: bestVideo.url,
        audioUrl: bestAudio.url,
        container,
        httpHeaders: bestVideo.http_headers,
      });
    } else if (bestVideo) {
      const id = randomUUID();
      assets.push({
        id,
        label: humanLabel({ height: bestVideo.height, ext: bestVideo.ext }),
        container: bestVideo.ext,
        codec: bestVideo.vcodec,
        width: bestVideo.width,
        height: bestVideo.height,
        fps: bestVideo.fps,
        filesize: bestVideo.filesize ?? bestVideo.filesize_approx,
        videoOnly: true,
        audioOnly: false,
        hasAudio: false,
      });
      internal.set(id, { kind: 'direct', url: bestVideo.url, httpHeaders: bestVideo.http_headers });
    }
  }

  // Single-format extractors (no `formats` array — just a top-level url).
  if (assets.length === 0 && info.url) {
    const id = randomUUID();
    assets.push({
      id,
      label: humanLabel({ height: info.height, ext: info.ext }),
      container: info.ext ?? 'mp4',
      codec: info.vcodec,
      width: info.width,
      height: info.height,
      hasAudio: Boolean(info.acodec && info.acodec !== 'none'),
      videoOnly: !(info.acodec && info.acodec !== 'none'),
      audioOnly: false,
    });
    internal.set(id, { kind: 'direct', url: info.url, httpHeaders: info.http_headers });
  }

  return assets;
}

function buildImageAssets(entries: YtDlpInfo[], internal: Map<string, InternalAsset>): MediaAsset[] {
  const assets: MediaAsset[] = [];
  for (const entry of entries) {
    const url = entry.url ?? entry.formats?.[0]?.url;
    if (!url) continue;
    const id = randomUUID();
    assets.push({
      id,
      label: humanLabel({ ext: entry.ext ?? 'jpg', isImage: true }),
      container: entry.ext ?? 'jpg',
      width: entry.width,
      height: entry.height,
      videoOnly: false,
      audioOnly: false,
      hasAudio: false,
    });
    internal.set(id, { kind: 'direct', url });
  }
  return assets;
}

export function normalizeYtDlpResult(
  info: YtDlpInfo,
  match: PlatformMatch,
  sourceUrl: string,
): NormalizedExtraction {
  const internal = new Map<string, InternalAsset>();
  const contentType = refineContentType(match.platform, match.likelyContentType, info);

  let assets: MediaAsset[];
  if (contentType === 'instagram_carousel' && info.entries) {
    assets = info.entries.flatMap((entry) => {
      if (entry.formats?.some((f) => f.vcodec && f.vcodec !== 'none')) {
        return buildVideoAssets(entry, internal);
      }
      return buildImageAssets([entry], internal);
    });
  } else if (contentType === 'instagram_photo' || contentType === 'instagram_profile_picture' || contentType === 'twitter_photo' || contentType === 'reddit_image') {
    assets = buildImageAssets([info], internal);
  } else {
    assets = buildVideoAssets(info, internal);
  }

  const requestId = randomUUID();
  const now = Date.now();

  const result: ExtractionResult = {
    requestId,
    platform: match.platform,
    contentType,
    title: info.title,
    thumbnail: info.thumbnail,
    duration: info.duration,
    sourceUrl,
    author: info.uploader
      ? { name: info.uploader, username: info.uploader_id, avatarUrl: undefined }
      : undefined,
    assets,
    fetchedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + config.EXTRACTION_CACHE_TTL_SECONDS * 1000).toISOString(),
  };

  return { result, internal };
}
