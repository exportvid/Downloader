import type { Metadata } from 'next';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { PageHeader } from '@/components/PageHeader';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact ExportVid for help with a download, copyright requests, or privacy questions.',
  path: '/contact',
});

const CHANNELS = [
  {
    title: 'General support',
    body: 'Questions about how ExportVid works, a link that won’t download, or general feedback.',
    email: 'support@exportvid.com',
  },
  {
    title: 'Copyright and takedowns',
    body: 'Send a takedown request or counter-notice. The Copyright page lists what to include.',
    email: 'copyright@exportvid.com',
  },
  {
    title: 'Privacy & security',
    body: 'Questions about your data, or a security issue to report.',
    email: 'privacy@exportvid.com',
  },
];

export default function ContactPage() {
  return (
    <div className="container-tool py-14 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <PageHeader eyebrow="Contact" title="Get in touch" intro="Email is the fastest way to reach us. There is no live chat yet." />

      <div className="mt-10 space-y-3">
        {CHANNELS.map((c) => (
          <a key={c.title} href={`mailto:${c.email}`} className="card lift group block p-6 hover:bg-base-raised">
            <h2 className="text-[16px] font-semibold text-ink">{c.title}</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-dim">{c.body}</p>
            <span className="mt-3 inline-block text-sm font-medium text-accent">{c.email}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
