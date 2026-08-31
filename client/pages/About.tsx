import { BookingCTA } from "@/components/booking/BookingCTA";
import { BOOKING_ROUTE, bookingHref } from "@/components/booking/bookingRoute";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useLocale } from "@/i18n/LocaleProvider";
import { aboutContent } from "@/i18n/content/about";
import type { Locale } from "@/i18n/locale";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Target,
  TrendingUp,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";
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

/* --------------------------------------------------------------------------
 * Principles — the "how we think" band.
 *
 * A bento composition rather than a 2×2 of identical boxes: the tiles are two
 * heights, the right column drops half a tile, and every surface is near-solid
 * with a hairline edge. Size and position carry the rhythm, so the colour can
 * stay in the icon chip and one soft corner wash — which is what keeps a dark
 * band premium instead of noisy.
 *
 * The copy is untouched, which is why the icons are matched to the items here
 * by position instead of being added to the content file.
 * -------------------------------------------------------------------------- */

type PrincipleAccent = {
  icon: LucideIcon;
  /** Icon colour, and the tint of the tile's corner wash. */
  tint: string;
  /** `r,g,b` triplet for the wash and the chip's glow. */
  glow: string;
};

/** Left column reads violet, right column ocean — the site's two accents. */
const PRINCIPLE_ACCENTS: readonly PrincipleAccent[] = [
  { icon: Briefcase, tint: "#c4b5fd", glow: "139,92,246" },
  { icon: UserRoundCheck, tint: "#7dd3fc", glow: "14,165,233" },
  { icon: Target, tint: "#c4b5fd", glow: "139,92,246" },
  { icon: TrendingUp, tint: "#7dd3fc", glow: "14,165,233" },
];

/**
 * One tile. `tall` is what makes this a bento and not a card grid: the first
 * and last principles get the taller surface, so the block reads as a composed
 * shape. The grid is `items-start`, so a shorter tile stays short instead of
 * being stretched to its row.
 */
function PrincipleTile({
  title,
  body,
  accent,
  tall,
}: {
  title: string;
  body: string;
  accent: PrincipleAccent;
  tall: boolean;
}) {
  const Icon = accent.icon;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12131f] p-8 sm:p-9 lg:h-auto lg:p-10",
        /* 200ms and a 2% scale: enough to acknowledge the pointer, not enough
           to read as an animation. */
        "transition duration-200 ease-out hover:border-white/[0.16] hover:shadow-[0_34px_70px_-30px_rgba(0,0,0,0.95)]",
        "hover:-translate-y-0.5 hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none",
        tall ? "lg:min-h-[23rem]" : "lg:min-h-[18.5rem]",
      )}
    >
      {/* The tile's only colour, and it stays in the corner. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
        style={{
          background: `radial-gradient(115% 80% at 100% 0%, rgba(${accent.glow},0.16), transparent 58%)`,
        }}
      />
      {/* Light falling on a solid surface, not glass. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.05] to-transparent"
      />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] transition-colors duration-200 group-hover:border-white/20 motion-reduce:transition-none">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
          style={{ background: `rgba(${accent.glow},0.35)` }}
        />
        <Icon
          aria-hidden="true"
          strokeWidth={1.5}
          className="relative h-7 w-7"
          style={{ color: accent.tint }}
        />
      </span>

      {/* Copy sits at the foot of the tile, so the taller surfaces read as
          deliberate rather than padded out. */}
      <div className="relative mt-auto pt-12">
        <h3 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-white sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
          {body}
        </p>
      </div>
    </article>
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
      <section className="relative overflow-hidden bg-[#0a0b14] py-24 text-white sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_12%_0%,rgba(76,29,149,0.38),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_96%_8%,rgba(3,105,161,0.22),transparent_58%)]" />
          {/* A measured grid rather than a light show: it gives the tiles
              something to sit on and disappears at the edges. */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(75%_60%_at_50%_28%,black,transparent)]" />
        </div>

        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className={eyebrowDark}>{t.principles.eyebrow}</span>
            <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {t.principles.title}
            </h2>
          </Reveal>

          {/* The tiles hang off this line, which is the same hairline they are
              drawn with — that is what ties the heading to the block. */}
          <div
            aria-hidden="true"
            className="mt-12 h-px w-full bg-gradient-to-r from-white/25 via-white/[0.08] to-transparent sm:mt-14"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:items-start lg:gap-6 lg:pb-14">
            {t.principles.items.map((item, index) => (
              /* The offset lives on a plain wrapper. Put it on the Reveal and
                 framer-motion writes its own inline transform, silently
                 dropping it — the same trap as the network diagram above. */
              <div
                key={item.title}
                className={cn(
                  "h-full lg:h-auto",
                  index % 2 === 1 && "lg:translate-y-14",
                )}
              >
                <Reveal
                  delay={index * 0.07}
                  className="h-full [&>*]:h-full lg:h-auto lg:[&>*]:h-auto"
                >
                  <PrincipleTile
                    title={item.title}
                    body={item.body}
                    accent={PRINCIPLE_ACCENTS[index % PRINCIPLE_ACCENTS.length]}
                    tall={index === 0 || index === 3}
                  />
                </Reveal>
              </div>
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
            <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
