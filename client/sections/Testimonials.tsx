import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

interface TestimonialsSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: Testimonial[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function TestimonialsSection({
  eyebrow,
  title,
  description,
  items,
  className,
}: TestimonialsSectionProps) {
  const testimonials = items.slice(0, 4);

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white via-secondary/30 to-white py-20 sm:py-24 lg:py-28",
        className,
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.author}-${index}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              tabIndex={0}
              aria-label={`Testimonial from ${item.author}`}
              className="group relative flex h-full flex-col rounded-2xl border border-white/20 bg-white/90 p-8 text-left shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400/70 before:absolute before:-inset-[1.5px] before:-z-10 before:rounded-[1.75rem] before:bg-gradient-to-r before:from-brand-500/60 before:via-ocean-400/60 before:to-brand-500/60 before:opacity-0 before:transition before:duration-300 before:content-[''] hover:shadow-2xl hover:before:opacity-100 focus-visible:before:opacity-100 dark:border-white/10 dark:bg-slate-900/60"
            >
              <motion.div
                aria-hidden="true"
                className="absolute right-6 top-6 text-brand-400/70"
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              >
                <Quote className="h-6 w-6" />
              </motion.div>

              <blockquote className="flex-1 text-lg leading-relaxed text-ink-700">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <footer className="mt-8 border-t border-white/30 pt-6 text-sm text-ink-500">
                <cite className="block text-base font-semibold not-italic text-slate-900">
                  {item.author}
                </cite>
                <span className="text-xs uppercase tracking-[0.3em] text-ink-400">
                  {item.role}
                </span>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
