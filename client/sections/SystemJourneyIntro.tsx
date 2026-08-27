import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The three-stage model every DigitalFace page is built around. Declared here
 * rather than derived from the homepage content so the industry funnels can
 * describe the same journey in their own language.
 */
export type SystemJourneyContent = {
  eyebrow: string;
  title: string;
  description: string;
  closing: string;
  stages: {
    number: string;
    label: string;
    title: string;
    description: string;
  }[];
};

type SystemJourneyIntroProps = {
  content: SystemJourneyContent;
  className?: string;
};

const stageIcons = [Megaphone, MessageCircle, LayoutDashboard];

export function SystemJourneyIntro({
  content,
  className,
}: SystemJourneyIntroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="system"
      className={cn(
        "scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            {content.description}
          </p>
        </motion.div>

        <div className="relative mt-14 lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[16.667%] right-[16.667%] top-[3.75rem] hidden h-px bg-gradient-to-r from-brand-200 via-ocean-300 to-brand-200 lg:block"
          />
          <ol className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {content.stages.map((stage, index) => {
              const Icon = stageIcons[index] ?? LayoutDashboard;
              const isLast = index === content.stages.length - 1;

              return (
                <motion.li
                  key={stage.number}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative"
                >
                  <article className="relative z-10 h-full rounded-3xl border border-ink-100 bg-white p-6 shadow-brand-card sm:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-ocean-500 text-white shadow-brand-soft">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="text-3xl font-semibold tracking-tight text-ink-200">
                        {stage.number}
                      </span>
                    </div>
                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
                      {stage.label}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">
                      {stage.description}
                    </p>
                  </article>

                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className="mx-auto flex h-10 w-10 items-center justify-center text-brand-400 lg:hidden"
                    >
                      <ArrowDown className="h-5 w-5" />
                    </span>
                  ) : null}
                </motion.li>
              );
            })}
          </ol>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-semibold text-slate-900 sm:text-xl">
          {content.closing}
        </p>
      </div>
    </section>
  );
}
