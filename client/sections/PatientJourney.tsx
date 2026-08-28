import { Quote, Sparkles } from "lucide-react";
import { JourneyVisual } from "@/components/journey/JourneyVisual";
import type { JourneyContent } from "@/components/journey/journey";
import { cn } from "@/lib/utils";

interface PatientJourneySectionProps {
  content: JourneyContent;
  className?: string;
}

/**
 * One patient, one evening, four moments.
 *
 * The page used to present the system as seven separable modules, which invites
 * a visitor to price-shop parts of an offer that is only sold as a bundle. The
 * same material reads as a single system when it follows one person through it,
 * so the modules survive as chips on the act that delivers them and the detailed
 * list lives further down the page, after the story has done the selling.
 */
export function PatientJourneySection({
  content: t,
  className,
}: PatientJourneySectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-secondary/45 via-white to-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {t.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{t.description}</p>
        </div>

        <div className="mt-16 sm:mt-20">
          {t.acts.map((act, index) => {
            const visualFirst = index % 2 === 1;
            const isLast = index === t.acts.length - 1;

            return (
              <div key={act.badge}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div
                    className={cn(
                      "space-y-5",
                      visualFirst && "lg:order-2 lg:pl-4",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-ocean-500 text-sm font-semibold text-white shadow-brand-soft">
                        {act.badge}
                      </span>
                      <span className="rounded-full border border-ink-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                        {act.time}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {act.title}
                    </h3>

                    <figure className="rounded-2xl border-l-2 border-brand-400 bg-white/80 py-1 pl-5 pr-2">
                      <Quote
                        className="h-4 w-4 text-brand-300"
                        aria-hidden="true"
                      />
                      <blockquote className="mt-2 text-base leading-relaxed text-slate-700">
                        {act.patient}
                      </blockquote>
                      <figcaption className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                        {t.patientLabel}
                      </figcaption>
                    </figure>

                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                          {t.systemLabel}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-500">
                          {act.system}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                        {t.modulesLabel}
                      </span>
                      {act.modules.map((module) => (
                        <span
                          key={module}
                          className="rounded-full border border-ink-100 bg-white px-3 py-1 text-xs font-medium text-ink-500"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={cn(visualFirst && "lg:order-1")}>
                    <JourneyVisual script={act.script} />
                  </div>
                </div>

                {!isLast ? (
                  <div
                    aria-hidden="true"
                    className="mx-auto my-12 h-16 w-px bg-gradient-to-b from-brand-300/70 via-ocean-300/40 to-transparent sm:my-16"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
