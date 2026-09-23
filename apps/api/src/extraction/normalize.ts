import { randomUUID } from 'node:crypto';
import type { ContentType, ExtractionResult, MediaAsset, Platform } from '@exportvid/shared';
import { config } from '../config';
import type { PlatformMatch } from '@exportvid/shared';
import type { YtDlpFormat, YtDlpInfo } from './ytdlp';

/** Server-only detail needed to actually serve a MediaAsset's bytes. Never sent to the client. */
export type InternalAsset =
  | { kind: 'direct'; url: string; httpHeaders?: Record<string, string> }
  | { kind: 'merge'; videoUrl: string; audioUrl?: string; container: string; httpHeaders?: Record<string, string> };

export interface NormalizedExtraction {
  result: ExtractionResult;
  internal: Map<string, InternalAsset>;
}

function humanLabel(f: { height?: number; width?: number; ext?: string; isAudioOnly?: boolean; isImage?: boolean }): string {
  if (f.isImage) return `Original ${(f.ext ?? 'jpg').toUpperCase()}`;
  if (f.isAudioOnly) return `Audio (${(f.ext ?? 'm4a').toUpperCase()})`;
  // Label by the short side so vertical video (1080x1920) reads as 1080p, not 1920p.
  const side = f.width && f.height ? Math.min(f.width, f.height) : f.height;
  if (side) return `${side}p ${(f.ext ?? 'mp4').toUpperCase()}`;
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
  if (platform === 'pinterest') {
    const hasVideo = Boolean(info.formats?.some((f) => f.vcodec && f.vcodec !== 'none')) || Boolean(info.vcodec && info.vcodec !== 'none');
    return hasVideo ? 'pinterest_video' : 'pinterest_pin';
  }
  return likely;
}

const MAX_VIDEO_ASSETS = 8;

/** Formats a browser can fetch as one file. HLS/DASH manifests and storyboards are excluded. */
function isDirect(f: YtDlpFormat): boolean {
  return !f.protocol || f.protocol === 'http' || f.protocol === 'https';
}
function isHls(f: YtDlpFormat): boolean {
  return f.protocol === 'm3u8' || f.protocol === 'm3u8_native';
}

function sizeOf(f: YtDlpFormat): number | undefined {
  return f.filesize ?? f.filesize_approx;
}

function bestBy<T>(items: T[], score: (x: T) => number): T | undefined {
  return items.reduce<T | undefined>((best, x) => (best === undefined || score(x) > score(best) ? x : best), undefined);
}

const isMp4Family = (ext: string) => ext === 'mp4' || ext === 'm4a' || ext === 'm4v';

/**
 * Builds the client-facing asset list, best quality first, one entry per resolution:
 * 1. muxed direct files (no merge needed),
 * 2. higher tiers where the source ships video and audio separately (YouTube, Facebook HD),
 *    paired with a container-compatible audio track and stream-copied by the merge worker,
 * 3. HLS-only sources, remuxed by ffmpeg with a stream copy.
 */
function buildVideoAssets(info: YtDlpInfo, internal: Map<string, InternalAsset>): MediaAsset[] {
  const formats = info.formats ?? [];
  // Prefer the clean file: when a source labels some formats as watermarked (TikTok does) and also offers
  // an unmarked one, drop the watermarked variants. If every format is watermarked, keep them so the user still gets a file.
  const isWatermarked = (f: YtDlpFormat) => /watermark/i.test(f.format_note ?? '');
  const cleanExists = formats.some((f) => isDirect(f) && !isWatermarked(f) && (f.vcodec !== 'none') && f.height);
  const direct = formats.filter((f) => isDirect(f) && !(cleanExists && isWatermarked(f)));
  const assets: { asset: MediaAsset; height: number }[] = [];
  const add = (asset: MediaAsset, height: number, source: InternalAsset) => {
    internal.set(asset.id, source);
    assets.push({ asset, height });
  };

  const muxedHeights = new Set<number>();
  const muxedByHeight = new Map<number, YtDlpFormat[]>();
  for (const f of direct.filter(isMuxed)) {
    const h = f.height ?? 0;
    muxedByHeight.set(h, [...(muxedByHeight.get(h) ?? []), f]);
  }
  for (const [height, group] of muxedByHeight) {
    const f = bestBy(group, (x) => (isMp4Family(x.ext) ? 1e6 : 0) + (x.tbr ?? 0))!;
    muxedHeights.add(height);
    add(
      {
        id: randomUUID(),
        label: humanLabel({ height, width: f.width, ext: f.ext }),
        container: f.ext,
        codec: f.vcodec,
        width: f.width,
        height: f.height,
        fps: f.fps,
        bitrate: f.tbr ? Math.round(f.tbr * 1000) : undefined,
        filesize: sizeOf(f),
        videoOnly: false,
        audioOnly: false,
        hasAudio: true,
      },
      height,
      { kind: 'direct', url: f.url, httpHeaders: f.http_headers },
    );
  }

  const videoOnly = direct.filter(isVideoOnly);
  const audioOnly = direct.filter(isAudioOnly);
  const videoHeights = [...new Set(videoOnly.map((f) => f.height ?? 0))].filter((h) => h > 0 && !muxedHeights.has(h));
  for (const height of videoHeights) {
    const atHeight = videoOnly.filter((f) => f.height === height);
    // mp4 first (best player compatibility), then webm; each needs a matching audio track to stream-copy into the same container.
    for (const family of ['mp4', 'webm'] as const) {
      const video = bestBy(
        atHeight.filter((f) => (family === 'mp4' ? isMp4Family(f.ext) : f.ext === 'webm')),
        (x) => x.tbr ?? 0,
      );
      const audio = bestBy(
        audioOnly.filter((f) => (family === 'mp4' ? isMp4Family(f.ext) : f.ext === 'webm')),
        (x) => x.abr ?? x.tbr ?? 0,
      );
      if (!video || !audio) continue;
      const vSize = sizeOf(video);
      const aSize = sizeOf(audio);
      add(
        {
          id: randomUUID(),
          label: humanLabel({ height, width: video.width, ext: family }),
          container: family,
          codec: video.vcodec,
          width: video.width,
          height: video.height,
          fps: video.fps,
          bitrate: video.tbr ? Math.round((video.tbr + (audio.abr ?? audio.tbr ?? 0)) * 1000) : undefined,
          filesize: vSize && aSize ? vSize + aSize : undefined,
          videoOnly: false,
          audioOnly: false,
          hasAudio: true,
        },
        height,
        { kind: 'merge', videoUrl: video.url, audioUrl: audio.url, container: family, httpHeaders: video.http_headers },
      );
      break;
    }
  }

  // Single-format extractors (no usable `formats` array): the top-level url.
  if (assets.length === 0 && info.url && (!info.protocol || info.protocol === 'http' || info.protocol === 'https')) {
    const id = randomUUID();
    const hasAudio = info.acodec !== 'none';
    add(
      {
        id,
        label: humanLabel({ height: info.height || undefined, width: info.width || undefined, ext: info.ext }),
        container: info.ext ?? 'mp4',
        codec: info.vcodec,
        width: info.width || undefined,
        height: info.height || undefined,
        hasAudio,
        videoOnly: !hasAudio,
        audioOnly: false,
      },
      info.height ?? 0,
      { kind: 'direct', url: info.url, httpHeaders: info.http_headers },
    );
  }

  // HLS-only sources: ffmpeg remuxes the best muxed variant into one mp4 with a stream copy.
  if (assets.length === 0) {
    const hls = bestBy(formats.filter((f) => isHls(f) && isMuxed(f)), (x) => x.height ?? 0);
    if (hls) {
      add(
        {
          id: randomUUID(),
          label: humanLabel({ height: hls.height, width: hls.width, ext: 'mp4' }),
          container: 'mp4',
          codec: hls.vcodec,
          width: hls.width,
          height: hls.height,
          fps: hls.fps,
          bitrate: hls.tbr ? Math.round(hls.tbr * 1000) : undefined,
          videoOnly: false,
          audioOnly: false,
          hasAudio: true,
        },
        hls.height ?? 0,
        { kind: 'merge', videoUrl: hls.url, container: 'mp4', httpHeaders: hls.http_headers },
      );
    }
  }

  return assets
    .sort((a, b) => b.height - a.height)
    .slice(0, MAX_VIDEO_ASSETS)
    .map((x) => x.asset);
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
  } else if (
    contentType === 'instagram_photo' ||
    contentType === 'instagram_profile_picture' ||
    contentType === 'twitter_photo' ||
    contentType === 'reddit_image' ||
    contentType === 'pinterest_pin'
  ) {
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
