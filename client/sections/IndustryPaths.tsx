import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, HeartPulse, Smile, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaSlot } from "@/components/media/MediaSlot";
import { corporateMedia } from "@/data/mediaSlots";

const industries = [
  {
    title: "Dental Practices",
    eyebrow: "Implants · Veneers · Smile design",
    description:
      "A patient-acquisition and consultation system built around high-value dental treatment journeys.",
    outcome: "Convert more treatment inquiries into organized consultations.",
    href: "/industries/dental-practices",
    icon: Smile,
    accent: "from-brand-600 to-violet-500",
    media: corporateMedia.industryCards.dental,
  },
  {
    title: "Aesthetic Medicine",
    eyebrow: "Injectables · Body · Skin",
    description:
      "A bilingual lead-to-consultation experience for physicians and aesthetic treatment teams.",
    outcome: "Respond faster while keeping clinical decisions with your team.",
    href: "/industries/aesthetic-medicine",
    icon: HeartPulse,
    accent: "from-fuchsia-500 to-brand-600",
    media: corporateMedia.industryCards.aesthetic,
  },
  {
    title: "Med Spas",
    eyebrow: "Memberships · Packages · Reactivation",
    description:
      "An always-on booking and nurture system for recurring services, promotions, and client reactivation.",
    outcome: "Turn inquiries and dormant contacts into booked opportunities.",
    href: "/industries/med-spas",
    icon: Sparkles,
    accent: "from-ocean-500 to-cyan-400",
    media: corporateMedia.industryCards.medSpa,
  },
];

export function IndustryPathsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(124,58,237,0.23),transparent_36%),radial-gradient(circle_at_90%_15%,rgba(14,165,233,0.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ocean-200">
            Industry growth systems
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Start with the DigitalFace system built for your patient journey.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            The same DigitalFace operating core, translated into the language,
            workflows, and conversion points of three patient-driven markets.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.href}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={prefersReducedMotion ? undefined : { y: -7 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${industry.accent}`}
                />
                <MediaSlot
                  spec={industry.media}
                  aspectClassName="aspect-[16/9]"
                  className="-mx-2 border-white/10 shadow-none"
                  compact
                />
                <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ocean-200">
                  {industry.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {industry.description}
                </p>
                <p className="mt-5 border-l-2 border-brand-400/70 pl-4 text-sm font-medium leading-relaxed text-white/85">
                  {industry.outcome}
                </p>
                <Link
                  to={industry.href}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-white transition group-hover:text-ocean-200"
                >
                  Explore the closed growth page
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
