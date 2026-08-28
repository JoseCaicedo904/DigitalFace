import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import {
  MIN_PAN_OVERFLOW_RATIO,
  SHOWCASE_VIEWPORT_ASPECT,
  panDurationSeconds,
  screenshotOverflowRatio,
  websiteProjects,
  type WebsiteProjectRecord,
} from "@/data/websiteProjects";
import type { HomeContent } from "@/i18n/content/home";
import { cn } from "@/lib/utils";

type WebsitePortfolioContent = HomeContent["websitePortfolio"];

type WebsitePortfolioProps = {
  content: WebsitePortfolioContent;
  className?: string;
};

/** How far a finger has to travel across the preview to count as a swipe. */
const SWIPE_THRESHOLD_PX = 48;

/**
 * On a phone the frame is only as wide as the screen, and a whole desktop
 * homepage shrunk into it reads as a thumbnail. Below `sm` the screenshot is
 * therefore drawn larger than the frame and anchored to its top-left corner —
 * the masthead, headline and buttons at real presence, the far right edge
 * cropped — and the frame grows by the same factor so the proportions of the
 * browser window stay honest.
 */
const MOBILE_ZOOM = 1.35;

const padNumber = (value: number) => String(value).padStart(2, "0");

const fillPosition = (template: string, current: number, total: number) =>
  template
    .replace("{current}", String(current))
    .replace("{total}", String(total));

/**
 * True only where a real pointer can hover. Touch screens report a mouseenter
 * on tap, so without this the preview would pan the moment a phone user reached
 * for the link.
 */
function useCanHover(): boolean {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return canHover;
}

/**
 * One screenshot inside the browser frame.
 *
 * The image is drawn at the full width of the frame with its own aspect ratio
 * intact, so it is never stretched and never letterboxed — the frame is sized
 * from the widest screenshot for exactly that reason. Whatever hangs below the
 * frame is what the pan reveals, and the travel is that overflow and nothing
 * more, so the image can never slide up past its own bottom edge into blank
 * space. A screenshot that already fits simply holds still.
 *
 * Every project's screenshot is stacked in the frame and only the active one is
 * opaque, so switching projects is a straight crossfade rather than a white
 * frame while the next file downloads.
 */
function Screenshot({
  project,
  alt,
  active,
  panned,
}: {
  project: WebsiteProjectRecord;
  alt: string;
  active: boolean;
  panned: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const overflowRatio = screenshotOverflowRatio(project);
  const canPan =
    active && !prefersReducedMotion && overflowRatio >= MIN_PAN_OVERFLOW_RATIO;

  return (
    <motion.img
      src={project.screenshot.src}
      alt={active ? alt : ""}
      aria-hidden={active ? undefined : "true"}
      width={project.screenshot.width}
      height={project.screenshot.height}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="absolute left-0 top-0 w-[calc(100%*var(--shot-zoom))] max-w-none select-none sm:w-full"
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        y: canPan && panned ? `-${(overflowRatio * 100).toFixed(3)}%` : "0%",
      }}
      transition={{
        opacity: { duration: prefersReducedMotion ? 0 : 0.4 },
        y: {
          duration: canPan ? panDurationSeconds(overflowRatio) : 0,
          ease: [0.22, 0.61, 0.36, 1],
        },
      }}
    />
  );
}

/** The oversized browser window: chrome, address bar, and the live preview. */
function BrowserPreview({
  project,
  content,
  alt,
  onSwipe,
}: {
  project: WebsiteProjectRecord;
  content: WebsitePortfolioContent;
  alt: string;
  onSwipe: (direction: 1 | -1) => void;
}) {
  const canHover = useCanHover();
  const [panned, setPanned] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  const showsMore =
    canHover && screenshotOverflowRatio(project) >= MIN_PAN_OVERFLOW_RATIO;

  const handleTouchStart = (event: ReactTouchEvent<HTMLAnchorElement>) => {
    const touch = event.touches[0];
    swiped.current = false;
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLAnchorElement>) => {
    const start = touchStart.current;
    const touch = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !touch) return;

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    /* A horizontal drag moves the showcase; anything else is left alone so the
       page can still be scrolled with a finger on the preview. */
    if (
      Math.abs(deltaX) > SWIPE_THRESHOLD_PX &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      swiped.current = true;
      onSwipe(deltaX < 0 ? 1 : -1);
    }
  };

  /* Without this the swipe would also follow the link on the way out. */
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (swiped.current) {
      event.preventDefault();
      swiped.current = false;
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex h-12 items-center gap-2.5 border-b border-white/10 bg-white/[0.06] px-4 sm:h-14 sm:px-5">
        <span className="h-3 w-3 rounded-full bg-rose-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-300/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-3 py-1.5">
          <Lock
            className="h-3.5 w-3.5 shrink-0 text-emerald-300/80"
            aria-hidden="true"
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="truncate text-sm text-white/70 sm:text-base"
            >
              {project.domain}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={canHover ? () => setPanned(true) : undefined}
        onMouseLeave={canHover ? () => setPanned(false) : undefined}
        onFocus={canHover ? () => setPanned(true) : undefined}
        onBlur={canHover ? () => setPanned(false) : undefined}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
        aria-label={`${project.name} — ${content.visitCta} (${content.openHint})`}
        className={cn(
          "group relative block w-full cursor-pointer overflow-hidden bg-slate-900",
          "aspect-[var(--shot-frame-aspect)] sm:aspect-[var(--shot-aspect)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ocean-300",
        )}
        style={
          {
            "--shot-aspect": String(SHOWCASE_VIEWPORT_ASPECT),
            "--shot-zoom": String(MOBILE_ZOOM),
            /* The zoomed image and the frame grow together, so the screenshot
               still reaches the bottom of the frame exactly. */
            "--shot-frame-aspect": String(
              SHOWCASE_VIEWPORT_ASPECT / MOBILE_ZOOM,
            ),
          } as CSSProperties
        }
      >
        {websiteProjects.map((entry) => (
          <Screenshot
            key={entry.id}
            project={entry}
            alt={alt}
            active={entry.id === project.id}
            panned={panned}
          />
        ))}

        {/* The affordance: a plate saying the frame is a link, and on a
            hover-capable pointer, that there is more page below the fold.
            Where there is no hover to reveal it — a phone — it simply stays,
            so a tap on the preview is never a guess. */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5",
            "bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent",
            "opacity-100 transition-opacity duration-300 motion-reduce:transition-none",
            "[@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100",
            "group-focus-visible:opacity-100",
          )}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg sm:text-base">
            {content.visitCta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
          {showsMore ? (
            <span className="hidden text-sm text-white/70 sm:inline">
              {content.panHint}
            </span>
          ) : null}
        </div>
      </a>
    </div>
  );
}

/** Name, category, location, description and the live link. */
function ProjectDetails({
  project,
  content,
  copy,
}: {
  project: WebsiteProjectRecord;
  content: WebsitePortfolioContent;
  copy: WebsitePortfolioContent["projects"][string] | undefined;
}) {
  return (
    <>
      <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-ocean-200">
        {content.projectLabel}
      </p>

      <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {project.name}
      </h3>

      {copy ? (
        <p className="mt-4 text-lg text-white sm:text-xl">
          {copy.category}
          <span className="mt-1 block text-base text-white/60 sm:text-lg">
            {copy.location}
          </span>
        </p>
      ) : null}

      <div className="mt-6 h-px w-full bg-gradient-to-r from-brand-400/70 via-ocean-400/30 to-transparent" />

      {copy ? (
        <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
          {copy.description}
        </p>
      ) : null}

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full",
          "bg-gradient-to-r from-brand-600 to-ocean-500 px-7 py-4 text-base font-semibold text-white sm:text-lg",
          "shadow-[0_18px_40px_-18px_rgba(124,58,237,0.9)] transition-transform duration-300 hover:-translate-y-0.5",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
          "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        )}
      >
        {content.visitCta}
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">{`(${content.openHint})`}</span>
      </a>
    </>
  );
}

export function WebsitePortfolioSection({
  content,
  className,
}: WebsitePortfolioProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const total = websiteProjects.length;
  const project = websiteProjects[index];
  const copy = content.projects[project.id];

  /* Deliberately not a loop: at the last project "next" is simply unavailable,
     which is clearer than silently starting over. */
  const go = useCallback(
    (direction: 1 | -1) => {
      setIndex((current) =>
        Math.min(total - 1, Math.max(0, current + direction)),
      );
    },
    [total],
  );

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  };

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] as const };

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-ocean-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-14 lg:mt-16"
          role="group"
          aria-roledescription="carousel"
          aria-label={content.carouselLabel}
          onKeyDown={handleKeyDown}
        >
          {/* The frame stays put and only its contents change, so moving
              between projects reads as one window loading another site. */}
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur lg:grid-cols-[minmax(0,1.95fr)_minmax(300px,1fr)]">
            <div className="min-w-0 p-3 sm:p-5 lg:p-6">
              <BrowserPreview
                project={project}
                content={content}
                alt={copy?.alt ?? project.name}
                onSwipe={go}
              />
            </div>

            <div className="flex flex-col justify-center border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={project.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    prefersReducedMotion ? undefined : { opacity: 0, x: -16 }
                  }
                  transition={transition}
                  className="flex flex-col"
                >
                  <ProjectDetails
                    project={project}
                    content={content}
                    copy={copy}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {total > 1 ? (
            <div className="mt-8 flex items-center justify-center gap-6 sm:gap-8">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                aria-label={content.previousLabel}
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition",
                  "hover:border-white/35 hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  "disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/15 disabled:hover:bg-white/5",
                  "motion-reduce:transition-none",
                )}
              >
                <ArrowLeft className="h-6 w-6" aria-hidden="true" />
              </button>

              <p
                aria-live="polite"
                className="text-lg font-semibold tabular-nums tracking-[0.18em] text-white sm:text-xl"
              >
                <span className="sr-only">
                  {fillPosition(content.positionLabel, index + 1, total)}
                </span>
                <span aria-hidden="true">
                  {padNumber(index + 1)}
                  <span className="mx-2 text-white/35">/</span>
                  <span className="text-white/50">{padNumber(total)}</span>
                </span>
              </p>

              <button
                type="button"
                onClick={() => go(1)}
                disabled={index === total - 1}
                aria-label={content.nextLabel}
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition",
                  "hover:border-white/35 hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  "disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/15 disabled:hover:bg-white/5",
                  "motion-reduce:transition-none",
                )}
              >
                <ArrowRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
