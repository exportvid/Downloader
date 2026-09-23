import Link from 'next/link';
import type { PlatformPageConfig } from '@/lib/platforms';
import { platformPages } from '@/lib/platforms';
import { DownloadHero } from './DownloadHero';
import { ALL_PLATFORMS } from './PlatformMark';
import { Accordion, Section } from './Section';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

export function PlatformDownloaderPage({ config }: { config: PlatformPageConfig }) {
  // Reels pages have no card of their own, so fall back to the parent platform (instagram-*, facebook-*).
  const active =
    ALL_PLATFORMS.find((p) => p.href === `/${config.slug}`) ??
    ALL_PLATFORMS.find((p) => p.href.startsWith(`/${config.slug.split('-')[0]}-`));

  return (
    <div className="pb-16">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: config.h1, path: `/${config.slug}` }])} />
      {config.faqs.length > 0 && <JsonLd data={faqJsonLd(config.faqs)} />}

      <DownloadHero title={config.h1} intro={config.intro} breadcrumb={config.h1} activeId={active?.id} />

      <Section eyebrow="How it works" title={active ? `How to download from ${active.label}` : 'How to download a video'} narrow>
        <div className="mx-auto max-w-2xl space-y-5">
          {config.about.map((p) => (
            <p key={p} className="text-[16px] leading-[1.75] text-ink-dim">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Content types" title="What you can download">
        <CardGrid maxCols={3} count={config.supportedContentTypes.length}>
          {config.supportedContentTypes.map((c) => (
            <div key={c.label} className="card scroll-reveal h-full p-6">
              <p className="text-[16px] font-semibold text-ink">{c.label}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{c.description}</p>
            </div>
          ))}
        </CardGrid>
      </Section>

      <Section eyebrow="Formats" title="File formats">
        <CardGrid maxCols={2} count={config.formats.length}>
          {config.formats.map((f) => (
            <div key={f} className="card scroll-reveal h-full p-6 text-[14px] leading-relaxed text-ink-dim">
              {f}
            </div>
          ))}
        </CardGrid>
      </Section>

      {config.faqs.length > 0 && (
        <Section eyebrow="FAQ" title="Frequently asked questions" narrow>
          <Accordion items={config.faqs} />
        </Section>
      )}

      {config.related.length > 0 && (
        <Section eyebrow="More downloaders" title="Other downloaders">
          <div className="flex flex-wrap justify-center gap-2">
            {config.related.map((slug) => {
              const page = platformPages[slug];
              if (!page) return null;
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
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
