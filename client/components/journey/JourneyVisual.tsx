import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  BellRing,
  CalendarCheck,
  Check,
  CheckCheck,
  ClipboardList,
  Clock,
  Inbox,
  Megaphone,
  MessageSquareText,
  RotateCcw,
  Search,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  BookingScript,
  InboxScript,
  InboxSource,
  JourneyScript,
  PipelineScript,
  PipelineTone,
  ReplyScript,
} from "./journey";

/**
 * The four stage visuals for the patient-journey story.
 *
 * They live in one file on purpose: they are four variants of a single idea —
 * a small, looping, scripted proof of one moment — and they share the card
 * shell, the reveal hook and the motion vocabulary. Splitting them would
 * scatter that shared language across five files without adding a seam anyone
 * needs.
 *
 * Nothing here calls a CRM, a calendar or a model. Each script is the single
 * source of truth, so the story renders identically on every visit, costs
 * nothing to load, and can never show the misspelled text a generated image
 * would.
 */

/** How long each step of a visual holds before the next one arrives. */
const STEP_MS = 1000;
/** How long the finished state rests before the story starts over. */
const HOLD_MS = 3600;

/**
 * Reveals `total` steps in sequence while the visual is on screen, then loops.
 *
 * Without motion the final state is simply present: no timers start, so the
 * page stays still for anyone who asked it to.
 */
function useStagedReveal(total: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const still = prefersReducedMotion === true;
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (still) {
      setVisible(total);
    }
  }, [still, total]);

  useEffect(() => {
    if (still || !inView) {
      return;
    }

    if (visible >= total) {
      const restart = window.setTimeout(() => setVisible(0), HOLD_MS);
      return () => window.clearTimeout(restart);
    }

    const next = window.setTimeout(
      () => setVisible((value) => value + 1),
      STEP_MS,
    );
    return () => window.clearTimeout(next);
  }, [still, inView, visible, total]);

  return { ref, visible, still };
}

/** The card every stage visual is staged inside. */
function VisualShell({
  innerRef,
  label,
  icon,
  children,
  transcript,
}: {
  innerRef: React.RefObject<HTMLDivElement>;
  label: string;
  icon: ReactNode;
  children: ReactNode;
  transcript: ReactNode;
}) {
  return (
    <div ref={innerRef} className="relative mx-auto w-full max-w-[420px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-glow-radial opacity-60 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-brand-card">
        <div
          aria-hidden="true"
          className="flex items-center gap-2.5 border-b border-ink-100 bg-ink-50/60 px-4 py-3"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-ocean-500 text-white">
            {icon}
          </span>
          <p className="truncate text-[12px] font-semibold text-slate-900">
            {label}
          </p>
          {/* A running indicator rather than a word, so nothing here needs
              translating and no English leaks onto the Spanish page. */}
          <span className="ml-auto flex shrink-0 items-center gap-1">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="h-1 w-1 rounded-full bg-emerald-500/70 motion-safe:animate-typing-dot"
                style={{ animationDelay: `${dot * 0.16}s` }}
              />
            ))}
          </span>
        </div>
        <div aria-hidden="true">{children}</div>
      </div>
      {transcript}
    </div>
  );
}

const sourceIcons: Record<InboxSource, ReactNode> = {
  social: <Megaphone className="h-3.5 w-3.5" />,
  form: <ClipboardList className="h-3.5 w-3.5" />,
  chat: <MessageSquareText className="h-3.5 w-3.5" />,
  search: <Search className="h-3.5 w-3.5" />,
};

/** Act 1 — three separate channels landing as one list. */
function InboxVisual({ script }: { script: InboxScript }) {
  const { ref, visible, still } = useStagedReveal(script.rows.length);
  const shown = script.rows.slice(0, visible);

  return (
    <VisualShell
      innerRef={ref}
      label={script.title}
      icon={<Inbox className="h-3.5 w-3.5" />}
      transcript={
        <div className="sr-only">
          <p>{script.transcriptLabel}</p>
          <ul>
            {script.rows.map((row) => (
              <li key={`${row.channel}-${row.name}`}>
                {`${row.channel}: ${row.name}, ${row.time}`}
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <div className="flex items-baseline gap-2 px-4 pt-4">
        <motion.span
          key={visible}
          initial={still ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="text-3xl font-semibold tabular-nums text-slate-900"
        >
          {visible}
        </motion.span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400">
          {script.countLabel}
        </span>
      </div>

      <div className="min-h-[214px] space-y-2 px-4 pb-5 pt-3">
        <AnimatePresence initial={false}>
          {shown.map((row) => (
            <motion.div
              key={`${row.channel}-${row.name}`}
              layout={still ? false : "position"}
              initial={still ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white px-3 py-2.5 shadow-[0_10px_30px_-26px_rgba(15,23,42,0.6)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                {sourceIcons[row.source]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-slate-900">
                  {row.name}
                </p>
                <p className="truncate text-[11px] text-ink-400">
                  {row.channel}
                </p>
              </div>
              <span className="shrink-0 text-[10px] font-medium text-ink-400">
                {row.time}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </VisualShell>
  );
}

/** Act 2 — the reply that lands while she is still holding the phone. */
function ReplyVisual({ script }: { script: ReplyScript }) {
  /** 1 incoming, 2 typing, 3 outgoing with its stamp. */
  const { ref, visible, still } = useStagedReveal(3);

  return (
    <VisualShell
      innerRef={ref}
      label={script.contact}
      icon={<Stethoscope className="h-3.5 w-3.5" />}
      transcript={
        <div className="sr-only">
          <p>{script.transcriptLabel}</p>
          <ol>
            <li>{`${script.patientLabel}: ${script.incoming.text}`}</li>
            <li>{`${script.clinicLabel}: ${script.outgoing.text}`}</li>
            <li>{`${script.timerLabel}: ${script.timerValue}`}</li>
          </ol>
        </div>
      }
    >
      <div className="flex min-h-[262px] flex-col gap-3 bg-ink-50/60 px-4 py-4">
        <div className="flex justify-center">
          <span className="rounded-full border border-ink-100 bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">
            {script.clockLabel}
          </span>
        </div>

        {visible >= 1 ? (
          <motion.div
            initial={still ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-end"
          >
            <div className="max-w-[82%] rounded-2xl rounded-br-md bg-gradient-to-br from-brand-600 to-brand-700 px-3.5 py-2.5 text-[12px] leading-relaxed text-white shadow-brand-soft">
              {script.incoming.text}
              <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/70">
                {script.incoming.time}
                <CheckCheck className="h-3 w-3" />
              </p>
            </div>
          </motion.div>
        ) : null}

        <AnimatePresence>
          {visible === 2 && !still ? (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-ink-100 bg-white px-4 py-3">
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

        {visible >= 3 ? (
          <motion.div
            initial={still ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start gap-2"
          >
            <div className="max-w-[86%] rounded-2xl rounded-tl-md border border-ink-100 bg-white px-3.5 py-2.5 text-[12px] leading-relaxed text-slate-700 shadow-[0_10px_30px_-26px_rgba(15,23,42,0.6)]">
              {script.outgoing.text}
              <p className="mt-1 text-[10px] text-ink-400">
                {script.outgoing.time}
              </p>
            </div>
            <motion.span
              initial={still ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: still ? 0 : 0.18, duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700"
            >
              <Clock className="h-3 w-3" />
              {script.timerLabel}
              <span className="tabular-nums">{script.timerValue}</span>
            </motion.span>
          </motion.div>
        ) : null}
      </div>
    </VisualShell>
  );
}

/** Act 3 — the slot she takes herself, and what follows automatically. */
function BookingVisual({ script }: { script: BookingScript }) {
  /** 1 slots, 2 the booking lands, then one step per follow-up. */
  const total = 2 + script.followUps.length;
  const { ref, visible, still } = useStagedReveal(total);
  const booked = visible >= 2;

  return (
    <VisualShell
      innerRef={ref}
      label={script.title}
      icon={<CalendarCheck className="h-3.5 w-3.5" />}
      transcript={
        <div className="sr-only">
          <p>{script.transcriptLabel}</p>
          <ul>
            <li>{`${script.dayLabel}: ${script.slots.join(", ")}`}</li>
            <li>
              {`${script.slots[script.bookedIndex]} — ${script.bookedLabel}: ${script.bookedName}`}
            </li>
            {script.followUps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      }
    >
      <div className="min-h-[262px] px-4 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          {script.dayLabel}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {script.slots.map((slot, index) => {
            const isBooked = booked && index === script.bookedIndex;
            return (
              <motion.div
                key={slot}
                initial={still ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: visible >= 1 ? 1 : 0, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: still ? 0 : index * 0.05,
                }}
                className={cn(
                  "rounded-xl border px-3 py-2.5 text-center text-[12px] font-semibold transition-colors duration-500",
                  isBooked
                    ? "border-brand-200 bg-brand-50 text-brand-700"
                    : "border-ink-100 bg-white text-ink-500",
                )}
              >
                {slot}
                {isBooked ? (
                  <motion.p
                    initial={still ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-0.5 truncate text-[10px] font-medium text-brand-600"
                  >
                    {script.bookedName}
                  </motion.p>
                ) : null}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 space-y-2">
          {script.followUps.map((item, index) => (
            <motion.div
              key={item}
              initial={still ? false : { opacity: 0, x: -10 }}
              animate={{
                opacity: visible >= 3 + index ? 1 : 0,
                x: visible >= 3 + index ? 0 : -10,
              }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3 py-2 text-[11px] font-medium text-slate-700"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                {index === 0 ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <BellRing className="h-3 w-3" />
                )}
              </span>
              <span className="truncate">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

const toneStyles: Record<PipelineTone, string> = {
  new: "bg-ink-100 text-ink-600",
  booked: "bg-brand-100 text-brand-700",
  missed: "bg-sunset-100 text-sunset-700",
  closed: "bg-emerald-100 text-emerald-700",
};

/** Act 4 — one card, one board, and nothing quietly going cold. */
function PipelineVisual({ script }: { script: PipelineScript }) {
  /** 1 board, 2 the card moves, 3 recovery keeps working. */
  const { ref, visible, still } = useStagedReveal(3);
  const column = visible >= 2 ? script.toColumn : script.fromColumn;

  return (
    <VisualShell
      innerRef={ref}
      label={script.title}
      icon={<CheckCheck className="h-3.5 w-3.5" />}
      transcript={
        <div className="sr-only">
          <p>{script.transcriptLabel}</p>
          <ul>
            {script.columns.map((col) => (
              <li key={col.label}>{`${col.label}: ${col.count}`}</li>
            ))}
            <li>
              {`${script.card.name} — ${script.columns[script.toColumn].label}`}
            </li>
            <li>{script.recoveryLabel}</li>
          </ul>
        </div>
      }
    >
      <div className="min-h-[262px] px-3 py-4">
        <div className="grid grid-cols-4 gap-1.5">
          {script.columns.map((col, index) => (
            <div key={col.label} className="min-w-0">
              <div
                className={cn(
                  "rounded-lg px-1.5 py-1.5 text-center",
                  toneStyles[col.tone],
                )}
              >
                <p className="truncate text-[9px] font-semibold uppercase tracking-[0.04em]">
                  {col.label}
                </p>
              </div>
              <p className="mt-1 text-center text-[10px] font-medium tabular-nums text-ink-400">
                {col.count}
              </p>

              <div className="mt-1.5 min-h-[104px] rounded-lg border border-dashed border-ink-100 p-1">
                {column === index ? (
                  <motion.div
                    layoutId={still ? undefined : "journey-pipeline-card"}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-lg border border-ink-100 bg-white p-1.5 shadow-[0_10px_28px_-24px_rgba(15,23,42,0.7)]"
                  >
                    <p className="truncate text-[10px] font-semibold text-slate-900">
                      {script.card.name}
                    </p>
                    {/* Wraps rather than truncates: the columns are only about
                        75px wide on a phone, which clips a date on one line. */}
                    <p className="mt-0.5 text-[9px] leading-tight text-ink-400">
                      {script.card.detail}
                    </p>
                  </motion.div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={still ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: visible >= 3 ? 1 : 0, y: visible >= 3 ? 0 : 8 }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 flex items-center gap-2.5 rounded-xl border border-ink-100 bg-ink-50/70 px-3 py-2.5"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
            <RotateCcw className="h-3 w-3" />
          </span>
          <p className="text-[11px] font-medium leading-snug text-slate-700">
            {script.recoveryLabel}
          </p>
        </motion.div>
      </div>
    </VisualShell>
  );
}

/** Picks the visual that matches the act's script. */
export function JourneyVisual({ script }: { script: JourneyScript }) {
  switch (script.kind) {
    case "inbox":
      return <InboxVisual script={script} />;
    case "reply":
      return <ReplyVisual script={script} />;
    case "booking":
      return <BookingVisual script={script} />;
    case "pipeline":
      return <PipelineVisual script={script} />;
  }
}
