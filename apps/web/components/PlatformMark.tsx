import type { Platform } from '@exportvid/shared';

export type PlatformId = Platform;

export interface PlatformEntry {
  id: PlatformId;
  label: string;
  href: string;
  types: string[];
}

/** Single source of truth for every platform listing on the site (header, homepage, footer, supported sites).
 * YouTube, Facebook, Instagram, and TikTok always come first; the header shows the first five. */
export const ALL_PLATFORMS: PlatformEntry[] = [
  { id: 'youtube', label: 'YouTube', href: '/youtube-video-downloader', types: ['Video', 'Shorts'] },
  { id: 'facebook', label: 'Facebook', href: '/facebook-video-downloader', types: ['Video', 'Reels'] },
  { id: 'instagram', label: 'Instagram', href: '/instagram-video-downloader', types: ['Reels', 'Video', 'Stories', 'Carousels'] },
  { id: 'tiktok', label: 'TikTok', href: '/tiktok-video-downloader', types: ['Video'] },
  { id: 'twitter', label: 'X', href: '/x-video-downloader', types: ['Video'] },
  { id: 'reddit', label: 'Reddit', href: '/reddit-video-downloader', types: ['Video', 'GIFs'] },
  { id: 'pinterest', label: 'Pinterest', href: '/pinterest-video-downloader', types: ['Video pins'] },
  { id: 'snapchat', label: 'Snapchat', href: '/snapchat-video-downloader', types: ['Spotlight'] },
  { id: 'twitch', label: 'Twitch', href: '/twitch-clip-downloader', types: ['Clips'] },
  { id: 'linkedin', label: 'LinkedIn', href: '/linkedin-video-downloader', types: ['Video'] },
  { id: 'tumblr', label: 'Tumblr', href: '/tumblr-video-downloader', types: ['Video'] },
  { id: 'vimeo', label: 'Vimeo', href: '/vimeo-video-downloader', types: ['Video'] },
];

export const NAV_PLATFORMS = ALL_PLATFORMS.slice(0, 5);

/** Simplified, hand-drawn brand glyphs (currentColor) — not exact trademarked logos. */
export function PlatformMark({ id, className }: { id: PlatformId; className?: string }) {
  switch (id) {
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M16.6 2c.32 2.1 1.7 3.7 3.9 4v3.2c-1.44 0-2.77-.42-3.9-1.2v6.6a5.9 5.9 0 11-5.1-5.85v3.35a2.6 2.6 0 102.1 2.55V2h3z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M13.6 21v-7.2h2.2l.4-2.7h-2.6V9.3c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.2H7v2.7h2.4V21" />
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M4 4l7.2 8.4L4.4 20H7l5.6-6.4L17 20h3l-7.6-8.9L19.8 4h-2.6l-5.1 5.8L7.4 4H4z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="4" />
          <path d="M10.5 9.5v5l4.5-2.5z" fill="#0a0a0f" />
        </svg>
      );
    case 'reddit':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
          <ellipse cx="12" cy="14" rx="7.5" ry="5.5" />
          <circle cx="9.3" cy="13.6" r="1" fill="currentColor" stroke="none" />
          <circle cx="14.7" cy="13.6" r="1" fill="currentColor" stroke="none" />
          <path d="M12 8.5l1-4 3.5 1" />
          <circle cx="17.6" cy="5.6" r="1.2" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" className={className} aria-hidden>
          <path d="M12 21s6.5-6.6 6.5-11.2a6.5 6.5 0 10-13 0C5.5 14.4 12 21 12 21z" />
          <circle cx="12" cy="9.6" r="2.3" />
        </svg>
      );
    case 'snapchat':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" className={className} aria-hidden>
          <path d="M6 20v-8a6 6 0 0112 0v8l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5z" />
          <circle cx="9.7" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="14.3" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'twitch':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
          <path d="M5 3h15v10.5l-4 4h-3l-3 3v-3H5z" />
          <path d="M11 7.5V11M15.5 7.5V11" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M8 10.5V16M8 8v.01M11.5 16v-5.5m0 2c0-1.4 1-2.2 2.2-2.2s2 .8 2 2.2V16" />
        </svg>
      );
    case 'tumblr':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M13.5 4v4.5H17v3h-3.5v4.2c0 1 .5 1.6 1.6 1.6H17V20h-2.6c-2.6 0-4-1.5-4-3.8v-4.7H8V9c1.8-.4 2.7-2 2.9-5z" />
        </svg>
      );
    case 'vimeo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" className={className} aria-hidden>
          <rect x="3" y="6.5" width="13" height="11" rx="2.5" />
          <path d="M16 10l5-3v10l-5-3z" />
        </svg>
      );
  }
}

/** Each platform's recognizable color, used only for its small icon chip. `dark` marks colors that need a dark glyph. */
export const PLATFORM_COLORS: Record<PlatformId, { bg: string; dark?: boolean }> = {
  tiktok: { bg: '#fe2c55' },
  instagram: { bg: '#e1306c' },
  facebook: { bg: '#1877f2' },
  twitter: { bg: '#26262c' },
  reddit: { bg: '#ff4500' },
  youtube: { bg: '#e5001f' },
  pinterest: { bg: '#e60023' },
  snapchat: { bg: '#fffc00', dark: true },
  twitch: { bg: '#9146ff' },
  linkedin: { bg: '#0a66c2' },
  tumblr: { bg: '#35465c' },
  vimeo: { bg: '#1ab7ea' },
};
