import Link from 'next/link';
import type { PlatformPageConfig } from '@/lib/platforms';
import { platformPages } from '@/lib/platforms';
import { Downloader } from './Downloader';
import { JsonLd } from './JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

export function PlatformDownloaderPage({ config }: { config: PlatformPageConfig }) {
  return (
    <div className="pb-24">
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: config.h1, path: `/${config.slug}` }])} />
      {config.faqs.length > 0 && <JsonLd data={faqJsonLd(config.faqs)} />}

      <div className="container-tool pt-14 sm:pt-20">
        <Breadcrumbs h1={config.h1} />
        <h1 className="mb-3 text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{config.h1}</h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-ink-dim">{config.intro}</p>
        <Downloader />
      </div>

      <div className="container-tool mt-20 space-y-16">
        <section>
          <h2 className="mb-4 text-lg font-semibold text-ink">How it works</h2>
          <div className="space-y-4">
            {config.about.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-ink-dim">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-ink">Supported content types</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {config.supportedContentTypes.map((c) => (
              <div key={c.label} className="card p-4">
                <p className="text-sm font-medium text-ink">{c.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-faint">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-ink">Available formats</h2>
          <ul className="space-y-2">
            {config.formats.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-dim">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </section>

        {config.faqs.length > 0 && (
          <section>
            <h2 className="mb-4 text-lg font-semibold text-ink">Frequently asked questions</h2>
            <div className="divide-y divide-line rounded-xl2 border border-line">
              {config.faqs.map((f) => (
                <div key={f.q} className="p-5">
                  <p className="text-sm font-medium text-ink">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-faint">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {config.related.length > 0 && (
          <section>
            <h2 className="mb-4 text-lg font-semibold text-ink">Related downloaders</h2>
            <div className="flex flex-wrap gap-2">
              {config.related.map((slug) => {
                const page = platformPages[slug];
                if (!page) return null;
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-ink-dim transition-colors hover:border-accent hover:text-ink"
                  >
                    {page.h1}
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Breadcrumbs({ h1 }: { h1: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex justify-center gap-2 text-xs text-ink-faint">
      <Link href="/" className="hover:text-ink-dim">
        Home
      </Link>
      <span>/</span>
      <span className="text-ink-dim">{h1}</span>
    </nav>
  );
}
