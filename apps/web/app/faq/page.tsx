import type { Metadata } from 'next';
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { SUPPORTED_PLATFORM_COUNT } from '@exportvid/shared';
import { PageHeader } from '@/components/PageHeader';
import { Accordion } from '@/components/Section';
import { ALL_PLATFORMS } from '@/components/PlatformMark';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ: How ExportVid Works',
  description:
    'Answers about downloading videos and photos with ExportVid: supported sites, watermarks, quality, private content, and what to do when a link does not work.',
  path: '/faq',
});

const FAQS = [
  {
    q: 'Is ExportVid free?',
    a: 'Yes. ExportVid is free to use, with no fees, no subscription, and no sign-up.',
  },
  {
    q: 'How do I download a video or photo from social media?',
    a: 'Copy the link to the post, paste it into the box on the homepage, and select Download. ExportVid lists the available files. Choose one and save it to your device.',
  },
  {
    q: 'Which sites can I download from?',
    a: `${ALL_PLATFORMS.map((p) => p.label).join(', ')}. The Supported sites page lists the link formats that work for each one.`,
  },
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
  {
    q: 'Do I need to install anything?',
    a: 'No. ExportVid runs in your browser on a phone or computer. There is no app or extension to install.',
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
];

export default function FaqPage() {
  return (
    <div className="container-tool py-14 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }])} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" intro="Quick answers about how ExportVid works." />
      <div className="mt-10">
        <Accordion items={FAQS} />
      </div>
    </div>
  );
}
