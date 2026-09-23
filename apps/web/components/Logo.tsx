import Link from 'next/link';

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="8" y="8" width="84" height="84" rx="26" fill="#ff5a3c" />
      <rect x="45" y="22" width="10" height="32" rx="5" fill="#fff" />
      <path d="M29 46L71 46L50 70Z" fill="#fff" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
      <path d="M30 79H70" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
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
