import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'Supported Sites',
  description: 'See every platform and content type ExportVid supports: TikTok, Instagram, Facebook, X (Twitter), and Reddit.',
  path: '/supported-sites',
});

const SITES = [
  {
    name: 'TikTok',
    href: '/tiktok-video-downloader',
    domains: 'tiktok.com, vm.tiktok.com, vt.tiktok.com',
    types: ['TikTok videos'],
  },
  {
    name: 'Instagram',
    href: '/instagram-video-downloader',
    domains: 'instagram.com',
    types: ['Reels', 'Video posts', 'Photos', 'Carousels', 'Stories', 'Profile pictures'],
  },
  {
    name: 'Facebook',
    href: '/facebook-video-downloader',
    domains: 'facebook.com, fb.watch',
    types: ['Videos', 'Reels'],
  },
  {
    name: 'X (Twitter)',
    href: '/x-video-downloader',
    domains: 'x.com, twitter.com',
    types: ['Video posts'],
  },
  {
    name: 'Reddit',
    href: '/reddit-video-downloader',
    domains: 'reddit.com, v.redd.it',
    types: ['Videos', 'GIF-style clips'],
  },
];

export default function SupportedSitesPage() {
  return (
    <div className="container-tool py-16 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Supported sites', path: '/supported-sites' }])} />
      <h1 className="mb-3 text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Supported sites</h1>
      <p className="mx-auto mb-12 max-w-lg text-center text-base text-ink-dim">
        ExportVid supports five platforms at launch, covering everything publicly downloadable from each.
      </p>

      <div className="space-y-4">
        {SITES.map((site) => (
          <div key={site.name} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link href={site.href} className="text-base font-semibold text-ink hover:text-accent">
                {site.name}
              </Link>
              <p className="mt-1 text-xs text-ink-faint">{site.domains}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {site.types.map((t) => (
                <span key={t} className="rounded-full border border-line-strong px-2.5 py-0.5 text-xs text-ink-dim">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink-faint">
        Pinterest support is planned for a future release. Don&apos;t see a platform you need?{' '}
        <Link href="/contact" className="text-accent hover:underline">
          Let us know
        </Link>
        .
      </p>
    </div>
  );
}
