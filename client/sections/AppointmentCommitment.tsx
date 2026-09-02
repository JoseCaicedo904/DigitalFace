import { motion, useReducedMotion } from "framer-motion";
import {
  BellRing,
  CalendarDays,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  UserRoundCheck,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The step between "appointment requested" and "appointment attended".
 *
 * DigitalFace can put a reservation step inside the booking flow: a deposit, a
 * consultation fee or full prepayment that has to clear before the appointment
 * is marked confirmed. The point of the block is the business outcome —
 * stronger commitment, fewer wasted slots — not payment processing, so the copy
 * stays outcome-led and every locale states the two limits out loud: the money
 * runs through the client's own payment provider, and a deposit strengthens
 * commitment rather than guaranteeing attendance.
 *
 * Declared here rather than derived from the homepage content so the three
 * industry funnels can describe the same capability in their own language.
 */
export type AppointmentCommitmentContent = {
  eyebrow: string;
  title: string;
  description: string;
  /** The tail of the journey: requested → reserved → confirmed → attended. */
  steps: { label: string; caption: string }[];
  points: { title: string; description: string }[];
  /** Optionality and the honest limit, kept on the page rather than implied. */
  note: string;
};

type AppointmentCommitmentProps = {
  content: AppointmentCommitmentContent;
  className?: string;
};

const stepIcons = [
  CalendarDays,
  Wallet,
  CheckCircle2,
  BellRing,
  UserRoundCheck,
];
const pointIcons = [ShieldCheck, CalendarDays, Landmark];

/** The reservation step is the one this block exists to explain. */
const HIGHLIGHTED_STEP = 1;

export function AppointmentCommitment({
  content,
  className,
}: AppointmentCommitmentProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="appointment-commitment"
      className={cn(
        "scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            {content.description}
          </p>
        </motion.div>

        {/* The chain reads left to right on a desktop and top to bottom on a
            phone; the reservation step carries the brand treatment so the new
            moment is obvious without a second heading. */}
        <motion.ol
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
        >
          {content.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? stepIcons[stepIcons.length - 1];
            const highlighted = index === HIGHLIGHTED_STEP;

            return (
              <li
                key={step.label}
                className={cn(
                  "h-full rounded-2xl border bg-white p-5",
                  highlighted
                    ? "border-brand-300 shadow-brand-card"
                    : "border-ink-100 shadow-sm",
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl",
                    highlighted
                      ? "bg-gradient-to-br from-brand-600 to-ocean-500 text-white shadow-brand-soft"
                      : "bg-ink-50 text-ink-400",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p
                  className={cn(
                    "mt-4 text-sm font-semibold",
                    highlighted ? "text-brand-700" : "text-slate-900",
                  )}
                >
                  {step.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-500">
                  {step.caption}
                </p>
              </li>
            );
          })}
        </motion.ol>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.points.map((point, index) => {
            const Icon = pointIcons[index] ?? pointIcons[pointIcons.length - 1];

            return (
              <motion.article
                key={point.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="h-full rounded-3xl border border-ink-100 bg-white p-6 shadow-brand-card sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {point.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-ink-100 bg-white/70 px-6 py-4 text-center text-sm leading-relaxed text-ink-500 shadow-sm">
          {content.note}
        </p>
      </div>
    </section>
  );
}
