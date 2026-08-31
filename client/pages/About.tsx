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
  Building2,
  Clock,
  Globe,
  MapPin,
  Target,
  TrendingUp,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";

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
 * One tile. Icon, title and body are one group at the top of the surface on a
 * fixed rhythm, so the three read as belonging together and a two-line title
 * shifts nothing above it. Height comes from the row rather than a minimum on
 * the tile: the taller card in a row sets it, and its neighbour matches, which
 * keeps the pair aligned without opening a gap under the icon.
 */
function PrincipleTile({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: PrincipleAccent;
}) {
  const Icon = accent.icon;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12131f] p-8 sm:p-9 lg:p-10",
        /* 200ms and a 2% scale: enough to acknowledge the pointer, not enough
           to read as an animation. */
        "transition duration-200 ease-out hover:border-white/[0.16] hover:shadow-[0_34px_70px_-30px_rgba(0,0,0,0.95)]",
        "hover:-translate-y-0.5 hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none",
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

      {/* Fixed gap under the icon — never `mt-auto`, which is what pushed the
          copy to the floor and opened the dead area in the middle. */}
      <div className="relative mt-7 sm:mt-8">
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

/* --------------------------------------------------------------------------
 * Roots — the company card.
 *
 * The band is one elevated white panel on a cool grey ground: an editorial two
 * column top, then the company details along the foot. The map under the
 * headline is generated from a coarse bitmap rather than traced or imported —
 * it is decorative, so a 24 × 30 silhouette reads as the Americas at a glance
 * and costs a few hundred bytes instead of a coastline path.
 * -------------------------------------------------------------------------- */

/** One character per dot, north to south, `#` for land. */
const AMERICAS = [
  ".....####..........###..",
  "..##..######......####..",
  "..####.########...####..",
  "...###.##########..###..",
  "....#############..##...",
  ".....############.......",
  "......###########.......",
  ".......##########.......",
  ".......##########.......",
  ".......#########........",
  "........#######.........",
  ".........#####.##.......",
  "..........####..##......",
  "...........###.###......",
  "............####........",
  ".............#####......",
  ".............######.....",
  ".............######.....",
  "..............######....",
  "..............######....",
  "..............######....",
  "..............#####.....",
  "..............#####.....",
  "...............####.....",
  "...............####.....",
  "...............###......",
  "...............###......",
  "...............##.......",
  "...............##.......",
  "...............#........",
];

/* Dots are spaced wider than tall: the Americas are a portrait shape, and the
   squeeze brings the visual closer to the square the column wants. */
const DOT_X = 16;
const DOT_Y = 11.5;

function mapPoint(col: number, row: number) {
  return { x: 10 + col * DOT_X, y: 8 + row * DOT_Y };
}

/** Grid positions of the two cities the copy names, from their real degrees. */
const CALI = mapPoint(15.78, 16.32);
const MIAMI = mapPoint(15.14, 11.0);

const MAP_DOTS = AMERICAS.flatMap((line, row) =>
  [...line].flatMap((cell, col) => {
    if (cell !== "#") return [];
    const { x, y } = mapPoint(col, row);
    /* A deterministic wobble in the alpha keeps the field from reading as
       graph paper. */
    return [{ x, y, opacity: 0.16 + ((col * 7 + row * 13) % 5) * 0.028 }];
  }),
);

/** A marker whose tip sits on the origin, so it can be dropped on a city. */
function MapMarker({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse rx="24" ry="9" fill="#7c3aed" opacity="0.06" />
      <ellipse rx="16" ry="6" fill="#7c3aed" opacity="0.08" />
      <ellipse
        rx="9"
        ry="3.4"
        fill="none"
        stroke="#7c3aed"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <path
        d="M0 -2 C-3.2 -8 -11 -13.6 -11 -20.4 A11 11 0 1 1 11 -20.4 C11 -13.6 3.2 -8 0 -2 Z"
        fill="#7c3aed"
      />
      <circle cy="-20.4" r="4.3" fill="#ffffff" />
    </g>
  );
}

function RootsMap() {
  const glowId = useId();
  const arcId = useId();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 388 352"
      fill="none"
      className="h-auto w-full"
    >
      <defs>
        <radialGradient id={glowId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#a78bfa" stopOpacity="0.16" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id={arcId}
          x1={CALI.x}
          y1={CALI.y}
          x2={MIAMI.x}
          y2={MIAMI.y}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7c3aed" stopOpacity="0.7" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <ellipse cx="220" cy="180" rx="200" ry="180" fill={`url(#${glowId})`} />
      {/* A single horizon curve is all the globe this needs. */}
      <path
        d="M4 152 Q196 44 384 152"
        stroke="#94a3b8"
        strokeOpacity="0.22"
        strokeWidth="1"
      />

      {MAP_DOTS.map((dot) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r="2.15"
          fill="#4c1d95"
          opacity={dot.opacity}
        />
      ))}

      {/* Cali to Miami, bowed east so the line clears the landmass. */}
      <path
        d={`M${CALI.x} ${CALI.y} Q330 166 ${MIAMI.x} ${MIAMI.y}`}
        stroke={`url(#${arcId})`}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 5.5"
      />

      <MapMarker x={CALI.x} y={CALI.y} />
      <MapMarker x={MIAMI.x} y={MIAMI.y} />
    </svg>
  );
}

/** The lavender disc that carries every icon on this card. */
function RootsIcon({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100",
        className,
      )}
    >
      <Icon aria-hidden="true" strokeWidth={1.6} className="h-5 w-5" />
    </span>
  );
}

/** Matched to the details by position, so the content file stays copy-only. */
const DETAIL_ICONS: readonly LucideIcon[] = [MapPin, Globe, Clock];

/* --------------------------------------------------------------------------
 * Hero atmosphere — the About opening.
 *
 * Specialists, systems and markets connected under one company, said with
 * geometry instead of a diagram: sparse nodes around the edges, curved links
 * between them, and two long arcs crossing the frame with a light travelling
 * each one. Everything is SVG and CSS — no canvas, no WebGL, no new dependency.
 *
 * Two rules keep it subordinate to the headline. The network never renders over
 * a bright field, because a radial scrim sits above it and darkens the middle
 * of the section; and every clock is slow — 22s drifts, 28–36s traces, 6s
 * pulses — so the band reads as a dark hero first and a moving one second.
 * -------------------------------------------------------------------------- */

/* Deliberately hugging the edges of the frame: the centre belongs to the copy. */
const HERO_NODES = [
  { x: 118, y: 148 },
  { x: 252, y: 302 },
  { x: 96, y: 436 },
  { x: 214, y: 598 },
  { x: 332, y: 722 },
  { x: 1332, y: 168 },
  { x: 1178, y: 312 },
  { x: 1372, y: 452 },
  { x: 1228, y: 618 },
  { x: 1088, y: 732 },
  { x: 562, y: 96 },
  { x: 902, y: 78 },
  { x: 704, y: 758 },
  { x: 1012, y: 688 },
] as const;

/**
 * A link bowed off the straight line between two nodes. Perpendicular offset
 * rather than a hand-written control point, so every curve leans the same way
 * relative to its own segment and the field stays coherent.
 */
function heroLink(from: number, to: number, bow: number) {
  const a = HERO_NODES[from];
  const b = HERO_NODES[to];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy) || 1;
  const controlX = (a.x + b.x) / 2 - (dy / length) * bow;
  const controlY = (a.y + b.y) / 2 + (dx / length) * bow;

  return `M${a.x} ${a.y} Q${controlX.toFixed(1)} ${controlY.toFixed(1)} ${b.x} ${b.y}`;
}

/** Always drawn — the quiet skeleton of the field. */
const HERO_LINKS_CORE = [
  { d: heroLink(0, 1, 52), opacity: 0.16 },
  { d: heroLink(1, 2, -58), opacity: 0.13 },
  { d: heroLink(2, 3, 44), opacity: 0.15 },
  { d: heroLink(10, 11, -46), opacity: 0.14 },
  { d: heroLink(5, 6, 56), opacity: 0.16 },
  { d: heroLink(6, 7, -50), opacity: 0.13 },
  { d: heroLink(7, 8, 48), opacity: 0.15 },
];

/** Added from `sm` up, where there is room for the density. */
const HERO_LINKS_EXTRA = [
  { d: heroLink(3, 4, -38), opacity: 0.12 },
  { d: heroLink(4, 12, 40), opacity: 0.1 },
  { d: heroLink(12, 13, -34), opacity: 0.12 },
  { d: heroLink(13, 9, 36), opacity: 0.1 },
  { d: heroLink(8, 9, -42), opacity: 0.13 },
  { d: heroLink(1, 10, 70), opacity: 0.09 },
  { d: heroLink(11, 5, -64), opacity: 0.09 },
];

/**
 * The cross-market signal: long arcs running the full width, one over the top
 * and one under the copy. Abstract on purpose — no coastline, no labels.
 */
const HERO_ARCS = [
  { d: "M-80 232 Q720 40 1520 176", duration: 28, delay: 0 },
  { d: "M-80 664 Q720 830 1520 596", duration: 36, delay: -14 },
];

/** Static, and fainter still — depth behind everything else. */
const HERO_MERIDIANS = [
  "M-80 470 Q720 706 1520 392",
  "M-80 318 Q720 150 1520 268",
];

/**
 * Pointer parallax, desktop only. Writes two unitless custom properties on the
 * section; the layers below multiply them by their own depth, so one listener
 * drives every plane. Skipped entirely for reduced motion and for coarse
 * pointers, where there is no cursor to answer and the work is pure battery.
 */
function useHeroParallax(enabled: boolean) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !enabled) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;

    function handleMove(event: PointerEvent) {
      if (frame || !section) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const bounds = section.getBoundingClientRect();
        section.style.setProperty(
          "--hero-x",
          ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3),
        );
        section.style.setProperty(
          "--hero-y",
          ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3),
        );
      });
    }

    function handleLeave() {
      if (!section) return;
      section.style.setProperty("--hero-x", "0");
      section.style.setProperty("--hero-y", "0");
    }

    section.addEventListener("pointermove", handleMove);
    section.addEventListener("pointerleave", handleLeave);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled]);

  return sectionRef;
}

/** Depth planes read their shift from the section's two custom properties. */
function parallaxLayer(depthX: number, depthY: number) {
  return {
    transform: `translate3d(calc(var(--hero-x, 0) * ${depthX}px), calc(var(--hero-y, 0) * ${depthY}px), 0)`,
    transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
  };
}

function AboutHeroAtmosphere() {
  const glowId = useId();
  const nodeId = useId();
  const traceId = useId();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Violet upper left, ocean lower right, each on its own clock. */}
      <div className="absolute inset-0" style={parallaxLayer(14, 11)}>
        <div className="absolute -left-40 -top-56 h-[46rem] w-[46rem] animate-hero-drift rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.3),transparent_68%)] blur-3xl motion-reduce:animate-none" />
      </div>
      <div className="absolute inset-0" style={parallaxLayer(-11, -8)}>
        <div
          className="absolute -bottom-64 -right-40 h-[42rem] w-[42rem] animate-hero-drift rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.24),transparent_68%)] blur-3xl motion-reduce:animate-none"
          style={{ animationDirection: "reverse", animationDuration: "27s" }}
        />
      </div>

      <div className="absolute inset-0" style={parallaxLayer(7, 5)}>
        <svg
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id={glowId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#a78bfa" />
              <stop offset="0.55" stopColor="#818cf8" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
            <radialGradient id={nodeId} cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#c4b5fd" stopOpacity="0.85" />
              <stop offset="1" stopColor="#c4b5fd" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g stroke={`url(#${glowId})`} strokeWidth="0.9">
            {HERO_MERIDIANS.map((d) => (
              <path key={d} d={d} opacity="0.09" />
            ))}
          </g>

          <g stroke={`url(#${glowId})`} strokeWidth="1.1" strokeLinecap="round">
            {HERO_LINKS_CORE.map((link) => (
              <path key={link.d} d={link.d} opacity={link.opacity} />
            ))}
          </g>

          <g
            stroke={`url(#${glowId})`}
            strokeWidth="1.1"
            strokeLinecap="round"
            className="hidden sm:block"
          >
            {HERO_LINKS_EXTRA.map((link) => (
              <path key={link.d} d={link.d} opacity={link.opacity} />
            ))}
          </g>

          {/* The arcs, then the light running along each of them. */}
          <g stroke={`url(#${glowId})`} strokeWidth="1.2">
            {HERO_ARCS.map((arc) => (
              <path key={arc.d} d={arc.d} opacity="0.14" />
            ))}
          </g>
          <g className="hidden sm:block">
            {HERO_ARCS.map((arc) => (
              <path
                key={arc.d}
                d={arc.d}
                stroke="#c4b5fd"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="10 2200"
                className="animate-hero-trace motion-reduce:animate-none"
                style={{
                  animationDuration: `${arc.duration}s`,
                  animationDelay: `${arc.delay}s`,
                  filter: "drop-shadow(0 0 7px rgba(167,139,250,0.85))",
                }}
              />
            ))}
          </g>

          {HERO_NODES.map((node, index) => (
            <g
              key={`${node.x}-${node.y}`}
              className={cn(index > 8 && "hidden sm:block")}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="13"
                fill={`url(#${nodeId})`}
                className="animate-hero-pulse motion-reduce:animate-none"
                style={{
                  animationDuration: `${5 + (index % 4)}s`,
                  animationDelay: `${-index * 0.7}s`,
                }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="2.1"
                fill="#ddd6fe"
                opacity="0.45"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* The scrim. Everything above is atmosphere; this is what guarantees the
          headline never competes with it. */}
      <div className="absolute inset-0 bg-[radial-gradient(62%_58%_at_50%_46%,rgba(2,6,23,0.94),rgba(2,6,23,0.7)_44%,transparent_78%)]" />
      <div className="absolute inset-x-0 top-[-30rem] mx-auto h-[46rem] w-[64rem] rounded-full bg-glow-conic opacity-40 blur-3xl" />
    </div>
  );
}

export default function About() {
  const { locale, path } = useLocale();
  const t = aboutContent[locale];
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useHeroParallax(!prefersReducedMotion);

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      {/* 01 — About DigitalFace */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-36"
      >
        <AboutHeroAtmosphere />
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

          {/* Rows stretch (the grid default), so the two tiles in a row end at
              the same line whichever title wraps. The stagger stays; the height
              difference now comes from the copy, not from a minimum. */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6 lg:pb-14">
            {t.principles.items.map((item, index) => (
              /* The offset lives on a plain wrapper. Put it on the Reveal and
                 framer-motion writes its own inline transform, silently
                 dropping it — the same trap as the network diagram above. */
              <div
                key={item.title}
                className={cn("h-full", index % 2 === 1 && "lg:translate-y-14")}
              >
                <Reveal delay={index * 0.07} className="h-full [&>*]:h-full">
                  <PrincipleTile
                    title={item.title}
                    body={item.body}
                    accent={PRINCIPLE_ACCENTS[index % PRINCIPLE_ACCENTS.length]}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Roots, company details and the close */}
      <section className="bg-ink-50 py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-ink-200/70 bg-white shadow-[0_44px_90px_-64px_rgba(15,23,42,0.4)] sm:rounded-[2.25rem]">
              {/* Editorial top: the claim on the left, the account on the
                  right, a hairline between them from lg up. */}
              <div className="grid gap-11 p-6 sm:gap-12 sm:p-10 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:gap-0 lg:p-14">
                <div className="lg:pr-14">
                  <span className={eyebrowLight}>{t.roots.eyebrow}</span>
                  <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
                    {t.roots.title}
                  </h2>
                  <div className="mt-10 max-w-[26rem] lg:mt-12">
                    <RootsMap />
                  </div>
                </div>

                <div className="lg:border-l lg:border-ink-200/70 lg:pl-14">
                  <div className="space-y-6">
                    {t.roots.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-relaxed text-ink-600 sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {/* The founders get one line of company history and no more:
                      the visitor's relationship is with DigitalFace. An
                      annotation, deliberately not a second card. */}
                  <div className="mt-9 flex items-start gap-5 sm:mt-10">
                    <RootsIcon icon={Users} className="mt-1 h-12 w-12" />
                    <p className="border-l-2 border-brand-200 pl-5 text-[15px] leading-relaxed text-ink-500 sm:text-base">
                      {t.roots.foundersNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-ink-200/70 p-6 sm:p-10 lg:px-14 lg:py-12">
                <div className="flex items-center gap-3.5">
                  <RootsIcon icon={Building2} className="h-10 w-10" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-[13px]">
                    {t.roots.detailsLabel}
                  </p>
                </div>

                <dl className="mt-9 grid gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
                  {t.roots.details.map((detail, index, all) => (
                    <div
                      key={detail.label}
                      className={cn(
                        "flex gap-4",
                        /* Hairlines between the columns rather than three
                           separate surfaces — this stays one card. */
                        index > 0 && "lg:border-l lg:border-ink-200/70 lg:pl-9",
                        index < all.length - 1 && "lg:pr-9",
                      )}
                    >
                      <RootsIcon
                        icon={DETAIL_ICONS[index % DETAIL_ICONS.length]}
                        className="mt-0.5 h-11 w-11"
                      />
                      <div className="min-w-0">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600 sm:text-xs">
                          {detail.label}
                        </dt>
                        <dd className="mt-2.5 text-base leading-relaxed text-ink-500">
                          {detail.lines.map((line, lineIndex) => (
                            <span
                              key={line}
                              className={cn(
                                "block",
                                lineIndex === 0 &&
                                  "font-semibold text-slate-900",
                              )}
                            >
                              {line}
                            </span>
                          ))}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
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
