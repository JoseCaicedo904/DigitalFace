import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { techLogos } from "@/data/techEcosystem";
import type { HomeContent } from "@/i18n/content/home";
import { cn } from "@/lib/utils";

type TechEcosystemContent = HomeContent["techEcosystem"];

type TechEcosystemProps = {
  content: TechEcosystemContent;
  className?: string;
};

/** Below this a pointer movement is a click, above it a drag of the rail. */
const DRAG_THRESHOLD_PX = 5;

type RailState = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  /** Share of the rail currently in view, and how far along it sits. */
  thumbRatio: number;
  thumbOffset: number;
};

const INITIAL_RAIL_STATE: RailState = {
  canScrollLeft: false,
  canScrollRight: false,
  thumbRatio: 1,
  thumbOffset: 0,
};

/**
 * The reassurance beat between the system demonstrations and the proof of work:
 * the platforms a business already runs, shown as one continuous rail.
 *
 * The section is dark like the rest of the DigitalFace narrative, but the rail
 * itself is a single white surface because the artwork is drawn in each brand's
 * own colours for a white background. One surface, not twenty-two cards — the
 * point is a connected ecosystem, not a catalogue of products for sale.
 *
 * Scrolling is the browser's own: native overflow gives touch its momentum for
 * free, the arrows move it by roughly a screenful, and a mouse can drag it.
 */
export function TechEcosystemSection({
  content: t,
  className,
}: TechEcosystemProps) {
  const prefersReducedMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [rail, setRail] = useState<RailState>(INITIAL_RAIL_STATE);
  const [isDragging, setIsDragging] = useState(false);

  const syncRail = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const distance = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;

    setRail({
      /* A pixel of slack: sub-pixel layout would otherwise leave an arrow
         enabled at an end it cannot move away from. */
      canScrollLeft: left > 1,
      canScrollRight: left < distance - 1,
      thumbRatio: distance > 0 ? el.clientWidth / el.scrollWidth : 1,
      thumbOffset: distance > 0 ? left / distance : 0,
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    syncRail();
    el.addEventListener("scroll", syncRail, { passive: true });

    /* The rail's own width changes with the viewport, and its scrollWidth
       changes again as each logo decodes, so both are watched. */
    const observer = new ResizeObserver(syncRail);
    observer.observe(el);
    for (const child of Array.from(el.children)) observer.observe(child);

    return () => {
      el.removeEventListener("scroll", syncRail);
      observer.disconnect();
    };
  }, [syncRail]);

  /** One logical group of logos per click, never a few pixels. */
  const scrollByPage = useCallback(
    (direction: 1 | -1) => {
      const el = scrollerRef.current;
      if (!el) return;

      const step = Math.max(240, el.clientWidth * 0.8);
      el.scrollBy({
        left: direction * step,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion],
  );

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByPage(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByPage(-1);
    }
  };

  /* Touch and pen already scroll natively — with momentum no script matches —
     so only a mouse gets drag wired up by hand. */
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startScroll: number;
    active: boolean;
  } | null>(null);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || event.pointerType !== "mouse" || event.button !== 0) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: el.scrollLeft,
      active: false,
    };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const el = scrollerRef.current;
    if (!drag || !el || event.pointerId !== drag.pointerId) return;

    const delta = event.clientX - drag.startX;

    if (!drag.active) {
      if (Math.abs(delta) < DRAG_THRESHOLD_PX) return;
      drag.active = true;
      setIsDragging(true);
      el.setPointerCapture(drag.pointerId);
    }

    el.scrollLeft = drag.startScroll - delta;
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const el = scrollerRef.current;
    if (!drag || event.pointerId !== drag.pointerId) return;

    if (drag.active && el?.hasPointerCapture(drag.pointerId)) {
      el.releasePointerCapture(drag.pointerId);
    }
    dragRef.current = null;
    setIsDragging(false);
  };

  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 22 },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 } as const,
    transition: { duration: 0.5, delay },
  });

  const arrowClassName = cn(
    "absolute top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full",
    "border border-ink-200 bg-white text-ink-600 shadow-[0_12px_30px_-14px_rgba(15,23,42,0.55)]",
    "transition duration-300 md:flex",
    "hover:-translate-y-[calc(50%+2px)] hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    "disabled:pointer-events-none disabled:opacity-0",
    "motion-reduce:transition-none motion-reduce:hover:translate-y-[-50%]",
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-ocean-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal()} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {t.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            {t.description}
          </p>
          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35 sm:text-[11px]">
            {t.categories}
          </p>
        </motion.div>

        {/* The white presentation surface. The artwork was drawn for white, so
            the rail brings its own rather than dimming the section around it. */}
        <motion.div
          {...reveal(0.05)}
          className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_40px_90px_-45px_rgba(0,0,0,0.9)] sm:mt-14 lg:mt-16"
        >
          <div className="relative">
            <div
              ref={scrollerRef}
              role="region"
              aria-label={t.railLabel}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              className={cn(
                "snap-x snap-proximity overflow-x-auto overscroll-x-contain",
                /* Scroll padding to match the rail's own: without it the first
                   logo snaps flush to the edge and eats its breathing room. */
                "scroll-pl-6 sm:scroll-pl-12 lg:scroll-pl-16",
                /* The fades, arrows and progress bar say "there is more" far
                   more quietly than a scrollbar across a white surface. */
                "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500",
                isDragging ? "cursor-grabbing select-none" : "md:cursor-grab",
              )}
            >
              <ul
                role="list"
                /* Tighter padding on a phone so the next logo is caught by the
                   edge: the peek is what says the rail keeps going. */
                className="flex w-max items-center gap-8 px-6 py-9 sm:gap-11 sm:px-12 sm:py-12 lg:gap-12 lg:px-16 lg:py-14"
              >
                {techLogos.map((logo) => (
                  <li
                    key={logo.id}
                    className="flex h-8 min-w-[104px] shrink-0 snap-start items-center justify-center sm:h-10 sm:min-w-[126px] lg:h-12 lg:min-w-[144px]"
                  >
                    <img
                      src={logo.src}
                      alt={t.logoAlt.replace("{name}", logo.name)}
                      width={logo.width}
                      height={logo.height}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      /* A shared height with free width: the proportions of
                         every wordmark stay exactly as its owner drew them. */
                      className="h-full w-auto max-w-none object-contain"
                      style={{ maxHeight: `${(logo.scale ?? 1) * 100}%` }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/85 to-transparent transition-opacity duration-300 sm:w-20",
                rail.canScrollLeft ? "opacity-100" : "opacity-0",
              )}
            />
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/85 to-transparent transition-opacity duration-300 sm:w-20",
                rail.canScrollRight ? "opacity-100" : "opacity-0",
              )}
            />

            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!rail.canScrollLeft}
              aria-label={t.previousLabel}
              className={cn(arrowClassName, "left-3 lg:left-4")}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!rail.canScrollRight}
              aria-label={t.nextLabel}
              className={cn(arrowClassName, "right-3 lg:right-4")}
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* How far along the rail is. On a phone, where there are no arrows,
              this is what says the ecosystem continues past the edge. */}
          <div
            aria-hidden="true"
            className="mx-6 mb-7 h-[3px] overflow-hidden rounded-full bg-ink-100 sm:mx-12 sm:mb-9 lg:mx-16"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-ocean-500 transition-[width] duration-200 motion-reduce:transition-none"
              style={{
                width: `${Math.max(rail.thumbRatio, 0.08) * 100}%`,
                marginLeft: `${rail.thumbOffset * (1 - Math.max(rail.thumbRatio, 0.08)) * 100}%`,
              }}
            />
          </div>
        </motion.div>

        <motion.p
          {...reveal(0.08)}
          className="mt-6 text-center text-[11px] leading-relaxed text-white/35"
        >
          {t.footnote}
        </motion.p>
      </div>
    </section>
  );
}
