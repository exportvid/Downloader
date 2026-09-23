'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_COOKIE, LOCALE_META, isLocalizedPath, localePath, splitLocale, type Locale } from '@/lib/i18n/config';
import { useI18n } from './I18nProvider';

function rememberLanguage(locale: Locale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  } catch {
    /* cookies blocked: the URL still carries the language */
  }
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

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      ref.current?.querySelector('button')?.focus();
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={`${t.language.label}: ${LOCALE_META[locale].name}`}
        aria-expanded={open}
        aria-haspopup="true"
        className={`press flex h-9 items-center gap-1.5 rounded-xl px-2.5 text-[13px] font-medium transition-colors hover:bg-hl/8 hover:text-ink ${
          open ? 'bg-hl/8 text-ink' : 'text-ink-dim'
        }`}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9S9.4 5.7 12 3z" />
        </svg>
        <span className="uppercase">{locale}</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.language.menuLabel}
          className="dropdown-in absolute end-0 top-full z-50 mt-3 w-[min(19rem,calc(100vw-1.5rem))] ltr:origin-top-right rtl:origin-top-left rounded-2xl bg-base-raised p-2 shadow-[0_30px_60px_-20px_rgb(var(--shadow)/var(--shadow-a))]"
        >
          <p className="px-3 pb-2 pt-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{t.language.menuLabel}</p>
          <ul className="grid grid-cols-2 gap-0.5">
            {LOCALES.map((l) => {
              const active = l === locale;
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
                    className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-[14px] font-medium transition-colors ${
                      active ? 'bg-hl/8 text-ink' : 'text-ink-dim hover:bg-hl/6 hover:text-ink'
                    }`}
                  >
                    <span className="truncate">{LOCALE_META[l].name}</span>
                    {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />}
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
