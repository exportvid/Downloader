/**
 * English is the source of truth. Every other language file must match this shape exactly, so TypeScript
 * flags a missing or extra key. Platform names (YouTube, TikTok, ...) and the ExportVid name are never translated.
 *
 * `client` is sent to the browser, so it holds only what interactive components need.
 * `site` is used by server-rendered pages only.
 */
export const en = {
  client: {
    header: {
      logoAria: 'ExportVid home',
      platformsAria: 'Supported platforms',
      allSitesShort: 'All sites',
      more: 'More',
      moreDownloaders: 'More downloaders',
      moreAria: 'More platforms',
      allSupportedSites: 'All supported sites',
      faq: 'FAQ',
      contact: 'Contact',
    },
    language: { label: 'Language', menuLabel: 'Choose a language' },
    theme: { label: 'Theme', system: 'System', light: 'Light', dark: 'Dark' },
    hero: {
      home: 'Home',
      breadcrumbAria: 'Breadcrumb',
      placeholder: 'Paste a video link',
      inputAria: 'Video link',
      paste: 'Paste',
      download: 'Download',
      checking: 'Checking',
      statusLines: ['Reading the link…', 'Checking available formats…', 'Almost done…'],
      videoAudio: 'Video + audio',
      videoOnly: 'Video only',
      assetOriginal: 'Original {ext}',
      assetAudio: 'Audio ({ext})',
    },
    button: {
      preparing: 'Preparing…',
      merging: 'Merging…',
      errorPrepare: 'Couldn’t prepare this file. Try a different quality.',
      errorSlow: 'This is taking longer than expected. Try again.',
      errorGeneric: 'Something went wrong. Try again.',
    },
    errors: {
      UNSUPPORTED_URL: "ExportVid doesn't support that site yet. Check the supported sites list.",
      INVALID_URL: "That doesn't look like a link. Copy the full address of the post and paste it again.",
      PRIVATE_OR_PROTECTED_CONTENT: "This post is private or needs a login, so ExportVid can't reach it.",
      NOT_FOUND: "We couldn't find a video at that link. Check that the post still exists.",
      EXTRACTION_FAILED: 'The platform didn’t return a file. The post may be removed, or the platform may be blocking the request. Try again in a minute.',
      RATE_LIMITED: 'Too many requests. Wait a moment and try again.',
      VERIFICATION_FAILED: "We couldn't verify your browser. Refresh the page and try again.",
      TIMEOUT: 'The platform took too long to respond. Try again.',
      INTERNAL_ERROR: 'Something went wrong on our end. Try again.',
    },
    /** Words used to build labels like "Instagram Reel". `kindFormat` sets the word order for the language. */
    kinds: {
      video: 'Video',
      reel: 'Reel',
      story: 'Story',
      post: 'Post',
      photo: 'Photo',
      carousel: 'Carousel',
      profilePicture: 'Profile picture',
      highlight: 'Highlight',
      short: 'Short',
      pin: 'Pin',
      spotlight: 'Spotlight',
      clip: 'Clip',
      gif: 'GIF',
      image: 'Image',
      media: 'Media',
    },
    kindFormat: '{brand} {kind}',
    notFound: {
      title: 'Page not found',
      body: 'This page doesn’t exist or has moved.',
      button: 'Back to ExportVid',
    },
  },

  site: {
    meta: {
      siteDescription:
        'Free video downloader for social media. Paste a link from TikTok, Instagram, YouTube, Facebook, X, and more, and save the video as an MP4 in the best quality available.',
      homeTitle: 'Free Video Downloader for Social Media',
      ogAlt: 'ExportVid: a fast, free video downloader for social media',
    },
    home: {
      heroBadge: 'No watermark · No sign-up',
      heroTitle: 'Fast & Free Video Downloader',
      heroIntro:
        'Paste a video link from TikTok, Instagram, YouTube, and more. Save it as an MP4 in the best quality available, free and without a watermark.',
      howEyebrow: 'How it works',
      howTitle: 'Download a video in three steps',
      steps: [
        { title: 'Paste a link', body: 'Copy the link to a video and paste it in the box above.' },
        { title: 'Choose a quality', body: 'ExportVid checks the link and lists every quality the video comes in.' },
        { title: 'Download', body: 'Save the MP4 to your phone or computer.' },
      ],
      whyEyebrow: 'Why ExportVid',
      whyTitle: 'Why use ExportVid',
      noWatermarkTitle: 'No watermark',
      noWatermarkBody:
        'When a platform offers a clean file, ExportVid gives you that one. TikTok’s unmarked video is one example. If a video only exists with a watermark, we can’t remove it.',
      tiles: [
        { title: 'Honest quality labels', body: 'Every quality label matches the real file. No fake 4K.' },
        { title: 'Original quality', body: 'When video and audio come separately, we join them without re-encoding.' },
        { title: 'Nothing stored', body: 'We don’t keep your downloads. Temporary files are deleted after about 15 minutes.' },
        { title: 'Works in any browser', body: 'Use it on your phone or computer. Nothing to install.' },
      ],
      platformsEyebrow: 'Platforms',
      platformsTitle: 'Video downloaders for every platform',
      platformsIntro: 'Each one works the same way. Paste a link, choose a quality, and download.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'Is ExportVid free?', a: 'Yes. ExportVid is free to use. There are no fees or subscriptions.' },
        {
          q: 'How do I download a video from social media?',
          a: 'Copy the link to the video, paste it into the box at the top of the page, and select Download. Choose a quality from the list, then save the file to your device.',
        },
        { q: 'Which sites can I download from?', a: '{list}.' },
        {
          q: 'Can I download videos without a watermark?',
          a: 'Yes, when the platform offers a clean file. ExportVid picks that version automatically. TikTok is one example. If a video only exists with a watermark, ExportVid can’t remove it.',
        },
        {
          q: 'Does ExportVid lower the video quality?',
          a: 'No. You get the quality the platform provides, and the list shows every option. When video and audio come as separate files, ExportVid joins them without re-encoding.',
        },
        { q: 'Can I download from private accounts?', a: 'No. ExportVid only works with posts anyone can view. It never tries to open private or login-protected content.' },
        {
          q: 'Can I download photos too?',
          a: 'Yes, where the platform allows it. Paste the link to an Instagram photo post or carousel, and the photos appear in the list next to any videos.',
        },
      ],
      faqMore: 'You can find more answers in the {link}.',
      faqMoreLink: 'full FAQ',
      ctaTitle: 'Got a link?',
      ctaBody: 'Paste it above and save the video to your device.',
      ctaButton: 'Paste a video link',
    },
    footer: {
      tagline: 'A fast, free video downloader for social media.',
      downloaders: 'Downloaders',
      company: 'Company',
      legal: 'Legal',
      supportedSites: 'Supported sites',
      faq: 'FAQ',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'Copyright / DMCA',
      backToTop: 'Back to top',
      legalEnglishNote: 'Legal pages are available in English only.',
      disclaimer: 'Not affiliated with any supported platform. Download only what you have the right to use.',
    },
    platformPage: {
      howEyebrow: 'How it works',
      howTitle: 'How to download from {platform}',
      contentEyebrow: 'Content types',
      contentTitle: 'What you can download',
      formatsEyebrow: 'Formats',
      formatsTitle: 'File formats',
      faqEyebrow: 'FAQ',
      faqTitle: 'Frequently asked questions',
      otherEyebrow: 'More downloaders',
      otherTitle: 'Other downloaders',
    },
    faqPage: {
      metaTitle: 'FAQ: How ExportVid Works',
      metaDescription:
        'Answers about downloading social media videos with ExportVid: supported sites, watermarks, video quality, private content, and what to do when a link does not work.',
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      intro: 'Quick answers about how ExportVid works.',
      items: [
        { q: 'Is ExportVid free?', a: 'Yes. ExportVid is free to use, with no fees, no subscription, and no sign-up.' },
        {
          q: 'How do I download a video from social media?',
          a: 'Copy the link to the video, paste it into the box on the homepage, and select Download. ExportVid lists every quality available. Choose one and save the MP4 to your device.',
        },
        { q: 'Which sites can I download from?', a: '{list}. The Supported sites page lists the link formats that work for each one.' },
        {
          q: 'Can I download videos without a watermark?',
          a: 'Yes, when the platform offers a clean file. ExportVid picks that version automatically. TikTok is one example. If a video only exists with a watermark, ExportVid can’t remove it.',
        },
        {
          q: 'Why is the quality lower than I expected?',
          a: 'ExportVid lists only the qualities the platform provides. Some platforms serve a single version of each video. ExportVid never adds a quality that doesn’t exist, such as a fake 4K option.',
        },
        {
          q: 'Does ExportVid re-encode videos?',
          a: 'No. Some platforms serve video and audio as separate files. ExportVid joins them with a direct stream copy, which keeps the original quality.',
        },
        {
          q: 'Can I download from a private account?',
          a: 'No. ExportVid only works with posts anyone can view. It never tries to open private accounts or login-protected posts.',
        },
        { q: 'Do I need to install anything?', a: 'No. ExportVid runs in your browser on a phone or computer. There is no app or extension to install.' },
        {
          q: 'Can I download photos too?',
          a: 'Yes, where the platform allows it. Paste the link to an Instagram photo post or carousel, and the photos appear in the list next to any videos.',
        },
        {
          q: 'Why doesn’t my link work?',
          a: 'Check that you copied the full link, that the post is visible without signing in, and that the site is on the Supported sites list. If the post is fine, the platform may be blocking the request. Try again in a minute.',
        },
        {
          q: 'Is it legal to download social media videos?',
          a: 'It depends on the content and where you live. Downloading is generally fine for content you own or have permission to use. You are responsible for having the right to any content you download. The Terms and Copyright pages explain more.',
        },
        {
          q: 'How long does my download link last?',
          a: 'Results are kept for about 5 minutes. If a download link stops working, paste the post link again to get a new one.',
        },
      ],
    },
    supported: {
      metaTitle: 'Supported Sites',
      metaDescription: 'Every site you can download videos from with ExportVid, and the link formats that work for each one.',
      eyebrow: 'Supported sites',
      title: 'Sites you can download videos from',
      intro: 'Every platform ExportVid works with, and the links that work for each one.',
      missing: 'Missing a site you need?',
      tellUs: 'Tell us which one',
      /** Labels for the small content-type tags, keyed by the English name used in the platform catalog. */
      types: {
        Video: 'Video',
        Shorts: 'Shorts',
        Reels: 'Reels',
        Posts: 'Posts',
        Stories: 'Stories',
        Carousels: 'Carousels',
        GIFs: 'GIFs',
        'Video pins': 'Video pins',
        Spotlight: 'Spotlight',
        Clips: 'Clips',
      } as Record<string, string>,
    },
    contact: {
      metaTitle: 'Contact',
      metaDescription: 'Contact ExportVid for help with a download, copyright requests, or privacy questions.',
      eyebrow: 'Contact',
      title: 'Get in touch',
      intro: 'Email is the fastest way to reach us. There is no live chat yet.',
      channels: [
        { title: 'General support', body: 'Questions about how ExportVid works, a link that won’t download, or general feedback.' },
        { title: 'Copyright and takedowns', body: 'Send a takedown request or counter-notice. The Copyright page lists what to include.' },
        { title: 'Privacy and security', body: 'Questions about your data, or a security issue to report.' },
      ],
    },
  },
};

export type Messages = typeof en;
export type ClientMessages = Messages['client'];
