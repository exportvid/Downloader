export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="container-tool py-16 sm:py-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-ink-faint">Last updated: {updated}</p>
      <div
        className="prose-legal mt-10 max-w-none text-sm leading-relaxed text-ink-dim
          [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:text-base [&>h2]:font-semibold [&>h2]:text-ink
          [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-5
          [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2"
      >
        {children}
      </div>
    </div>
  );
}
