import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { StructuredData } from "@/components/seo/StructuredData";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";
import { commonContent } from "@/i18n/content/common";
import {
  getIndustryNavLabels,
  industryHref,
} from "@/pages/industries/industryData";
import {
  BarChart3,
  ChevronDown,
  HeartPulse,
  Megaphone,
  Menu,
  Search,
  Smile,
  Sparkles,
  X,
} from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const INDUSTRY_ICONS = {
  "dental-practices": Smile,
  "aesthetic-medicine": HeartPulse,
  "med-spas": Sparkles,
} as const;

const INDUSTRY_DESCRIPTION_KEYS = {
  "dental-practices": "dental",
  "aesthetic-medicine": "aesthetic",
  "med-spas": "medSpa",
} as const;

const desktopNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative text-sm font-medium text-ink-500 transition hover:text-brand-600",
    isActive
      ? "text-brand-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-500"
      : "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100",
  );

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { locale, path } = useLocale();
  const t = commonContent[locale];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = useMemo(
    () => [
      { key: "home", label: t.nav.home, to: path("/") },
      { key: "about", label: t.nav.about, to: path("/about") },
      { key: "features", label: t.nav.features, to: path("/features") },
      { key: "industries", label: t.nav.industries, to: null },
      {
        key: "payPerService",
        label: t.nav.payPerService,
        to: path("/pay-per-service"),
      },
      { key: "pricing", label: t.nav.pricing, to: path("/pricing") },
      { key: "contact", label: t.nav.contact, to: path("/contact") },
    ],
    [t, path],
  );

  const industryNav = useMemo(
    () =>
      getIndustryNavLabels(locale).map(({ slug, label }) => ({
        slug,
        label,
        description: t.industries[INDUSTRY_DESCRIPTION_KEYS[slug]].description,
        to: path(industryHref(slug)),
        icon: INDUSTRY_ICONS[slug],
      })),
    [locale, t, path],
  );

  const megaNav = useMemo(
    () => ({
      to: path("/pay-per-service"),
      categories: [
        {
          title: t.megaNav.paidMedia.title,
          icon: Megaphone,
          to: path("/pay-per-service#paid-media"),
          links: [
            {
              label: t.megaNav.paidMedia.links.meta,
              to: path("/pay-per-service#meta-ads"),
            },
            {
              label: t.megaNav.paidMedia.links.tiktok,
              to: path("/pay-per-service#tiktok-ads"),
            },
            {
              label: t.megaNav.paidMedia.links.google,
              to: path("/pay-per-service#google-ads"),
            },
            {
              label: t.megaNav.paidMedia.links.seo,
              to: path("/pay-per-service#seo-strategy"),
            },
            {
              label: t.megaNav.paidMedia.links.content,
              to: path("/pay-per-service#content-creation"),
            },
          ],
        },
        {
          title: t.megaNav.automation.title,
          icon: Sparkles,
          to: path("/pay-per-service#automation-and-chatbots"),
          links: [
            {
              label: t.megaNav.automation.links.chatbot,
              to: path("/pay-per-service#chatbot-development"),
            },
            {
              label: t.megaNav.automation.links.workflow,
              to: path("/pay-per-service#workflow-automation"),
            },
            {
              label: t.megaNav.automation.links.appointment,
              to: path("/pay-per-service#appointment-automation"),
            },
            {
              label: t.megaNav.automation.links.ecommerce,
              to: path("/pay-per-service#ecommerce-automation"),
            },
            {
              label: t.megaNav.automation.links.comments,
              to: path("/pay-per-service#comment-auto-reply"),
            },
          ],
        },
        {
          title: t.megaNav.leadOps.title,
          icon: BarChart3,
          to: path("/pay-per-service#lead-ops-crm"),
          links: [
            {
              label: t.megaNav.leadOps.links.capture,
              to: path("/pay-per-service#lead-capture"),
            },
            {
              label: t.megaNav.leadOps.links.booking,
              to: path("/pay-per-service#appointment-booking"),
            },
            {
              label: t.megaNav.leadOps.links.pipeline,
              to: path("/pay-per-service#crm-pipeline"),
            },
            {
              label: t.megaNav.leadOps.links.integration,
              to: path("/pay-per-service#crm-integration"),
            },
            {
              label: t.megaNav.leadOps.links.reporting,
              to: path("/pay-per-service#reporting-dashboards"),
            },
          ],
        },
        {
          title: t.megaNav.websites.title,
          icon: Search,
          to: path("/pay-per-service#websites-and-funnels"),
          links: [
            {
              label: t.megaNav.websites.links.corporate,
              to: path("/pay-per-service#corporate-websites"),
            },
            {
              label: t.megaNav.websites.links.ecommerce,
              to: path("/pay-per-service#ecommerce-storefronts"),
            },
            {
              label: t.megaNav.websites.links.landing,
              to: path("/pay-per-service#campaign-landing-pages"),
            },
          ],
        },
      ],
    }),
    [t, path],
  );

  const homePath = path("/");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_55%)] text-foreground">
      {/* Declared once for the whole corporate tree; the industry funnels render
          their own copy because they sit outside this layout. */}
      <StructuredData
        id="organization"
        data={[organizationSchema(locale), websiteSchema(locale)]}
      />
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8 relative">
          <Link to={homePath} className="flex items-center gap-3">
            <img
              src="/images/DIGITAL%20FACE%20MARCA%20ISOTIPO.png"
              alt={t.footer.logoAlt}
              width={44}
              height={44}
              className="h-11 w-11 rounded-2xl object-contain shadow-brand-soft"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-tight">
                DigitalFace Marketing
              </span>
              <span className="text-sm text-ink-500">{t.footer.region}</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) =>
              item.key === "industries" ? (
                <div
                  key={item.key}
                  className="group relative -my-4 flex items-center py-4"
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    className={cn(
                      "flex items-center gap-1.5 text-sm font-medium text-ink-500 transition hover:text-brand-600 group-focus-within:text-brand-600 group-hover:text-brand-600",
                      location.pathname.includes("/industries/") &&
                        "text-brand-600",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible pointer-events-none absolute left-1/2 top-full z-[80] w-[25rem] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-3xl border border-ink-100 bg-white/95 p-3 shadow-brand-card backdrop-blur-xl">
                      <p className="px-4 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                        {t.nav.industriesIntro}
                      </p>
                      {industryNav.map((industry) => {
                        const Icon = industry.icon;
                        return (
                          <Link
                            key={industry.to}
                            to={industry.to}
                            className="group/item flex gap-4 rounded-2xl px-4 py-3 transition hover:bg-brand-50"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover/item:bg-brand-600 group-hover/item:text-white">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-slate-900 group-hover/item:text-brand-700">
                                {industry.label}
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-ink-500">
                                {industry.description}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : item.key === "payPerService" ? (
                <div
                  key={item.key}
                  className="group -my-4 flex items-center py-4"
                >
                  <NavLink to={item.to!} className={desktopNavLinkClass}>
                    {item.label}
                  </NavLink>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-full z-[70] hidden h-4 -translate-y-4 opacity-0 lg:block lg:pointer-events-none lg:group-hover:pointer-events-auto lg:group-hover:opacity-100"
                  />
                  <div className="absolute left-0 right-0 top-full z-[70] hidden translate-y-2 pt-4 opacity-0 transition duration-200 ease-out lg:block lg:invisible lg:pointer-events-none lg:group-hover:visible lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <div className="rounded-3xl border border-ink-100 bg-white/95 p-8 shadow-brand-card backdrop-blur-xl">
                      <div className="grid gap-8 lg:grid-cols-4">
                        {megaNav.categories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <div key={category.title} className="space-y-4">
                              <Link
                                to={category.to}
                                className="flex items-center gap-3 text-sm font-semibold text-ink-900 transition hover:text-brand-600 cursor-pointer"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                  <Icon
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                  />
                                </span>
                                {category.title}
                              </Link>
                              <ul className="space-y-2 text-sm text-ink-500">
                                {category.links.map((link) => (
                                  <li key={link.to}>
                                    <Link
                                      to={link.to}
                                      className="transition hover:text-brand-600 cursor-pointer"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.to!}
                  end={item.key === "home"}
                  className={desktopNavLinkClass}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Button
              asChild
              className="rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link to={path("/contact")}>{t.nav.bookCall}</Link>
            </Button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher showIcon={false} className="p-0.5" />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 text-ink-600 transition hover:border-brand-200 hover:text-brand-600"
              aria-label={t.nav.menuToggle}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div
          className={cn(
            "lg:hidden",
            menuOpen
              ? "max-h-[42rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0",
          )}
        >
          <div className="mx-4 mb-4 rounded-2xl border border-ink-200 bg-white/90 shadow-brand-card backdrop-blur">
            <nav className="flex flex-col divide-y divide-ink-100">
              {navItems.map((item) =>
                item.key === "industries" ? (
                  <details key="mobile-industries" className="group/details">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-ink-500 transition hover:text-brand-600">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition group-open/details:rotate-180" />
                    </summary>
                    <div className="border-t border-ink-100 bg-ink-50/60 px-3 py-2">
                      {industryNav.map((industry) => (
                        <Link
                          key={`mobile-${industry.to}`}
                          to={industry.to}
                          className="block rounded-xl px-3 py-3 text-sm font-medium text-ink-500 transition hover:bg-white hover:text-brand-600"
                        >
                          {industry.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <NavLink
                    key={`mobile-${item.key}`}
                    to={item.to!}
                    end={item.key === "home"}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between px-5 py-4 text-sm font-semibold text-ink-500 transition hover:text-brand-600",
                        isActive && "text-brand-600",
                      )
                    }
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="text-xs font-medium text-ink-300"
                    >
                      →
                    </span>
                  </NavLink>
                ),
              )}
            </nav>
            <div className="px-5 py-4">
              <Button
                asChild
                className="w-full rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-brand-soft"
              >
                <Link to={path("/contact")}>{t.nav.bookDemo}</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 bg-slate-950 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
          <div className="max-w-md space-y-5">
            <Link to={homePath} className="flex items-center gap-3 text-white">
              <img
                src="/images/DIGITAL%20FACE%20MARCA%20ISOTIPO.png"
                alt={t.footer.logoAlt}
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-contain shadow-brand-soft"
              />
              <span className="text-lg font-semibold">
                DigitalFace Marketing
              </span>
            </Link>
            <p className="text-sm text-white/70">{t.footer.tagline}</p>
            <p className="text-sm font-medium text-ocean-200">
              {t.footer.promise}
            </p>
            <LanguageSwitcher tone="dark" />
          </div>
          <div className="grid flex-1 gap-10 text-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)]">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {t.footer.navigate}
              </h3>
              <ul className="space-y-2">
                {navItems
                  .filter((item) => item.key !== "industries")
                  .map((item) => (
                    <li key={`footer-${item.key}`}>
                      <Link
                        className="text-white/80 transition hover:text-white"
                        to={item.to!}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                <li className="pt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  {t.footer.industries}
                </li>
                {industryNav.map((industry) => (
                  <li key={`footer-${industry.to}`}>
                    <Link
                      className="text-white/80 transition hover:text-white"
                      to={industry.to}
                    >
                      {industry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {t.footer.contact}
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <span>{t.footer.emailLabel}</span>
                  <span className="block font-semibold text-white whitespace-nowrap">
                    sales@digitalfacemarketing.com
                  </span>
                </li>
                <li>
                  <span>{t.footer.hoursLabel}</span>
                  <span className="block font-semibold text-white">
                    {t.footer.hoursValue}
                  </span>
                </li>
                <li>
                  <span>{t.footer.locationsLabel}</span>
                  <span className="block font-semibold text-white">
                    {t.footer.locationsValue}
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                {t.footer.offices}
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <span className="block font-semibold text-white">
                    {t.footer.miamiTitle}
                  </span>
                  <span>{t.footer.miamiDetail}</span>
                </li>
                <li>
                  <span className="block font-semibold text-white">
                    {t.footer.caliTitle}
                  </span>
                  <span>{t.footer.caliDetail}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="transition hover:text-white"
                to={path("/privacy")}
              >
                {t.footer.privacy}
              </Link>
              <Link className="transition hover:text-white" to={path("/terms")}>
                {t.footer.terms}
              </Link>
              <Link
                className="transition hover:text-white"
                to="/sitemap.xml"
                reloadDocument
              >
                {t.footer.sitemap}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
