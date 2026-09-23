import type { ReactNode } from 'react';

/** Shared page section: centered heading, consistent rhythm, scroll-in animation. */
export function Section({
  eyebrow,
  title,
  intro,
  children,
  narrow,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  narrow?: boolean;
}) {
  return (
    <section className="container-wide py-12 sm:py-20">
      <div className="scroll-reveal mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 font-[family-name:var(--font-studio-display)] text-4xl tracking-wide text-ink sm:text-5xl">{title}</h2>
        {intro && <p className="mt-3 text-[15px] leading-relaxed text-ink-dim">{intro}</p>}
      </div>
      <div className={`mx-auto mt-10 sm:mt-12 ${narrow ? 'max-w-3xl' : ''}`}>{children}</div>
    </section>
  );
}

/** Accordion built on <details>: works without JavaScript and is keyboard accessible. */
export function Accordion({ items, openFirst = true }: { items: { q: string; a: string }[]; openFirst?: boolean }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details key={f.q} open={openFirst && i === 0} className="faq card scroll-reveal group px-5 py-1 transition-colors open:bg-base-raised">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-[15px] font-semibold text-ink">{f.q}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-ink-faint transition-transform duration-300 group-open:rotate-180 group-open:text-accent"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <p className="faq-body pb-4 pr-8 text-[14px] leading-relaxed text-ink-dim">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
