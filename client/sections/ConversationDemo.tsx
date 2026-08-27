import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  MessageSquareText,
  UserRoundCheck,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ConversationPhone } from "@/components/demo/ConversationPhone";
import type { ConversationDemoContent } from "@/components/demo/conversation";
import { cn } from "@/lib/utils";

const stageIcons = [MessageSquareText, Zap, CalendarCheck, UserRoundCheck];

const ctaClassName =
  "group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700";

interface ConversationDemoSectionProps {
  content: ConversationDemoContent;
  /** Router path, or an in-page anchor when the page books on itself. */
  ctaHref: string;
  className?: string;
}

/**
 * The narrative payoff of a page's "how it works" chapter: the abstract journey
 * it has just described, played out as one conversation the visitor can watch.
 * The stage list on the left tracks the message on screen, so copy and phone
 * explain each other instead of competing.
 *
 * The homepage and the three industry funnels all render this same section with
 * their own script, so the interaction reads as one DigitalFace system.
 */
export function ConversationDemoSection({
  content: t,
  ctaHref,
  className,
}: ConversationDemoSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(-1);
  const isAnchor = ctaHref.startsWith("#");

  const handleStageChange = useCallback((stage: number) => {
    setActiveStage(stage);
  }, []);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_26%,rgba(124,58,237,0.09),transparent_52%),radial-gradient(circle_at_10%_82%,rgba(14,165,233,0.07),transparent_46%)]"
      />
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {t.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            {t.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-center lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="order-2 lg:order-1"
          >
            <ol className="space-y-3">
              {t.stages.map((stage, index) => {
                const Icon =
                  stageIcons[index] ?? stageIcons[stageIcons.length - 1];
                const isActive = activeStage === index;
                return (
                  <li
                    key={stage.title}
                    className={cn(
                      "relative flex gap-4 rounded-2xl border px-5 py-4 transition-all duration-500",
                      isActive
                        ? "border-brand-200/80 bg-white shadow-brand-card"
                        : "border-ink-100/70 bg-white/50",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500",
                        isActive
                          ? "border-transparent bg-gradient-to-br from-brand-600 to-ocean-500 text-white shadow-brand-soft"
                          : "border-ink-100 bg-white text-ink-400",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p
                        className={cn(
                          "text-[0.95rem] font-semibold transition-colors duration-500",
                          isActive ? "text-slate-900" : "text-ink-700",
                        )}
                      >
                        {stage.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">
                        {stage.description}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-brand-400/70 via-ocean-400/30 to-transparent transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </li>
                );
              })}
            </ol>

            {isAnchor ? (
              <a href={ctaHref} className={ctaClassName}>
                {t.ctaLabel}
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <Link to={ctaHref} className={ctaClassName}>
                {t.ctaLabel}
                <ArrowRight
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <ConversationPhone
              script={t.script}
              onStageChange={handleStageChange}
            />
            <p className="mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-400">
              {t.phoneCaption}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
