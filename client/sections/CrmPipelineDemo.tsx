import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Inbox,
  MessageSquareText,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CrmPipelineBoard } from "@/components/demo/CrmPipelineBoard";
import type { CrmPipelineDemoContent } from "@/components/demo/crmPipeline";
import { cn } from "@/lib/utils";

const stageIcons = [Inbox, MessageSquareText, Tag, CalendarCheck];

const ctaClassName =
  "group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700";

interface CrmPipelineDemoSectionProps {
  content: CrmPipelineDemoContent;
  /** Router path, or an in-page anchor when the page books on itself. */
  ctaHref: string;
  className?: string;
}

/**
 * The organized view behind the DigitalFace journey. It turns one lead's
 * messages into a visible status, useful context and a next action, without
 * presenting CRM software configuration as the product.
 */
export function CrmPipelineDemoSection({
  content: t,
  ctaHref,
  className,
}: CrmPipelineDemoSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(-1);
  const isAnchor = ctaHref.startsWith("#");

  const handleStageChange = useCallback((stage: number) => {
    setActiveStage(stage);
  }, []);

  const ctaBody = (
    <>
      {t.ctaLabel}
      <ArrowRight
        className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  );

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-secondary/45 via-white to-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute -right-20 bottom-24 h-72 w-72 rounded-full bg-ocean-200/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {t.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-12 lg:mt-16"
        >
          <CrmPipelineBoard
            script={t.script}
            onStageChange={handleStageChange}
          />
          <p className="mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            {t.boardCaption}
          </p>
        </motion.div>

        <motion.ol
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.stages.map((stage, index) => {
            const Icon = stageIcons[index] ?? stageIcons[stageIcons.length - 1];
            const isActive = activeStage === index;
            return (
              <li
                key={stage.title}
                className={cn(
                  "relative rounded-2xl border bg-white/75 p-4 transition-all duration-500 motion-reduce:transition-none",
                  isActive
                    ? "border-brand-200/80 shadow-brand-card"
                    : "border-ink-100/80",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500 motion-reduce:transition-none",
                      isActive
                        ? "border-transparent bg-gradient-to-br from-brand-600 to-ocean-500 text-white shadow-brand-soft"
                        : "border-ink-100 bg-white text-ink-400",
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p
                    className={cn(
                      "text-sm font-semibold transition-colors duration-500 motion-reduce:transition-none",
                      isActive ? "text-slate-900" : "text-ink-700",
                    )}
                  >
                    {stage.title}
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-500">
                  {stage.description}
                </p>
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-brand-400/70 via-ocean-400/30 to-transparent transition-opacity duration-500 motion-reduce:transition-none",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </li>
            );
          })}
        </motion.ol>

        <div className="mt-8 text-center">
          {isAnchor ? (
            <a href={ctaHref} className={ctaClassName}>
              {ctaBody}
            </a>
          ) : (
            <Link to={ctaHref} className={ctaClassName}>
              {ctaBody}
            </Link>
          )}
        </div>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-ink-100 bg-white/70 px-6 py-4 text-center text-sm leading-relaxed text-ink-500 shadow-sm">
          {t.bridge}
        </p>
      </div>
    </section>
  );
}
