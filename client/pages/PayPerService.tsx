import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { CtaSection } from "@/sections/CTA";
import { useLocale } from "@/i18n/LocaleProvider";
import { payPerServiceContent } from "@/i18n/content/payPerService";
import type { PayPerServiceContent } from "@/i18n/content/payPerService";

type GroupKey = keyof PayPerServiceContent["groups"];

/**
 * Anchor ids are technical: the header mega menu links to them and campaigns
 * may deep-link to them. They are identical in every locale.
 */
const groupStructure: {
  key: GroupKey;
  id: string;
  services: { key: string; id: string }[];
}[] = [
  {
    key: "paidMedia",
    id: "paid-media",
    services: [
      { key: "meta", id: "meta-ads" },
      { key: "tiktok", id: "tiktok-ads" },
      { key: "google", id: "google-ads" },
      { key: "seo", id: "seo-strategy" },
      { key: "content", id: "content-creation" },
    ],
  },
  {
    key: "automation",
    id: "automation-and-chatbots",
    services: [
      { key: "chatbot", id: "chatbot-development" },
      { key: "workflow", id: "workflow-automation" },
      { key: "appointment", id: "appointment-automation" },
      { key: "ecommerce", id: "ecommerce-automation" },
      { key: "comments", id: "comment-auto-reply" },
    ],
  },
  {
    key: "leadOps",
    id: "lead-ops-crm",
    services: [
      { key: "capture", id: "lead-capture" },
      { key: "booking", id: "appointment-booking" },
      { key: "pipeline", id: "crm-pipeline" },
      { key: "integration", id: "crm-integration" },
      { key: "reporting", id: "reporting-dashboards" },
    ],
  },
  {
    key: "websites",
    id: "websites-and-funnels",
    services: [
      { key: "corporate", id: "corporate-websites" },
      { key: "landing", id: "campaign-landing-pages" },
    ],
  },
];

export default function PayPerService() {
  const { locale, path } = useLocale();
  const t = payPerServiceContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  return (
    <div className="bg-white">
      <Hero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={{ label: t.hero.primaryCta, href: path("/contact") }}
        secondaryCta={{ label: t.hero.secondaryCta, href: path("/features") }}
        showVideo={false}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-100 bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              {t.catalog.eyebrow}
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t.catalog.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{t.catalog.description}</p>
          </div>

          <div className="mt-16 space-y-16">
            {groupStructure.map((group) => {
              const groupCopy = t.groups[group.key];
              const services = groupCopy.services as Record<
                string,
                {
                  title: string;
                  description: string;
                  outcomes: string[];
                  ctaLabel: string;
                }
              >;

              return (
                <div
                  key={group.id}
                  id={group.id}
                  className="space-y-8 scroll-mt-28"
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {groupCopy.title}
                    </h3>
                    <p className="text-sm text-ink-500 sm:text-base">
                      {groupCopy.description}
                    </p>
                  </div>
                  <div className="grid auto-rows-fr place-items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {group.services.map((service) => {
                      const copy = services[service.key];
                      return (
                        <div
                          key={service.id}
                          id={service.id}
                          className="flex h-full flex-col self-stretch rounded-3xl border border-ink-100 bg-white/95 p-6 shadow-brand-card scroll-mt-28"
                        >
                          <div className="flex flex-1 flex-col space-y-5">
                            <div className="space-y-2">
                              <h4 className="text-xl font-semibold text-slate-900">
                                {copy.title}
                              </h4>
                              <p className="text-sm text-ink-500">
                                {copy.description}
                              </p>
                            </div>
                            <div className="rounded-2xl border border-ink-100 bg-secondary/40 p-4">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-600">
                                {t.catalog.helpsWith}
                              </p>
                              <ul className="mt-3 space-y-2 text-sm text-ink-500">
                                {copy.outcomes.map((outcome) => (
                                  <li
                                    key={outcome}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                    <span>{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="mt-auto pt-6">
                            <Link
                              to={path("/contact")}
                              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                            >
                              {copy.ctaLabel}
                              <span aria-hidden="true">-&gt;</span>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow={t.cta.eyebrow}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={{ label: t.cta.primaryCta, href: path("/contact") }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/features") }}
      />
    </div>
  );
}
