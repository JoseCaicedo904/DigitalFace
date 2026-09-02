import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  MousePointerClick,
  Radar,
  UserRoundPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AdFeedPhone } from "@/components/demo/AdFeedPhone";
import type { AdCampaignDemoContent } from "@/components/demo/adCampaign";
import { cn } from "@/lib/utils";

const stageIcons = [Radar, MousePointerClick, UserRoundPlus, ClipboardCheck];

const ctaClassName =
  "group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ocean-200 transition hover:text-white";

interface AdCampaignDemoSectionProps {
  content: AdCampaignDemoContent;
  /** Router path, or an in-page anchor when the page books on itself. */
  ctaHref: string;
  /** Anchor target. The industry funnels land their "see the system" link
   *  here, because this is where the demonstration starts. */
  id?: string;
  className?: string;
}

/**
 * The first half of the DigitalFace story: the advertisement that finds someone
 * and the short path that turns their interest into a contactable opportunity.
 * The conversation demonstration picks the same lead up further down the page,
 * which is why the two share a handset and a stage list but not a background.
 */
export function AdCampaignDemoSection({
  content: t,
  ctaHref,
  id,
  className,
}: AdCampaignDemoSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
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
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(124,58,237,0.24),transparent_44%),radial-gradient(circle_at_88%_74%,rgba(14,165,233,0.16),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {t.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            {t.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="order-1"
          >
            <AdFeedPhone script={t.script} onStageChange={handleStageChange} />
            <p className="mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              {t.phoneCaption}
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="order-2"
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
                        ? "border-white/25 bg-white/10 shadow-brand-soft"
                        : "border-white/10 bg-white/[0.04]",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500",
                        isActive
                          ? "border-transparent bg-gradient-to-br from-brand-600 to-ocean-500 text-white"
                          : "border-white/10 bg-white/5 text-white/45",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p
                        className={cn(
                          "text-[0.95rem] font-semibold transition-colors duration-500",
                          isActive ? "text-white" : "text-white/70",
                        )}
                      >
                        {stage.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">
                        {stage.description}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-brand-400/80 via-ocean-400/40 to-transparent transition-opacity duration-500",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </li>
                );
              })}
            </ol>

            {isAnchor ? (
              <a href={ctaHref} className={ctaClassName}>
                {ctaBody}
              </a>
            ) : (
              <Link to={ctaHref} className={ctaClassName}>
                {ctaBody}
              </Link>
            )}
          </motion.div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm leading-relaxed text-white/60">
          {t.bridge}
        </p>
      </div>
    </section>
  );
}
