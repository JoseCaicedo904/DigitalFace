import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Bookmark,
  Check,
  ChevronRight,
  Heart,
  HeartPulse,
  MessageCircle,
  MoreHorizontal,
  Search,
  Send,
  Smile,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  AdCampaignScript,
  AdCreative,
  AdMarket,
  FeedPost,
} from "./adCampaign";
import { PhoneFrame } from "./PhoneFrame";
import { cn } from "@/lib/utils";

/**
 * The demonstration is a fixed sequence of scenes rather than a state machine:
 * nothing here responds to input, so an ordered list with durations is the whole
 * timeline. `stage` maps each scene onto the marketing copy beside the phone.
 */
const SCENES = [
  { key: "feed", stage: 0, ms: 2400 },
  { key: "ad", stage: 0, ms: 2500 },
  { key: "tap", stage: 1, ms: 800 },
  { key: "intent", stage: 1, ms: 1300 },
  { key: "choice", stage: 1, ms: 1250 },
  { key: "contact", stage: 2, ms: 2600 },
  { key: "submit", stage: 2, ms: 750 },
  { key: "sent", stage: 3, ms: 1350 },
  { key: "captured", stage: 3, ms: 950 },
  { key: "organized", stage: 3, ms: 950 },
  { key: "ready", stage: 3, ms: 1250 },
  { key: "hold", stage: 3, ms: 2400 },
] as const;

type SceneKey = (typeof SCENES)[number]["key"];

const SCENE_AT = Object.fromEntries(
  SCENES.map((scene, index) => [scene.key, index]),
) as Record<SceneKey, number>;

/** How much of the ad is already showing when the browsing scene ends. */
const PEEK_PX = 132;

/**
 * The artwork is drawn, not photographed: there is no stock imagery in the
 * repository, and a composed gradient stays sharp at every size and costs
 * nothing to load. One palette per market, in the site's own colours.
 */
const marketArt: Record<
  AdMarket,
  { canvas: string; halo: string; avatar: string; icon: LucideIcon }
> = {
  dental: {
    canvas: "linear-gradient(145deg,#082f49 0%,#0284c7 54%,#a5f3fc 100%)",
    halo: "radial-gradient(circle at 74% 22%,rgba(255,255,255,0.5),rgba(255,255,255,0) 62%)",
    avatar: "from-ocean-600 to-ocean-400",
    icon: Smile,
  },
  aesthetic: {
    canvas: "linear-gradient(145deg,#3b0764 0%,#7c3aed 54%,#e9d5ff 100%)",
    halo: "radial-gradient(circle at 72% 20%,rgba(255,255,255,0.45),rgba(255,255,255,0) 60%)",
    avatar: "from-brand-600 to-brand-400",
    icon: HeartPulse,
  },
  medSpa: {
    canvas: "linear-gradient(145deg,#7c2d12 0%,#f97316 54%,#fed7aa 100%)",
    halo: "radial-gradient(circle at 70% 20%,rgba(255,255,255,0.45),rgba(255,255,255,0) 60%)",
    avatar: "from-sunset-500 to-sunset-300",
    icon: Sparkles,
  },
};

interface AdFeedPhoneProps {
  script: AdCampaignScript;
  /**
   * Reports the stage on screen so the surrounding copy can follow along. Must
   * be referentially stable (a `useState` setter is ideal).
   */
  onStageChange?: (stage: number) => void;
  className?: string;
}

/**
 * A controlled, looping demonstration of one paid advertisement becoming a lead.
 * Nothing is fetched, submitted or measured: the script is the single source of
 * truth, so the story plays the same way on every visit.
 */
export function AdFeedPhone({
  script,
  onStageChange,
  className,
}: AdFeedPhoneProps) {
  const prefersReducedMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { amount: 0.3 });

  const [scene, setScene] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [offsets, setOffsets] = useState({ ad: 0, creative: 0 });

  const still = prefersReducedMotion === true;
  const running = inView && !still;
  const ad = script.ads[cycle % script.ads.length];
  const art = marketArt[ad.market];
  const reached = (key: SceneKey) => scene >= SCENE_AT[key];

  /** Without motion the story is simply shown at its outcome. */
  useEffect(() => {
    if (still) setScene(SCENES.length - 1);
  }, [still]);

  useEffect(() => {
    if (!running) return;

    const timer = window.setTimeout(() => {
      if (scene < SCENES.length - 1) {
        setScene(scene + 1);
        return;
      }
      // The next loop advertises the next market, so one system covers all three.
      setScene(0);
      setCycle((value) => value + 1);
    }, SCENES[scene].ms);

    return () => window.clearTimeout(timer);
  }, [running, scene, cycle]);

  /**
   * The feed is scrolled by transform, so the distances have to be measured
   * rather than guessed: the card heights change with the breakpoint and with
   * the length of each ad's copy.
   */
  useLayoutEffect(() => {
    const column = columnRef.current;
    const adNode = adRef.current;
    const creativeNode = creativeRef.current;
    if (!column || !adNode || !creativeNode) return;

    const measure = () => {
      const top = column.getBoundingClientRect().top;
      const next = {
        ad: Math.max(adNode.getBoundingClientRect().top - top - 8, 0),
        creative: Math.max(
          creativeNode.getBoundingClientRect().top - top - 8,
          0,
        ),
      };
      setOffsets((current) =>
        current.ad === next.ad && current.creative === next.creative
          ? current
          : next,
      );
    };

    measure();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(column);
    return () => observer.disconnect();
  }, [cycle, script]);

  useEffect(() => {
    onStageChange?.(SCENES[scene].stage);
  }, [onStageChange, scene]);

  const formOpen = reached("intent");
  const submitted = reached("sent");
  const typingContact = scene === SCENE_AT.contact && !still;
  const statusesDone =
    (reached("captured") ? 1 : 0) +
    (reached("organized") ? 1 : 0) +
    (reached("ready") ? 1 : 0);

  const feedY = formOpen
    ? -offsets.creative
    : reached("ad")
      ? -offsets.ad
      : -Math.max(offsets.ad - PEEK_PX, 0);

  const feedTransition = still
    ? { duration: 0 }
    : scene === 0
      ? { duration: 1.85, delay: 0.45, ease: "easeInOut" as const }
      : { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

  const step = submitted ? "sent" : reached("contact") ? "contact" : "intent";

  return (
    <div
      ref={frameRef}
      className={cn(
        "relative mx-auto w-full max-w-[300px] sm:max-w-[326px]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[3.5rem] bg-glow-radial opacity-70 blur-2xl"
      />

      <PhoneFrame clock={script.clockLabel}>
        <div className="flex items-center gap-2.5 border-b border-ink-100 px-3.5 py-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-ocean-500 text-white">
            <Sparkles className="h-3 w-3" />
          </span>
          <span className="flex h-6 flex-1 items-center gap-1.5 rounded-full bg-ink-50 px-2.5">
            <Search className="h-3 w-3 text-ink-300" />
            <span className="h-1.5 w-14 rounded-full bg-ink-200" />
          </span>
          <span className="flex shrink-0 items-center gap-2 text-ink-300">
            <Heart className="h-4 w-4" />
            <Send className="h-4 w-4" />
          </span>
        </div>

        <div className="flex gap-2.5 border-b border-ink-100 px-3.5 py-2.5">
          {[0, 1, 2, 3, 4, 5].map((ring) => (
            <span
              key={ring}
              className={cn(
                "h-9 w-9 shrink-0 rounded-full p-[1.5px]",
                ring === 0
                  ? "bg-gradient-to-br from-sunset-400 via-brand-500 to-ocean-500"
                  : "bg-ink-200",
              )}
            >
              <span className="flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-ink-200 to-ink-100" />
            </span>
          ))}
        </div>

        <div className="relative h-[306px] overflow-hidden bg-ink-50/70 sm:h-[346px] lg:h-[380px]">
          <motion.div
            key={cycle}
            ref={columnRef}
            initial={still ? false : { y: 0 }}
            animate={{ y: feedY }}
            transition={feedTransition}
            className="relative space-y-2.5 p-2.5"
          >
            <PostCard post={script.posts[0]} />
            <PostCard post={script.posts[1]} />

            <article className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.7)]">
              {/* The ref sits on the header row so the measurement ignores the
                  card's own border radius and shadow. */}
              <div
                ref={adRef}
                className="flex items-center gap-2 px-2.5 pt-2.5"
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white",
                    art.avatar,
                  )}
                >
                  <art.icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11.5px] font-semibold text-slate-900">
                    {ad.business}
                  </p>
                  <p className="truncate text-[9px] text-ink-400">
                    {script.sponsoredLabel}
                  </p>
                </div>
                <MoreHorizontal className="h-4 w-4 shrink-0 text-ink-300" />
              </div>

              <p className="px-2.5 pt-2 text-[10.5px] leading-snug text-ink-600">
                {ad.caption}
              </p>

              <div
                ref={creativeRef}
                className="relative mt-2.5 aspect-[1.91/1] overflow-hidden bg-slate-900"
              >
                <motion.div
                  key={`art-${cycle}`}
                  className="absolute inset-0"
                  style={{ background: art.canvas }}
                  animate={still ? undefined : { scale: [1, 1.09] }}
                  transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                >
                  <span
                    className="absolute inset-0"
                    style={{ background: art.halo }}
                  />
                  <span className="absolute -bottom-14 -left-8 h-32 w-32 rounded-full border border-white/25" />
                  <span className="absolute -bottom-20 -left-14 h-44 w-44 rounded-full border border-white/15" />
                  <span className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15 blur-xl" />
                </motion.div>
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
                <div className="absolute inset-x-3 bottom-2.5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-white/70">
                    {ad.creativeEyebrow}
                  </p>
                  <p className="mt-1 text-[13px] font-semibold leading-tight text-white">
                    {ad.creativeTitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-ink-100 bg-ink-50/80 px-2.5 py-2">
                <p className="min-w-0 flex-1 truncate text-[10.5px] font-semibold text-slate-800">
                  {ad.offer}
                </p>
                <motion.span
                  animate={
                    scene === SCENE_AT.tap
                      ? { scale: [1, 0.93, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative flex shrink-0 items-center gap-0.5 rounded-full bg-gradient-to-r from-brand-600 to-ocean-500 py-1.5 pl-3 pr-2 text-[10px] font-semibold text-white shadow-[0_12px_22px_-14px_rgba(124,58,237,0.95)]"
                >
                  {ad.ctaLabel}
                  <ChevronRight className="h-3 w-3" />
                  <AnimatePresence>
                    {scene === SCENE_AT.tap ? (
                      <motion.span
                        key="tap-ring"
                        initial={{ opacity: 0.8, scale: 0.65 }}
                        animate={{ opacity: 0, scale: 1.55 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border-2 border-white/80"
                      />
                    ) : null}
                  </AnimatePresence>
                </motion.span>
              </div>

              <div className="flex items-center gap-3 px-2.5 py-1.5 text-ink-300">
                <Heart className="h-3.5 w-3.5" />
                <MessageCircle className="h-3.5 w-3.5" />
                <Send className="h-3.5 w-3.5" />
                <Bookmark className="ml-auto h-3.5 w-3.5" />
              </div>
            </article>

            <PostCard post={script.posts[2]} />
          </motion.div>

          <AnimatePresence>
            {formOpen ? (
              <motion.span
                key="scrim"
                initial={still ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="pointer-events-none absolute inset-0 bg-slate-950/25"
              />
            ) : null}
          </AnimatePresence>

          <AnimatePresence>
            {formOpen ? (
              <motion.div
                key="lead-form"
                initial={still ? false : { y: "110%" }}
                animate={{ y: 0, top: submitted ? "5%" : "30%" }}
                exit={{ y: "110%" }}
                transition={{ type: "spring", stiffness: 200, damping: 27 }}
                className="absolute inset-x-0 bottom-0 flex flex-col rounded-t-[1.35rem] border-t border-ink-100 bg-white px-3.5 pb-3.5 pt-2.5 shadow-[0_-26px_60px_-34px_rgba(15,23,42,0.7)]"
              >
                <span className="mx-auto h-1 w-9 shrink-0 rounded-full bg-ink-200" />

                <div className="mt-2.5 flex shrink-0 items-center gap-2">
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white",
                      art.avatar,
                    )}
                  >
                    <art.icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[11.5px] font-semibold text-slate-900">
                      {ad.business}
                    </p>
                    <p className="truncate text-[9px] text-ink-400">
                      {script.form.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-2.5 flex shrink-0 gap-1">
                  <span className="h-0.5 flex-1 rounded-full bg-gradient-to-r from-brand-600 to-ocean-500" />
                  <span
                    className={cn(
                      "h-0.5 flex-1 rounded-full transition-colors duration-500",
                      step === "intent"
                        ? "bg-ink-200"
                        : "bg-gradient-to-r from-brand-600 to-ocean-500",
                    )}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={still ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                    className="mt-3"
                  >
                    {step === "intent" ? (
                      <>
                        <p className="text-[11.5px] font-semibold text-slate-900">
                          {script.form.intentQuestion}
                        </p>
                        <div className="mt-2.5 space-y-1.5">
                          {ad.options.map((option, index) => {
                            const chosen =
                              reached("choice") && index === ad.choice;
                            return (
                              <motion.span
                                key={option}
                                animate={
                                  chosen
                                    ? { scale: [1, 0.975, 1] }
                                    : { scale: 1 }
                                }
                                transition={{ duration: 0.36, ease: "easeOut" }}
                                className={cn(
                                  "flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-[11px] font-medium transition-colors duration-300",
                                  chosen
                                    ? "border-brand-300 bg-brand-50 text-brand-700"
                                    : "border-ink-100 bg-ink-50/70 text-ink-600",
                                )}
                              >
                                {option}
                                {chosen ? (
                                  <Check className="h-3.5 w-3.5 shrink-0" />
                                ) : (
                                  <span className="h-3 w-3 shrink-0 rounded-full border border-ink-200" />
                                )}
                              </motion.span>
                            );
                          })}
                        </div>
                      </>
                    ) : null}

                    {step === "contact" ? (
                      <>
                        <p className="text-[11.5px] font-semibold text-slate-900">
                          {script.form.contactQuestion}
                        </p>
                        <div className="mt-2.5 space-y-2">
                          <Field
                            label={script.form.nameLabel}
                            value={ad.lead.name}
                            active={typingContact}
                            delayMs={260}
                          />
                          <Field
                            label={script.form.phoneLabel}
                            value={ad.lead.phone}
                            active={typingContact}
                            delayMs={1180}
                          />
                        </div>
                        <motion.span
                          animate={
                            scene === SCENE_AT.submit
                              ? { scale: [1, 0.965, 1] }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="mt-3 flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-ocean-500 px-4 py-2.5 text-[11.5px] font-semibold text-white shadow-brand-soft"
                        >
                          {script.form.submitLabel}
                        </motion.span>
                      </>
                    ) : null}

                    {step === "sent" ? (
                      <>
                        <div className="flex items-center gap-2.5">
                          <motion.span
                            initial={still ? false : { scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 18,
                            }}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-ocean-500 text-white"
                          >
                            <Check className="h-5 w-5" />
                          </motion.span>
                          <div className="min-w-0">
                            <p className="text-[12.5px] font-semibold text-slate-900">
                              {script.form.sentTitle}
                            </p>
                            <p className="mt-0.5 text-[10px] leading-relaxed text-ink-500">
                              {script.form.sentNote}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 rounded-xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-ocean-50 p-2.5 shadow-[0_18px_45px_-34px_rgba(124,58,237,0.65)]">
                          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-brand-600">
                            {script.form.systemLabel}
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {script.form.statuses.map((status, index) => {
                              const done = statusesDone > index;
                              return (
                                <li
                                  key={status}
                                  className="flex items-center gap-2"
                                >
                                  <motion.span
                                    animate={{
                                      scale: done ? 1 : 0.85,
                                      opacity: done ? 1 : 0.5,
                                    }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeOut",
                                    }}
                                    className={cn(
                                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                                      done
                                        ? "border-transparent bg-gradient-to-br from-brand-600 to-ocean-500 text-white"
                                        : "border-ink-200 bg-white text-transparent",
                                    )}
                                  >
                                    <Check className="h-2.5 w-2.5" />
                                  </motion.span>
                                  <span
                                    className={cn(
                                      "text-[10.5px] transition-colors duration-300",
                                      done
                                        ? "font-medium text-slate-900"
                                        : "text-ink-400",
                                    )}
                                  >
                                    {status}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="flex justify-center bg-white py-2">
          <span className="h-1 w-24 rounded-full bg-ink-200" />
        </div>
      </PhoneFrame>

      <Transcript script={script} ad={ad} />
    </div>
  );
}

/** An ordinary post, kept deliberately quiet so the advertisement carries. */
function PostCard({ post }: { post: FeedPost }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-2.5 shadow-[0_10px_28px_-26px_rgba(15,23,42,0.5)]">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-ink-300 to-ink-200" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[10.5px] font-semibold text-slate-700">
            {post.author}
          </p>
          <p className="truncate text-[8.5px] text-ink-400">{post.meta}</p>
        </div>
        <MoreHorizontal className="h-3.5 w-3.5 shrink-0 text-ink-300" />
      </div>
      <div className="mt-2 h-[112px] rounded-xl bg-gradient-to-br from-ink-200 via-ink-100 to-ink-50" />
      <div className="mt-2 flex items-center gap-2.5 text-ink-300">
        <Heart className="h-3 w-3" />
        <MessageCircle className="h-3 w-3" />
        <Send className="h-3 w-3" />
      </div>
      <p className="mt-1.5 truncate text-[9.5px] text-ink-400">
        {post.caption}
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  active,
  delayMs,
}: {
  label: string;
  value: string;
  active: boolean;
  delayMs: number;
}) {
  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50/70 px-3 py-1.5">
      <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-ink-400">
        {label}
      </p>
      <p className="mt-0.5 flex min-h-[16px] items-center text-[11.5px] font-medium text-slate-800">
        <TypedText value={value} active={active} delayMs={delayMs} />
      </p>
    </div>
  );
}

/**
 * Fills a field the way a person would, so the visitor never has to type
 * anything for the story to move forward.
 */
function TypedText({
  value,
  active,
  delayMs,
  speedMs = 45,
}: {
  value: string;
  active: boolean;
  delayMs: number;
  speedMs?: number;
}) {
  const [count, setCount] = useState(value.length);

  useEffect(() => {
    if (!active) {
      setCount(value.length);
      return;
    }

    setCount(0);
    let typed = 0;
    let interval = 0;

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        typed += 1;
        setCount(typed);
        if (typed >= value.length) window.clearInterval(interval);
      }, speedMs);
    }, delayMs);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [active, value, delayMs, speedMs]);

  return (
    <span>
      {value.slice(0, count)}
      {active && count < value.length ? (
        <span className="ml-px inline-block h-3 w-px translate-y-[2px] bg-brand-500 motion-safe:animate-pulse" />
      ) : null}
    </span>
  );
}

/** The animated feed is decorative; this is what assistive tech reads. */
function Transcript({
  script,
  ad,
}: {
  script: AdCampaignScript;
  ad: AdCreative;
}) {
  const { form } = script;
  return (
    <div className="sr-only">
      <p>{script.transcriptLabel}</p>
      <ol>
        <li>{`${ad.business}, ${script.sponsoredLabel}: ${ad.caption} ${ad.offer}. ${ad.ctaLabel}.`}</li>
        <li>{`${form.intentQuestion} ${ad.options[ad.choice]}.`}</li>
        <li>{`${form.contactQuestion} ${ad.lead.name}, ${ad.lead.phone}. ${form.submitLabel}.`}</li>
        <li>{`${form.sentTitle}. ${form.sentNote}`}</li>
        <li>{`${form.systemLabel}: ${form.statuses.join(", ")}.`}</li>
      </ol>
    </div>
  );
}
