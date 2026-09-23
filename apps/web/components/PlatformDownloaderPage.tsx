import Link from 'next/link';
import type { PlatformPageConfig } from '@/lib/platforms';
import { platformPages } from '@/lib/platforms';
import { DownloadHero } from './DownloadHero';
import { ALL_PLATFORMS } from './PlatformMark';
import { Accordion, Section } from './Section';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

export function PlatformDownloaderPage({ config }: { config: PlatformPageConfig }) {
  const active = ALL_PLATFORMS.find((p) => p.href === `/${config.slug}`);

  return (
    <div className="pb-16">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: config.h1, path: `/${config.slug}` }])} />
      {config.faqs.length > 0 && <JsonLd data={faqJsonLd(config.faqs)} />}

      <DownloadHero title={config.h1} intro={config.intro} breadcrumb={config.h1} activeId={active?.id} />

      <Section eyebrow="How it works" title={`Downloading from ${active?.label ?? 'any platform'}`} narrow>
        <div className="space-y-4 text-center">
          {config.about.map((p) => (
            <p key={p} className="text-[15px] leading-relaxed text-ink-dim">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Content types" title="What you can download">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.supportedContentTypes.map((c) => (
            <div key={c.label} className="card scroll-reveal p-6">
              <p className="text-[15px] font-semibold text-ink">{c.label}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Formats" title="Available formats">
        <div className="grid gap-4 sm:grid-cols-2">
          {config.formats.map((f) => (
            <div key={f} className="card scroll-reveal p-6 text-[14px] leading-relaxed text-ink-dim">
              {f}
            </div>
          ))}
        </div>
      </Section>

      {config.faqs.length > 0 && (
        <Section eyebrow="FAQ" title="Common questions" narrow>
          <Accordion items={config.faqs} />
        </Section>
      )}

      {config.related.length > 0 && (
        <Section eyebrow="More downloaders" title="Related downloaders">
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
