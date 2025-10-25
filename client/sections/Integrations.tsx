import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Integration = {
  name: string;
  logo?: ReactNode;
};

interface IntegrationsProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Integration[];
  className?: string;
}

export function IntegrationsSection({
  eyebrow,
  title,
  description,
  items,
  className,
}: IntegrationsProps) {
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
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((integration) => (
            <div
              key={integration.name}
              className="flex h-20 items-center justify-center rounded-2xl border border-ink-100 bg-white text-sm font-semibold text-ink-400 shadow-brand-card transition hover:border-brand-200 hover:text-brand-600"
            >
              {integration.logo ?? integration.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
