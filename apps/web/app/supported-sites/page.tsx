import type { Metadata } from 'next';
import Link from 'next/link';
import { SUPPORTED_PLATFORM_COUNT } from '@exportvid/shared';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { PageHeader } from '@/components/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { ALL_PLATFORMS, PlatformMark, type PlatformId } from '@/components/PlatformMark';

export const metadata: Metadata = pageMetadata({
  title: 'Supported Sites',
  description: `All ${SUPPORTED_PLATFORM_COUNT} platforms and content types ExportVid supports.`,
  path: '/supported-sites',
});

const DOMAINS: Record<PlatformId, string> = {
  tiktok: 'tiktok.com, vm.tiktok.com',
  instagram: 'instagram.com',
  facebook: 'facebook.com, fb.watch',
  twitter: 'x.com, twitter.com',
  reddit: 'reddit.com, v.redd.it',
  youtube: 'youtube.com, youtu.be',
  pinterest: 'pinterest.com, pin.it',
  snapchat: 'snapchat.com/spotlight',
  twitch: 'clips.twitch.tv, twitch.tv',
  linkedin: 'linkedin.com/posts',
  tumblr: 'tumblr.com and *.tumblr.com',
  vimeo: 'vimeo.com, player.vimeo.com',
};

export default function SupportedSitesPage() {
  return (
    <div className="container-wide py-14 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Supported sites', path: '/supported-sites' }])} />
      <PageHeader eyebrow="Supported sites" title={`${SUPPORTED_PLATFORM_COUNT} platforms`} intro="Every platform ExportVid works with, and what you can download from each." />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ALL_PLATFORMS.map((p) => (
          <Link key={p.id} href={p.href} className="card lift group flex items-center gap-4 p-5 transition-colors hover:bg-base-raised">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
              <PlatformMark id={p.id} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold text-ink">{p.label}</span>
              <span className="block truncate text-xs text-ink-faint">{DOMAINS[p.id]}</span>
            </span>
            <span className="hidden flex-wrap justify-end gap-1 sm:flex">
              {p.types.map((t) => (
                <span key={t} className="rounded-full bg-base px-2 py-0.5 text-[10px] text-ink-faint">
                  {t}
                </span>
              ))}
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink-faint">
        Don&apos;t see a platform you need?{' '}
        <Link href="/contact" className="text-accent hover:underline">
          Let us know
        </Link>
        .
      </p>
    </div>
  );
}
