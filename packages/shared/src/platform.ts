import type { ContentType, Platform } from './types';

export interface PlatformMatch {
  platform: Platform;
  /** Best-effort guess from the URL shape alone; the extractor confirms the real type. */
  likelyContentType: ContentType;
}

interface Rule {
  platform: Platform;
  hosts: string[];
  guess: (url: URL) => ContentType;
}

const RULES: Rule[] = [
  {
    platform: 'tiktok',
    hosts: ['tiktok.com', 'www.tiktok.com', 'vm.tiktok.com', 'vt.tiktok.com', 'm.tiktok.com'],
    guess: () => 'tiktok_video',
  },
  {
    platform: 'instagram',
    hosts: ['instagram.com', 'www.instagram.com'],
    guess: (url) => {
      const path = url.pathname;
      if (path.includes('/reel/') || path.includes('/reels/')) return 'instagram_reel';
      if (path.includes('/stories/')) return 'instagram_story';
      if (path.includes('/p/')) return 'instagram_post';
      if (path.includes('/tv/')) return 'instagram_reel';
      const profileMatch = /^\/([^/]+)\/?$/.exec(path);
      if (profileMatch && !['p', 'reel', 'reels', 'stories', 'tv', 'explore'].includes(profileMatch[1])) {
        return 'instagram_profile_picture';
      }
      return 'unknown';
    },
  },
  {
    platform: 'facebook',
    hosts: ['facebook.com', 'www.facebook.com', 'm.facebook.com', 'fb.watch'],
    guess: (url) => (url.pathname.includes('/reel/') ? 'facebook_reel' : 'facebook_video'),
  },
  {
    platform: 'twitter',
    hosts: ['twitter.com', 'www.twitter.com', 'x.com', 'www.x.com', 'mobile.twitter.com'],
    guess: () => 'twitter_video',
  },
  {
    platform: 'reddit',
    hosts: ['reddit.com', 'www.reddit.com', 'old.reddit.com', 'v.redd.it'],
    guess: () => 'reddit_video',
  },
];

/**
 * Detects platform + a best-effort content type from a URL shape.
 * Returns null for unsupported/unrecognized hosts.
 */
export function detectPlatform(rawUrl: string): PlatformMatch | null {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;

  const host = url.hostname.toLowerCase();
  for (const rule of RULES) {
    if (rule.hosts.includes(host)) {
      return { platform: rule.platform, likelyContentType: rule.guess(url) };
    }
  }
  return null;
}

export const SUPPORTED_HOSTS: string[] = RULES.flatMap((r) => r.hosts);

export const PLATFORM_LABELS: Record<Platform, string> = {
  tiktok: 'TikTok',
  instagram: 'Instagram',
  facebook: 'Facebook',
  twitter: 'X (Twitter)',
  reddit: 'Reddit',
};
