import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { aboutContent } from "@/i18n/content/about";
import type { Locale } from "@/i18n/locale";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/**
 * This is the company page, not a product page. It deliberately does not restate
 * the ATTRACT → CONVERT → MANAGE system or the service catalogue — those belong
 * to the homepage and the Pay per Service tree. Rhythm here is editorial:
 * statement, prose, structure diagram, quote, quiet company facts.
 */

const LOGO_SRC = "/images/DIGITAL%20FACE%20MARCA%20ISOTIPO.png";

const eyebrowLight =
  "inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600";
const eyebrowDark =
  "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200";
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
 * Specialist network
 *
 * Nine disciplines sit on a ring around the core. Node pills are anchored so
 * they always grow *inward*, which is what keeps long Spanish labels
 * ("Automatización") inside the box at every column width instead of spilling
 * out of the diagram. Below md the same data renders as a vertical connected
 * sequence rather than a shrunken circle.
 * -------------------------------------------------------------------------- */

const NETWORK_ANGLES = [-90, -50, -10, 30, 70, 110, 150, 190, 230];
const NODE_RADIUS = 44;
const RAY_START = 19;
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
        "rounded-3xl border border-white/20 bg-gradient-to-br from-brand-600 via-brand-500 to-ocean-500 p-4 text-center shadow-brand-soft sm:p-5",
        className,
      )}
    >
      <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white/95">
        <img src={LOGO_SRC} alt="" className="h-6 w-6 object-contain" />
      </span>
      <p className="mt-3 text-sm font-semibold text-white sm:text-base">
        {name}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
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
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40 md:mb-6 md:text-center">
        {disciplinesLabel}
      </p>

      {/* Radial composition — md and up */}
      <div className="relative mx-auto mt-6 hidden aspect-square w-full max-w-[36rem] md:mt-0 md:block">
        <motion.div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full border border-dashed border-white/10"
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-[26%] rounded-full border border-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.20),transparent_70%)] blur-2xl"
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
                stroke="rgba(255,255,255,0.16)"
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
              <motion.li
                key={discipline}
                initial={
                  prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }
                }
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
                }
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                className={cn("absolute", nodeAnchor(angle))}
              >
                <span className="block whitespace-nowrap rounded-full border border-white/15 bg-slate-900/85 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur">
                  {discipline}
                </span>
              </motion.li>
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
            className="absolute bottom-3 left-[3px] top-0 w-px bg-gradient-to-b from-white/30 via-white/15 to-transparent"
          />
          <ul className="space-y-2.5">
            {nodes.map((discipline) => (
              <li key={discipline} className="relative flex items-center">
                <span
                  aria-hidden="true"
                  className="absolute -left-7 h-[7px] w-[7px] rounded-full border border-white/30 bg-slate-900"
                />
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/80">
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

  const [storyLead, ...storyRest] = t.story.paragraphs;
  const [todayLead, ...todayRest] = t.today.paragraphs;

  return (
    <div className="bg-white">
      {/* 01 — Who we are */}
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

      {/* 02 — Our story */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <span className={eyebrowLight}>{t.story.eyebrow}</span>
                <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                  {t.story.title}
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-ink-600 sm:text-xl">
                  {storyLead}
                </p>
                <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-500 sm:text-lg">
                  {storyRest.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal
                delay={0.08}
                className="mt-12 border-t border-ink-100 pt-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400">
                  {t.story.foundersLabel}
                </p>
                <div className="mt-6 grid gap-7 sm:grid-cols-2">
                  {t.story.founders.map((founder) => (
                    <div key={founder.name} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-ocean-500 text-sm font-semibold text-white shadow-brand-soft"
                      >
                        {founder.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="text-base font-semibold text-slate-900">
                          {founder.name}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600">
                          {founder.role}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-ink-500">
                          {founder.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1} className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400">
                  {t.story.timelineLabel}
                </p>
                <ol className="relative mt-8 space-y-9 pl-10">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-3 top-2 w-px bg-gradient-to-b from-brand-300 via-ocean-300 to-transparent"
                  />
                  {t.story.timeline.map((entry) => (
                    <li key={entry.step} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-10 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-brand-200 bg-white text-[10px] font-bold text-brand-600 shadow-sm"
                      >
                        {entry.step}
                      </span>
                      <h3 className="text-base font-semibold text-slate-900">
                        {entry.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {entry.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {approvedWorkspaceImage ? (
        <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
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

      {/* 03 — How we think */}
      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className={eyebrowLight}>{t.beliefs.eyebrow}</span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.beliefs.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-14 gap-y-11 border-t border-ink-200/70 pt-11 sm:grid-cols-2 lg:mt-16">
            {t.beliefs.items.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.06}>
                <span className="text-xs font-semibold tracking-[0.24em] text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — How we're built */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(124,58,237,0.18),transparent_60%)]"
        />
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
            <Reveal>
              <span className={eyebrowDark}>{t.structure.eyebrow}</span>
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t.structure.title}
              </h2>
              <p className="mt-7 text-base leading-relaxed text-white/70 sm:text-lg">
                {t.structure.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                {t.structure.secondary}
              </p>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                  {t.structure.responsibilitiesLabel}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.structure.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-white/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SpecialistNetwork
                coreName={t.structure.coreName}
                coreLabel={t.structure.coreLabel}
                disciplines={t.structure.disciplines}
                disciplinesLabel={t.structure.disciplinesLabel}
              />
            </Reveal>
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-white/50 lg:mt-16">
            {t.structure.note}
          </p>
        </div>
      </section>

      {/* 05 — The company today */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className={eyebrowLight}>{t.today.eyebrow}</span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.today.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-600 sm:text-xl">
              {todayLead}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <blockquote className="my-12 border-l-2 border-brand-500 pl-6 sm:my-14 sm:pl-8">
              <p className="text-balance text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-[2.25rem]">
                {t.today.quote}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.12} className="space-y-5">
            {todayRest.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-ink-500 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 06 — Where we're going, company details and the close */}
      <section className="bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className={eyebrowLight}>{t.future.eyebrow}</span>
              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                {t.future.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="space-y-5 lg:col-span-7">
              {t.future.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-ink-500 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal className="mt-16 border-t border-ink-200/70 pt-10 lg:mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400">
              {t.future.detailsLabel}
            </p>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.future.details.map((detail) => (
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

          <Reveal className="mt-16 border-t border-ink-200/70 pt-12 lg:mt-20">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.future.closingTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              {t.future.closingBody}
            </p>
            <Link
              to={path("/contact")}
              className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition hover:text-brand-700"
            >
              {t.future.closingCta}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
