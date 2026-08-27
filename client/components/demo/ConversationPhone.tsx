import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  CalendarCheck,
  Check,
  CheckCheck,
  Clock,
  ImageIcon,
  Send,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "./PhoneFrame";
import type { ConversationScript, ConversationStep } from "./conversation";

export type {
  ConversationScript,
  ConversationStep,
  ConversationDemoContent,
} from "./conversation";

interface ConversationPhoneProps {
  script: ConversationScript;
  /**
   * Reports the stage of the message currently on screen so surrounding copy can
   * follow along. Must be referentially stable (a `useState` setter is ideal).
   */
  onStageChange?: (stage: number) => void;
  className?: string;
}

const DEFAULT_PAUSE_MS = 900;
const NOTE_PAUSE_MS = 700;
const DEFAULT_TYPING_MS = 1300;
/** How long the confirmed state holds before the story starts over. */
const HOLD_MS = 5200;

function isOutgoing(step: ConversationStep): boolean {
  return step.kind === "patient" || step.kind === "choice";
}

/** A system line about the conversation rather than a message inside it. */
function isSystemNote(step: ConversationStep): boolean {
  return step.kind === "note";
}

function typingDurationOf(step: ConversationStep): number {
  return "typingMs" in step ? (step.typingMs ?? DEFAULT_TYPING_MS) : 0;
}

/**
 * A controlled, looping demonstration of one patient conversation.
 * No model, CRM or calendar is called: the script is the single source of truth,
 * so the story renders identically on every visit and costs nothing to load.
 */
export function ConversationPhone({
  script,
  onStageChange,
  className,
}: ConversationPhoneProps) {
  const prefersReducedMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { amount: 0.3 });

  const total = script.steps.length;
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [cycle, setCycle] = useState(0);

  const still = prefersReducedMotion === true;
  const running = inView && !still;

  /** Without motion the whole exchange is simply present, all at once. */
  useEffect(() => {
    if (still) {
      setTyping(false);
      setVisible(total);
    }
  }, [still, total]);

  useEffect(() => {
    if (!running) {
      setTyping(false);
      return;
    }

    if (visible >= total) {
      const restart = window.setTimeout(() => {
        setVisible(0);
        setCycle((value) => value + 1);
      }, HOLD_MS);
      return () => window.clearTimeout(restart);
    }

    const step = script.steps[visible];
    const pause =
      step.pauseMs ?? (isSystemNote(step) ? NOTE_PAUSE_MS : DEFAULT_PAUSE_MS);
    const typingMs = typingDurationOf(step);
    const timers: number[] = [];

    if (typingMs > 0) {
      timers.push(window.setTimeout(() => setTyping(true), pause));
      timers.push(
        window.setTimeout(() => {
          setTyping(false);
          setVisible((value) => value + 1);
        }, pause + typingMs),
      );
    } else {
      timers.push(
        window.setTimeout(() => setVisible((value) => value + 1), pause),
      );
    }

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [running, visible, cycle, script, total]);

  /** The thread follows the newest message the way a real one would. */
  useEffect(() => {
    const thread = threadRef.current;
    if (!thread || typeof thread.scrollTo !== "function") return;
    thread.scrollTo({
      top: thread.scrollHeight,
      behavior: still ? "auto" : "smooth",
    });
  }, [visible, typing, still]);

  useEffect(() => {
    if (!onStageChange) return;
    if (still || visible === 0) {
      onStageChange(-1);
      return;
    }
    const step = typing
      ? script.steps[Math.min(visible, total - 1)]
      : script.steps[visible - 1];
    onStageChange(step.stage);
  }, [onStageChange, script, still, total, typing, visible]);

  const shown = script.steps.slice(0, visible);
  const choice = shown.find(
    (step): step is Extract<ConversationStep, { kind: "choice" }> =>
      step.kind === "choice",
  );
  const selectedOption = choice ? choice.option : null;

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
        <div className="flex items-center gap-3 border-b border-ink-100 bg-white px-4 py-3">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-ocean-500 text-white">
            <Stethoscope className="h-4 w-4" />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="truncate text-[13px] font-semibold text-slate-900">
                {script.contact}
              </p>
              {script.channelLabel ? (
                <span className="shrink-0 rounded-full border border-ink-100 bg-ink-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  {script.channelLabel}
                </span>
              ) : null}
            </div>
            <p className="truncate text-[11px] text-ink-400">
              {typing ? script.typingStatus : script.status}
            </p>
          </div>
        </div>

        <div
          ref={threadRef}
          className="h-[318px] space-y-3 overflow-y-auto bg-ink-50/70 px-3.5 py-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:h-[358px] lg:h-[392px] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex justify-center">
            <span className="rounded-full border border-ink-100 bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">
              {script.dayLabel}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {shown.map((step, index) => (
              <motion.div
                key={`${cycle}-${index}`}
                layout={still ? false : "position"}
                initial={still ? false : { opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "flex",
                  isSystemNote(step)
                    ? "justify-center"
                    : isOutgoing(step)
                      ? "justify-end"
                      : "justify-start",
                )}
              >
                <Bubble step={step} selectedOption={selectedOption} />
              </motion.div>
            ))}
          </AnimatePresence>

          <AnimatePresence>
            {typing ? (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24 }}
                className="flex justify-start"
              >
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-ink-100 bg-white px-4 py-3 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.5)]">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-1.5 w-1.5 rounded-full bg-ink-400 motion-safe:animate-typing-dot"
                      style={{ animationDelay: `${dot * 0.16}s` }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 border-t border-ink-100 bg-white px-3 py-2.5">
          <span className="flex-1 rounded-full border border-ink-100 bg-ink-50 px-3.5 py-2 text-[12px] text-ink-400">
            {script.composerPlaceholder}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-ocean-500 text-white">
            <Send className="h-3.5 w-3.5" />
          </span>
        </div>
      </PhoneFrame>

      <Transcript script={script} />
    </div>
  );
}

function Bubble({
  step,
  selectedOption,
}: {
  step: ConversationStep;
  selectedOption: number | null;
}) {
  if (step.kind === "note") {
    return (
      <span className="inline-flex max-w-[88%] items-center gap-1.5 rounded-full border border-ink-100 bg-white/80 px-3 py-1.5 text-[10.5px] font-medium leading-snug text-ink-500">
        <UserRoundCheck className="h-3 w-3 shrink-0 text-brand-500" />
        {step.text}
      </span>
    );
  }

  if (step.kind === "confirmation") {
    return (
      <div className="max-w-[86%]">
        <div className="rounded-2xl rounded-tl-md border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-ocean-50 p-3.5 shadow-[0_18px_45px_-30px_rgba(124,58,237,0.65)]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-ocean-500 text-white">
              <CalendarCheck className="h-4 w-4" />
            </span>
            <p className="text-[13px] font-semibold text-slate-900">
              {step.title}
            </p>
          </div>
          <p className="mt-3 text-[14px] font-semibold text-slate-900">
            {step.when}
          </p>
          <p className="mt-0.5 text-[12px] text-ink-500">{step.service}</p>
          <p className="mt-3 border-t border-brand-100/80 pt-2.5 text-[11px] leading-relaxed text-ink-500">
            {step.note}
          </p>
        </div>
        <p className="mt-1 text-[10px] text-ink-400">{step.time}</p>
      </div>
    );
  }

  if (step.kind === "slots") {
    return (
      <div className="max-w-[86%]">
        <div className="rounded-2xl rounded-tl-md border border-ink-100 bg-white px-3.5 py-3 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.5)]">
          {step.author ? <AuthorLabel name={step.author} /> : null}
          <p className="text-[13px] leading-relaxed text-ink-700">
            {step.text}
          </p>
          <div className="mt-2.5 space-y-1.5">
            {step.options.map((option, index) => {
              const chosen = selectedOption === index;
              return (
                <motion.span
                  key={option}
                  animate={chosen ? { scale: [1, 0.97, 1] } : { scale: 1 }}
                  transition={{ duration: 0.36, ease: "easeOut" }}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl border px-3 py-2 text-[12px] font-medium transition-colors duration-300",
                    chosen
                      ? "border-brand-300 bg-brand-50 text-brand-700"
                      : "border-ink-100 bg-ink-50/80 text-ink-600",
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 opacity-60" />
                    {option}
                  </span>
                  {chosen ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-300" />
                  )}
                </motion.span>
              );
            })}
          </div>
        </div>
        <p className="mt-1 text-[10px] text-ink-400">{step.time}</p>
      </div>
    );
  }

  if (step.kind === "assistant") {
    return (
      <div className="max-w-[84%]">
        <div className="rounded-2xl rounded-tl-md border border-ink-100 bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-ink-700 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.5)]">
          {step.author ? <AuthorLabel name={step.author} /> : null}
          {step.text}
        </div>
        <p className="mt-1 text-[10px] text-ink-400">{step.time}</p>
      </div>
    );
  }

  return (
    <div className="max-w-[80%]">
      <div className="rounded-2xl rounded-br-md bg-slate-900 px-3.5 py-2.5 text-[13px] leading-relaxed text-white shadow-[0_14px_30px_-22px_rgba(15,23,42,0.9)]">
        {step.kind === "patient" && step.attachment ? (
          <span className="mb-2 flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-2.5 py-2 text-[11px] font-medium text-white/85">
            <ImageIcon className="h-3.5 w-3.5 shrink-0 text-ocean-300" />
            <span className="truncate">{step.attachment}</span>
          </span>
        ) : null}
        {step.text}
      </div>
      <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-ink-400">
        {step.time}
        <CheckCheck className="h-3 w-3 text-ocean-500" />
      </p>
    </div>
  );
}

/** Marks a bubble as written by a named teammate rather than the assistant. */
function AuthorLabel({ name }: { name: string }) {
  return (
    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-600">
      {name}
    </span>
  );
}

/** The animated thread is decorative markup; this is what assistive tech reads. */
function Transcript({ script }: { script: ConversationScript }) {
  return (
    <div className="sr-only">
      <p>{script.transcriptLabel}</p>
      <ol>
        {script.steps.map((step, index) => {
          if (step.kind === "note") {
            return <li key={`${index}-note`}>{step.text}</li>;
          }
          const speaker = isOutgoing(step)
            ? script.patientLabel
            : script.clinicLabel;
          const body =
            step.kind === "confirmation"
              ? `${step.title}. ${step.when}. ${step.service}. ${step.note}`
              : step.kind === "slots"
                ? `${step.text} ${step.options.join(", ")}`
                : step.kind === "patient" && step.attachment
                  ? `${step.attachment}. ${step.text}`
                  : step.text;
          return <li key={`${index}-${speaker}`}>{`${speaker}: ${body}`}</li>;
        })}
      </ol>
    </div>
  );
}
