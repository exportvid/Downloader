import Link from 'next/link';
import type { PlatformPageConfig } from '@/lib/platforms';
import { getPlatformPage } from '@/lib/platforms';
import { fmt, localePath, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { DownloadHero } from './DownloadHero';
import { ALL_PLATFORMS } from './PlatformMark';
import { Accordion, Section } from './Section';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

export function PlatformDownloaderPage({ config, locale }: { config: PlatformPageConfig; locale: Locale }) {
  const m = getMessages(locale);
  const pp = m.site.platformPage;
  // Reels pages have no card of their own, so fall back to the parent platform (instagram-*, facebook-*).
  const active =
    ALL_PLATFORMS.find((p) => p.href === `/${config.slug}`) ??
    ALL_PLATFORMS.find((p) => p.href.startsWith(`/${config.slug.split('-')[0]}-`));

  return (
    <div className="pb-16">
      <JsonLd data={breadcrumbJsonLd([{ name: m.client.hero.home, path: '/' }, { name: config.h1, path: `/${config.slug}` }], locale)} />
      {config.faqs.length > 0 && <JsonLd data={faqJsonLd(config.faqs, locale)} />}

      <DownloadHero title={config.h1} intro={config.intro} breadcrumb={config.h1} activeId={active?.id} />

      <Section eyebrow={pp.howEyebrow} title={fmt(pp.howTitle, { platform: active?.label ?? '' })} narrow>
        <div className="mx-auto max-w-2xl space-y-5">
          {config.about.map((p) => (
            <p key={p} className="text-[16px] leading-[1.75] text-ink-dim">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section eyebrow={pp.contentEyebrow} title={pp.contentTitle}>
        <CardGrid maxCols={3} count={config.supportedContentTypes.length}>
          {config.supportedContentTypes.map((c) => (
            <div key={c.label} className="card scroll-reveal h-full p-6">
              <p className="text-[16px] font-semibold text-ink">{c.label}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{c.description}</p>
            </div>
          ))}
        </CardGrid>
      </Section>

      <Section eyebrow={pp.formatsEyebrow} title={pp.formatsTitle}>
        <CardGrid maxCols={2} count={config.formats.length}>
          {config.formats.map((f) => (
            <div key={f} className="card scroll-reveal h-full p-6 text-[14px] leading-relaxed text-ink-dim">
              {f}
            </div>
          ))}
        </CardGrid>
      </Section>

      {config.faqs.length > 0 && (
        <Section eyebrow={pp.faqEyebrow} title={pp.faqTitle} narrow>
          <Accordion items={config.faqs} />
        </Section>
      )}

      {config.related.length > 0 && (
        <Section eyebrow={pp.otherEyebrow} title={pp.otherTitle}>
          <div className="flex flex-wrap justify-center gap-2">
            {config.related.map((slug) => {
              const page = getPlatformPage(slug, locale);
              if (!page) return null;
              return (
                <Link
                  key={slug}
                  href={localePath(locale, `/${slug}`)}
                  className="press rounded-full bg-base-surface px-5 py-2.5 text-[14px] text-ink-dim transition-colors hover:bg-base-raised hover:text-ink"
                >
                  {page.h1}
                </Link>
              );
            })}
          </div>
        </Section>
      )}
    </div>
  );
}

/**
 * Centers cards in rows instead of stretching them: one card stays a readable
 * width, and a short last row sits in the middle rather than hugging the left.
 */
function CardGrid({ count, maxCols, children }: { count: number; maxCols: 2 | 3; children: React.ReactNode }) {
  const cols = Math.min(count, maxCols);
  const basis =
    cols === 1
      ? 'sm:max-w-xl'
      : cols === 2
        ? 'sm:w-[calc(50%-0.5rem)]'
        : 'sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]';
  return (
    <div className="flex flex-wrap justify-center gap-4 [&>*]:w-full">
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div key={i} className={`w-full ${basis}`}>
              {child}
            </div>
          ))
        : <div className={`w-full ${basis}`}>{children}</div>}
    </div>
  );
}
