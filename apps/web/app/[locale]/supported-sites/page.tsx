import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { isLocale, localePath } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { PageHeader } from '@/components/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { ALL_PLATFORMS, PlatformMark, type PlatformId } from '@/components/PlatformMark';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);
  return pageMetadata({ title: m.site.supported.metaTitle, description: m.site.supported.metaDescription, path: '/supported-sites', locale, ogAlt: m.site.meta.ogAlt });
}

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

export default async function SupportedSitesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMessages(locale);
  const t = m.site.supported;
  return (
    <div className="container-wide py-14 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: m.client.hero.home, path: '/' }, { name: t.eyebrow, path: '/supported-sites' }], locale)} />
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ALL_PLATFORMS.map((p) => (
          <Link key={p.id} href={localePath(locale, p.href)} className="card lift group flex items-center gap-4 p-5 transition-colors hover:bg-base-raised">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-on-brand shadow-glow">
              <PlatformMark id={p.id} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold text-ink">{p.label}</span>
              <span dir="ltr" className="block truncate text-xs text-ink-faint text-start">
                {DOMAINS[p.id]}
              </span>
            </span>
            <span className="hidden flex-wrap justify-end gap-1 sm:flex">
              {p.types.map((type) => (
                <span key={type} className="rounded-full bg-base px-2 py-0.5 text-[10px] text-ink-faint">
                  {t.types[type] ?? type}
                </span>
              ))}
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink-faint">
        {t.missing}{' '}
        <Link href={localePath(locale, '/contact')} className="text-accent hover:underline">
          {t.tellUs}
        </Link>
      </p>
    </div>
  );
}
