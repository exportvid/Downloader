import { PLATFORM_SLUGS, type Locale, type PlatformSlug } from './i18n/config';
import { getPlatformContent } from './i18n/platformContent';

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

/** The parts of a platform page that get translated. Slugs and related links are shared by every language. */
export type PlatformContent = Omit<PlatformPageConfig, 'slug' | 'related'>;

export const platformPages: Record<PlatformSlug, PlatformPageConfig> = {
  'youtube-video-downloader': {
    slug: 'youtube-video-downloader',
    metaTitle: 'YouTube to MP4 Downloader for Videos and Shorts',
    metaDescription:
      'Download YouTube to MP4 for free. Paste a youtube.com or youtu.be link, choose a quality, and save the video or Short to your device.',
    h1: 'YouTube video downloader',
    intro: 'Paste a YouTube link and download the video or Short as an MP4 in the best quality available.',
    about: [
      'ExportVid accepts full youtube.com/watch links, short youtu.be links, and youtube.com/shorts links.',
      'YouTube usually offers several resolutions for each video. ExportVid lists every one of them, up to the highest quality the upload provides. Higher resolutions store video and audio separately, so ExportVid joins them into one MP4 without re-encoding.',
    ],
    supportedContentTypes: [
      { label: 'YouTube videos', description: 'Standard uploads from any channel.' },
      { label: 'YouTube Shorts', description: 'Short vertical videos from the Shorts feed.' },
    ],
    formats: ['MP4 with video and audio, in every resolution YouTube offers for the video'],
    faqs: [
      {
        q: 'How do I download a YouTube video?',
        a: 'Copy the video link from YouTube, paste it into the box above, and select Download. Choose a quality from the list and save the file.',
      },
      {
        q: 'How do I convert YouTube to MP4?',
        a: 'Paste the video link into the box above and select Download. ExportVid saves the video as an MP4 file, so there is nothing else to convert.',
      },
      {
        q: 'Can I download YouTube Shorts?',
        a: 'Yes. Paste the Shorts link and ExportVid recognizes it automatically. The YouTube Shorts downloader page has more detail.',
      },
      {
        q: 'Do youtu.be links work?',
        a: 'Yes. Short youtu.be links and full youtube.com links both work.',
      },
      {
        q: 'Can I download private or members-only videos?',
        a: 'No. Private and members-only videos need a login, and ExportVid never accesses login-protected content.',
      },
    ],
    related: ['youtube-shorts-downloader', 'facebook-video-downloader', 'instagram-video-downloader', 'tiktok-video-downloader'],
  },

  'youtube-shorts-downloader': {
    slug: 'youtube-shorts-downloader',
    metaTitle: 'YouTube Shorts Downloader: Save Shorts as MP4',
    metaDescription: 'Download YouTube Shorts as MP4 for free. Paste a youtube.com/shorts link, choose a quality, and save the video to your device.',
    h1: 'YouTube Shorts downloader',
    intro: 'Paste a YouTube Shorts link and download the Short as an MP4.',
    about: [
      'ExportVid recognizes youtube.com/shorts links and finds the video file YouTube serves for that Short. A regular youtube.com/watch link works too.',
      'The list shows every quality YouTube offers for the Short, so you can pick the one that fits your device.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Short vertical videos from the Shorts feed.' }],
    formats: ['MP4 with video and audio, in every resolution YouTube offers for the Short'],
    faqs: [
      {
        q: 'How do I download a YouTube Short?',
        a: 'Open the Short, copy its link, paste it into the box above, and select Download. Then choose a quality and save the file.',
      },
      {
        q: 'Does the download include sound?',
        a: 'Yes. ExportVid keeps the audio and joins it with the video when YouTube serves them as separate files.',
      },
      {
        q: 'Can I download longer YouTube videos too?',
        a: 'Yes. The YouTube video downloader works with any regular video link.',
      },
    ],
    related: ['youtube-video-downloader', 'tiktok-video-downloader', 'instagram-reels-downloader'],
  },

  'facebook-video-downloader': {
    slug: 'facebook-video-downloader',
    metaTitle: 'Facebook Video Downloader: Save Videos and Reels',
    metaDescription:
      'Download Facebook videos and Reels as MP4. Paste a facebook.com or fb.watch link, choose a quality, and save it to your device for free.',
    h1: 'Facebook video downloader',
    intro: 'Paste a Facebook video link, including fb.watch short links, and download the MP4.',
    about: [
      'Facebook shares video through standard watch links, fb.watch short links, and Reel links. ExportVid handles all three the same way.',
      'Videos from public pages, profiles, and groups can be downloaded. Videos inside private or closed groups cannot.',
    ],
    supportedContentTypes: [
      { label: 'Facebook videos', description: 'Video posts on public pages, profiles, and groups.' },
      { label: 'Facebook Reels', description: 'Short vertical videos posted as Reels.' },
    ],
    formats: ['MP4 with video and audio, in every resolution Facebook offers for the video'],
    faqs: [
      {
        q: 'How do I download a Facebook video?',
        a: 'Copy the video link, paste it into the box above, and select Download. Then pick a quality and save the file.',
      },
      {
        q: 'Do fb.watch links work?',
        a: 'Yes. fb.watch short links work directly.',
      },
      {
        q: 'Can I download videos from a private Facebook group?',
        a: 'No. ExportVid only works with content anyone can view and never bypasses privacy settings.',
      },
    ],
    related: ['facebook-reels-downloader', 'instagram-video-downloader', 'youtube-video-downloader'],
  },

  'facebook-reels-downloader': {
    slug: 'facebook-reels-downloader',
    metaTitle: 'Facebook Reels Downloader: Save Reels as MP4',
    metaDescription: 'Download Facebook Reels as MP4. Paste a Reel link, choose a quality, and save the video to your device for free.',
    h1: 'Facebook Reels downloader',
    intro: 'Paste a Facebook Reel link and download it as an MP4.',
    about: ['Facebook Reels use a /reel/ link. ExportVid recognizes it automatically and finds the video file for you.'],
    supportedContentTypes: [{ label: 'Facebook Reels', description: 'Reels from Facebook pages and profiles.' }],
    formats: ['MP4 with video and audio, at the resolution Facebook offers'],
    faqs: [
      {
        q: 'How do I download a Facebook Reel?',
        a: 'Copy the Reel link, paste it into the box above, and select Download.',
      },
      {
        q: 'The link opens the Facebook app. What should I paste?',
        a: 'Paste the web link, which starts with facebook.com/reel or fb.watch, instead of an in-app share link. Both point to the same video.',
      },
    ],
    related: ['facebook-video-downloader', 'instagram-reels-downloader', 'tiktok-video-downloader'],
  },

  'instagram-video-downloader': {
    slug: 'instagram-video-downloader',
    metaTitle: 'Instagram Video Downloader: Reels, Videos, Stories',
    metaDescription:
      'Download Instagram Reels, videos, and Stories as MP4 for free. Photos and carousels work too. Paste an Instagram link and ExportVid finds the files.',
    h1: 'Instagram video downloader',
    intro: 'Paste an Instagram link to a Reel, video post, or Story and download it as an MP4. Photo posts and carousels work too.',
    about: [
      'Instagram uses similar-looking links for different kinds of posts. ExportVid tells them apart: Reels (/reel/), feed posts (/p/), Stories, and profiles.',
      'For carousel posts, every photo and video is listed on its own, so you can download only the one you want.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Short vertical videos posted as Reels.' },
      { label: 'Video posts', description: 'Videos shared as regular feed posts.' },
      { label: 'Stories', description: 'Stories that are currently live.' },
      { label: 'Carousels', description: 'Posts with several photos or videos, listed one by one.' },
      { label: 'Photos', description: 'Single-image feed posts.' },
      { label: 'Profile pictures', description: 'The profile photo of an account.' },
    ],
    faqs: [
      {
        q: 'How do I download an Instagram video?',
        a: 'Copy the Reel or post link from Instagram, paste it into the box above, and select Download. Then choose the file you want.',
      },
      {
        q: 'Can I download from a private Instagram account?',
        a: 'No. ExportVid only works with posts anyone can view. It never accesses private accounts.',
      },
      {
        q: 'How do I download an Instagram Story?',
        a: 'Open the Story, copy its link, and paste it into the box above. Stories can be downloaded while they are live, from accounts anyone can view.',
      },
      {
        q: 'Can I download every video and photo in a carousel?',
        a: 'Yes. Each video or photo in the carousel appears in the list with its own download button.',
      },
      {
        q: 'Can I download Instagram Highlights?',
        a: 'Yes, when Instagram shows them on a profile that anyone can view. Highlight items are handled the same way as Stories.',
      },
    ],
    formats: ['MP4 for Reels, videos, and Stories, with audio', 'JPEG for photos, carousel images, and profile pictures'],
    related: ['instagram-reels-downloader', 'facebook-video-downloader', 'tiktok-video-downloader'],
  },

  'instagram-reels-downloader': {
    slug: 'instagram-reels-downloader',
    metaTitle: 'Instagram Reels Downloader: Save Reels as MP4',
    metaDescription: 'Download Instagram Reels as MP4 in the best quality available. Paste a Reel link and save the video to your device for free.',
    h1: 'Instagram Reels downloader',
    intro: 'Paste an Instagram Reel link and download it as an MP4.',
    about: [
      'Reels are Instagram’s short vertical videos. ExportVid recognizes /reel/ and /reels/ links and finds the video file directly.',
      'The quality you see is the quality Instagram provides for that Reel. ExportVid never upscales or relabels it.',
    ],
    supportedContentTypes: [{ label: 'Instagram Reels', description: 'Reels from any account, including business and creator profiles.' }],
    formats: ['MP4 with video and audio, at the resolution Instagram offers'],
    faqs: [
      {
        q: 'How do I download an Instagram Reel?',
        a: 'Open the Reel, copy its link, paste it into the box above, and select Download.',
      },
      {
        q: 'Which Reel links work?',
        a: 'Any instagram.com/reel/ or instagram.com/reels/ link, including Reels shared as a regular post link.',
      },
      {
        q: 'Does the download include audio?',
        a: 'Yes. Most Reels come with audio and video together, and ExportVid keeps both.',
      },
    ],
    related: ['instagram-video-downloader', 'tiktok-video-downloader', 'facebook-reels-downloader'],
  },

  'tiktok-video-downloader': {
    slug: 'tiktok-video-downloader',
    metaTitle: 'TikTok Downloader: Save Videos Without Watermark',
    metaDescription:
      'Download TikTok to MP4 without the watermark when TikTok offers a clean file. Paste a TikTok link and save the video to your device for free.',
    h1: 'TikTok video downloader',
    intro: 'Paste a TikTok link and save the video as an MP4 in the best quality TikTok offers, without the watermark when a clean file exists.',
    about: [
      'ExportVid accepts full links like tiktok.com/@username/video/123 and short vm.tiktok.com or vt.tiktok.com links.',
      'TikTok usually serves one quality per video instead of a range of resolutions, so you will often see a single MP4. That is the real file TikTok provides. ExportVid does not invent extra options.',
    ],
    supportedContentTypes: [{ label: 'TikTok videos', description: 'Videos from a standard or shortened TikTok link.' }],
    formats: ['MP4 with video and audio, without the watermark when TikTok offers a clean file', 'MP4 at the resolution TikTok serves for that video'],
    faqs: [
      {
        q: 'How do I download a TikTok video without a watermark?',
        a: 'Paste the TikTok link into the box above and select Download. ExportVid picks the version without the watermark whenever TikTok provides one.',
      },
      {
        q: 'Why does my download still have a watermark?',
        a: 'Some videos only exist with a watermark. When that happens, ExportVid can’t remove it and gives you the file as TikTok serves it.',
      },
      {
        q: 'Why is there only one quality option?',
        a: 'TikTok often serves a single version of each video. ExportVid shows exactly what exists and never adds a quality that isn’t there.',
      },
      {
        q: 'Can I download videos from a private TikTok account?',
        a: 'No. Private accounts and login-protected videos are not supported.',
      },
    ],
    related: ['instagram-reels-downloader', 'facebook-reels-downloader', 'youtube-video-downloader'],
  },

  'x-video-downloader': {
    slug: 'x-video-downloader',
    metaTitle: 'X (Twitter) Video Downloader: Save Videos as MP4',
    metaDescription: 'Download videos from X (Twitter) posts as MP4. Paste an x.com or twitter.com link and save the video to your device for free.',
    h1: 'X (Twitter) video downloader',
    intro: 'Paste an x.com or twitter.com post link and download the video.',
    about: [
      'X offers several resolutions for each video, usually up to 1080p. ExportVid lists every one, with the file size next to it.',
      'Only videos in posts that anyone can view can be downloaded. Posts from protected accounts cannot.',
    ],
    supportedContentTypes: [{ label: 'X video posts', description: 'Videos attached to posts on x.com or twitter.com.' }],
    formats: ['MP4 with video and audio, in every resolution the post offers (usually up to 1080p)'],
    faqs: [
      {
        q: 'How do I download a video from X or Twitter?',
        a: 'Copy the post link, paste it into the box above, and select Download. Pick a resolution and save the file.',
      },
      {
        q: 'Do both x.com and twitter.com links work?',
        a: 'Yes. Both domains lead to the same platform, and ExportVid accepts either.',
      },
      {
        q: 'Why does my post show no video?',
        a: 'The post may contain only images, or no downloadable video could be found. ExportVid only lists files that exist.',
      },
      {
        q: 'Can I download from a protected account?',
        a: 'No. Protected accounts require a login on X, and ExportVid does not access login-protected content.',
      },
    ],
    related: ['reddit-video-downloader', 'tiktok-video-downloader', 'youtube-video-downloader'],
  },

  'reddit-video-downloader': {
    slug: 'reddit-video-downloader',
    metaTitle: 'Reddit Video Downloader: Save Videos with Sound',
    metaDescription: 'Download Reddit videos, including v.redd.it posts, as MP4 with sound. Paste a Reddit link and save the video to your device for free.',
    h1: 'Reddit video downloader',
    intro: 'Paste a Reddit post link and download the video, with sound, including videos hosted on v.redd.it.',
    about: [
      'Reddit stores video and audio as separate files. ExportVid joins them into one MP4 with a direct stream copy, so quality stays the same and the sound is included.',
      'Only videos in open subreddits and posts can be downloaded. Quarantined, private, and login-only subreddits cannot.',
    ],
    supportedContentTypes: [
      { label: 'Reddit videos', description: 'Videos hosted on v.redd.it.' },
      { label: 'Reddit GIFs', description: 'Looping posts that Reddit serves as short video clips.' },
    ],
    formats: ['MP4 with video and audio, joined from separate files when needed'],
    faqs: [
      {
        q: 'How do I download a Reddit video with sound?',
        a: 'Copy the post link, paste it into the box above, and select Download. ExportVid joins the video and audio into one file for you.',
      },
      {
        q: 'Why does a Reddit download take a little longer?',
        a: 'Reddit keeps video and audio in two files. ExportVid needs a short step to join them, without re-encoding either one.',
      },
      {
        q: 'Can I download from private or quarantined subreddits?',
        a: 'No. Only posts in open subreddits are supported.',
      },
    ],
    related: ['x-video-downloader', 'youtube-video-downloader'],
  },

  'pinterest-video-downloader': {
    slug: 'pinterest-video-downloader',
    metaTitle: 'Pinterest Video Downloader: Save Video Pins',
    metaDescription: 'Download Pinterest video pins as MP4. Paste a pinterest.com or pin.it link and save the video to your device for free.',
    h1: 'Pinterest video downloader',
    intro: 'Paste a Pinterest video pin link and download it as an MP4.',
    about: [
      'ExportVid accepts pinterest.com/pin links and short pin.it links, then finds the video file Pinterest serves for that pin.',
      'Pinterest usually offers one main resolution per video, so you will typically see a single MP4 that matches what Pinterest provides.',
    ],
    supportedContentTypes: [{ label: 'Video pins', description: 'Pins that contain a video.' }],
    formats: ['MP4 with video and audio, at the resolution Pinterest offers for the pin'],
    faqs: [
      {
        q: 'How do I download a Pinterest video?',
        a: 'Copy the pin link, paste it into the box above, and select Download.',
      },
      { q: 'Can I download image pins?', a: 'Not yet. ExportVid supports Pinterest pins that contain a video.' },
      { q: 'Do pin.it links work?', a: 'Yes. Short pin.it links work directly.' },
    ],
    related: ['tumblr-video-downloader', 'instagram-video-downloader', 'youtube-video-downloader'],
  },

  'snapchat-video-downloader': {
    slug: 'snapchat-video-downloader',
    metaTitle: 'Snapchat Spotlight Downloader: Save as MP4',
    metaDescription: 'Download Snapchat Spotlight videos as MP4. Paste a snapchat.com/spotlight link and save the video to your device for free.',
    h1: 'Snapchat Spotlight downloader',
    intro: 'Paste a Snapchat Spotlight link and download the video as an MP4.',
    about: [
      'ExportVid accepts snapchat.com/spotlight links and downloads the video file Snapchat serves for that Spotlight.',
      'Spotlight videos come as a single MP4, so you will see one download option.',
    ],
    supportedContentTypes: [{ label: 'Spotlight videos', description: 'Videos shared to Snapchat Spotlight.' }],
    formats: ['MP4 with video and audio, as Snapchat serves it'],
    faqs: [
      {
        q: 'How do I download a Snapchat Spotlight video?',
        a: 'Copy the Spotlight link, paste it into the box above, and select Download.',
      },
      { q: 'Can I download Snapchat Stories?', a: 'Not yet. ExportVid supports Spotlight videos.' },
      { q: 'Can I download private snaps?', a: 'No. ExportVid only works with content that anyone can view.' },
    ],
    related: ['tiktok-video-downloader', 'instagram-reels-downloader', 'youtube-video-downloader'],
  },

  'twitch-clip-downloader': {
    slug: 'twitch-clip-downloader',
    metaTitle: 'Twitch Clip Downloader: Save Clips as MP4',
    metaDescription: 'Download Twitch clips as MP4. Paste a clips.twitch.tv link and save the clip to your device for free.',
    h1: 'Twitch clip downloader',
    intro: 'Paste a Twitch clip link and download it as an MP4.',
    about: [
      'ExportVid accepts clips.twitch.tv links and twitch.tv/channel/clip links.',
      'Twitch serves each clip at the quality it was created in, and ExportVid shows that quality as it is.',
    ],
    supportedContentTypes: [{ label: 'Twitch clips', description: 'Clips from any channel.' }],
    formats: ['MP4 with video and audio, at the resolution Twitch offers for the clip'],
    faqs: [
      {
        q: 'How do I download a Twitch clip?',
        a: 'Copy the clip link, paste it into the box above, and select Download.',
      },
      { q: 'Can I download full streams or VODs?', a: 'No. ExportVid supports clips only.' },
      { q: 'Which Twitch links work?', a: 'Links that start with clips.twitch.tv, and twitch.tv/channel/clip links.' },
    ],
    related: ['youtube-video-downloader', 'vimeo-video-downloader'],
  },

  'linkedin-video-downloader': {
    slug: 'linkedin-video-downloader',
    metaTitle: 'LinkedIn Video Downloader: Save Videos as MP4',
    metaDescription: 'Download videos from LinkedIn posts as MP4. Paste a linkedin.com/posts link and save the video to your device for free.',
    h1: 'LinkedIn video downloader',
    intro: 'Paste a LinkedIn post link and download the video as an MP4.',
    about: [
      'ExportVid accepts linkedin.com/posts links for posts you can view without signing in.',
      'LinkedIn serves each video as a single MP4, so you will see one download option.',
    ],
    supportedContentTypes: [{ label: 'Video posts', description: 'Posts that include a video.' }],
    formats: ['MP4 with video and audio, as LinkedIn serves it'],
    faqs: [
      {
        q: 'How do I download a LinkedIn video?',
        a: 'Copy the post link, paste it into the box above, and select Download.',
      },
      {
        q: 'Why does my link say the content is private?',
        a: 'The post is only visible to signed-in LinkedIn members, and ExportVid can only reach posts that anyone can view.',
      },
      { q: 'Can I download LinkedIn Learning courses?', a: 'No. Course content requires an account and is not supported.' },
    ],
    related: ['youtube-video-downloader', 'x-video-downloader', 'facebook-video-downloader'],
  },

  'tumblr-video-downloader': {
    slug: 'tumblr-video-downloader',
    metaTitle: 'Tumblr Video Downloader: Save Videos as MP4',
    metaDescription: 'Download videos from Tumblr posts as MP4. Paste a link to a post on any Tumblr blog and save the video for free.',
    h1: 'Tumblr video downloader',
    intro: 'Paste a link to a Tumblr video post and download it as an MP4.',
    about: [
      'ExportVid accepts links to posts on tumblr.com and on any blogname.tumblr.com address.',
      'Only videos on blogs and posts that anyone can view can be downloaded.',
    ],
    supportedContentTypes: [{ label: 'Video posts', description: 'Tumblr posts that include a video.' }],
    formats: ['MP4 with video and audio, as Tumblr serves it'],
    faqs: [
      {
        q: 'How do I download a Tumblr video?',
        a: 'Copy the post link, paste it into the box above, and select Download.',
      },
      { q: 'Do blog subdomains work?', a: 'Yes. Links like blogname.tumblr.com/post/... work.' },
      { q: 'Can I download from a private blog?', a: 'No. Blogs that require signing in are not supported.' },
    ],
    related: ['pinterest-video-downloader', 'instagram-video-downloader', 'youtube-video-downloader'],
  },

  'vimeo-video-downloader': {
    slug: 'vimeo-video-downloader',
    metaTitle: 'Vimeo Video Downloader: Save Videos as MP4',
    metaDescription: 'Download Vimeo videos as MP4. Paste a vimeo.com link, choose a quality, and save the video to your device for free.',
    h1: 'Vimeo video downloader',
    intro: 'Paste a Vimeo video link and download it as an MP4.',
    about: [
      'ExportVid accepts vimeo.com links and player.vimeo.com embed links.',
      'Videos the owner has set to private, password-protected, or limited to certain sites cannot be downloaded.',
    ],
    supportedContentTypes: [{ label: 'Vimeo videos', description: 'Videos you can watch without signing in.' }],
    formats: ['MP4 with video and audio, in every resolution Vimeo offers for the video'],
    faqs: [
      {
        q: 'How do I download a Vimeo video?',
        a: 'Copy the video link, paste it into the box above, and select Download. Then choose a quality.',
      },
      {
        q: 'Why can’t I download my Vimeo link?',
        a: 'The video is probably private, password-protected, or limited to certain domains. ExportVid can only reach videos anyone can watch.',
      },
      { q: 'Do embed links work?', a: 'Yes. player.vimeo.com links work.' },
    ],
    related: ['youtube-video-downloader', 'twitch-clip-downloader'],
  },
};

export function isPlatformSlug(slug: string): slug is PlatformSlug {
  return (PLATFORM_SLUGS as readonly string[]).includes(slug);
}

/** Returns the page in the requested language. Any missing translation falls back to English. */
export function getPlatformPage(slug: string, locale: Locale = 'en'): PlatformPageConfig | undefined {
  if (!isPlatformSlug(slug)) return undefined;
  const base = platformPages[slug];
  if (locale === 'en') return base;
  return { ...base, ...getPlatformContent(locale, slug) };
}
