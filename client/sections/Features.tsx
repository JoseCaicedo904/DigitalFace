import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

interface FeaturesProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
  className?: string;
}

export function FeaturesSection({
  eyebrow,
  title,
  description,
  features,
  className,
}: FeaturesProps) {
  return (
    <section
      className={cn(
        "bg-white py-20 sm:py-24 lg:py-28",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg text-ink-500">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-16 mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 place-items-stretch sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white/90 p-8 shadow-brand-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-glow-radial opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-ocean-500 text-white shadow-brand-soft">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
