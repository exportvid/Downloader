import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PlatformDownloaderPage } from '@/components/PlatformDownloaderPage';
import { getPlatformPage } from '@/lib/platforms';
import { pageMetadata } from '@/lib/seo';
import { LOCALES, PLATFORM_SLUGS, isLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

// Unknown paths never reach this route: the middleware sends them to the localized 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PLATFORM_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const config = getPlatformPage(slug, locale);
  if (!config) return {};
  return pageMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: `/${slug}`,
    locale,
    ogAlt: getMessages(locale).site.meta.ogAlt,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return notFound();
  const config = getPlatformPage(slug, locale);
  if (!config) return notFound();
  return <PlatformDownloaderPage config={config} locale={locale} />;
}
