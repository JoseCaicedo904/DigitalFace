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
  showVideo?: boolean;
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
  showVideo = true,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[480px] items-center overflow-hidden bg-slate-950 py-16 sm:py-20 lg:min-h-[60vh] lg:py-24",
        className
      )}
    >
      {showVideo ? (
        <>
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover"
            src="/videos/digitalface-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-poster.jpg"
          />
          <div className="absolute inset-0 z-10 bg-black/50" />
        </>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      )}
      <div className="pointer-events-none absolute inset-x-0 top-[-32rem] mx-auto h-[48rem] w-[68rem] rounded-full bg-glow-conic opacity-40 blur-3xl z-10" />
      <div className="container relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div className="space-y-8">
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 shadow-sm">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-tight">
              {title}
            </h1>
            <p className="max-w-2xl text-lg text-white/80 md:text-xl">
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
                  className="rounded-xl border border-white/50 px-7 py-4 text-base font-semibold text-white transition hover:border-white/80 hover:bg-white/10"
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
                    className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left text-white shadow-brand-card backdrop-blur"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium uppercase tracking-wide text-white/70">
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
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl shadow-brand-500/10 backdrop-blur">
                {media}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
