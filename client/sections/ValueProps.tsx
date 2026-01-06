import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ValuePoint = {
  title: string;
  description: string;
  badge?: string;
};

interface ValueProps {
  eyebrow?: string;
  title: string;
  description?: string;
  points: ValuePoint[];
  media?: ReactNode;
  className?: string;
  variant?: "default" | "system-flow";
}

export function ValuePropsSection({
  eyebrow,
  title,
  description,
  points,
  media,
  className,
  variant = "default",
}: ValueProps) {
  if (variant === "system-flow") {
    return (
      <section
        className={cn(
          "relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_60%)] opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_55%)]" />
        </div>
        <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl space-y-10">
            <div className="space-y-6">
              {eyebrow ? (
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                  {eyebrow}
                </span>
              ) : null}
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {title}
              </h2>
              {description ? (
                <p className="text-lg text-white/70">{description}</p>
              ) : null}
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-brand-400/70 motion-safe:animate-ping" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-brand-400" />
              </span>
                System status: live and optimizing
              </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-5 top-0 h-full w-px bg-white/15 lg:hidden" />
                <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-brand-400/70 via-ocean-400/40 to-transparent lg:hidden" />
                <span className="absolute left-5 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-400 shadow-[0_0_18px_rgba(124,58,237,0.45)] motion-safe:animate-journey lg:hidden" />
                <div className="absolute left-0 right-0 top-5 hidden h-px bg-white/15 lg:block" />
                <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-brand-400/70 via-ocean-400/40 to-transparent motion-safe:animate-shimmer lg:block" />
              </div>
              <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
                {points.map((point, index) => (
                  <li key={point.title} className="relative pl-14 lg:pl-0 lg:pt-12">
                    <span className="absolute left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-white/80 lg:left-1/2 lg:-translate-x-1/2">
                      0{index + 1}
                    </span>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                        <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] text-white/70">
                          {point.badge ?? `Stage 0${index + 1}`}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/30 via-white/10 to-transparent motion-safe:animate-shimmer" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70">
                          {point.description}
                        </p>
                      </div>
                      <div className="h-px w-16 bg-gradient-to-r from-brand-400/70 via-white/10 to-transparent" />
                    </div>
                  </li>
                ))}
                {media ? (
                  <li className="relative pl-14 lg:col-span-4 lg:pl-0 lg:pt-10 lg:before:absolute lg:before:left-1/2 lg:before:-top-5 lg:before:h-8 lg:before:w-px lg:before:bg-white/15 lg:before:content-['']">
                    <div className="flex items-start gap-5">
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        Live
                      </span>
                      <div className="flex-1 space-y-5">
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] text-white/70">
                            System outputs
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-r from-white/30 via-white/10 to-transparent motion-safe:animate-shimmer" />
                        </div>
                        <div className="space-y-6">{media}</div>
                      </div>
                    </div>
                  </li>
                ) : null}
              </ol>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)] opacity-70" />
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
          <div className="flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.45)] backdrop-blur-sm lg:p-10">
            <div className="space-y-6">
              {eyebrow ? (
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
                  {eyebrow}
                </span>
              ) : null}
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                {title}
              </h2>
              {description ? (
                <p className="text-lg text-white/70">{description}</p>
              ) : null}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="flex min-h-[180px] flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-brand-card backdrop-blur transition hover:border-white/30"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-ocean-500 text-xs font-semibold uppercase tracking-wide text-white shadow-brand-soft">
                    {point.badge ?? "AI"}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {media ? (
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-8 shadow-2xl shadow-brand-500/15 backdrop-blur lg:p-10">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-glow-conic opacity-40 blur-2xl" />
              <div className="relative flex flex-col gap-6">{media}</div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
