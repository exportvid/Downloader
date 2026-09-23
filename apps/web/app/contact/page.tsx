import type { Metadata } from 'next';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description: 'Get in touch with ExportVid for support, copyright requests, or privacy questions.',
  path: '/contact',
});

const CHANNELS = [
  {
    title: 'General support',
    body: 'Questions about how ExportVid works, a platform that isn’t extracting correctly, or general feedback.',
    email: 'support@exportvid.com',
  },
  {
    title: 'Copyright & takedowns',
    body: 'Submit a takedown request or counter-notice. See the Copyright page for what to include.',
    email: 'copyright@exportvid.com',
  },
  {
    title: 'Privacy & security',
    body: 'Privacy questions, or reporting a security issue.',
    email: 'privacy@exportvid.com',
  },
];

export default function ContactPage() {
  return (
    <div className="container-tool py-16 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <h1 className="mb-3 text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Contact</h1>
      <p className="mx-auto mb-12 max-w-lg text-center text-base text-ink-dim">
        ExportVid has no live chat or ticketing system yet — email is the fastest way to reach us.
      </p>

      <div className="space-y-4">
        {CHANNELS.map((c) => (
          <div key={c.title} className="card p-5">
            <h2 className="text-sm font-semibold text-ink">{c.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-faint">{c.body}</p>
            <a href={`mailto:${c.email}`} className="mt-3 inline-block text-sm text-accent hover:underline">
              {c.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
