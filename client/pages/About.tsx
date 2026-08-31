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
import { useId, type PointerEvent, type ReactNode } from "react";

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
 * The four principles are the page's argument, so they get a composed frame
 * rather than a text list: a light field generated from sine curves, a clipped
 * header slab, and four beveled glass cards that answer to the pointer. Every
 * effect is CSS/SVG — no raster art — and the copy is untouched, which is why
 * the icons are matched to the items here by position instead of being added to
 * the content file.
 * -------------------------------------------------------------------------- */

/**
 * Catmull-Rom through the sampled points, converted to cubic Béziers. Joining
 * a coarsely sampled sine with straight lines would show every corner; this
 * keeps the ribbons genuinely smooth at a fraction of the path data.
 */
function smoothPath(points: readonly [number, number][]) {
  let d = `M${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const [p0x, p0y] = points[i - 1] ?? points[i];
    const [p1x, p1y] = points[i];
    const [p2x, p2y] = points[i + 1];
    const [p3x, p3y] = points[i + 2] ?? points[i + 1];

    d +=
      ` C${(p1x + (p2x - p0x) / 6).toFixed(1)} ${(p1y + (p2y - p0y) / 6).toFixed(1)}` +
      `, ${(p2x - (p3x - p1x) / 6).toFixed(1)} ${(p2y - (p3y - p1y) / 6).toFixed(1)}` +
      `, ${p2x.toFixed(1)} ${p2y.toFixed(1)}`;
  }

  return d;
}

/**
 * The band's atmosphere: one bundle of ribbons sweeping up to the right, each a
 * pair of detuned sines so the bundle breathes instead of running parallel.
 * Built once at module scope — the geometry is deterministic, so it costs
 * nothing per render.
 */
const AURORA_RIBBONS = Array.from({ length: 24 }, (_, index) => {
  const t = index / 23;
  const phase = t * 2.6;
  const amplitude = 38 + t * 104;
  const base = 150 + t * 640;
  const points: [number, number][] = [];

  for (let x = -120; x <= 1560; x += 145) {
    const u = x / 1440;
    points.push([
      x,
      base +
        Math.sin(u * Math.PI * 1.55 + phase) * amplitude +
        Math.sin(u * Math.PI * 3.2 + phase * 1.9) * amplitude * 0.28 -
        u * 235,
    ]);
  }

  return {
    d: smoothPath(points),
    /* Every sixth ribbon carries the light; the rest are the falloff. */
    opacity: (index % 6 === 2 ? 0.5 : 0.24) - t * 0.14,
    width: index % 6 === 2 ? 1.35 : 0.85,
  };
});

function PrinciplesLightField() {
  const gradientId = useId();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0.85" x2="1" y2="0.1">
          <stop offset="0" stopColor="#7c3aed" stopOpacity="0" />
          <stop offset="0.22" stopColor="#a78bfa" stopOpacity="0.85" />
          <stop offset="0.58" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g
        stroke={`url(#${gradientId})`}
        className="motion-reduce:animate-none sm:animate-aurora-drift"
      >
        {AURORA_RIBBONS.map((ribbon) => (
          <path
            key={ribbon.d}
            d={ribbon.d}
            strokeWidth={ribbon.width}
            opacity={ribbon.opacity}
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * The bevel is a fixed 40px, so the geometry decorating it is fixed too —
 * scaling that with the card would only bend the 45° cut off the corner.
 */
const BEVEL = 40;
const BEVEL_CLIP = `polygon(0 0, calc(100% - ${BEVEL}px) 0, 100% ${BEVEL}px, 100% 100%, 0 100%)`;

/** The lit edge tracing the cut corner: in along the top, down the bevel, away. */
function BevelLight({ color, glow }: { color: string; glow: string }) {
  const gradientId = useId();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      fill="none"
      className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      style={{ filter: `drop-shadow(0 0 7px rgba(${glow},0.55))` }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0.1" y1="0" x2="0.95" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset="0.4" stopColor={color} stopOpacity="1" />
          <stop offset="0.62" stopColor={color} stopOpacity="0.85" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`M40 1 H${200 - BEVEL - 1} L199 ${BEVEL + 1} V190`}
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
      />
    </svg>
  );
}

type PrincipleAccent = {
  icon: LucideIcon;
  /** Stroke colour for the hexagon and the bevel light. */
  line: string;
  /** `r,g,b` triplet reused by every glow, wash and spotlight on the card. */
  glow: string;
};

/** Left column reads violet, right column ocean — the site's two accents. */
const PRINCIPLE_ACCENTS: readonly PrincipleAccent[] = [
  { icon: Briefcase, line: "#c4b5fd", glow: "139,92,246" },
  { icon: UserRoundCheck, line: "#7dd3fc", glow: "14,165,233" },
  { icon: Target, line: "#c4b5fd", glow: "139,92,246" },
  { icon: TrendingUp, line: "#7dd3fc", glow: "14,165,233" },
];

/** Hexagonal icon holder: outline, echo ring, and a glow that lifts on hover. */
function PrincipleIcon({ accent }: { accent: PrincipleAccent }) {
  const Icon = accent.icon;
  const gradientId = useId();

  return (
    <span className="relative flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center sm:h-20 sm:w-20">
      <span
        aria-hidden="true"
        className="absolute inset-1 rounded-full opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
        style={{
          background: `radial-gradient(circle, rgba(${accent.glow},0.55), transparent 70%)`,
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0.15" y1="0" x2="0.85" y2="1">
            <stop offset="0" stopColor={accent.line} stopOpacity="0.95" />
            <stop offset="0.55" stopColor={accent.line} stopOpacity="0.45" />
            <stop offset="1" stopColor={accent.line} stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Echo ring — depth without a second hard outline. */}
        <polygon
          points="50,1 92,25 92,75 50,99 8,75 8,25"
          stroke={accent.line}
          strokeOpacity="0.14"
          strokeWidth="1"
        />
        <polygon
          points="50,7 86,28 86,72 50,93 14,72 14,28"
          fill="rgba(255,255,255,0.045)"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
      <Icon
        aria-hidden="true"
        strokeWidth={1.4}
        className="relative h-8 w-8 transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none sm:h-9 sm:w-9"
        style={{ color: accent.line }}
      />
    </span>
  );
}

/**
 * One principle. The hairline is a 1px gradient underlay clipped to the same
 * polygon as the surface — the only way to keep a lit edge on a cut corner,
 * since `border` follows the box and not the clip. The spotlight is written
 * straight to CSS custom properties, so tracking the pointer never re-renders.
 */
function PrincipleCard({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: PrincipleAccent;
}) {
  function trackPointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--df-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--df-y",
      `${event.clientY - bounds.top}px`,
    );
  }

  return (
    <div
      onPointerMove={trackPointer}
      className="group relative h-full transition-transform duration-500 ease-out hover:-translate-y-1.5 motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div
        className="h-full p-px"
        style={{
          clipPath: BEVEL_CLIP,
          background: `linear-gradient(140deg, rgba(${accent.glow},0.65), rgba(255,255,255,0.13) 42%, rgba(255,255,255,0.04) 72%, rgba(${accent.glow},0.28))`,
        }}
      >
        <div
          className="relative h-full px-7 py-8 backdrop-blur-[3px] sm:px-9 sm:py-10 lg:px-10 lg:py-11"
          style={{
            clipPath: BEVEL_CLIP,
            background:
              "linear-gradient(155deg, rgba(255,255,255,0.07), rgba(255,255,255,0.018) 44%, rgba(3,7,26,0.5))",
          }}
        >
          {/* Corner wash, then the pointer spotlight over it. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
            style={{
              background: `radial-gradient(130% 95% at 100% 0%, rgba(${accent.glow},0.22), transparent 62%)`,
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
            style={{
              background: `radial-gradient(16rem circle at var(--df-x, 50%) var(--df-y, 0px), rgba(${accent.glow},0.3), transparent 68%)`,
            }}
          />
          {/* Glass catches the light along its top edge. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/25 via-white/10 to-transparent"
          />
          <BevelLight color={accent.line} glow={accent.glow} />

          <div className="relative flex items-start gap-5 sm:gap-6">
            <PrincipleIcon accent={accent} />
            <div className="min-w-0">
              <h3 className="text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3.5 text-base leading-relaxed text-white/70 sm:mt-4 sm:text-[1.0625rem]">
                {body}
              </p>
            </div>
          </div>

          {/* The seam that extends on hover — the card's only moving part. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-px w-16 transition-[width] duration-500 ease-out group-hover:w-40 motion-reduce:transition-none"
            style={{
              background: `linear-gradient(90deg, rgba(${accent.glow},0.9), transparent)`,
              boxShadow: `0 0 12px rgba(${accent.glow},0.6)`,
            }}
          />
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
      <section className="relative overflow-hidden bg-[#05070f] py-24 text-white sm:py-28 lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d0a26_0%,#080d24_46%,#05060f_100%)]" />
          <PrinciplesLightField />
          {/* Bloom. The ribbons draw the shape of the light; these give it mass,
              and the closing vignette keeps the copy off the brightest areas. */}
          <div className="absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-brand-600/25 blur-[130px]" />
          <div className="absolute -right-28 top-4 h-[30rem] w-[30rem] rounded-full bg-ocean-500/20 blur-[120px]" />
          <div className="absolute -bottom-56 left-1/4 h-[32rem] w-[38rem] rounded-full bg-brand-700/20 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_45%_42%,transparent,rgba(3,5,14,0.72))]" />
        </div>

        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative max-w-3xl">
              {/* The lit corner sits outside the slab's clip, which is why it is
                  a sibling and not a child. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-px -top-px h-14 w-14 border-l-2 border-t-2 border-brand-300/80 shadow-[0_0_22px_-4px_rgba(139,92,246,0.95)] sm:h-16 sm:w-16"
              />
              <div
                className="p-px"
                style={{
                  clipPath: BEVEL_CLIP,
                  background:
                    "linear-gradient(135deg, rgba(196,181,253,0.7), rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.04) 76%, rgba(125,211,252,0.4))",
                }}
              >
                <div
                  className="relative px-7 py-9 backdrop-blur-[3px] sm:px-11 sm:py-12"
                  style={{
                    clipPath: BEVEL_CLIP,
                    background:
                      "linear-gradient(150deg, rgba(255,255,255,0.075), rgba(3,7,26,0.5))",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/30 via-white/10 to-transparent"
                  />
                  <span className={eyebrowDark}>{t.principles.eyebrow}</span>
                  <h2 className="mt-6 text-balance bg-gradient-to-br from-white via-white to-brand-200 bg-clip-text text-4xl font-semibold leading-[1.06] tracking-tight text-transparent sm:text-5xl lg:text-[3.5rem]">
                    {t.principles.title}
                  </h2>
                </div>
              </div>
            </div>
          </Reveal>

          {/* The rail runs the full column, past the slab, and carries a slow
              pulse — the one thing on the band that keeps moving. */}
          <div
            aria-hidden="true"
            /* No `overflow-hidden` here: the rail is 1px tall, so clipping it
               would cut the node's glow and the pulse down to a hairline. The
               section's own clip is what keeps the travel off the page edge. */
            className="relative h-px w-full bg-gradient-to-r from-brand-300/70 via-ocean-400/40 to-transparent"
          >
            <span className="absolute left-0 top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_3px_rgba(167,139,250,0.85)]" />
            <span className="absolute top-1/2 h-px w-28 -translate-y-1/2 animate-rail-trace bg-gradient-to-r from-transparent via-white/90 to-transparent motion-reduce:animate-none" />
          </div>

          <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:gap-8">
            {t.principles.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                className="h-full [&>*]:h-full"
              >
                <PrincipleCard
                  title={item.title}
                  body={item.body}
                  accent={PRINCIPLE_ACCENTS[index % PRINCIPLE_ACCENTS.length]}
                />
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
