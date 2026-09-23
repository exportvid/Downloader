'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from './I18nProvider';

type Preference = 'system' | 'light' | 'dark';

const OPTIONS: { value: Preference; icon: React.ReactNode }[] = [
  {
    value: 'system',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    value: 'light',
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
      </>
    ),
  },
  { value: 'dark', icon: <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" /> },
];

const DARK_QUERY = '(prefers-color-scheme: dark)';

function readPreference(): Preference {
  try {
    const v = localStorage.getItem('theme');
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system';
  }
}

function apply(pref: Preference) {
  const dark = pref === 'system' ? window.matchMedia(DARK_QUERY).matches : pref === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}

export function ThemeToggle() {
  const { t } = useI18n();
  const [pref, setPref] = useState<Preference>('system');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setPref(readPreference()), []);

  // In System mode, follow the device when its setting changes while the site is open.
  useEffect(() => {
    if (pref !== 'system') return;
    const mq = window.matchMedia(DARK_QUERY);
    const onChange = () => apply('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [pref]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (next: Preference) => {
    setPref(next);
    apply(next);
    setOpen(false);
    try {
      if (next === 'system') localStorage.removeItem('theme');
      else localStorage.setItem('theme', next);
    } catch {
      /* storage blocked: the choice just won't persist */
    }
  };

  const current = OPTIONS.find((o) => o.value === pref)!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={`${t.theme.label}: ${t.theme[current.value]}`}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`press flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors hover:bg-hl/8 hover:text-ink ${
          open ? 'bg-hl/8 text-ink' : 'text-ink-dim'
        }`}
      >
        <Icon>{current.icon}</Icon>
      </button>

      {open && (
        <div role="menu" className="reveal absolute end-0 top-full z-50 mt-3 w-40 rounded-2xl bg-base-raised p-1.5 shadow-[0_30px_60px_-20px_rgb(var(--shadow)/var(--shadow-a))]">
          {OPTIONS.map((o) => (
            <button
              key={o.value}
              type="button"
              role="menuitemradio"
              aria-checked={pref === o.value}
              onClick={() => choose(o.value)}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors ${
                pref === o.value ? 'bg-hl/8 text-ink' : 'text-ink-dim hover:bg-hl/5 hover:text-ink'
              }`}
            >
              <Icon>{o.icon}</Icon>
              {t.theme[o.value]}
              {pref === o.value && <span className="ms-auto h-1.5 w-1.5 rounded-full bg-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
