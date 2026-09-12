import { usePageMetadata } from "@/hooks/usePageMetadata";
import { Hero } from "@/sections/Hero";
import { ModularCapabilityBackdrop } from "@/sections/ModularCapabilityBackdrop";
import { CtaSection } from "@/sections/CTA";
import { AddToRequestButton } from "@/components/request/AddToRequestButton";
import { useLocale } from "@/i18n/LocaleProvider";
import { payPerServicePageContent } from "@/i18n/content/payPerServicePage";
import { payPerServiceOutcomeIcons } from "./payPerServiceIcons";
import {
  getServiceAnchor,
  getServiceName,
  orderServicesForPage,
  serviceCatalog,
} from "@/data/serviceCatalog";
import { anchorIdFromHash, scrollToPageAnchor } from "@/lib/anchorScroll";
import { ChevronDown } from "lucide-react";
import { REQUEST_SERVICES_ANCHOR } from "@/components/request/anchor";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * The catalog itself lives in `@/data/serviceCatalog`: each stable request id
 * also supplies the card anchor used by navigation (with one filter-safe DOM
 * override), so the menu, page and request builder cannot drift apart.
 */

export default function PayPerService() {
  const { locale, path } = useLocale();
  const { hash } = useLocation();
  const t = payPerServicePageContent[locale];

  usePageMetadata(t.metadata.title, t.metadata.description);

  // The route is lazy-loaded, so cross-page hash navigation may run before the
  // cards exist. Retry once this page has mounted; same-page hash changes use
  // this same path without remounting the catalog or losing request state.
  useEffect(() => {
    const anchorId = anchorIdFromHash(hash);
    if (!anchorId) return;

    const frame = window.requestAnimationFrame(() => {
      scrollToPageAnchor(anchorId);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="bg-white">
      <Hero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={{ label: t.hero.primaryCta, href: "#services" }}
        secondaryCta={{ label: t.hero.secondaryCta, href: path("/features") }}
        showVideo={false}
        background={<ModularCapabilityBackdrop />}
      />

      <section
        id="services"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
      >
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

          <nav
            aria-label={t.catalog.eyebrow}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {serviceCatalog.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-brand-100 px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
              >
                {t.groups[group.key].title}
              </a>
            ))}
          </nav>
          <div className="mt-12 space-y-12">
            {serviceCatalog.map((group) => {
              const groupCopy = t.groups[group.key];
              const services = groupCopy.services as Record<
                string,
                {
                  title: string;
                  description: string;
                  outcomesLabel?: string;
                  outcomes: string[];
                  ctaLabel: string;
                }
              >;

              return (
                <div
                  key={group.id}
                  id={group.id}
                  data-pay-per-service-anchor
                  className="space-y-8 scroll-mt-28"
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {groupCopy.title}
                    </h3>
                    <p className="text-sm text-ink-500 sm:text-base">
                      {groupCopy.description}
                    </p>
                    {group.key === "paidMedia" ? (
                      <Link
                        to={path("/industries/paid-advertising")}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
                      >
                        {t.catalog.paidMediaLink}
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    ) : null}
                  </div>
                  <div className="grid auto-rows-fr place-items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {orderServicesForPage(group.services).map((service) => {
                      const copy = services[service.contentKey];
                      const outcomeIcons =
                        payPerServiceOutcomeIcons[service.id];
                      return (
                        <div
                          key={service.id}
                          id={getServiceAnchor(service.id)}
                          data-pay-per-service-anchor
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
                            <details className="group rounded-2xl border border-ink-100 bg-secondary/40 p-4">
                              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded text-sm font-semibold text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 [&::-webkit-details-marker]:hidden">
                                {copy.outcomesLabel ?? t.catalog.helpsWith}
                                <ChevronDown
                                  aria-hidden="true"
                                  className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                                />
                              </summary>
                              <ul className="mt-3 space-y-2 text-sm text-ink-500">
                                {copy.outcomes.map((outcome, index) => {
                                  const OutcomeIcon = outcomeIcons?.[index];
                                  return (
                                    <li
                                      key={outcome}
                                      className="flex items-start gap-2"
                                    >
                                      {OutcomeIcon ? (
                                        <OutcomeIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                      ) : (
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                      )}
                                      <span>{outcome}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </details>
                          </div>
                          {/* Selection keeps the canonical service ID and request flow. */}
                          <div className="mt-auto flex flex-col items-start gap-3 pt-6">
                            <AddToRequestButton
                              serviceId={service.id}
                              serviceName={getServiceName(service.id, locale)}
                            />
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
        primaryCta={{
          label: t.cta.primaryCta,
          href: `${path("/contact")}#${REQUEST_SERVICES_ANCHOR}`,
        }}
        secondaryCta={{ label: t.cta.secondaryCta, href: path("/features") }}
      />
    </div>
  );
}
