import type { ContentType } from '@exportvid/shared';
import { fmt } from './i18n/config';
import type { ClientMessages } from './i18n/messages';

export function formatDuration(seconds?: number): string | null {
  if (!seconds || seconds <= 0) return null;
  const total = Math.round(seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
  const ss = String(s).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

export function formatBytes(bytes?: number): string | null {
  if (!bytes || bytes <= 0) return null;
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }
  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

type Kind = keyof ClientMessages['kinds'];

const CONTENT_TYPES: Record<ContentType, { brand?: string; kind: Kind }> = {
  tiktok_video: { brand: 'TikTok', kind: 'video' },
  instagram_reel: { brand: 'Instagram', kind: 'reel' },
  instagram_story: { brand: 'Instagram', kind: 'story' },
  instagram_post: { brand: 'Instagram', kind: 'post' },
  instagram_photo: { brand: 'Instagram', kind: 'photo' },
  instagram_carousel: { brand: 'Instagram', kind: 'carousel' },
  instagram_profile_picture: { brand: 'Instagram', kind: 'profilePicture' },
  instagram_highlight: { brand: 'Instagram', kind: 'highlight' },
  facebook_video: { brand: 'Facebook', kind: 'video' },
  facebook_reel: { brand: 'Facebook', kind: 'reel' },
  twitter_video: { brand: 'X', kind: 'video' },
  twitter_photo: { brand: 'X', kind: 'photo' },
  reddit_video: { brand: 'Reddit', kind: 'video' },
  reddit_gif: { brand: 'Reddit', kind: 'gif' },
  reddit_image: { brand: 'Reddit', kind: 'image' },
  youtube_video: { brand: 'YouTube', kind: 'video' },
  youtube_short: { brand: 'YouTube', kind: 'short' },
  pinterest_pin: { brand: 'Pinterest', kind: 'pin' },
  pinterest_video: { brand: 'Pinterest', kind: 'video' },
  snapchat_spotlight: { brand: 'Snapchat', kind: 'spotlight' },
  twitch_clip: { brand: 'Twitch', kind: 'clip' },
  linkedin_video: { brand: 'LinkedIn', kind: 'video' },
  tumblr_post: { brand: 'Tumblr', kind: 'post' },
  vimeo_video: { brand: 'Vimeo', kind: 'video' },
  unknown: { kind: 'media' },
};

/** Builds a label like "Instagram Reel" in the current language, keeping the platform name untranslated. */
export function contentTypeLabel(type: ContentType, t: ClientMessages): string {
  const entry = CONTENT_TYPES[type] ?? CONTENT_TYPES.unknown;
  const kind = t.kinds[entry.kind];
  return entry.brand ? fmt(t.kindFormat, { brand: entry.brand, kind }) : kind;
}

/** The API names some files in English ("Original JPG", "Audio (M4A)"). Translate those; leave "1080p MP4" as is. */
export function assetLabel(label: string, t: ClientMessages): string {
  const original = /^Original (\w+)$/.exec(label);
  if (original) return fmt(t.hero.assetOriginal, { ext: original[1] });
  const audio = /^Audio \((\w+)\)$/.exec(label);
  if (audio) return fmt(t.hero.assetAudio, { ext: audio[1] });
  return label;
}
