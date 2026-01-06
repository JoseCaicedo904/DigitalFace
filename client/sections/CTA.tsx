import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type CtaLink = {
  label: string;
  href: string;
};

interface CtaSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  className?: string;
}

export function CtaSection({
  id,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CtaSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-ocean-500 py-20 text-white sm:py-24 lg:py-28",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_55%)] opacity-70" />
      <div className="container relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow ? (
          <span className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            {description}
          </p>
        ) : null}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-600 shadow-brand-soft transition-transform hover:-translate-y-0.5 hover:bg-white hover:text-brand-600"
          >
            <Link to={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta ? (
            <Button
              asChild
              variant="outline"
              className="rounded-xl border border-white/60 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
