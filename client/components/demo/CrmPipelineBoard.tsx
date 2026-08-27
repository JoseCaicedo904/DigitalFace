import { useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  PanelsTopLeft,
  Sparkles,
} from "lucide-react";
import type { CrmPipelineScript, CrmPipelineStage } from "./crmPipeline";
import { cn } from "@/lib/utils";

interface CrmPipelineBoardProps {
  script: CrmPipelineScript;
  onStageChange?: (stage: number) => void;
}

const SCENES = [
  { key: "waiting", stage: 0, ms: 700 },
  { key: "received", stage: 0, ms: 2300 },
  { key: "contacted", stage: 1, ms: 2500 },
  { key: "interested", stage: 2, ms: 2700 },
  { key: "requested", stage: 3, ms: 3700 },
  { key: "reset", stage: 3, ms: 650 },
] as const;

const FINAL_SCENE = SCENES.length - 2;

const stageAccents = [
  {
    dot: "bg-brand-500",
    soft: "bg-brand-50 text-brand-700",
    border: "border-brand-200/80",
  },
  {
    dot: "bg-ocean-500",
    soft: "bg-ocean-50 text-ocean-700",
    border: "border-ocean-200/80",
  },
  {
    dot: "bg-sunset-500",
    soft: "bg-sunset-50 text-sunset-700",
    border: "border-sunset-200/80",
  },
  {
    dot: "bg-emerald-500",
    soft: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-200/80",
  },
] as const;

function getAccent(index: number) {
  return stageAccents[index] ?? stageAccents[stageAccents.length - 1];
}

function LeadCard({
  script,
  stage,
  stageIndex,
  layoutId,
  compact = false,
  reducedMotion = false,
}: {
  script: CrmPipelineScript;
  stage: CrmPipelineStage;
  stageIndex: number;
  layoutId?: string;
  compact?: boolean;
  reducedMotion?: boolean;
}) {
  const accent = getAccent(stageIndex);
  const latestDetail = stage.details[stage.details.length - 1];
  const isFinal = stageIndex === script.stages.length - 1;

  return (
    <motion.article
      layoutId={layoutId}
      layout={layoutId ? "position" : false}
      initial={
        reducedMotion ? false : { opacity: 0, scale: 0.97, y: compact ? 8 : 0 }
      }
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={
        reducedMotion
          ? undefined
          : { opacity: 0, scale: 0.97, y: compact ? -6 : 0 }
      }
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              layout: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.28 },
              scale: { duration: 0.28 },
              y: { duration: 0.28 },
            }
      }
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-white p-4 shadow-brand-card",
        accent.border,
        compact && "sm:mx-auto sm:max-w-md",
      )}
    >
      <span
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-ocean-400 to-emerald-400 transition-opacity motion-reduce:transition-none",
          isFinal ? "opacity-100" : "opacity-65",
        )}
      />

      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-ocean-500 text-xs font-bold text-white shadow-brand-soft">
          {script.lead.initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-900">
            {script.lead.name}
          </p>
          <p className="mt-0.5 truncate text-xs text-ink-500">
            {script.lead.summary}
          </p>
        </div>
        {isFinal ? (
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
        ) : (
          <span
            className={cn(
              "mt-1.5 h-2 w-2 shrink-0 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.9)]",
              accent.dot,
            )}
          />
        )}
      </div>

      <div className="mt-4 border-t border-ink-100 pt-3">
        <span className="block text-[11px] font-medium text-ink-500">
          {script.lead.channel}
        </span>
        <span
          className={cn(
            "mt-2 inline-flex max-w-full rounded-full px-2.5 py-1 text-[10px] font-semibold leading-snug",
            accent.soft,
          )}
        >
          {stage.cardStatus}
        </span>
      </div>

      {latestDetail ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${latestDetail.label}:${latestDetail.value}`}
            initial={reducedMotion ? false : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: reducedMotion ? 0 : 0.24 }}
            className="mt-3 rounded-xl bg-slate-50 px-3 py-2.5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              {latestDetail.label}
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-800">
              {latestDetail.value}
            </p>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </motion.article>
  );
}

function ActivityList({
  script,
  activeStage,
}: {
  script: CrmPipelineScript;
  activeStage: number;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
        {script.activityLabel}
      </p>
      <ol className="mt-3 space-y-2.5">
        {script.stages.map((stage, index) => {
          const reached = index <= activeStage;
          const current = index === activeStage;
          return (
            <li key={stage.activity} className="flex items-center gap-2.5">
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 motion-reduce:transition-none",
                  reached
                    ? "border-transparent bg-gradient-to-br from-brand-600 to-ocean-500 text-white"
                    : "border-ink-200 bg-white text-ink-400",
                )}
              >
                {reached ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Circle className="h-2 w-2 fill-current" />
                )}
              </span>
              <span
                className={cn(
                  "text-xs transition-colors duration-500 motion-reduce:transition-none",
                  current
                    ? "font-semibold text-slate-900"
                    : reached
                      ? "text-ink-600"
                      : "text-ink-500",
                )}
              >
                {stage.activity}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function LeadDetails({
  script,
  activeStage,
  compact = false,
  reducedMotion = false,
}: {
  script: CrmPipelineScript;
  activeStage: number;
  compact?: boolean;
  reducedMotion?: boolean;
}) {
  const stage = script.stages[activeStage];
  if (!stage) return null;

  return (
    <div
      className={cn(
        "grid gap-4 rounded-2xl border border-ink-100 bg-white p-4 shadow-sm",
        compact
          ? "mt-4 min-h-[25rem] md:min-h-[19rem] md:grid-cols-2"
          : "mt-5 min-h-[11.5rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(210px,0.7fr)] lg:p-5",
      )}
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
          {script.detailsLabel}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <AnimatePresence initial={false}>
            {stage.details.map((detail) => (
              <motion.div
                key={`${detail.label}:${detail.value}`}
                initial={reducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: reducedMotion ? 0 : 0.28 }}
                className="rounded-xl border border-ink-100 bg-slate-50 px-3 py-2.5"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                  {detail.label}
                </p>
                <p className="mt-1 truncate text-xs font-semibold text-slate-800">
                  {detail.value}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <ActivityList script={script} activeStage={activeStage} />

      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-slate-950 p-4 text-white",
          compact && "md:col-span-2",
        )}
      >
        <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/25 blur-2xl" />
        <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-ocean-200">
          {activeStage === script.stages.length - 1 ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </span>
        <p className="relative mt-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
          {script.nextStepLabel}
        </p>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={stage.nextStep}
            initial={reducedMotion ? false : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            className="relative mt-1.5 text-sm font-semibold leading-snug"
          >
            {stage.nextStep}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

function MobileWorkspace({
  script,
  activeStage,
  showCard,
  showContext,
  cycle,
  reducedMotion,
}: {
  script: CrmPipelineScript;
  activeStage: number;
  showCard: boolean;
  showContext: boolean;
  cycle: number;
  reducedMotion: boolean;
}) {
  const stage = script.stages[activeStage];
  if (!stage) return null;

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-5 lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
            {script.stageLabel} {activeStage + 1} {script.ofLabel}{" "}
            {script.stages.length}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {stage.label}
          </p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Sparkles className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-1.5">
        {script.stages.map((item, index) => (
          <span
            key={item.label}
            className={cn(
              "h-1.5 rounded-full transition-colors duration-500 motion-reduce:transition-none",
              index <= activeStage
                ? "bg-gradient-to-r from-brand-500 to-ocean-400"
                : "bg-ink-100",
            )}
          />
        ))}
      </div>

      <div className="mt-5 min-h-[14rem]">
        <AnimatePresence mode="wait">
          {showCard ? (
            <LeadCard
              key={`mobile-lead-${cycle}-${activeStage}`}
              script={script}
              stage={stage}
              stageIndex={activeStage}
              compact
              reducedMotion={reducedMotion}
            />
          ) : null}
        </AnimatePresence>
      </div>

      {showContext ? (
        <LeadDetails
          script={script}
          activeStage={activeStage}
          compact
          reducedMotion={reducedMotion}
        />
      ) : (
        <div className="mt-4 min-h-[25rem] rounded-2xl border border-dashed border-ink-100 bg-white/45 md:min-h-[19rem]" />
      )}
    </div>
  );
}

function DesktopWorkspace({
  script,
  activeStage,
  showCard,
  showContext,
  cycle,
  layoutScope,
  reducedMotion,
}: {
  script: CrmPipelineScript;
  activeStage: number;
  showCard: boolean;
  showContext: boolean;
  cycle: number;
  layoutScope: string;
  reducedMotion: boolean;
}) {
  return (
    <div className="hidden p-6 lg:block">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-500">
        {script.boardLabel}
      </p>

      <LayoutGroup id={`${layoutScope}-desktop`}>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {script.stages.map((stage, index) => {
            const active = index === activeStage;
            const passed = index < activeStage;
            const accent = getAccent(index);
            return (
              <div
                key={stage.label}
                className={cn(
                  "relative min-w-0 rounded-2xl border bg-slate-50/80 p-3 transition-colors duration-500 motion-reduce:transition-none",
                  active ? accent.border : "border-ink-100",
                )}
              >
                <div className="flex min-h-8 items-center gap-2">
                  <span
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full transition-colors duration-500 motion-reduce:transition-none",
                      active || passed ? accent.dot : "bg-ink-200",
                    )}
                  />
                  <p
                    className={cn(
                      "min-w-0 text-xs font-semibold transition-colors duration-500 motion-reduce:transition-none",
                      active ? "text-slate-900" : "text-ink-500",
                    )}
                  >
                    {stage.label}
                  </p>
                </div>

                <div className="relative mt-3 min-h-[14.5rem]">
                  <AnimatePresence initial={false}>
                    {showCard && active ? (
                      <LeadCard
                        key={`desktop-lead-${cycle}`}
                        layoutId={`${layoutScope}-lead-${cycle}`}
                        script={script}
                        stage={stage}
                        stageIndex={index}
                        reducedMotion={reducedMotion}
                      />
                    ) : passed ? (
                      <motion.div
                        key={`moved-${index}`}
                        initial={reducedMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={reducedMotion ? undefined : { opacity: 0 }}
                        transition={{ duration: reducedMotion ? 0 : 0.2 }}
                        className="flex h-full min-h-[10rem] flex-col items-center justify-center rounded-xl border border-dashed border-ink-200/80 text-center"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="mt-2 text-[10px] font-medium text-ink-500">
                          {script.movedLabel}
                        </span>
                      </motion.div>
                    ) : (
                      <div className="flex h-full min-h-[10rem] items-center justify-center rounded-xl border border-dashed border-ink-100">
                        <span className="h-1.5 w-12 rounded-full bg-ink-100" />
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </LayoutGroup>

      {showContext ? (
        <LeadDetails
          script={script}
          activeStage={activeStage}
          reducedMotion={reducedMotion}
        />
      ) : (
        <div className="mt-5 min-h-[11.5rem] rounded-2xl border border-dashed border-ink-100 bg-white/45" />
      )}
    </div>
  );
}

function Transcript({ script }: { script: CrmPipelineScript }) {
  return (
    <div className="sr-only">
      <p>{script.transcriptLabel}</p>
      <p>
        {script.lead.name}. {script.lead.summary}. {script.lead.channel}.
      </p>
      <ol>
        {script.stages.map((stage) => (
          <li key={stage.label}>
            {stage.label}. {stage.activity}.{" "}
            {stage.details
              .map((detail) => `${detail.label}: ${detail.value}`)
              .join(". ")}
            . {script.nextStepLabel}: {stage.nextStep}.
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * A controlled lead journey rather than a product screenshot. One fictional
 * opportunity moves through four plain-language stages while context and the
 * next action are revealed. The visual pauses offscreen and loops only when it
 * can be seen.
 */
export function CrmPipelineBoard({
  script,
  onStageChange,
}: CrmPipelineBoardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layoutScope = useId();
  const prefersReducedMotion = useReducedMotion();
  const still = Boolean(prefersReducedMotion);
  const inView = useInView(frameRef, { amount: 0.25 });
  const [scene, setScene] = useState(() => (still ? FINAL_SCENE : 0));
  const [cycle, setCycle] = useState(0);

  const sceneDefinition = SCENES[scene] ?? SCENES[0];
  const lastStageIndex = Math.max(0, script.stages.length - 1);
  const activeStage = Math.min(sceneDefinition.stage, lastStageIndex);
  const showCard =
    sceneDefinition.key !== "waiting" && sceneDefinition.key !== "reset";
  const showContext = sceneDefinition.key !== "waiting";

  useEffect(() => {
    setScene(still ? FINAL_SCENE : 0);
    setCycle(0);
  }, [script, still]);

  useEffect(() => {
    if (still || !inView || script.stages.length === 0) return;

    const timer = window.setTimeout(() => {
      if (scene < SCENES.length - 1) {
        setScene((current) => current + 1);
      } else {
        setCycle((current) => current + 1);
        setScene(0);
      }
    }, sceneDefinition.ms);

    return () => window.clearTimeout(timer);
  }, [inView, scene, sceneDefinition.ms, script.stages.length, still]);

  useEffect(() => {
    onStageChange?.(showContext ? activeStage : -1);
  }, [activeStage, onStageChange, showContext]);

  return (
    <div ref={frameRef} className="mx-auto w-full max-w-6xl">
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-[1.75rem] border border-ink-200/80 bg-white shadow-[0_38px_90px_-46px_rgba(15,23,42,0.38)] sm:rounded-[2rem]"
      >
        <div className="flex items-center justify-between gap-4 bg-slate-950 px-4 py-3.5 text-white sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-ocean-500 shadow-brand-soft">
              <PanelsTopLeft className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {script.workspaceLabel}
              </p>
              <p className="mt-0.5 truncate text-[10px] text-white/60">
                {script.boardLabel}
              </p>
            </div>
          </div>
          <span className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)]" />
            {script.liveLabel}
          </span>
        </div>

        <div className="bg-gradient-to-br from-slate-50 via-white to-brand-50/35">
          <MobileWorkspace
            script={script}
            activeStage={activeStage}
            showCard={showCard}
            showContext={showContext}
            cycle={cycle}
            reducedMotion={still}
          />
          <DesktopWorkspace
            script={script}
            activeStage={activeStage}
            showCard={showCard}
            showContext={showContext}
            cycle={cycle}
            layoutScope={layoutScope}
            reducedMotion={still}
          />
        </div>
      </div>

      <Transcript script={script} />
    </div>
  );
}
