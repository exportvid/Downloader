import Link from 'next/link';
import { Logo } from './Logo';
import { ALL_PLATFORMS, PlatformMark } from './PlatformMark';
import { DEFAULT_LOCALE, localePath, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

const PLATFORM_LINKS = ALL_PLATFORMS.map((p) => ({ href: p.href, label: p.label, id: p.id }));
const EXTRA_LINKS = [
  { href: '/instagram-reels-downloader', label: 'Instagram Reels' },
  { href: '/facebook-reels-downloader', label: 'Facebook Reels' },
  { href: '/youtube-shorts-downloader', label: 'YouTube Shorts' },
];

const linkClass = 'group/link inline-flex items-center gap-2 text-[14px] text-ink-dim transition-colors hover:text-ink';

/** Floating panel that mirrors the header: same inset, same surface, same radius family. */
export function Footer({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const f = m.site.footer;
  const href = (path: string) => localePath(locale, path);
  const companyLinks = [
    { href: href('/supported-sites'), label: f.supportedSites },
    { href: href('/faq'), label: f.faq },
    { href: href('/contact'), label: f.contact },
  ];
  // Legal pages exist in English only, so they always link to the English URL.
  const legalLinks = [
    { href: '/privacy', label: f.privacy },
    { href: '/terms', label: f.terms },
    { href: '/copyright', label: f.copyright },
  ];
  const englishOnly = locale !== DEFAULT_LOCALE;
  return (
    <footer className="px-2 pb-2 pt-10 sm:px-3 sm:pb-3">
      <div className="rounded-3xl bg-base-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_2.2fr_1fr]">
          <div className="flex flex-col items-start gap-4">
            <Logo href={href('/')} label={m.client.header.logoAria} />
            <p className="max-w-[28ch] text-[14px] leading-relaxed text-ink-faint">{f.tagline}</p>
            <a
              href="#top"
              className="press mt-2 inline-flex h-10 items-center gap-2 rounded-xl bg-hl/6 px-4 text-[13px] font-medium text-ink-dim transition-colors hover:bg-hl/10 hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
              </svg>
              {f.backToTop}
            </a>
          </div>

          <nav aria-label={f.downloaders}>
            <Heading>{f.downloaders}</Heading>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3.5 sm:grid-cols-3">
              {PLATFORM_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={href(l.href)} className={linkClass}>
                    <PlatformMark id={l.id} className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-colors group-hover/link:text-accent" />
                    {l.label}
                  </Link>
                </li>
              ))}
              {EXTRA_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={href(l.href)} className={linkClass}>
                    <span className="h-3.5 w-3.5 shrink-0 text-center text-ink-faint transition-colors group-hover/link:text-accent" aria-hidden>
                      ↳
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid grid-cols-2 gap-10 lg:grid-cols-1 lg:gap-8">
            <FooterList title={f.company} links={companyLinks} />
            <FooterList title={f.legal} links={legalLinks} englishTag={englishOnly ? { text: 'EN', note: f.legalEnglishNote } : undefined} />
          </div>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-6 py-6 text-xs leading-relaxed text-ink-faint sm:px-10 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} ExportVid</p>
          <p className="md:text-end">{f.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{children}</h3>;
}

function FooterList({
  title,
  links,
  englishTag,
}: {
  title: string;
  links: { href: string; label: string }[];
  englishTag?: { text: string; note: string };
}) {
  return (
    <nav aria-label={title}>
      <Heading>{title}</Heading>
      <ul className="space-y-3.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={linkClass} {...(englishTag ? { hrefLang: 'en', title: englishTag.note } : {})}>
              {l.label}
              {englishTag && <span className="rounded bg-hl/8 px-1 py-px text-[10px] font-semibold text-ink-faint">{englishTag.text}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
