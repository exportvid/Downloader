import Link from 'next/link';
import { Logo } from './Logo';

const NAV_LINKS = [
  { href: '/supported-sites', label: 'Supported sites' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/80 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink-dim transition-colors hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
