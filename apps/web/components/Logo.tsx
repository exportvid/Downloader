import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-accent-contrast">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1.5V10.5M8 10.5L4.5 7M8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.5 13H13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
        Export<span className="text-accent">Vid</span>
      </span>
    </Link>
  );
}
