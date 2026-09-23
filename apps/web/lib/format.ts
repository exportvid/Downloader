import type { ContentType } from '@exportvid/shared';

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

const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  tiktok_video: 'TikTok Video',
  instagram_reel: 'Instagram Reel',
  instagram_story: 'Instagram Story',
  instagram_post: 'Instagram Post',
  instagram_photo: 'Instagram Photo',
  instagram_carousel: 'Instagram Carousel',
  instagram_profile_picture: 'Instagram Profile Picture',
  instagram_highlight: 'Instagram Highlight',
  facebook_video: 'Facebook Video',
  facebook_reel: 'Facebook Reel',
  twitter_video: 'X Video',
  twitter_photo: 'X Photo',
  reddit_video: 'Reddit Video',
  reddit_gif: 'Reddit GIF',
  reddit_image: 'Reddit Image',
  youtube_video: 'YouTube Video',
  youtube_short: 'YouTube Short',
  pinterest_pin: 'Pinterest Pin',
  pinterest_video: 'Pinterest Video',
  snapchat_spotlight: 'Snapchat Spotlight',
  twitch_clip: 'Twitch Clip',
  linkedin_video: 'LinkedIn Video',
  tumblr_post: 'Tumblr Post',
  vimeo_video: 'Vimeo Video',
  unknown: 'Media',
};

export function contentTypeLabel(type: ContentType): string {
  return CONTENT_TYPE_LABELS[type] ?? 'Media';
}
