import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  logo?: ReactNode;
};

interface TestimonialsProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Testimonial[];
  className?: string;
}

export function TestimonialsSection({
  eyebrow,
  title,
  description,
  items,
  className,
}: TestimonialsProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28",
        className
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg text-ink-500">{description}</p>
          ) : null}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.author}
              className="flex h-full flex-col justify-between rounded-3xl border border-ink-100 bg-white/90 p-8 text-left shadow-brand-card"
            >
              <div>
                <p className="text-lg text-ink-600">
                  "{item.quote}"
                </p>
              </div>
              <div className="mt-8 border-t border-ink-100 pt-5">
                <p className="text-sm font-semibold text-slate-900">
                  {item.author}
                </p>
                {item.role ? (
                  <p className="text-xs uppercase tracking-wide text-ink-400">
                    {item.role}
                  </p>
                ) : null}
                {item.logo ? <div className="mt-4">{item.logo}</div> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
