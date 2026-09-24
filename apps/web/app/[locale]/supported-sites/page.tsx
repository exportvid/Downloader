import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { isLocale, localePath } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { PageHeader } from '@/components/PageHeader';
import { JsonLd } from '@/components/JsonLd';
import { ALL_PLATFORMS, PLATFORM_BRAND, PLATFORM_DOMAINS, PlatformTile } from '@/components/PlatformMark';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);
  return pageMetadata({ title: m.site.supported.metaTitle, description: m.site.supported.metaDescription, path: '/supported-sites', locale, ogAlt: m.site.meta.ogAlt });
}


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
          <Link
            key={p.id}
            href={localePath(locale, p.href)}
            className="platform-card card scroll-reveal group flex items-center gap-4 p-5"
            style={{ ['--glow' as string]: PLATFORM_BRAND[p.id].glow }}
          >
            <PlatformTile id={p.id} className="platform-tile h-12 w-12 rounded-[14px]" markClassName="h-6 w-6" />
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold text-ink">{p.label}</span>
              <span dir="ltr" className="block truncate text-xs text-ink-faint text-start">
                {PLATFORM_DOMAINS[p.id]}
              </span>
            </span>
            <span className="hidden flex-wrap justify-end gap-1 sm:flex">
              {p.types.map((type) => (
                <span key={type} className="rounded-full bg-hl/6 px-2 py-0.5 text-[10px] font-medium text-ink-dim">
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
