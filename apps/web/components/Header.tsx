'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { ALL_PLATFORMS, PlatformMark } from './PlatformMark';

const MAIN_PLATFORMS = ALL_PLATFORMS.slice(0, 5);
const MORE_PLATFORMS = ALL_PLATFORMS.slice(5);

const SECONDARY_LINKS = [
  { href: '/supported-sites', label: 'All supported sites' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!moreRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const linkClass = (href: string) =>
    `flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors ${
      pathname === href ? 'bg-white/8 text-ink' : 'text-ink-dim hover:bg-white/5 hover:text-ink'
    }`;
  const moreActive = MORE_PLATFORMS.some((p) => p.href === pathname);

  return (
    <header className="sticky top-0 z-40 px-2 pt-2 sm:px-3">
      <div className="rounded-2xl bg-base-surface/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <div className="flex h-14 items-center justify-between gap-4 px-4">
          <Logo />

          <nav aria-label="Supported platforms" className="hidden items-center gap-1 lg:flex">
            {MAIN_PLATFORMS.map((p) => (
              <Link key={p.id} href={p.href} aria-current={pathname === p.href ? 'page' : undefined} className={linkClass(p.href)}>
                <PlatformMark id={p.id} className="h-3.5 w-3.5 opacity-80" />
                {p.label}
              </Link>
            ))}

            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors ${
                  open || moreActive ? 'bg-white/8 text-ink' : 'text-ink-dim hover:bg-white/5 hover:text-ink'
                }`}
              >
                More
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {open && (
                <div className="reveal absolute right-0 top-full z-50 mt-3 w-[22rem] rounded-2xl bg-base-raised p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]">
                  <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">More platforms</p>
                  <ul className="grid grid-cols-2 gap-0.5">
                    {MORE_PLATFORMS.map((p) => (
                      <li key={p.id}>
                        <Link href={p.href} aria-current={pathname === p.href ? 'page' : undefined} className={linkClass(p.href)}>
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-gradient text-white">
                            <PlatformMark id={p.id} className="h-3 w-3" />
                          </span>
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 border-t border-line px-3 pb-2 pt-3 text-[13px]">
                    {SECONDARY_LINKS.map((l) => (
                      <Link key={l.href} href={l.href} className="text-ink-faint transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <Link href="/supported-sites" className="text-[13px] font-medium text-ink-dim transition-colors hover:text-ink lg:hidden">
            All sites
          </Link>
        </div>

        {/* Below lg every platform stays visible in a swipeable strip instead of hiding behind a menu. */}
        <nav
          aria-label="Supported platforms"
          className="scrollbar-none flex gap-1 overflow-x-auto px-3 pb-3 [mask-image:linear-gradient(to_right,black_92%,transparent)] lg:hidden"
        >
          {ALL_PLATFORMS.map((p) => (
            <Link key={p.id} href={p.href} aria-current={pathname === p.href ? 'page' : undefined} className={`${linkClass(p.href)} shrink-0`}>
              <PlatformMark id={p.id} className="h-3.5 w-3.5 opacity-80" />
              {p.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
