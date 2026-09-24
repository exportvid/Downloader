import Link from 'next/link';
import type { PlatformPageConfig } from '@/lib/platforms';
import { getPlatformPage } from '@/lib/platforms';
import { fmt, localePath, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import { DownloadHero } from './DownloadHero';
import { ALL_PLATFORMS, PLATFORM_BRAND, PLATFORM_DOMAINS, PlatformMark, PlatformTile, type PlatformEntry } from './PlatformMark';
import { Accordion, Section } from './Section';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

export function PlatformDownloaderPage({ config, locale }: { config: PlatformPageConfig; locale: Locale }) {
  const m = getMessages(locale);
  const pp = m.site.platformPage;
  const active = platformForSlug(config.slug);

  const platformName = active?.label ?? '';

  return (
    // data-platform switches the whole page to that platform's colors (see "Platform themes" in globals.css).
    <div data-platform={active?.id} className="relative isolate pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]" style={{ background: 'var(--backdrop)' }} aria-hidden />
      <JsonLd data={breadcrumbJsonLd([{ name: m.client.hero.home, path: '/' }, { name: config.h1, path: `/${config.slug}` }], locale)} />
      {config.faqs.length > 0 && <JsonLd data={faqJsonLd(config.faqs, locale)} />}

      <DownloadHero
        title={config.h1}
        intro={config.intro}
        breadcrumb={config.h1}
        activeId={active?.id}
        mark={
          active && (
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-on-brand shadow-glow" aria-hidden>
              <PlatformMark id={active.id} className="h-7 w-7" />
            </span>
          )
        }
        note={fmt(pp.independent, { platform: platformName })}
        promise={m.site.home.heroBadge}
      />

      <Section eyebrow={pp.howEyebrow} title={fmt(pp.howTitle, { platform: platformName })} narrow>
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
              <span className="mb-4 block h-1 w-8 rounded-full bg-brand-gradient" aria-hidden />
              <p className="text-[16px] font-semibold text-ink">{c.label}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{c.description}</p>
            </div>
          ))}
        </CardGrid>
      </Section>

      <Section eyebrow={pp.formatsEyebrow} title={pp.formatsTitle}>
        <CardGrid maxCols={2} count={config.formats.length}>
          {config.formats.map((f) => (
            <div key={f} className="card scroll-reveal flex h-full gap-3 p-6 text-[14px] leading-relaxed text-ink-dim">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              <span>{f}</span>
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
          {/* Four links sit two by two; three sit in one row. */}
          <ul className={`mx-auto grid gap-2.5 sm:grid-cols-2 ${config.related.length === 4 ? 'max-w-3xl' : 'lg:grid-cols-3'}`}>
            {config.related.map((slug) => {
              const page = getPlatformPage(slug, locale);
              const platform = platformForSlug(slug);
              if (!page || !platform) return null;
              return (
                <li key={slug}>
                  <Link
                    href={localePath(locale, `/${slug}`)}
                    className="platform-card card group flex h-full items-center gap-3 rounded-xl p-3 pe-3.5"
                    style={{ ['--glow' as string]: PLATFORM_BRAND[platform.id].glow }}
                  >
                    <PlatformTile id={platform.id} className="platform-tile h-9 w-9 rounded-[10px]" markClassName="h-[18px] w-[18px]" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14px] font-semibold leading-tight text-ink">{page.h1}</span>
                      <span dir="ltr" className="mt-0.5 block truncate text-start text-[11.5px] text-ink-faint">
                        {PLATFORM_DOMAINS[platform.id]}
                      </span>
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-ink-faint transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-ink rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                      aria-hidden
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      )}
    </div>
  );
}

/** The platform a page belongs to. Reels pages have no entry of their own, so they fall back to the parent platform (instagram-*, facebook-*). */
function platformForSlug(slug: string): PlatformEntry | undefined {
  return ALL_PLATFORMS.find((p) => p.href === `/${slug}`) ?? ALL_PLATFORMS.find((p) => p.href.startsWith(`/${slug.split('-')[0]}-`));
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
