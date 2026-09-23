import type { Metadata } from 'next';
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { SUPPORTED_PLATFORM_COUNT } from '@exportvid/shared';
import { PageHeader } from '@/components/PageHeader';
import { Accordion } from '@/components/Section';
import { ALL_PLATFORMS } from '@/components/PlatformMark';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ',
  description: 'Answers to common questions about how ExportVid works, supported platforms, quality, privacy, and legal use.',
  path: '/faq',
});

const FAQS = [
  {
    q: 'Is ExportVid free?',
    a: 'Yes. Pasting a link and downloading the available media is free, with no subscription.',
  },
  {
    q: 'Which platforms are supported?',
    a: `${SUPPORTED_PLATFORM_COUNT} platforms: ${ALL_PLATFORMS.map((p) => p.label).join(', ')}. See the Supported Sites page for the full breakdown by content type.`,
  },
  {
    q: 'Will I get a watermark-free file?',
    a: 'When the source offers a clean file, ExportVid picks it. TikTok is one example. When a source only has a watermarked version, we cannot remove the mark and we do not claim to. The same applies to quality: we list only what the source provides, so there is no fake 4K.',
  },
  {
    q: 'Does ExportVid re-encode videos?',
    a: 'Only when needed. When a platform serves video and audio as separate files, ExportVid combines them with a direct stream copy instead of re-encoding, which keeps the original quality.',
  },
  {
    q: 'Can ExportVid download private accounts or login-protected content?',
    a: 'No. ExportVid only works with public content and will never attempt to access private accounts, login-gated posts, or anything requiring authentication.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. ExportVid runs entirely in your browser. No app, extension, or account.',
  },
  {
    q: 'Is it legal to download social media videos?',
    a: 'Downloading is generally fine for content you have the rights to use, such as your own posts or content shared under permissive terms. You are responsible for having the necessary rights or permission for anything you download and reuse. See our Terms and Copyright pages for details.',
  },
  {
    q: 'How long are downloads available?',
    a: 'Extraction results are only cached briefly to serve concurrent requests efficiently. If a link expires before you download, paste it again.',
  },
];

export default function FaqPage() {
  return (
    <div className="container-tool py-14 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }])} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" />
      <div className="mt-10">
        <Accordion items={FAQS} />
      </div>
    </div>
  );
}
