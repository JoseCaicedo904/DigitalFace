import { motion, useReducedMotion } from "framer-motion";
import { techLogos } from "@/data/techEcosystem";
import type { HomeContent } from "@/i18n/content/home";
import { cn } from "@/lib/utils";

type TechEcosystemContent = HomeContent["techEcosystem"];

type TechEcosystemProps = {
  content: TechEcosystemContent;
  className?: string;
};

/**
 * The reassurance beat between the system demonstrations and the proof of work:
 * the platforms a business already runs, shown as one continuous rail.
 *
 * The section is dark like the rest of the DigitalFace narrative, but the rail
 * itself is a single white surface because the artwork is drawn in each brand's
 * own colours for a white background. One surface, not twenty-two cards — the
 * point is a connected ecosystem, not a catalogue of products for sale.
 *
 * Two identical logo sets move as one track. Translating by exactly half of the
 * track swaps the first set for its duplicate, so the loop has no visible seam.
 */
export function TechEcosystemSection({
  content: t,
  className,
}: TechEcosystemProps) {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 22 },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 } as const,
    transition: { duration: 0.5, delay },
  });

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-ocean-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal()} className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            {t.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            {t.description}
          </p>
          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35 sm:text-[11px]">
            {t.categories}
          </p>
        </motion.div>

        {/* The white presentation surface. The artwork was drawn for white, so
            the rail brings its own rather than dimming the section around it. */}
        <motion.div
          {...reveal(0.05)}
          className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_40px_90px_-45px_rgba(0,0,0,0.9)] sm:mt-14 lg:mt-16"
        >
          <div
            role="region"
            aria-label={t.railLabel}
            tabIndex={prefersReducedMotion ? 0 : undefined}
            className={cn(
              "[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]",
              prefersReducedMotion
                ? "overflow-x-auto [scrollbar-width:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 [&::-webkit-scrollbar]:hidden"
                : "overflow-hidden",
            )}
          >
            <div
              className={cn(
                "flex w-max items-center [--marquee-gap:2rem] sm:[--marquee-gap:2.75rem] lg:[--marquee-gap:3rem]",
                !prefersReducedMotion &&
                  "tech-ecosystem-marquee-track will-change-transform",
              )}
            >
              {[false, true].map((isDuplicate) => (
                <ul
                  key={isDuplicate ? "duplicate" : "primary"}
                  role="list"
                  aria-hidden={isDuplicate || undefined}
                  className={cn(
                    "shrink-0 items-center gap-[var(--marquee-gap)] px-[calc(var(--marquee-gap)/2)] py-[3.25rem] sm:py-[4.25rem] lg:py-[4.75rem]",
                    prefersReducedMotion && isDuplicate ? "hidden" : "flex",
                  )}
                >
                  {techLogos.map((logo) => (
                    <li
                      key={logo.id}
                      className="flex h-8 min-w-[104px] shrink-0 items-center justify-center sm:h-10 sm:min-w-[126px] lg:h-12 lg:min-w-[144px]"
                    >
                      <img
                        src={logo.src}
                        alt={
                          isDuplicate
                            ? ""
                            : t.logoAlt.replace("{name}", logo.name)
                        }
                        width={logo.width}
                        height={logo.height}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        /* A shared height with free width: the proportions of
                           every wordmark stay exactly as its owner drew them. */
                        className="h-full w-auto max-w-none object-contain"
                        style={{ maxHeight: `${(logo.scale ?? 1) * 100}%` }}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </motion.div>

        <style>{`
          @keyframes tech-ecosystem-marquee-scroll {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-50%, 0, 0); }
          }

          .tech-ecosystem-marquee-track {
            animation: tech-ecosystem-marquee-scroll 40s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .tech-ecosystem-marquee-track {
              animation: none;
              transform: none;
            }
          }
        `}</style>

        <motion.p
          {...reveal(0.08)}
          className="mt-6 text-center text-[11px] leading-relaxed text-white/35"
        >
          {t.footnote}
        </motion.p>
      </div>
    </section>
  );
}
