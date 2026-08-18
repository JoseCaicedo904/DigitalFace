import { motion, type Variants } from "framer-motion";
import { UserRoundCheck } from "lucide-react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { clientMedia } from "@/data/mediaSlots";
import { cn } from "@/lib/utils";
import type { HomeContent } from "@/i18n/content/home";

type ClientSystemsProps = {
  content: HomeContent["clientSystems"];
  className?: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Client story ids line up with the two approved case-study media slots. */
const storyMediaOrder = ["diego", "jennifer"] as const;

/**
 * Factual record of the systems DigitalFace has delivered.
 * Deliberately not a testimonial section: no quotes, no attributed claims.
 */
export function ClientSystemsSection({
  content,
  className,
}: ClientSystemsProps) {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            {content.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{content.description}</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
        >
          {content.items.map((item, index) => (
            <motion.article
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="group relative flex h-full flex-col rounded-2xl border border-white/20 bg-white/90 p-7 text-left shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8"
            >
              <MediaSlot
                spec={clientMedia[storyMediaOrder[index]]}
                aspectClassName="aspect-[16/8]"
                className="mb-6 border-ink-100 shadow-none"
                compact
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {content.activeLabel}
                </span>
                <span className="text-xs font-medium text-ink-400">
                  {item.sector}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                {item.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                {item.summary}
              </p>
            </motion.article>
          ))}

          {["03", "04"].map((slot) => (
            <motion.article
              key={slot}
              variants={cardVariants}
              className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-200 bg-white/60 p-8 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-100 text-ink-400">
                <UserRoundCheck className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                {content.reservedLabel} {slot}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {content.reservedTitle}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-500">
                {content.reservedDescription}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
