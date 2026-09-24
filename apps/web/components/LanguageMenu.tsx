'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_COOKIE, LOCALE_META, isLocalizedPath, localePath, splitLocale, type Locale } from '@/lib/i18n/config';
import { BD, BR, DE, ES, FR, ID, IN, IT, JP, KR, RU, SA, TR, US, VN } from 'country-flag-icons/react/3x2';
import { useI18n } from './I18nProvider';

function rememberLanguage(locale: Locale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    /* cookies blocked: the URL still carries the language */
  }
}

// Each language shows the flag of the country most of its speakers here come from; English uses the US flag.
const FLAGS: Record<Locale, typeof US> = { en: US, es: ES, pt: BR, fr: FR, de: DE, id: ID, ar: SA, ru: RU, hi: IN, ja: JP, bn: BD, vi: VN, tr: TR, it: IT, ko: KR };

function Flag({ locale, className = '' }: { locale: Locale; className?: string }) {
  const Svg = FLAGS[locale];
  return (
    <span className={`inline-flex shrink-0 overflow-hidden rounded-[3px] ring-1 ring-inset ring-hl/15 ${className}`} aria-hidden>
      <Svg className="block h-full w-full" />
    </span>
  );
}

export function LanguageMenu() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Pages without translations (the legal pages) send people to the home page of the language they pick.
  const { path } = splitLocale(pathname);
  const target = isLocalizedPath(path) ? path : '/';

  useEffect(() => setOpen(false), [pathname]);

  // Move focus into the list when it opens, starting on the current language.
  useEffect(() => {
    if (!open) return;
    const active = ref.current?.querySelector<HTMLAnchorElement>('[aria-checked="true"]');
    active?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const items = () => Array.from(ref.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitemradio"]') ?? []);
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        ref.current?.querySelector('button')?.focus();
        return;
      }
      const list = items();
      const i = list.indexOf(document.activeElement as HTMLAnchorElement);
      // The list is a two-column grid, so up and down jump a row and left and right move one language.
      const step: Record<string, number> = { ArrowDown: 2, ArrowUp: -2, ArrowRight: 1, ArrowLeft: -1 };
      if (e.key in step && i >= 0) {
        const dir = document.documentElement.dir === 'rtl' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft') ? -1 : 1;
        const next = list[Math.min(list.length - 1, Math.max(0, i + step[e.key] * dir))];
        next?.focus();
        e.preventDefault();
      } else if (e.key === 'Home') {
        list[0]?.focus();
        e.preventDefault();
      } else if (e.key === 'End') {
        list[list.length - 1]?.focus();
        e.preventDefault();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = LOCALE_META[locale];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={`${t.language.label}: ${current.name}`}
        aria-expanded={open}
        aria-haspopup="true"
        className={`press flex h-9 items-center gap-1.5 rounded-xl px-2.5 text-[13px] font-medium transition-colors hover:bg-hl/8 hover:text-ink ${
          open ? 'bg-hl/8 text-ink' : 'text-ink-dim'
        }`}
      >
        <Flag locale={locale} className="h-3.5 w-[21px]" />
        {/* The full name is easier to recognize than a code, so show it when there is room. */}
        <span className="hidden max-w-[7.5rem] truncate xl:inline">{current.name}</span>
        <span className="uppercase xl:hidden">{locale}</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.language.menuLabel}
          className="dropdown-in absolute end-0 top-full z-50 mt-3 w-[min(21.5rem,calc(100vw-1.5rem))] ltr:origin-top-right rtl:origin-top-left rounded-2xl bg-base-raised p-2 shadow-[0_30px_60px_-20px_rgb(var(--shadow)/var(--shadow-a))]"
        >
          <div className="px-3 pb-2 pt-2.5 text-ink-faint">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">{t.language.menuLabel}</p>
          </div>
          <ul className="grid grid-cols-2 gap-1">
            {LOCALES.map((l) => {
              const active = l === locale;
              const meta = LOCALE_META[l];
              return (
                <li key={l}>
                  <Link
                    href={localePath(l, target)}
                    hrefLang={l}
                    lang={l}
                    prefetch={false}
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => rememberLanguage(l)}
                    className={`group/lang flex items-center gap-2.5 rounded-xl px-3 py-2 transition-colors ${
                      active ? 'bg-accent/12' : 'hover:bg-hl/6'
                    }`}
                  >
                    <Flag locale={l} className="h-4 w-6" />
                    <span className="min-w-0 flex-1">
                      <span className={`block truncate text-[14px] font-semibold leading-tight ${active ? 'text-accent' : 'text-ink'}`}>{meta.name}</span>
                      <span className="mt-0.5 block truncate text-[11px] leading-tight text-ink-faint" lang="en" dir="ltr">
                        {meta.english}
                      </span>
                    </span>
                    {active && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent" aria-hidden>
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
