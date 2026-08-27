import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, ImageIcon, Quote, Star } from "lucide-react";
import { clientMedia } from "@/data/mediaSlots";
import type { HomeContent } from "@/i18n/content/home";
import { cn } from "@/lib/utils";

type ClientSystemsProps = {
  content: HomeContent["clientSystems"];
  className?: string;
};

type ClientId = keyof typeof clientMedia;

/** Add an approved asset path here when a client image is ready to publish. */
const approvedClientImages: Partial<Record<ClientId, string>> = {};

export function ClientSystemsSection({
  content,
  className,
}: ClientSystemsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
            {content.description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-7 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {content.items.map((item, index) => {
            const clientId = item.id as ClientId;
            const media = clientMedia[clientId];
            const approvedImage = approvedClientImages[clientId];

            return (
              <motion.article
                key={item.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.09)]"
              >
                <div
                  data-media-slot={media.id}
                  className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(124,58,237,0.13),transparent_40%),radial-gradient(circle_at_82%_75%,rgba(14,165,233,0.12),transparent_42%),linear-gradient(145deg,#f8fafc,#eef2ff)] sm:aspect-[16/8]"
                >
                  {approvedImage ? (
                    <img
                      src={approvedImage}
                      alt={media.alt}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: media.objectPosition }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={`${content.imagePlaceholderLabel}: ${item.name}`}
                      className="absolute inset-5 flex flex-col items-center justify-center rounded-2xl border border-dashed border-brand-200/80 bg-white/55 px-6 text-center sm:inset-7"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-100 bg-white text-brand-500 shadow-sm">
                        <ImageIcon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                        {content.imagePlaceholderLabel}
                      </p>
                      <p className="mt-2 max-w-sm text-xs leading-relaxed text-ink-500">
                        {content.imagePlaceholderDescription}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      {content.confirmedLabel}
                    </span>
                    <span className="text-xs font-medium text-ink-400">
                      {item.sector}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600">
                    {content.systemLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {item.summary}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-dashed border-ink-200 bg-slate-50/80 p-5">
                      <Quote
                        className="h-5 w-5 text-ink-300"
                        aria-hidden="true"
                      />
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                        {content.testimonialPlaceholderLabel}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-ink-400">
                        {content.testimonialPlaceholderDescription}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-dashed border-ink-200 bg-slate-50/80 p-5">
                      <Star
                        className="h-5 w-5 text-ink-300"
                        aria-hidden="true"
                      />
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                        {content.reviewPlaceholderLabel}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-ink-400">
                        {content.reviewPlaceholderDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
