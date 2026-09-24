export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      {eyebrow && <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
      <h1 className="mt-3 bg-gradient-to-r from-head-from via-head-via to-head-to bg-clip-text font-[family-name:var(--font-studio-display)] text-5xl tracking-wide text-transparent text-balance sm:text-6xl">
        {title}
      </h1>
      {intro && <p className="mt-4 text-[15px] leading-relaxed text-ink-dim">{intro}</p>}
    </div>
  );
}
