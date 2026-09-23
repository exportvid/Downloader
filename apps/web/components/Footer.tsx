import Link from 'next/link';
import { Logo } from './Logo';
import { ALL_PLATFORMS } from './PlatformMark';

const PLATFORM_LINKS = ALL_PLATFORMS.map((p) => ({ href: p.href, label: p.label }));
const EXTRA_LINKS = [
  { href: '/instagram-reels-downloader', label: 'Instagram Reels' },
  { href: '/facebook-reels-downloader', label: 'Facebook Reels' },
];

const COMPANY_LINKS = [
  { href: '/supported-sites', label: 'Supported sites' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/copyright', label: 'Copyright / DMCA' },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-wide grid gap-10 py-12 sm:grid-cols-2 sm:py-16 md:grid-cols-[1fr_2fr_1fr_1fr]">
        <div className="space-y-4 md:col-span-1">
          <Logo />
          <p className="max-w-[30ch] text-sm leading-relaxed text-ink-faint">
            A free video and photo downloader for social media.
          </p>
        </div>
        <FooterColumn title="Downloaders" links={[...PLATFORM_LINKS, ...EXTRA_LINKS]} columns />
        <FooterColumn title="Company" links={COMPANY_LINKS} />
        <FooterColumn title="Legal" links={LEGAL_LINKS} />
      </div>
      <div className="border-t border-line py-6">
        <p className="container-wide text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} ExportVid. Not affiliated with any supported platform. You are responsible for having
          the rights to any content you download.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, columns }: { title: string; links: { href: string; label: string }[]; columns?: boolean }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{title}</h3>
      <ul className={columns ? 'grid grid-cols-2 gap-x-6 gap-y-3' : 'space-y-3'}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="inline-block text-[14px] text-ink-dim transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
