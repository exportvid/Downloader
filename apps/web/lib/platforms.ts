export interface FaqItem {
  q: string;
  a: string;
}

export interface PlatformPageConfig {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  about: string[];
  supportedContentTypes: { label: string; description: string }[];
  formats: string[];
  faqs: FaqItem[];
  related: string[];
}

export const platformPages: Record<string, PlatformPageConfig> = {
  'video-downloader': {
    slug: 'video-downloader',
    metaTitle: 'Video Downloader — Download Videos from TikTok, Instagram, Facebook, X & Reddit',
    metaDescription:
      'Paste a public video link from TikTok, Instagram, Facebook, X (Twitter), or Reddit and download it in the best quality available. No account, no app, no watermark claims — just a fast, direct download.',
    h1: 'Download videos from any supported platform',
    intro:
      'One downloader for TikTok, Instagram, Facebook, X, and Reddit. Paste a link, get the real formats the source actually offers, and download instantly.',
    about: [
      'ExportVid reads the public page you link to and finds the media files the platform itself serves — nothing is guessed, re-encoded unnecessarily, or upscaled. If a source only has a 480p file, that is what you will see offered.',
      'Every platform stores and serves video differently, so ExportVid uses platform-specific extraction under the hood while giving you one consistent interface: paste, review, download.',
    ],
    supportedContentTypes: [
      { label: 'Standard video posts', description: 'Regular feed videos and uploads across all five platforms.' },
      { label: 'Short-form video', description: 'TikTok videos, Instagram Reels, and Facebook Reels.' },
      { label: 'Social video posts', description: 'X (Twitter) video tweets and Reddit video posts.' },
    ],
    formats: ['MP4 with video and audio, at every resolution the source provides', 'Audio-only where the source separates streams'],
    faqs: [
      {
        q: 'Which platforms does ExportVid support?',
        a: 'TikTok, Instagram, Facebook, X (Twitter), and Reddit at launch, covering videos, Reels, Stories, photos, and carousels where publicly available.',
      },
      {
        q: 'Do I need an account to download?',
        a: 'No. ExportVid has no accounts, logins, or installs. Paste a link and download.',
      },
      {
        q: 'Can ExportVid download private content?',
        a: 'No. ExportVid only works with public, unprotected content. It never attempts to access private accounts, login-gated posts, or content that requires authentication.',
      },
    ],
    related: ['tiktok-video-downloader', 'instagram-video-downloader', 'facebook-video-downloader', 'x-video-downloader', 'reddit-video-downloader'],
  },

  'tiktok-video-downloader': {
    slug: 'tiktok-video-downloader',
    metaTitle: 'TikTok Video Downloader — Save TikTok Videos in Original Quality',
    metaDescription:
      'Download public TikTok videos in the highest quality actually available from the source. Paste a TikTok link and get a direct MP4 download — no account, no app.',
    h1: 'TikTok video downloader',
    intro: 'Paste a public TikTok link and download the video in the best quality TikTok actually serves.',
    about: [
      'TikTok video URLs look like tiktok.com/@username/video/1234567890123456789, or a shortened vm.tiktok.com / vt.tiktok.com link. ExportVid accepts either form.',
      'TikTok typically serves one primary encoded quality per video rather than a full ladder of resolutions, so you will usually see a single MP4 option reflecting exactly what TikTok provides — ExportVid never fabricates additional quality tiers.',
    ],
    supportedContentTypes: [{ label: 'TikTok video', description: 'Any public video post on a standard or shortened TikTok link.' }],
    formats: ['MP4, video + audio, at the resolution TikTok serves for that video'],
    faqs: [
      {
        q: 'Why is there only one quality option for some TikTok videos?',
        a: 'TikTok often serves a single encoded version per video rather than multiple resolutions. ExportVid shows exactly what is available — never a guessed or invented alternative.',
      },
      {
        q: 'Does ExportVid remove the TikTok watermark?',
        a: 'ExportVid delivers the file exactly as TikTok serves it. If TikTok’s public version includes a watermark, ExportVid will not claim otherwise or fake a watermark-free version.',
      },
      {
        q: 'Can I download a private TikTok account’s videos?',
        a: 'No. Private accounts and login-restricted videos are intentionally unsupported.',
      },
    ],
    related: ['video-downloader', 'instagram-reels-downloader', 'facebook-reels-downloader'],
  },

  'instagram-video-downloader': {
    slug: 'instagram-video-downloader',
    metaTitle: 'Instagram Video Downloader — Reels, Posts, Stories & Photos',
    metaDescription:
      'Download public Instagram Reels, video posts, photos, carousels, and Stories. Paste an Instagram link and ExportVid detects the content type automatically.',
    h1: 'Instagram video & photo downloader',
    intro: 'Paste any public Instagram link — a Reel, post, photo, carousel, or Story — and ExportVid detects what it is automatically.',
    about: [
      'Instagram hosts several distinct content types under similar-looking URLs. ExportVid detects whether a link is a Reel (/reel/), a feed post (/p/), a Story, or a profile, and extracts accordingly.',
      'For carousel posts, ExportVid lists every image or video in the carousel individually so you can download the specific item you want.',
    ],
    supportedContentTypes: [
      { label: 'Instagram Reel', description: 'Short-form vertical video posted as a Reel.' },
      { label: 'Instagram post (video)', description: 'A video shared as a standard feed post.' },
      { label: 'Instagram photo', description: 'A single image feed post.' },
      { label: 'Instagram carousel', description: 'Multi-photo or multi-video posts, listed item by item.' },
      { label: 'Instagram Story', description: 'A currently-active public Story.' },
      { label: 'Profile picture', description: 'The public profile photo for an account.' },
    ],
    faqs: [
      {
        q: 'Can ExportVid download from a private Instagram account?',
        a: 'No. ExportVid only extracts from public accounts and public posts. Private accounts are never accessed.',
      },
      {
        q: 'Does ExportVid support Instagram carousels?',
        a: 'Yes. Each photo or video in a carousel post is listed separately with its own download option.',
      },
      {
        q: 'Can I download Instagram Highlights?',
        a: 'Highlights are supported where Instagram exposes them publicly on a profile; individual Highlight items are detected the same way as Stories.',
      },
    ],
    formats: ['MP4 for video content, video + audio', 'JPEG for photos, carousel images, and profile pictures'],
    related: ['instagram-reels-downloader', 'video-downloader', 'tiktok-video-downloader'],
  },

  'instagram-reels-downloader': {
    slug: 'instagram-reels-downloader',
    metaTitle: 'Instagram Reels Downloader — Download Reels in Original Quality',
    metaDescription:
      'Download public Instagram Reels fast. Paste a Reel link and get an MP4 in the highest quality Instagram actually provides.',
    h1: 'Instagram Reels downloader',
    intro: 'Paste a public Instagram Reel link (instagram.com/reel/...) and download it as an MP4.',
    about: [
      'Reels are Instagram’s short-form vertical video format. ExportVid recognizes reel and reels URL paths and extracts the underlying video file directly.',
      'Quality shown reflects exactly what Instagram serves for that Reel — ExportVid does not upscale or relabel resolutions.',
    ],
    supportedContentTypes: [{ label: 'Instagram Reel', description: 'Public Reels from any account, including business and creator profiles.' }],
    formats: ['MP4, video + audio, at the resolution Instagram serves'],
    faqs: [
      {
        q: 'What Reel links work?',
        a: 'Any public instagram.com/reel/... or instagram.com/reels/... link, including reels shared via direct post link.',
      },
      {
        q: 'Is the audio included?',
        a: 'Yes, when Instagram serves audio and video together for that Reel, which is the case for the vast majority of Reels.',
      },
    ],
    related: ['instagram-video-downloader', 'tiktok-video-downloader', 'facebook-reels-downloader'],
  },

  'facebook-video-downloader': {
    slug: 'facebook-video-downloader',
    metaTitle: 'Facebook Video Downloader — Download Public Facebook Videos',
    metaDescription:
      'Download public Facebook videos and Reels. Paste a facebook.com or fb.watch link and get the highest quality MP4 available.',
    h1: 'Facebook video downloader',
    intro: 'Paste a public Facebook video link — including fb.watch short links — and download the MP4.',
    about: [
      'Facebook serves video through several URL shapes: standard watch links, fb.watch short links, and Reel links. ExportVid handles all of them the same way.',
      'Only videos from public pages, public profiles, and public groups can be extracted. Content shared inside private or closed groups is not accessible.',
    ],
    supportedContentTypes: [
      { label: 'Facebook video', description: 'Standard video posts on public pages, profiles, and groups.' },
      { label: 'Facebook Reel', description: 'Short-form vertical video posted as a Facebook Reel.' },
    ],
    formats: ['MP4, video + audio, at every resolution Facebook provides for the video'],
    faqs: [
      {
        q: 'Does this work with fb.watch links?',
        a: 'Yes, fb.watch short links are supported directly.',
      },
      {
        q: 'Can I download videos from a private Facebook group?',
        a: 'No. ExportVid only works with public content and never attempts to bypass privacy settings.',
      },
    ],
    related: ['facebook-reels-downloader', 'video-downloader', 'instagram-video-downloader'],
  },

  'facebook-reels-downloader': {
    slug: 'facebook-reels-downloader',
    metaTitle: 'Facebook Reels Downloader — Download Facebook Reels Fast',
    metaDescription: 'Download public Facebook Reels in the best quality available. Paste a Reel link and download the MP4 directly.',
    h1: 'Facebook Reels downloader',
    intro: 'Paste a public Facebook Reel link and download it as an MP4.',
    about: [
      'Facebook Reels use a distinct /reel/ URL path, which ExportVid detects automatically and routes to the correct extraction logic.',
    ],
    supportedContentTypes: [{ label: 'Facebook Reel', description: 'Public Reels from Facebook pages and profiles.' }],
    formats: ['MP4, video + audio, at the resolution Facebook serves'],
    faqs: [
      {
        q: 'What if the link redirects to the Facebook app?',
        a: 'Paste the web link (facebook.com/reel/... or fb.watch/...) rather than an in-app share link — both resolve the same underlying video.',
      },
    ],
    related: ['facebook-video-downloader', 'instagram-reels-downloader', 'tiktok-video-downloader'],
  },

  'x-video-downloader': {
    slug: 'x-video-downloader',
    metaTitle: 'X (Twitter) Video Downloader — Download Video Tweets',
    metaDescription:
      'Download videos from public posts on X (Twitter). Paste an x.com or twitter.com link and get the highest quality MP4 the post actually offers.',
    h1: 'X (Twitter) video downloader',
    intro: 'Paste a public x.com or twitter.com post link and download the video.',
    about: [
      'X serves video through adaptive formats with several resolutions per post. ExportVid lists each resolution X actually provides — commonly up to 1080p — with accurate file sizes.',
      'Only videos attached to public posts can be extracted; posts from protected (locked) accounts are not accessible.',
    ],
    supportedContentTypes: [{ label: 'X video post', description: 'Videos attached to public posts on x.com or twitter.com.' }],
    formats: ['MP4, video + audio, at every resolution the post provides (typically up to 1080p)'],
    faqs: [
      {
        q: 'Does this work with both x.com and twitter.com links?',
        a: 'Yes, both domains are supported since they point to the same platform.',
      },
      {
        q: 'Can I download from a protected (locked) account?',
        a: 'No. Protected accounts require login on X itself, and ExportVid does not access login-gated content.',
      },
      {
        q: 'Why does a post show no video option?',
        a: 'The post may only contain images, or no downloadable video was found — ExportVid never fabricates a download option that doesn’t exist.',
      },
    ],
    related: ['video-downloader', 'reddit-video-downloader', 'tiktok-video-downloader'],
  },

  'reddit-video-downloader': {
    slug: 'reddit-video-downloader',
    metaTitle: 'Reddit Video Downloader — Download Public Reddit Videos',
    metaDescription:
      'Download public Reddit videos, including v.redd.it posts, in the best quality Reddit provides. Paste a Reddit link and download instantly.',
    h1: 'Reddit video downloader',
    intro: 'Paste a public Reddit post link and download the video, including native v.redd.it hosted videos.',
    about: [
      'Reddit often hosts video and audio as separate streams. When that is the case, ExportVid combines them into a single downloadable file automatically, using a direct stream copy so quality is preserved.',
      'Only videos from public subreddits and public posts are supported. Quarantined, private, or login-gated subreddits are not accessible.',
    ],
    supportedContentTypes: [
      { label: 'Reddit video', description: 'Native v.redd.it hosted video posts.' },
      { label: 'Reddit GIF', description: 'Looping video posts served as GIF-style clips.' },
    ],
    formats: ['MP4, video + audio (merged from separate streams when the source requires it)'],
    faqs: [
      {
        q: 'Why does a Reddit download take slightly longer sometimes?',
        a: 'Reddit frequently stores video and audio as two separate files. When that happens, ExportVid needs a brief merge step to combine them into one file — still without re-encoding the actual video or audio.',
      },
      {
        q: 'Can ExportVid download from private or quarantined subreddits?',
        a: 'No. Only fully public subreddits and posts are supported.',
      },
    ],
    related: ['x-video-downloader', 'video-downloader'],
  },
};

export function getPlatformPage(slug: string): PlatformPageConfig | undefined {
  return platformPages[slug];
}
