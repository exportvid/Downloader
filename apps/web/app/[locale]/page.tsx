import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { StudioHome } from '@/components/home/StudioHome';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, webApplicationJsonLd } from '@/lib/seo';
import { isLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { site } = getMessages(locale);
  return pageMetadata({
    title: `${site.meta.homeTitle} | ExportVid`,
    description: site.meta.siteDescription,
    path: '/',
    locale,
    ogAlt: site.meta.ogAlt,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { site } = getMessages(locale);
  return (
    <>
      <JsonLd data={webApplicationJsonLd(site.meta.siteDescription, locale)} />
      <StudioHome locale={locale} />
    </>
  );
}
