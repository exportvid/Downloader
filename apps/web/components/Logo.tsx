import Link from 'next/link';

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="50" cy="50" r="46" fill="#ff5a3c" />
      <path d="M50 18V24M50 32V42M50 50V62M35 52L50 67L65 52" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="ExportVid home">
      <LogoMark />
      <span className="font-display text-[16px] font-semibold tracking-tight text-ink">
        Export<span className="text-accent">Vid</span>
      </span>
    </Link>
  );
}
