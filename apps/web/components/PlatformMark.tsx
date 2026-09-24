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

/** The link domains ExportVid accepts for each platform. */
export const PLATFORM_DOMAINS: Record<PlatformId, string> = {
  tiktok: 'tiktok.com, vm.tiktok.com',
  instagram: 'instagram.com',
  facebook: 'facebook.com, fb.watch',
  twitter: 'x.com, twitter.com',
  reddit: 'reddit.com, v.redd.it',
  youtube: 'youtube.com, youtu.be',
  pinterest: 'pinterest.com, pin.it',
  snapchat: 'snapchat.com/spotlight',
  twitch: 'clips.twitch.tv, twitch.tv',
  linkedin: 'linkedin.com/posts',
  tumblr: 'tumblr.com and *.tumblr.com',
  vimeo: 'vimeo.com, player.vimeo.com',
};


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
          <path d="M10.5 9.5v5l4.5-2.5z" fill="var(--mark-cut, #0a0a0f)" />
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

/** Each platform's own brand colors. `bg` fills the icon tile, `ink` colors the glyph, and `glow` (an "r g b" triplet)
 * tints the light a card casts around the tile. X and Tumblr glow neutral because their near-black would not show. */
export const PLATFORM_BRAND: Record<PlatformId, { bg: string; ink: string; glow: string }> = {
  youtube: { bg: '#ff0033', ink: '#fff', glow: '255 0 51' },
  facebook: { bg: '#0866ff', ink: '#fff', glow: '8 102 255' },
  instagram: {
    bg: 'radial-gradient(circle at 28% 108%, #ffd600 0%, #ff7a00 22%, #ff0069 48%, #d300c5 72%, #7638fa 100%)',
    ink: '#fff',
    glow: '255 0 105',
  },
  tiktok: { bg: '#000', ink: '#fff', glow: '37 244 238' },
  twitter: { bg: '#000', ink: '#fff', glow: '150 150 160' },
  reddit: { bg: '#ff4500', ink: '#fff', glow: '255 69 0' },
  pinterest: { bg: '#e60023', ink: '#fff', glow: '230 0 35' },
  snapchat: { bg: '#fffc00', ink: '#000', glow: '255 252 0' },
  twitch: { bg: '#9146ff', ink: '#fff', glow: '145 70 255' },
  linkedin: { bg: '#0a66c2', ink: '#fff', glow: '10 102 194' },
  tumblr: { bg: '#001935', ink: '#fff', glow: '120 140 170' },
  vimeo: { bg: '#1ab7ea', ink: '#fff', glow: '26 183 234' },
};

/** A platform's icon drawn the way the platform draws its own app icon: brand fill, brand glyph color.
 * Size it with `className` (e.g. "h-12 w-12 rounded-2xl") and the glyph with `markClassName`. */
export function PlatformTile({ id, className = '', markClassName = 'h-1/2 w-1/2' }: { id: PlatformId; className?: string; markClassName?: string }) {
  const b = PLATFORM_BRAND[id];
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center shadow-[inset_0_1px_0_rgb(255_255_255/0.22),inset_0_0_0_1px_rgb(255_255_255/0.08)] ${className}`}
      style={{ background: b.bg, color: b.ink, ['--mark-cut' as string]: b.bg }}
      aria-hidden
    >
      {id === 'tiktok' ? (
        // TikTok's note carries a cyan and a red shadow on either side.
        <span className={`relative ${markClassName}`}>
          <PlatformMark id="tiktok" className="absolute inset-0 h-full w-full -translate-x-[6%] -translate-y-[4%] text-[#25f4ee]" />
          <PlatformMark id="tiktok" className="absolute inset-0 h-full w-full translate-x-[6%] translate-y-[4%] text-[#fe2c55]" />
          <PlatformMark id="tiktok" className="relative h-full w-full" />
        </span>
      ) : (
        <PlatformMark id={id} className={markClassName} />
      )}
    </span>
  );
}
