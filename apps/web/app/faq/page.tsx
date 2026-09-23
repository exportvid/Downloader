import type { Metadata } from 'next';
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ',
  description: 'Answers to common questions about how ExportVid works, supported platforms, quality, privacy, and legal use.',
  path: '/faq',
});

const FAQS = [
  {
    q: 'Is ExportVid free?',
    a: 'Yes. Pasting a link and downloading the available media is free, with no account or subscription required.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'TikTok, Instagram, Facebook, X (Twitter), and Reddit. See the Supported Sites page for the full breakdown by content type.',
  },
  {
    q: 'Why doesn’t ExportVid say a video is "4K" or "watermark-free"?',
    a: 'ExportVid only shows quality information that is actually true of the file you’re about to download. If the source doesn’t provide 4K, we won’t claim it does, and we never fabricate a watermark-free version that doesn’t exist on the source.',
  },
  {
    q: 'Does ExportVid re-encode videos?',
    a: 'No, not unless required. Whenever a platform serves video and audio as separate files, ExportVid combines them using a direct stream copy rather than re-encoding, which preserves the original quality exactly.',
  },
  {
    q: 'Can ExportVid download private accounts or login-protected content?',
    a: 'No. ExportVid only works with public content and will never attempt to access private accounts, login-gated posts, or anything requiring authentication.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. ExportVid runs entirely in your browser — no app, extension, or account.',
  },
  {
    q: 'Is it legal to download social media videos?',
    a: 'Downloading is generally fine for content you have the rights to use, such as your own posts or content shared under permissive terms. You are responsible for having the necessary rights or permission for anything you download and reuse. See our Terms and Copyright pages for details.',
  },
  {
    q: 'How long are downloads available?',
    a: 'Extraction results are only cached briefly to serve concurrent requests efficiently. If a link expires before you download, simply paste it again.',
  },
];

export default function FaqPage() {
  return (
    <div className="container-tool py-16 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }])} />
      <JsonLd data={faqJsonLd(FAQS)} />
      <h1 className="mb-10 text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Frequently asked questions
      </h1>
      <div className="divide-y divide-line rounded-xl2 border border-line">
        {FAQS.map((f) => (
          <div key={f.q} className="p-5">
            <p className="text-sm font-medium text-ink">{f.q}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-faint">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
