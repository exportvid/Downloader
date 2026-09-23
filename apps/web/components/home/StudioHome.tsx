import Link from 'next/link';
import { DownloadHero } from '@/components/DownloadHero';
import { ALL_PLATFORMS, PLATFORM_COLORS, PlatformMark } from '@/components/PlatformMark';
import { Accordion, Section } from '@/components/Section';

const STEPS = [
  { n: '1', title: 'Paste a link', body: 'Copy the link to a video or photo and paste it in the box above.' },
  { n: '2', title: 'Choose a quality', body: 'ExportVid checks the link and lists every quality and format available.' },
  { n: '3', title: 'Download', body: 'Save the file to your phone or computer.' },
];

const FAQS = [
  { q: 'Is ExportVid free?', a: 'Yes. ExportVid is free to use. There are no fees or subscriptions.' },
  {
    q: 'How do I download a video from social media?',
    a: 'Copy the link to the video, paste it into the box at the top of the page, and select Download. Choose a quality from the list, then save the file to your device.',
  },
  { q: 'Which sites can I download from?', a: `${ALL_PLATFORMS.map((p) => p.label).join(', ')}.` },
  {
    q: 'Can I download videos without a watermark?',
    a: 'Yes, when the platform offers a clean file. ExportVid picks that version automatically. TikTok is one example. If a video only exists with a watermark, ExportVid can’t remove it.',
  },
  {
    q: 'Does ExportVid lower the video quality?',
    a: 'No. You get the quality the platform provides, and the list shows every option. When video and audio come as separate files, ExportVid joins them without re-encoding.',
  },
  { q: 'Can I download from private accounts?', a: 'No. ExportVid only works with posts anyone can view. It never tries to open private or login-protected content.' },
];

export function StudioHome() {
  return (
    <div className="pb-8">
      <DownloadHero
        badge="Free video downloader"
        title="Download videos and photos"
        intro="Paste a link from YouTube, Facebook, Instagram, TikTok, and more. Get the video or photo in the best quality available, with no watermark."
      />
      <HowItWorks />
      <WhyExportVid />
      <SupportedPlatforms />
      <Section eyebrow="FAQ" title="Frequently asked questions" narrow>
        <Accordion items={FAQS} />
        <p className="mt-6 text-center text-sm text-ink-faint">
          You can find more answers in the{' '}
          <Link href="/faq" className="text-accent transition-colors hover:text-[#ffab5c]">
            full FAQ
          </Link>
          .
        </p>
      </Section>
      <ClosingCta />
    </div>
  );
}

function HowItWorks() {
  return (
    <Section eyebrow="How it works" title="How to download in three steps">
      <ol className="grid gap-4 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.n} className="card scroll-reveal relative overflow-hidden p-6 sm:p-7" style={{ animationDelay: `${i * 60}ms` }}>
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-4 bg-gradient-to-b from-accent/30 to-transparent bg-clip-text font-[family-name:var(--font-studio-display)] text-[110px] leading-none text-transparent"
            >
              {s.n}
            </span>
            <h3 className="relative mt-10 text-[17px] font-semibold text-ink">{s.title}</h3>
            <p className="relative mt-2 text-[14px] leading-relaxed text-ink-dim">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const icon = {
  drop: 'M12 3s6 6.2 6 10.5a6 6 0 01-12 0C6 9.2 12 3 12 3z',
  gauge: 'M4 16a8 8 0 1116 0M12 16l4-5',
  copy: 'M9 9h10v10H9zM5 15V5h10',
  lock: 'M6 11h12v9H6zM9 11V8a3 3 0 016 0v3',
  device: 'M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2',
};

function Icon({ d }: { d: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={d} />
      </svg>
    </span>
  );
}

function WhyExportVid() {
  const small = [
    { d: icon.gauge, title: 'Honest quality labels', body: 'Every quality label matches the real file. No fake 4K.' },
    { d: icon.copy, title: 'Original quality', body: 'When video and audio come separately, we join them without re-encoding.' },
    { d: icon.lock, title: 'Nothing stored', body: 'We don’t keep your downloads. Temporary files are deleted after about 15 minutes.' },
    { d: icon.device, title: 'Works in any browser', body: 'Use it on your phone or computer. Nothing to install.' },
  ];
  return (
    <Section eyebrow="Why ExportVid" title="Why use ExportVid">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card scroll-reveal relative overflow-hidden bg-gradient-to-br from-accent/[0.16] via-base-surface to-base-surface p-7 sm:p-8 lg:col-span-2">
          <Icon d={icon.drop} />
          <h3 className="mt-6 font-[family-name:var(--font-studio-display)] text-3xl tracking-wide text-ink sm:text-4xl">No watermark</h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-dim">
            When a platform offers a clean file, ExportVid gives you that one. TikTok’s unmarked video is one example. If a video only exists with a
            watermark, we can’t remove it.
          </p>
        </div>
        <Tile {...small[0]} />
        {small.slice(1).map((t) => (
          <Tile key={t.title} {...t} />
        ))}
      </div>
    </Section>
  );
}

function Tile({ d, title, body }: { d: string; title: string; body: string }) {
  return (
    <div className="card scroll-reveal lift p-6 hover:bg-base-raised">
      <Icon d={d} />
      <h3 className="mt-5 text-[16px] font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-dim">{body}</p>
    </div>
  );
}

function SupportedPlatforms() {
  return (
    <Section eyebrow="Platforms" title="Video downloaders for every platform" intro="Each one works the same way. Paste a link, choose a quality, and download.">
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {ALL_PLATFORMS.map((p) => {
          const c = PLATFORM_COLORS[p.id];
          return (
            <li key={p.id} className="scroll-reveal">
              <Link href={p.href} className="card lift group flex items-center gap-3 p-3 pr-4 hover:bg-base-raised">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${c.dark ? 'text-[#111]' : 'text-white'}`}
                  style={{ backgroundColor: c.bg }}
                >
                  <PlatformMark id={p.id} className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 flex-1 truncate text-[14px] font-semibold text-ink">{p.label}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 -translate-x-1 text-ink-faint opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function ClosingCta() {
  return (
    <section className="container-wide py-12 sm:py-16">
      <div className="scroll-reveal relative overflow-hidden rounded-[28px] bg-brand-gradient px-6 py-14 text-center sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.22),transparent_70%)]" aria-hidden />
        <h2 className="relative font-[family-name:var(--font-studio-display)] text-5xl tracking-wide text-white sm:text-6xl">Got a link?</h2>
        <p className="relative mx-auto mt-3 max-w-md text-[15px] text-white/85">Paste it above and download your video or photo.</p>
        <a
          href="#download"
          className="press relative mt-8 inline-flex h-14 items-center gap-2.5 rounded-2xl bg-white px-8 text-[16px] font-bold text-[#c81f2e] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 19V5m0 0l-5 5m5-5l5 5" />
          </svg>
          Paste a link
        </a>
      </div>
    </section>
  );
}
