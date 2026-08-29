import { BookingCTA } from "@/components/booking/BookingCTA";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { aboutContent } from "@/i18n/content/about";
import type { Locale } from "@/i18n/locale";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The company page. DigitalFace is the protagonist throughout: the specialist
 * network is the page's central visual idea, and the founders appear once, as a
 * single line of company history. This is not a services page — it says what the
 * company IS and what it answers for, never what it sells.
 */

const LOGO_SRC = "/images/DIGITAL%20FACE%20MARCA%20ISOTIPO.png";

const eyebrowLight =
  "inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600";
/** The same pill on the page's dark bands — the site's established dark-surface variant. */
const eyebrowDark =
  "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200";
/** Matches the pill the shared Hero uses, so the About opening reads as the same site. */
const eyebrowHero =
  "inline-flex items-center justify-center rounded-full border border-brand-100 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 shadow-sm";

/**
 * Reserved for a real, approved photograph of DigitalFace at work. It stays
 * `null` on purpose: no authentic asset exists in `/public/media` yet, and the
 * page must never fall back to stock or fabricated imagery. Fill it in and the
 * band publishes itself.
 */
const approvedWorkspaceImage: {
  src: string;
  alt: Record<Locale, string>;
} | null = null;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
 * Specialist network — the page's central visual idea.
 *
 * Six grouped disciplines ring a dominant DigitalFace core. Six rather than a
 * dozen: the point is specialist depth around one company, not a capability
 * inventory. Every node sits well off the horizontal axis, so nothing can
 * collide with the core, and pills are anchored to grow *inward* from the ring,
 * which is what keeps long Spanish labels ("Automatización e IA") inside the box
 * at any column width. Below md the same data becomes a vertical connected
 * sequence rather than a shrunken circle.
 * -------------------------------------------------------------------------- */

const NETWORK_ANGLES = [-90, -30, 30, 90, 150, 210];
const NODE_RADIUS = 44;
const RAY_START = 20;
const RAY_END = 43;

function polar(angleDeg: number, radius: number) {
  const radians = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(radians),
    y: 50 + radius * Math.sin(radians),
  };
}

function nodeAnchor(angleDeg: number) {
  const cos = Math.cos((angleDeg * Math.PI) / 180);
  if (cos > 0.35) return "-translate-x-full -translate-y-1/2";
  if (cos < -0.35) return "-translate-y-1/2";
  return "-translate-x-1/2 -translate-y-1/2";
}

function NetworkCore({
  name,
  label,
  className,
}: {
  name: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-ocean-500 p-4 text-center shadow-brand-soft sm:p-5",
        className,
      )}
    >
      <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white/95">
        <img src={LOGO_SRC} alt="" className="h-6 w-6 object-contain" />
      </span>
      <p className="mt-3 text-sm font-semibold text-white sm:text-base">
        {name}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-white/80">
        {label}
      </p>
    </div>
  );
}

function SpecialistNetwork({
  coreName,
  coreLabel,
  disciplines,
  disciplinesLabel,
}: {
  coreName: string;
  coreLabel: string;
  disciplines: string[];
  disciplinesLabel: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const nodes = disciplines.slice(0, NETWORK_ANGLES.length);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400 md:mb-4 md:text-center">
        {disciplinesLabel}
      </p>

      {/* Radial composition — md and up */}
      <div className="relative mx-auto mt-6 hidden aspect-square w-full max-w-[36rem] md:mt-0 md:block">
        <motion.div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full border border-dashed border-ink-200"
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-[26%] rounded-full border border-ink-100"
        />
        <div
          aria-hidden="true"
          className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16),transparent_70%)] blur-2xl"
        />

        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
        >
          {NETWORK_ANGLES.slice(0, nodes.length).map((angle) => {
            const start = polar(angle, RAY_START);
            const end = polar(angle, RAY_END);
            return (
              <line
                key={angle}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="rgba(124,58,237,0.22)"
                strokeWidth={0.25}
              />
            );
          })}
        </svg>

        <NetworkCore
          name={coreName}
          label={coreLabel}
          className="absolute left-1/2 top-1/2 w-[36%] -translate-x-1/2 -translate-y-1/2"
        />

        <ul>
          {nodes.map((discipline, index) => {
            const angle = NETWORK_ANGLES[index];
            const point = polar(angle, NODE_RADIUS);

            return (
              // The anchor translate stays on the plain <li>. Animating this
              // element instead would let framer-motion write its own inline
              // `transform` and silently drop the anchoring, pushing the wider
              // labels straight out of the diagram.
              <li
                key={discipline}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                className={cn("absolute", nodeAnchor(angle))}
              >
                <motion.span
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }
                  }
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: 0.06 * index }}
                  className="block whitespace-nowrap rounded-full border border-ink-200 bg-white px-3.5 py-2 text-[11px] font-semibold text-ink-600 shadow-sm"
                >
                  {discipline}
                </motion.span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Vertical connected sequence — below md */}
      <div className="mt-8 md:hidden">
        <NetworkCore
          name={coreName}
          label={coreLabel}
          className="mx-auto max-w-[15rem]"
        />
        <div className="relative mt-5 pl-7">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[3px] top-0 w-px bg-gradient-to-b from-brand-300 via-ocean-300 to-transparent"
          />
          <ul className="space-y-2.5">
            {nodes.map((discipline) => (
              <li key={discipline} className="relative flex items-center">
                <span
                  aria-hidden="true"
                  className="absolute -left-7 h-[7px] w-[7px] rounded-full border border-brand-300 bg-white"
                />
                <span className="rounded-full border border-ink-200 bg-white px-3.5 py-2 text-xs font-semibold text-ink-600 shadow-sm">
                  {discipline}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { locale, path } = useLocale();
  const t = aboutContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      {/* 01 — About DigitalFace */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[-30rem] mx-auto h-[46rem] w-[64rem] rounded-full bg-glow-conic opacity-40 blur-3xl"
        />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className={eyebrowHero}>{t.hero.eyebrow}</span>
            <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
              {t.hero.description}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/10 pt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              {t.hero.meta.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-white/20">
                      ·
                    </span>
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 02 — How DigitalFace works */}
      <section className="relative overflow-hidden bg-ink-50 py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(124,58,237,0.08),transparent_55%)]"
        />
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
            <Reveal>
              <span className={eyebrowLight}>{t.network.eyebrow}</span>
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {t.network.title}
              </h2>
              <p className="mt-7 text-base leading-relaxed text-ink-500 sm:text-lg">
                {t.network.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {t.network.secondary}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <SpecialistNetwork
                coreName={t.network.coreName}
                coreLabel={t.network.coreLabel}
                disciplines={t.network.disciplines}
                disciplinesLabel={t.network.disciplinesLabel}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {approvedWorkspaceImage ? (
        <section className="bg-ink-50 pb-20 sm:pb-24 lg:pb-28">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <figure
              data-media-slot="A_ABOUT_WORKSPACE"
              className="overflow-hidden rounded-3xl border border-ink-100 shadow-brand-card"
            >
              <img
                src={approvedWorkspaceImage.src}
                alt={approvedWorkspaceImage.alt[locale]}
                className="aspect-[16/7] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>
      ) : null}

      {/* 04 — How we think */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(124,58,237,0.22),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.14),transparent_55%)]" />
        </div>
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className={eyebrowDark}>{t.principles.eyebrow}</span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.principles.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-14 gap-y-10 border-t border-white/10 pt-11 sm:grid-cols-2 lg:mt-16">
            {t.principles.items.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.06}>
                <h3 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Roots, company details and the close */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className={eyebrowLight}>{t.roots.eyebrow}</span>
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
                {t.roots.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7">
              <div className="space-y-5">
                {t.roots.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-ink-500 sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* The founders get one line of company history and no more:
                  the visitor's relationship is with DigitalFace. */}
              <p className="mt-7 border-l-2 border-brand-200 pl-5 text-sm leading-relaxed text-ink-400">
                {t.roots.foundersNote}
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-16 border-t border-ink-200/70 pt-10 lg:mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400">
              {t.roots.detailsLabel}
            </p>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.roots.details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600">
                    {detail.label}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-ink-500">
                    {detail.lines.map((line, index) => (
                      <span
                        key={line}
                        className={cn(
                          "block",
                          index === 0 && "font-semibold text-slate-900",
                        )}
                      >
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

        </div>
      </section>

      {/* 06 — The conversion moment. The page has said what DigitalFace is and
          what it answers for, so it closes on the same shared block the
          homepage and the funnels use: one button, pointed at scheduling. */}
      <BookingCTA
        id="book"
        eyebrow={t.booking.eyebrow}
        title={t.booking.title}
        description={t.booking.description}
        ctaLabel={t.booking.ctaLabel}
        href={bookingHref(path(BOOKING_ROUTE), "about")}
        /* This is the last block on the page, so the layout's 6rem footer
           offset would otherwise cut a white stripe between two dark
           surfaces. Cancelling it lets the CTA run straight into the footer,
           with a hairline keeping the two readable as separate things. */
        className="mb-[-6rem] border-b border-white/10"
      />
    </div>
  );
}
