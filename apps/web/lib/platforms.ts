import { SUPPORTED_PLATFORM_COUNT as N } from '@exportvid/shared';

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
    metaTitle: `Video Downloader | Download Videos from ${N} Platforms`,
    metaDescription:
      `Paste a video link from any of ${N} supported platforms and download it in the best quality available.`,
    h1: 'Download videos from any supported platform',
    intro: `One downloader for ${N} platforms. Paste a link, get the real formats available, and download instantly.`,
    about: [
      'ExportVid reads the public page you link to and finds the media files the platform itself serves. We never guess, re-encode, or upscale it.',
      'Every platform serves video differently, so ExportVid handles that under the hood while giving you one consistent interface.',
    ],
    supportedContentTypes: [
      { label: 'Standard video posts', description: 'Regular feed videos and uploads.' },
      { label: 'Short-form video', description: 'TikTok, Reels, Shorts, and Spotlight.' },
      { label: 'Social video posts', description: 'Posts, clips, pins, and tweets with video.' },
    ],
    formats: ['MP4 with video and audio, at every resolution the source provides', 'Original quality preserved with a direct stream copy, not a re-encode'],
    faqs: [
      {
        q: 'Which platforms does ExportVid support?',
        a: `${N} platforms: TikTok, Instagram, Facebook, X, Reddit, YouTube, Pinterest, Snapchat, Twitch, LinkedIn, Tumblr, and Vimeo.`,
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
    related: ['tiktok-video-downloader', 'instagram-video-downloader', 'facebook-video-downloader', 'x-video-downloader', 'reddit-video-downloader', 'youtube-video-downloader', 'pinterest-video-downloader', 'snapchat-video-downloader', 'twitch-clip-downloader', 'linkedin-video-downloader', 'tumblr-video-downloader', 'vimeo-video-downloader'],
  },

  'tiktok-video-downloader': {
    slug: 'tiktok-video-downloader',
    metaTitle: 'TikTok Video Downloader | Save TikTok Videos in Original Quality',
    metaDescription:
      'Download public TikTok videos in the highest quality available from the source. Paste a TikTok link and get a direct MP4 download. No account, no app.',
    h1: 'TikTok video downloader',
    intro: 'Paste a public TikTok link and download the video in the best quality TikTok serves.',
    about: [
      'TikTok video URLs look like tiktok.com/@username/video/1234567890123456789, or a shortened vm.tiktok.com / vt.tiktok.com link. ExportVid accepts either form.',
      'TikTok typically serves one primary encoded quality per video rather than a full ladder of resolutions, so you will usually see a single MP4 option reflecting exactly what TikTok provides. ExportVid never fabricates additional quality tiers.',
    ],
    supportedContentTypes: [{ label: 'TikTok video', description: 'Any public video post on a standard or shortened TikTok link.' }],
    formats: ['MP4, video + audio, without the watermark when TikTok provides a clean file', 'MP4 at the resolution TikTok serves for that video'],
    faqs: [
      {
        q: 'Why is there only one quality option for some TikTok videos?',
        a: 'TikTok often serves a single encoded version per video rather than multiple resolutions. ExportVid shows exactly what is available. It never adds a guessed or invented alternative.',
      },
      {
        q: 'Does the download have the TikTok watermark?',
        a: 'ExportVid picks the version without the TikTok watermark whenever TikTok provides one. If only a watermarked version is available for a video, that is what you get, and ExportVid never fakes a clean copy.',
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
    metaTitle: 'Instagram Video Downloader | Reels, Posts, Stories & Photos',
    metaDescription:
      'Download public Instagram Reels, video posts, photos, carousels, and Stories. Paste an Instagram link and ExportVid detects the content type automatically.',
    h1: 'Instagram video & photo downloader',
    intro: 'Paste any public Instagram link (Reel, post, photo, carousel, or Story) and ExportVid detects what it is automatically.',
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
        a: 'Highlights are supported where Instagram exposes them publicly on a profile. Individual Highlight items are detected the same way as Stories.',
      },
    ],
    formats: ['MP4 for video content, video + audio', 'JPEG for photos, carousel images, and profile pictures'],
    related: ['instagram-reels-downloader', 'video-downloader', 'tiktok-video-downloader'],
  },

  'instagram-reels-downloader': {
    slug: 'instagram-reels-downloader',
    metaTitle: 'Instagram Reels Downloader | Download Reels in Original Quality',
    metaDescription: 'Download public Instagram Reels fast. Paste a Reel link and get an MP4 in the highest quality Instagram provides.',
    h1: 'Instagram Reels downloader',
    intro: 'Paste a public Instagram Reel link (instagram.com/reel/...) and download it as an MP4.',
    about: [
      'Reels are Instagram’s short-form vertical video format. ExportVid recognizes reel and reels URL paths and extracts the underlying video file directly.',
      'Quality shown reflects exactly what Instagram serves for that Reel. ExportVid doesn’t upscale or relabel resolutions.',
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
        a: 'Yes, when Instagram serves audio and video together for that Reel, which is the case for most Reels.',
      },
    ],
    related: ['instagram-video-downloader', 'tiktok-video-downloader', 'facebook-reels-downloader'],
  },

  'facebook-video-downloader': {
    slug: 'facebook-video-downloader',
    metaTitle: 'Facebook Video Downloader | Download Public Facebook Videos',
    metaDescription: 'Download public Facebook videos and Reels. Paste a facebook.com or fb.watch link and get the highest quality MP4 available.',
    h1: 'Facebook video downloader',
    intro: 'Paste a public Facebook video link, including fb.watch short links, and download the MP4.',
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
    metaTitle: 'Facebook Reels Downloader | Download Facebook Reels Fast',
    metaDescription: 'Download public Facebook Reels in the best quality available. Paste a Reel link and download the MP4 directly.',
    h1: 'Facebook Reels downloader',
    intro: 'Paste a public Facebook Reel link and download it as an MP4.',
    about: ['Facebook Reels use a distinct /reel/ URL path, which ExportVid detects automatically and routes to the correct extraction logic.'],
    supportedContentTypes: [{ label: 'Facebook Reel', description: 'Public Reels from Facebook pages and profiles.' }],
    formats: ['MP4, video + audio, at the resolution Facebook serves'],
    faqs: [
      {
        q: 'What if the link redirects to the Facebook app?',
        a: 'Paste the web link (facebook.com/reel/... or fb.watch/...) rather than an in-app share link. Both resolve the same underlying video.',
      },
    ],
    related: ['facebook-video-downloader', 'instagram-reels-downloader', 'tiktok-video-downloader'],
  },

  'x-video-downloader': {
    slug: 'x-video-downloader',
    metaTitle: 'X (Twitter) Video Downloader | Download Video Tweets',
    metaDescription: 'Download videos from X (Twitter). Paste an x.com or twitter.com link and get the highest quality MP4 the post offers.',
    h1: 'X (Twitter) video downloader',
    intro: 'Paste a public x.com or twitter.com post link and download the video.',
    about: [
      'X serves video through adaptive formats with several resolutions per post. ExportVid lists each resolution X provides, typically up to 1080p, with accurate file sizes.',
      'Only videos attached to public posts can be extracted. Posts from protected (locked) accounts are not accessible.',
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
        a: 'The post may only contain images, or no downloadable video was found. ExportVid never fabricates a download option that doesn’t exist.',
      },
    ],
    related: ['video-downloader', 'reddit-video-downloader', 'tiktok-video-downloader'],
  },

  'reddit-video-downloader': {
    slug: 'reddit-video-downloader',
    metaTitle: 'Reddit Video Downloader | Download Public Reddit Videos',
    metaDescription: 'Download public Reddit videos, including v.redd.it posts, in the best quality Reddit provides. Paste a Reddit link and download instantly.',
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
        a: 'Reddit frequently stores video and audio as two separate files. When that happens, ExportVid needs a brief merge step to combine them into one file, without re-encoding the video or audio.',
      },
      {
        q: 'Can ExportVid download from private or quarantined subreddits?',
        a: 'No. Only fully public subreddits and posts are supported.',
      },
    ],
    related: ['x-video-downloader', 'video-downloader'],
  },

  'youtube-video-downloader': {
    slug: 'youtube-video-downloader',
    metaTitle: 'YouTube Video Downloader | Download YouTube Videos and Shorts',
    metaDescription:
      'Download public YouTube videos and Shorts in the best quality available. Paste a YouTube link and get a direct MP4 download. No account, no app.',
    h1: 'YouTube video downloader',
    intro: 'Paste a public YouTube video or Shorts link and download it in the best quality YouTube provides.',
    about: [
      'YouTube links work as full youtube.com/watch?v=... links, short youtu.be/... links, or youtube.com/shorts/... links. ExportVid accepts all three.',
      'YouTube usually serves several resolutions per video. ExportVid lists each one exactly as YouTube provides it, up to the highest quality available for that upload.',
    ],
    supportedContentTypes: [
      { label: 'YouTube video', description: 'Standard uploads on any public channel.' },
      { label: 'YouTube Shorts', description: 'Short-form vertical videos posted as Shorts.' },
    ],
    formats: ['MP4, video + audio, at every resolution YouTube provides for that video'],
    faqs: [
      {
        q: 'Does this work with youtu.be links?',
        a: 'Yes. Short youtu.be links are supported directly, along with full youtube.com links.',
      },
      {
        q: 'Can I download YouTube Shorts?',
        a: 'Yes. Shorts are detected automatically from the /shorts/ link.',
      },
      {
        q: 'Can ExportVid download private or members-only videos?',
        a: 'No. Only fully public videos are supported. Private and members-only videos require login and are not accessible.',
      },
    ],
    related: ['video-downloader', 'tiktok-video-downloader', 'instagram-reels-downloader'],
  },

  'pinterest-video-downloader': {
    slug: 'pinterest-video-downloader',
    metaTitle: 'Pinterest Video Downloader | Save Pinterest Video Pins',
    metaDescription: 'Download public Pinterest video pins as MP4. Paste a pinterest.com or pin.it link and get the best quality Pinterest provides. No account, no app.',
    h1: 'Pinterest video downloader',
    intro: 'Paste a public Pinterest video pin link and download it as an MP4.',
    about: [
      'ExportVid accepts pinterest.com/pin/... links and pin.it short links, and finds the video file Pinterest serves for that pin.',
      'Pinterest often offers the video at one main resolution, so you will usually see a single MP4 option that matches what Pinterest provides.',
    ],
    supportedContentTypes: [{ label: 'Video pins', description: 'Public pins that contain a video.' }],
    formats: ['MP4, video + audio, at the resolution Pinterest serves for that pin'],
    faqs: [
      { q: 'Can I download image pins?', a: 'Not yet. ExportVid currently supports Pinterest pins that contain a video.' },
      { q: 'Does this work with pin.it links?', a: 'Yes. Short pin.it links are supported.' },
    ],
    related: ['video-downloader', 'youtube-video-downloader', 'tumblr-video-downloader'],
  },

  'snapchat-video-downloader': {
    slug: 'snapchat-video-downloader',
    metaTitle: 'Snapchat Spotlight Downloader | Save Spotlight Videos',
    metaDescription: 'Download public Snapchat Spotlight videos as MP4. Paste a snapchat.com/spotlight link. No account, no app.',
    h1: 'Snapchat Spotlight downloader',
    intro: 'Paste a public Snapchat Spotlight link and download the video as an MP4.',
    about: [
      'ExportVid accepts snapchat.com/spotlight/... links and downloads the video file Snapchat serves for that Spotlight.',
      'Spotlight videos come as a single MP4, so you will see one download option.',
    ],
    supportedContentTypes: [{ label: 'Spotlight video', description: 'Public videos shared to Snapchat Spotlight.' }],
    formats: ['MP4, video + audio, as Snapchat serves it'],
    faqs: [
      { q: 'Can I download Snapchat Stories?', a: 'Not yet. ExportVid currently supports public Spotlight videos.' },
      { q: 'Can I download private snaps?', a: 'No. ExportVid only works with public content.' },
    ],
    related: ['video-downloader', 'tiktok-video-downloader', 'instagram-reels-downloader'],
  },

  'twitch-clip-downloader': {
    slug: 'twitch-clip-downloader',
    metaTitle: 'Twitch Clip Downloader | Download Twitch Clips as MP4',
    metaDescription: 'Download public Twitch clips as MP4. Paste a clips.twitch.tv link and get the best quality Twitch provides. No account, no app.',
    h1: 'Twitch clip downloader',
    intro: 'Paste a public Twitch clip link and download it as an MP4.',
    about: [
      'ExportVid accepts clips.twitch.tv/... links and twitch.tv/channel/clip/... links.',
      'Twitch serves clips in the quality the clip was created at, and ExportVid shows that quality exactly as provided.',
    ],
    supportedContentTypes: [{ label: 'Twitch clip', description: 'Public clips from any channel.' }],
    formats: ['MP4, video + audio, at the resolution Twitch serves for the clip'],
    faqs: [
      { q: 'Can I download full streams or VODs?', a: 'No. ExportVid supports clips only.' },
      { q: 'Which links work?', a: 'clips.twitch.tv links and twitch.tv/channel/clip links.' },
    ],
    related: ['video-downloader', 'youtube-video-downloader', 'vimeo-video-downloader'],
  },

  'linkedin-video-downloader': {
    slug: 'linkedin-video-downloader',
    metaTitle: 'LinkedIn Video Downloader | Download Public LinkedIn Videos',
    metaDescription: 'Download videos from public LinkedIn posts as MP4. Paste a linkedin.com/posts link. No account, no app.',
    h1: 'LinkedIn video downloader',
    intro: 'Paste a public LinkedIn post link and download the video as an MP4.',
    about: [
      'ExportVid accepts linkedin.com/posts/... links for posts that are visible without signing in.',
      'LinkedIn serves the video as a single MP4, so you will see one download option.',
    ],
    supportedContentTypes: [{ label: 'Video posts', description: 'Public posts that include a video.' }],
    formats: ['MP4, video + audio, as LinkedIn serves it'],
    faqs: [
      { q: 'Why does my link say the content is private?', a: 'The post is only visible to signed-in LinkedIn members. ExportVid only works with public posts.' },
      { q: 'Can I download LinkedIn Learning courses?', a: 'No. Course content requires an account and is not supported.' },
    ],
    related: ['video-downloader', 'youtube-video-downloader', 'x-video-downloader'],
  },

  'tumblr-video-downloader': {
    slug: 'tumblr-video-downloader',
    metaTitle: 'Tumblr Video Downloader | Download Tumblr Videos',
    metaDescription: 'Download videos from public Tumblr posts as MP4. Paste a link to a post on any tumblr.com blog. No account, no app.',
    h1: 'Tumblr video downloader',
    intro: 'Paste a link to a public Tumblr video post and download it as an MP4.',
    about: [
      'ExportVid accepts links to posts on tumblr.com and on any blog.tumblr.com address.',
      'Only videos in public blogs and posts can be downloaded.',
    ],
    supportedContentTypes: [{ label: 'Video posts', description: 'Public Tumblr posts that include a video.' }],
    formats: ['MP4, video + audio, as Tumblr serves it'],
    faqs: [
      { q: 'Does this work with blog subdomains?', a: 'Yes. Links like blogname.tumblr.com/post/... are supported.' },
      { q: 'Can I download from a private or explicit-only blog?', a: 'No. Blogs that require signing in are not supported.' },
    ],
    related: ['video-downloader', 'pinterest-video-downloader', 'instagram-video-downloader'],
  },

  'vimeo-video-downloader': {
    slug: 'vimeo-video-downloader',
    metaTitle: 'Vimeo Video Downloader | Download Public Vimeo Videos',
    metaDescription: 'Download public Vimeo videos as MP4. Paste a vimeo.com link and get the best quality available. No account, no app.',
    h1: 'Vimeo video downloader',
    intro: 'Paste a public Vimeo video link and download it as an MP4.',
    about: [
      'ExportVid accepts vimeo.com/... links and player.vimeo.com/video/... links.',
      'Videos the owner has made private, password-protected, or limited to specific sites cannot be downloaded.',
    ],
    supportedContentTypes: [{ label: 'Vimeo video', description: 'Public videos that can be viewed without signing in.' }],
    formats: ['MP4, video + audio, at every resolution Vimeo provides for the video'],
    faqs: [
      { q: 'Why can’t I download my Vimeo link?', a: 'The video is private, password-protected, or restricted to certain domains. ExportVid only works with public videos.' },
      { q: 'Does it work with embed links?', a: 'Yes. player.vimeo.com links are supported.' },
    ],
    related: ['video-downloader', 'youtube-video-downloader', 'twitch-clip-downloader'],
  },

};

export function getPlatformPage(slug: string): PlatformPageConfig | undefined {
  return platformPages[slug];
}
