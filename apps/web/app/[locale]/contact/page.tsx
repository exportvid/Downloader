import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { PageHeader } from '@/components/PageHeader';
import { isLocale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

const EMAILS = ['support@exportvid.com', 'copyright@exportvid.com', 'privacy@exportvid.com'];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = getMessages(locale);
  return pageMetadata({ title: m.site.contact.metaTitle, description: m.site.contact.metaDescription, path: '/contact', locale, ogAlt: m.site.meta.ogAlt });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMessages(locale);
  const t = m.site.contact;
  return (
    <div className="container-tool py-14 sm:py-20">
      <JsonLd data={breadcrumbJsonLd([{ name: m.client.hero.home, path: '/' }, { name: t.eyebrow, path: '/contact' }], locale)} />
      <PageHeader eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <div className="mt-10 space-y-3">
        {t.channels.map((c, i) => (
          <a key={EMAILS[i]} href={`mailto:${EMAILS[i]}`} className="card lift group block p-6 hover:bg-base-raised">
            <h2 className="text-[16px] font-semibold text-ink">{c.title}</h2>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-dim">{c.body}</p>
            <span dir="ltr" className="mt-3 inline-block text-sm font-medium text-accent">
              {EMAILS[i]}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
