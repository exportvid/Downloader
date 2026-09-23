import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { PageHeader } from '@/components/PageHeader';
import { Accordion } from '@/components/Section';
import { ALL_PLATFORMS } from '@/components/PlatformMark';
import { fmt, isLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);
  return pageMetadata({ title: m.site.faqPage.metaTitle, description: m.site.faqPage.metaDescription, path: '/faq', locale, ogAlt: m.site.meta.ogAlt });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMessages(locale);
  const t = m.site.faqPage;
  const list = ALL_PLATFORMS.map((p) => p.label).join(', ');
  const faqs = t.items.map((f) => ({ q: f.q, a: fmt(f.a, { list }) }));

  return (
    <div className="container-tool py-14 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: m.client.hero.home, path: '/' }, { name: t.eyebrow, path: '/faq' }], locale)} />
      <JsonLd data={faqJsonLd(faqs, locale)} />
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <div className="mt-10">
        <Accordion items={faqs} />
      </div>
    </div>
  );
}
