import Link from 'next/link';
import { Logo } from './Logo';

const PLATFORM_LINKS = [
  { href: '/tiktok-video-downloader', label: 'TikTok Downloader' },
  { href: '/instagram-video-downloader', label: 'Instagram Downloader' },
  { href: '/instagram-reels-downloader', label: 'Instagram Reels' },
  { href: '/facebook-video-downloader', label: 'Facebook Downloader' },
  { href: '/facebook-reels-downloader', label: 'Facebook Reels' },
  { href: '/x-video-downloader', label: 'X (Twitter) Downloader' },
  { href: '/reddit-video-downloader', label: 'Reddit Downloader' },
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
      <div className="container-wide grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <Logo />
          <p className="max-w-[26ch] text-sm leading-relaxed text-ink-faint">
            A fast, no-nonsense downloader for public social media content.
          </p>
        </div>
        <FooterColumn title="Downloaders" links={PLATFORM_LINKS} />
        <FooterColumn title="Company" links={COMPANY_LINKS} />
        <FooterColumn title="Legal" links={LEGAL_LINKS} />
      </div>
      <div className="border-t border-line py-6">
        <p className="container-wide text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} ExportVid. Not affiliated with TikTok, Instagram, Facebook, X, or Reddit. Users are
          responsible for having the rights to any content they download.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-ink-faint">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-ink-dim transition-colors hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
