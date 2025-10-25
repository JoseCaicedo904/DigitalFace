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
}

export function ValuePropsSection({
  eyebrow,
  title,
  description,
  points,
  media,
  className,
}: ValueProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)] opacity-70" />
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
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
            <div className="space-y-6">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-brand-card backdrop-blur transition hover:border-white/30"
                >
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-ocean-500 text-xs font-semibold uppercase tracking-wide text-white shadow-brand-soft">
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
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-glow-conic opacity-40 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 shadow-2xl shadow-brand-500/10">
                {media}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
