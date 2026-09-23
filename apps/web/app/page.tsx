import Link from 'next/link';
import type { Metadata } from 'next';
import { Downloader } from '@/components/Downloader';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'ExportVid — Download social media content fast',
  description:
    'Paste a public social media link and download the available media in the highest quality. TikTok, Instagram, Facebook, X, and Reddit. No account, no app.',
  path: '/',
});

const PLATFORMS = [
  { label: 'TikTok', href: '/tiktok-video-downloader' },
  { label: 'Instagram', href: '/instagram-video-downloader' },
  { label: 'Facebook', href: '/facebook-video-downloader' },
  { label: 'X (Twitter)', href: '/x-video-downloader' },
  { label: 'Reddit', href: '/reddit-video-downloader' },
];

const PRINCIPLES = [
  { title: 'No account', body: 'No sign-up, no login, no email required.' },
  { title: 'Real quality only', body: 'We show exactly what the source provides — never inflated labels.' },
  { title: 'Direct downloads', body: 'Your file streams straight from the source. No redirect loops.' },
];

export default function HomePage() {
  return (
    <div className="container-tool py-16 sm:py-24">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Download social media content <span className="text-accent">fast.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-balance text-base text-ink-dim">
          Paste a public social media link and download the available media in the highest quality actually available.
        </p>
      </div>

      <Downloader />

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {PLATFORMS.map((p) => (
          <Link key={p.href} href={p.href} className="text-sm text-ink-faint transition-colors hover:text-ink-dim">
            {p.label}
          </Link>
        ))}
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="card p-5">
            <h2 className="text-sm font-semibold text-ink">{p.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-faint">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
