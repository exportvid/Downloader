import Link from 'next/link';
import { DownloadHero } from '@/components/DownloadHero';
import { ALL_PLATFORMS, PLATFORM_COLORS, PlatformMark } from '@/components/PlatformMark';
import { Accordion, Section } from '@/components/Section';
import { fmt, localePath, type Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';

export function StudioHome({ locale }: { locale: Locale }) {
  const h = getMessages(locale).site.home;
  const list = ALL_PLATFORMS.map((p) => p.label).join(', ');
  const faqs = h.faq.map((f) => ({ q: f.q, a: fmt(f.a, { list }) }));

  return (
    <div className="pb-8">
      <DownloadHero badge={h.heroBadge} title={h.heroTitle} intro={h.heroIntro} />
      <HowItWorks h={h} />
      <WhyExportVid h={h} />
      <SupportedPlatforms h={h} locale={locale} />
      <Section eyebrow={h.faqEyebrow} title={h.faqTitle} narrow>
        <Accordion items={faqs} />
        <p className="mt-6 text-center text-sm text-ink-faint">
          <FaqMore template={h.faqMore} linkText={h.faqMoreLink} href={localePath(locale, '/faq')} />
        </p>
      </Section>
      <ClosingCta h={h} />
    </div>
  );
}

type Home = ReturnType<typeof getMessages>['site']['home'];

/** Renders a sentence like "You can find more answers in the {link}." with the link in the right place for the language. */
function FaqMore({ template, linkText, href }: { template: string; linkText: string; href: string }) {
  const [before, after = ''] = template.split('{link}');
  return (
    <>
      {before}
      <Link href={href} className="text-accent transition-colors hover:text-[#ffab5c]">
        {linkText}
      </Link>
      {after}
    </>
  );
}

function HowItWorks({ h }: { h: Home }) {
  return (
    <Section eyebrow={h.howEyebrow} title={h.howTitle}>
      <ol className="grid gap-4 sm:grid-cols-3">
        {h.steps.map((s, i) => (
          <li key={s.title} className="card scroll-reveal relative overflow-hidden p-6 sm:p-7" style={{ animationDelay: `${i * 60}ms` }}>
            <span
              aria-hidden
              className="pointer-events-none absolute -end-2 -top-4 bg-gradient-to-b from-accent/30 to-transparent bg-clip-text font-[family-name:var(--font-studio-display)] text-[110px] leading-none text-transparent"
            >
              {i + 1}
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
const TILE_ICONS = [icon.gauge, icon.copy, icon.lock, icon.device];

function Icon({ d }: { d: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d={d} />
      </svg>
    </span>
  );
}

function WhyExportVid({ h }: { h: Home }) {
  return (
    <Section eyebrow={h.whyEyebrow} title={h.whyTitle}>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card scroll-reveal relative overflow-hidden bg-gradient-to-br from-accent/[0.16] via-base-surface to-base-surface p-7 sm:p-8 lg:col-span-2 rtl:bg-gradient-to-bl">
          <Icon d={icon.drop} />
          <h3 className="mt-6 font-[family-name:var(--font-studio-display)] text-3xl tracking-wide text-ink sm:text-4xl">{h.noWatermarkTitle}</h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-dim">{h.noWatermarkBody}</p>
        </div>
        {h.tiles.map((t, i) => (
          <Tile key={t.title} d={TILE_ICONS[i] ?? icon.gauge} title={t.title} body={t.body} />
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

function SupportedPlatforms({ h, locale }: { h: Home; locale: Locale }) {
  return (
    <Section eyebrow={h.platformsEyebrow} title={h.platformsTitle} intro={h.platformsIntro}>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {ALL_PLATFORMS.map((p) => {
          const c = PLATFORM_COLORS[p.id];
          return (
            <li key={p.id} className="scroll-reveal">
              <Link href={localePath(locale, p.href)} className="card lift group flex items-center gap-3 p-3 pe-4 hover:bg-base-raised">
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
                  className="shrink-0 -translate-x-1 text-ink-faint opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 rtl:-scale-x-100 rtl:translate-x-1 rtl:group-hover:translate-x-0"
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

function ClosingCta({ h }: { h: Home }) {
  return (
    <section className="container-wide py-12 sm:py-16">
      <div className="scroll-reveal relative overflow-hidden rounded-[28px] bg-brand-gradient px-6 py-14 text-center sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.22),transparent_70%)]" aria-hidden />
        <h2 className="relative font-[family-name:var(--font-studio-display)] text-5xl tracking-wide text-white sm:text-6xl">{h.ctaTitle}</h2>
        <p className="relative mx-auto mt-3 max-w-md text-[15px] text-white/85">{h.ctaBody}</p>
        <a
          href="#download"
          className="press relative mt-8 inline-flex h-14 items-center gap-2.5 rounded-2xl bg-white px-8 text-[16px] font-bold text-[#c81f2e] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 19V5m0 0l-5 5m5-5l5 5" />
          </svg>
          {h.ctaButton}
        </a>
      </div>
    </section>
  );
}
