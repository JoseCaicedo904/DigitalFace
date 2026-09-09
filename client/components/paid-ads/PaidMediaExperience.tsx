import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  MousePointerClick,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { PaidAdvertisingContent } from "@/i18n/content/paidAdvertising";

export type PaidChannel = "meta" | "google" | "tiktok";

const CHANNELS: PaidChannel[] = ["meta", "google", "tiktok"];

const platformUi: Record<
  PaidChannel,
  {
    logo: string;
    logoWidth: number;
    logoHeight: number;
    tint: string;
    strong: string;
    border: string;
    glow: string;
  }
> = {
  meta: {
    logo: "/media/Logos_Partners/14-meta.png",
    logoWidth: 438,
    logoHeight: 127,
    tint: "from-blue-500/20 via-blue-400/5 to-transparent",
    strong: "from-blue-600 to-brand-500",
    border: "border-blue-300/30",
    glow: "bg-blue-500/20",
  },
  google: {
    logo: "/media/Logos_Partners/15-google-ads.png",
    logoWidth: 493,
    logoHeight: 154,
    tint: "from-amber-400/20 via-emerald-400/5 to-transparent",
    strong: "from-amber-400 via-emerald-500 to-blue-500",
    border: "border-amber-300/30",
    glow: "bg-amber-400/20",
  },
  tiktok: {
    logo: "/media/Logos_Partners/16-tiktok.png",
    logoWidth: 465,
    logoHeight: 186,
    tint: "from-cyan-400/20 via-rose-400/5 to-transparent",
    strong: "from-cyan-400 via-white to-rose-400",
    border: "border-cyan-300/30",
    glow: "bg-cyan-400/20",
  },
};

type HeroVisualCopy = PaidAdvertisingContent["heroVisual"];
type ChannelSectionCopy = PaidAdvertisingContent["channels"];

function PlatformLogo({
  channel,
  className,
}: {
  channel: PaidChannel;
  className?: string;
}) {
  const ui = platformUi[channel];
  return (
    <img
      src={ui.logo}
      alt=""
      width={ui.logoWidth}
      height={ui.logoHeight}
      className={cn("h-5 w-auto object-contain", className)}
    />
  );
}

function useRotatingChannel(enabled: boolean) {
  const [active, setActive] = useState<PaidChannel>("meta");

  useEffect(() => {
    if (!enabled) return;
    const timer = window.setInterval(() => {
      setActive((current) => {
        const index = CHANNELS.indexOf(current);
        return CHANNELS[(index + 1) % CHANNELS.length];
      });
    }, 4800);
    return () => window.clearInterval(timer);
  }, [enabled]);

  return [active, setActive] as const;
}

export function PaidMediaCommandCenter({
  content,
}: {
  content: HeroVisualCopy;
}) {
  const reducedMotion = Boolean(useReducedMotion());
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { amount: 0.35 });
  const [active, setActive] = useRotatingChannel(inView && !reducedMotion);
  const channel = content.channels[active];
  const ui = platformUi[active];

  return (
    <div ref={frameRef} className="relative p-4 sm:p-5">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full blur-3xl transition-colors duration-700",
          ui.glow,
        )}
      />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080b18]/90 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              {content.label}
            </p>
            <p className="mt-1 text-xs font-semibold text-white/80">
              {content.status}
            </p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-semibold text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 motion-safe:animate-pulse" />
            {content.liveLabel}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div
            role="group"
            aria-label={content.inputLabel}
            className="grid grid-cols-3 gap-2"
          >
            {CHANNELS.map((key) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(key)}
                  className={cn(
                    "flex min-h-12 items-center justify-center rounded-xl border px-2 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-300/70",
                    isActive
                      ? "border-white/25 bg-white text-slate-950"
                      : "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]",
                  )}
                >
                  <PlatformLogo
                    channel={key}
                    className={cn(
                      "max-w-[4.5rem]",
                      !isActive && "brightness-0 invert opacity-60",
                    )}
                  />
                  <span className="sr-only">{content.channels[key].tab}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "mt-4 overflow-hidden rounded-2xl border bg-gradient-to-br p-4",
                ui.tint,
                ui.border,
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ocean-200">
                    {channel.role}
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">
                    {channel.title}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 h-9 w-1 shrink-0 rounded-full bg-gradient-to-b",
                    ui.strong,
                  )}
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                {channel.signal}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="my-3 flex justify-center text-white/25">
            <ArrowDown
              className="h-4 w-4 motion-safe:animate-bounce"
              aria-hidden="true"
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-ocean-500 text-white shadow-brand-soft">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  {content.systemLabel}
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  {content.systemTitle}
                </p>
              </div>
            </div>
          </div>

          <div className="my-3 flex justify-center text-white/25">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </div>

          <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300/15 text-emerald-200">
                <Target className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/60">
                  {content.outcomeLabel}
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  {content.outcomeTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="relative mt-3 text-center text-[10px] leading-relaxed text-white/35">
        {content.note}
      </p>
    </div>
  );
}

function MetaCanvas({
  copy,
}: {
  copy: ChannelSectionCopy["platforms"]["meta"];
}) {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-blue-950/30">
      <div className="flex items-center gap-3 rounded-2xl bg-white p-3 text-slate-900">
        <span className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-brand-500" />
        <div className="flex-1">
          <span className="block h-2 w-24 rounded-full bg-slate-800" />
          <span className="mt-2 block h-1.5 w-16 rounded-full bg-slate-200" />
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
          {copy.visual.adLabel}
        </span>
      </div>
      <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-brand-600 to-ocean-400 p-5">
        <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/25" />
        <span className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/10 blur-xl" />
        <div className="relative flex h-full flex-col justify-end">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
            {copy.visual.eyebrow}
          </p>
          <p className="mt-2 max-w-[14rem] text-2xl font-semibold leading-tight text-white">
            {copy.visual.headline}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        {copy.visual.labels.map((label, index) => (
          <span
            key={label}
            className={cn(
              "flex-1 rounded-xl border px-2 py-2 text-center text-[10px] font-semibold",
              index === 1
                ? "border-blue-300/30 bg-blue-300/10 text-blue-100"
                : "border-white/10 bg-white/5 text-white/50",
            )}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function GoogleCanvas({
  copy,
}: {
  copy: ChannelSectionCopy["platforms"]["google"];
}) {
  return (
    <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/25">
      <div className="rounded-full border border-white/15 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-lg">
        <span className="flex items-center gap-3">
          <Search
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden="true"
          />
          {copy.visual.headline}
        </span>
      </div>
      <div className="mt-4 rounded-2xl border border-blue-300/20 bg-white p-5 text-slate-900">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded bg-slate-100 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-slate-500">
            {copy.visual.eyebrow}
          </span>
          <PlatformLogo channel="google" className="h-4 max-w-[5.2rem]" />
        </div>
        <p className="mt-4 text-lg font-semibold text-blue-700">{copy.title}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          {copy.visual.detail}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {copy.visual.labels.map((label, index) => (
            <div key={label} className="text-center">
              <span
                className={cn(
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold",
                  index === 2
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-blue-50 text-blue-700",
                )}
              >
                {index === 2 ? <Check className="h-4 w-4" /> : index + 1}
              </span>
              <span className="mt-2 block text-[9px] font-semibold text-slate-500">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TikTokCanvas({
  copy,
}: {
  copy: ChannelSectionCopy["platforms"]["tiktok"];
}) {
  const reducedMotion = Boolean(useReducedMotion());
  return (
    <div className="relative mx-auto aspect-[9/15] w-full max-w-[17rem] overflow-hidden rounded-[2.25rem] border border-white/15 bg-black p-4 shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.32),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(251,113,133,0.28),transparent_42%)]" />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[9px] font-semibold text-white/50">
        <span>{copy.visual.eyebrow}</span>
        <PlatformLogo channel="tiktok" className="h-4 brightness-0 invert" />
      </div>
      <div className="relative flex h-full flex-col justify-center">
        <div className="space-y-3">
          {copy.visual.labels.map((label, index) => (
            <motion.div
              key={label}
              initial={
                reducedMotion ? false : { opacity: 0.45, x: index % 2 ? 8 : -8 }
              }
              animate={
                reducedMotion ? undefined : { opacity: [0.45, 1, 0.45], x: 0 }
              }
              transition={{
                duration: 3.4,
                delay: index * 0.5,
                repeat: Infinity,
              }}
              className={cn(
                "rounded-2xl border px-4 py-3 backdrop-blur",
                index === 1
                  ? "ml-5 border-rose-300/25 bg-rose-300/10"
                  : "mr-5 border-cyan-300/25 bg-cyan-300/10",
              )}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                0{index + 1}
              </span>
              <span className="mt-1 block text-sm font-semibold text-white">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-5">
        <p className="text-base font-semibold leading-tight text-white">
          {copy.visual.headline}
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/15">
          <motion.span
            className="block h-full rounded-full bg-gradient-to-r from-cyan-300 to-rose-300"
            animate={
              reducedMotion ? { width: "70%" } : { width: ["18%", "100%"] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}

function ChannelCanvas({
  channel,
  content,
}: {
  channel: PaidChannel;
  content: ChannelSectionCopy;
}) {
  if (channel === "meta") return <MetaCanvas copy={content.platforms.meta} />;
  if (channel === "google")
    return <GoogleCanvas copy={content.platforms.google} />;
  return <TikTokCanvas copy={content.platforms.tiktok} />;
}

function ChannelPanel({
  channel,
  content,
  reducedMotion,
}: {
  channel: PaidChannel;
  content: ChannelSectionCopy;
  reducedMotion: boolean;
}) {
  const platform = content.platforms[channel];
  const ui = platformUi[channel];

  return (
    <TabsContent value={channel} className="mt-6">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="grid overflow-hidden rounded-[2rem] border border-ink-100 bg-slate-950 shadow-2xl shadow-slate-950/10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)]"
      >
        <div className="relative p-7 sm:p-9 lg:p-11">
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-80",
              ui.tint,
            )}
          />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ocean-200">
                {platform.role}
              </span>
              <span className="text-xs font-medium text-white/45">
                {platform.network}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {platform.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
              {platform.description}
            </p>

            <div className="mt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {content.bestWhenLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {platform.bestWhen.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-white/75"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-ocean-200"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ocean-200">
                {content.systemRoleLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {platform.systemRole}
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[30rem] items-center justify-center overflow-hidden border-t border-white/10 bg-[#070a14] p-7 lg:border-l lg:border-t-0">
          <div
            aria-hidden="true"
            className={cn("absolute h-72 w-72 rounded-full blur-3xl", ui.glow)}
          />
          <ChannelCanvas channel={channel} content={content} />
        </div>
      </motion.div>
    </TabsContent>
  );
}

export function ChannelRoleExplorer({
  content,
}: {
  content: ChannelSectionCopy;
}) {
  const reducedMotion = Boolean(useReducedMotion());
  const [active, setActive] = useState<PaidChannel>("meta");

  return (
    <Tabs
      value={active}
      onValueChange={(value) => setActive(value as PaidChannel)}
      className="mt-12"
    >
      <TabsList
        aria-label={content.selectionLabel}
        className="grid h-auto w-full grid-cols-1 gap-2 rounded-2xl border border-ink-100 bg-ink-50 p-2 sm:grid-cols-3"
      >
        {CHANNELS.map((channel) => (
          <TabsTrigger
            key={channel}
            value={channel}
            className="min-h-14 gap-3 rounded-xl border border-transparent px-4 py-3 text-ink-500 data-[state=active]:border-ink-100 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-brand-card"
          >
            <PlatformLogo channel={channel} className="h-5 max-w-[5.5rem]" />
            <span className="text-sm font-semibold">
              {content.platforms[channel].name}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>

      {CHANNELS.map((channel) => (
        <ChannelPanel
          key={channel}
          channel={channel}
          content={content}
          reducedMotion={reducedMotion}
        />
      ))}

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-ocean-50 p-6 sm:flex-row sm:items-start sm:gap-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-brand-soft">
          <MousePointerClick className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {content.principleTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            {content.principleBody}
          </p>
        </div>
      </div>
    </Tabs>
  );
}

export function FlowArrow() {
  return (
    <ArrowRight
      className="hidden h-5 w-5 shrink-0 text-brand-300 lg:block"
      aria-hidden="true"
    />
  );
}
