import type { ContentType, Platform } from './types';

export interface PlatformMatch {
  platform: Platform;
  /** Best-effort guess from the URL shape alone; the extractor confirms the real type. */
  likelyContentType: ContentType;
}

interface Rule {
  platform: Platform;
  hosts: string[];
  /** Matches any host ending in one of these (for platforms that serve content off subdomains, e.g. *.tumblr.com). */
  hostSuffixes?: string[];
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
  {
    platform: 'youtube',
    hosts: ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'],
    guess: (url) => (url.pathname.startsWith('/shorts/') ? 'youtube_short' : 'youtube_video'),
  },
  {
    platform: 'pinterest',
    hosts: ['pinterest.com', 'www.pinterest.com', 'pin.it'],
    guess: () => 'pinterest_pin',
  },
  {
    platform: 'snapchat',
    hosts: ['snapchat.com', 'www.snapchat.com', 't.snapchat.com'],
    guess: () => 'snapchat_spotlight',
  },
  {
    platform: 'twitch',
    hosts: ['twitch.tv', 'www.twitch.tv', 'clips.twitch.tv', 'm.twitch.tv'],
    guess: () => 'twitch_clip',
  },
  {
    platform: 'linkedin',
    hosts: ['linkedin.com', 'www.linkedin.com'],
    guess: () => 'linkedin_video',
  },
  {
    platform: 'tumblr',
    hosts: ['tumblr.com', 'www.tumblr.com'],
    hostSuffixes: ['.tumblr.com'],
    guess: () => 'tumblr_post',
  },
  {
    platform: 'vimeo',
    hosts: ['vimeo.com', 'www.vimeo.com', 'player.vimeo.com'],
    guess: () => 'vimeo_video',
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
    const matches = rule.hosts.includes(host) || (rule.hostSuffixes?.some((s) => host.endsWith(s)) ?? false);
    if (matches) {
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
  youtube: 'YouTube',
  pinterest: 'Pinterest',
  snapchat: 'Snapchat',
  twitch: 'Twitch',
  linkedin: 'LinkedIn',
  tumblr: 'Tumblr',
  vimeo: 'Vimeo',
};

export const SUPPORTED_PLATFORM_COUNT = Object.keys(PLATFORM_LABELS).length;
