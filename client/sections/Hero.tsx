import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type Stat = {
  label: string;
  value: string;
};

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  stats?: Stat[];
  media?: ReactNode;
  className?: string;
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
  media,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-white via-secondary/40 to-white py-20 sm:py-24 lg:py-32",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-32rem] mx-auto h-[48rem] w-[68rem] rounded-full bg-glow-conic opacity-70 blur-3xl" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div className="space-y-8">
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 shadow-sm">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-tight">
              {title}
            </h1>
            <p className="max-w-2xl text-lg text-ink-500 md:text-xl">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-7 py-4 text-base font-semibold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Link to={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta ? (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border border-ink-200 px-7 py-4 text-base font-semibold text-ink-600 transition hover:border-brand-200 hover:bg-white"
                >
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
            {stats && stats.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-left shadow-brand-card backdrop-blur"
                  >
                    <p className="text-3xl font-semibold text-brand-600">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium uppercase tracking-wide text-ink-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          {media ? (
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-glow-radial opacity-80 blur-2xl" />
              <div className="relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white/90 shadow-2xl shadow-brand-500/10">
                {media}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
