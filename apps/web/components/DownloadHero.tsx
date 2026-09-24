'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { PLATFORM_LABELS } from '@exportvid/shared';
import { useDownloader } from '@/lib/useDownloader';
import { formatBytes, formatDuration, contentTypeLabel, assetLabel } from '@/lib/format';
import { localePath } from '@/lib/i18n/config';
import type { ClientMessages } from '@/lib/i18n/messages';
import { useI18n } from './I18nProvider';
import { DownloadButton } from '@/components/DownloadButton';
import { ALL_PLATFORMS, PlatformMark, type PlatformId } from '@/components/PlatformMark';

/**
 * The ExportVid download hero. One focal object: a large paste console whose
 * gradient edge drifts slowly at rest and speeds up while a link is being
 * read. Results open inside the same card. The homepage and every platform
 * page render this component.
 */
export function DownloadHero({
  badge,
  title,
  intro,
  breadcrumb,
  activeId,
  mark,
  note,
}: {
  badge?: string;
  title: string;
  intro: string;
  breadcrumb?: string;
  activeId?: PlatformId;
  /** Shown above the headline instead of the badge, such as a platform's icon tile. */
  mark?: ReactNode;
  /** Small print under the platform links. */
  note?: string;
}) {
  const { locale, t } = useI18n();
  const { url, setUrl, status, error, result, detected, inputRef, turnstileRef, turnstileVisible, handleSubmit, handlePaste } = useDownloader();
  const [tick, setTick] = useState(0);
  const loading = status === 'loading';

  useEffect(() => {
    if (!loading) return;
    const id = setInterval(() => setTick((n) => (n + 1) % t.hero.statusLines.length), 600);
    return () => clearInterval(id);
  }, [loading, t.hero.statusLines.length]);

  return (
    <section id="download" className="container-wide relative scroll-mt-24 overflow-x-clip pb-4 pt-10 text-center sm:pt-16">
      {breadcrumb && (
        <nav aria-label={t.hero.breadcrumbAria} className="mb-6 flex justify-center gap-2 text-xs text-ink-faint">
          <Link href={localePath(locale, '/')} className="transition-colors hover:text-ink-dim">
            {t.hero.home}
          </Link>
          <span>/</span>
          <span className="text-ink-dim">{breadcrumb}</span>
        </nav>
      )}

      {mark && <div className="mb-6 flex justify-center">{mark}</div>}

      {badge && !mark && (
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-base-surface px-3.5 py-1.5 text-xs font-medium text-ink-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {badge}
        </div>
      )}

      {/* Long translated headlines drop a size so they stay within three lines on a phone. The padding keeps accents
          (É, Ü) and descenders (у, g in Russian and Vietnamese headings) inside the clipped gradient. */}
      <h1
        className={`mx-auto max-w-4xl bg-gradient-to-r from-head-from via-head-via to-head-to bg-clip-text pb-[0.12em] pt-[0.12em] font-[family-name:var(--font-studio-display)] leading-[0.92] tracking-wide text-transparent text-balance ${
          title.length > 32 ? 'text-5xl sm:text-7xl' : 'text-6xl sm:text-8xl'
        }`}
      >
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft text-balance sm:text-base">{intro}</p>

      <div className="relative mx-auto mt-10 max-w-3xl text-start">
        <div
          className="pointer-events-none absolute -inset-x-10 -inset-y-10 -z-10 opacity-70 blur-3xl"
          style={{ background: 'var(--halo)' }}
          aria-hidden
        />

        <div className="group relative overflow-hidden rounded-[28px] p-[1.5px]">
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 h-[220%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-60 transition-opacity duration-300 group-focus-within:opacity-100 ${
              loading ? 'animate-[spin_2.5s_linear_infinite]' : 'animate-[spin_9s_linear_infinite]'
            }`}
            style={{ background: 'var(--ring)' }}
            aria-hidden
          />

          <div className="relative rounded-[26.5px] bg-base-surface p-3 sm:p-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-brand bg-base px-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink-faint" aria-hidden>
                    <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="url"
                    inputMode="url"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={t.hero.placeholder}
                    aria-label={t.hero.inputAria}
                    className="h-16 min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink-faint"
                  />
                  {detected && (
                    <span className="hidden shrink-0 rounded-lg bg-accent/12 px-2.5 py-1 text-xs font-medium text-accent sm:inline-flex">
                      {PLATFORM_LABELS[detected.platform]}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-hl/6 px-3 text-[13px] font-medium text-ink-dim transition-colors hover:bg-hl/10 hover:text-ink"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="9" y="2.5" width="6" height="3" rx="1" />
                      <rect x="6" y="4.5" width="12" height="16" rx="2" />
                    </svg>
                    {t.hero.paste}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="press group/dl flex h-16 shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-brand bg-brand-gradient px-8 text-[16px] font-bold text-on-brand shadow-glow transition-[filter,opacity] hover:brightness-110 disabled:cursor-wait disabled:opacity-70 sm:min-w-[9.5rem]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/dl:translate-y-0.5">
                    <path d="M12 4v10m0 0l-3.5-3.5M12 14l3.5-3.5M5.5 19h13" />
                  </svg>
                  {loading ? t.hero.checking : t.hero.download}
                </button>
              </div>
            </form>

            {/* Empty unless Cloudflare wants the visitor to click the verification checkbox. */}
            <div ref={turnstileRef} className={turnstileVisible ? 'mt-3 flex justify-center' : undefined} />

            {status !== 'idle' && (
              <div className="reveal px-1 pb-1 pt-4" aria-live="polite">
                {loading && <p className="px-2 py-3 text-[13px] text-ink-faint">{t.hero.statusLines[tick]}</p>}
                {status === 'error' && error && (
                  <p role="alert" className="px-2 py-3 text-[13px] text-danger">
                    {error}
                  </p>
                )}
                {status === 'success' && result && <ResultList result={result} t={t} />}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2">
        {ALL_PLATFORMS.map((p) => (
          <Link
            key={p.id}
            href={localePath(locale, p.href)}
            aria-current={p.id === activeId ? 'page' : undefined}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
              p.id === activeId ? 'bg-brand-gradient text-on-brand' : 'bg-base-surface text-ink-dim hover:bg-base-raised hover:text-ink'
            }`}
          >
            <PlatformMark id={p.id} className="h-3.5 w-3.5" />
            {p.label}
          </Link>
        ))}
      </div>
      {note && <p className="mx-auto mt-5 max-w-xl text-[12px] leading-relaxed text-ink-faint text-balance">{note}</p>}
    </section>
  );
}

function ResultList({ result, t }: { result: NonNullable<ReturnType<typeof useDownloader>['result']>; t: ClientMessages }) {
  const duration = formatDuration(result.duration);
  return (
    <div>
      <div className="flex items-center gap-3 px-1 pb-3">
        {result.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={result.thumbnail} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" loading="lazy" />
        )}
        <div className="min-w-0">
          <p className="text-xs font-medium text-accent">
            {contentTypeLabel(result.contentType, t)}
            {duration ? ` · ${duration}` : ''}
          </p>
          {result.title && <p className="mt-0.5 line-clamp-1 text-sm font-medium text-ink">{result.title}</p>}
        </div>
      </div>
      <ul className="space-y-2">
        {result.assets.map((asset, i) => (
          <li
            key={asset.id}
            className="stagger-item flex items-center justify-between gap-3 rounded-2xl bg-base px-4 py-3"
            style={{ animationDelay: `${Math.min(i, 6) * 45}ms` }}
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{assetLabel(asset.label, t)}</p>
              <p className="text-xs text-ink-faint">
                {[asset.width && asset.height ? `${asset.width}×${asset.height}` : null, asset.hasAudio ? t.hero.videoAudio : t.hero.videoOnly, formatBytes(asset.filesize)]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            </div>
            <DownloadButton requestId={result.requestId} assetId={asset.id} label={t.hero.download} />
          </li>
        ))}
      </ul>
    </div>
  );
}
