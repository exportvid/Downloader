import { PageHeader } from './PageHeader';

export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="container-tool py-14 sm:py-20">
      <PageHeader eyebrow="Legal" title={title} intro={`Last updated ${updated}`} />
      <div
        className="card mt-10 max-w-none p-6 text-[14px] leading-relaxed text-ink-dim sm:p-10
          [&>h2]:mb-3 [&>h2]:mt-9 [&>h2]:text-[17px] [&>h2]:font-semibold [&>h2]:text-ink [&>h2:first-child]:mt-0
          [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-5 [&>ul>li]:marker:text-accent
          [&_strong]:font-semibold [&_strong]:text-ink [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#ffab5c]"
      >
        {children}
      </div>
    </div>
  );
}

/** Plain-language recap shown above the full text so normal readers get the point first. */
export function LegalSummary({ title = 'In short', children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 rounded-2xl bg-base p-5 sm:p-6">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{title}</p>
      <ul className="list-disc space-y-2 pl-5 marker:text-accent">{children}</ul>
    </div>
  );
}
