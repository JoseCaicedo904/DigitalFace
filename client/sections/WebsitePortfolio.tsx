import { motion, useReducedMotion } from "framer-motion";
import { Globe2, ImageIcon, MonitorUp } from "lucide-react";
import type { HomeContent } from "@/i18n/content/home";
import { cn } from "@/lib/utils";

type WebsitePortfolioProps = {
  content: HomeContent["websitePortfolio"];
  className?: string;
};

type PortfolioImage = {
  src: string;
  alt: string;
};

/** Add an approved homepage screenshot here when a real project is ready. */
const approvedProjectImages: Partial<Record<string, PortfolioImage>> = {};

export function WebsitePortfolioSection({
  content,
  className,
}: WebsitePortfolioProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-ocean-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            {content.description}
          </p>
        </motion.div>

        <div className="mt-14 space-y-8 lg:mt-16 lg:space-y-10">
          {content.slots.map((slot, index) => {
            const image = approvedProjectImages[slot.id];
            const imageFirst = index % 2 === 0;

            return (
              <motion.article
                key={slot.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5 }}
                className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,.55fr)]"
              >
                <div
                  className={cn(
                    "min-w-0 p-3 sm:p-5",
                    imageFirst ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
                    <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-white/[0.06] px-4">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                        <Globe2
                          className="h-3 w-3 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="truncate">{slot.linkPlaceholder}</span>
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(124,58,237,0.22),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(14,165,233,0.18),transparent_42%),linear-gradient(145deg,#0f172a,#111827)]">
                      {image ? (
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          role="img"
                          aria-label={content.screenshotPlaceholder}
                          className="absolute inset-4 flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.035] px-6 text-center sm:inset-6"
                        >
                          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-ocean-200">
                            <ImageIcon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                            {content.screenshotPlaceholder}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    "flex flex-col justify-center border-white/10 p-7 sm:p-9",
                    imageFirst
                      ? "border-t lg:order-2 lg:border-l lg:border-t-0"
                      : "border-t lg:order-1 lg:border-r lg:border-t-0",
                  )}
                >
                  <div className="flex items-center gap-3 text-ocean-200">
                    <MonitorUp className="h-5 w-5" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                      {slot.slotLabel}
                    </p>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {slot.projectName}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-white/40">
                    {slot.category}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-white/60">
                    {slot.description}
                  </p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-400/70 via-ocean-400/30 to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
