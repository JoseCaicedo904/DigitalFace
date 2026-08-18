import { MediaSlot } from "@/components/media/MediaSlot";
import { corporateMedia } from "@/data/mediaSlots";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function SystemMediaSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
            One connected operating system
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Show the journey. Make the system feel tangible.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            This media position is designed for a concise visual story—from
            first inquiry to response, booking, and pipeline visibility.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={
            prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-12"
        >
          <MediaSlot
            spec={corporateMedia.systemOverview}
            aspectClassName="aspect-[16/10] sm:aspect-[21/9]"
            className="border-ink-100 shadow-brand-soft"
            overlay={
              <div className="flex h-full items-end bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent p-6 sm:p-9">
                <div className="max-w-2xl text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-200">
                    Inquiry → response → booking → visibility
                  </p>
                  <p className="mt-3 text-xl font-semibold sm:text-3xl">
                    Every opportunity moves through one connected DigitalFace
                    journey.
                  </p>
                </div>
                <ArrowDownRight className="ml-auto hidden h-8 w-8 text-white/70 sm:block" />
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
