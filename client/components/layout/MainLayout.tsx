import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart3, Megaphone, Menu, Search, Sparkles, X } from "lucide-react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Sales System", to: "/features" },
  { label: "Pay per Service", to: "/pay-per-service" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const megaNav = {
  label: "Pay per Service",
  to: "/pay-per-service",
  categories: [
    {
      title: "Paid media and social advertising",
      icon: Megaphone,
      to: "/pay-per-service#paid-media",
      links: [
        {
          label: "Meta (Facebook and Instagram) ads",
          to: "/pay-per-service#meta-ads",
        },
        { label: "TikTok ads", to: "/pay-per-service#tiktok-ads" },
        { label: "Google ads", to: "/pay-per-service#google-ads" },
        { label: "SEO strategy", to: "/pay-per-service#seo-strategy" },
        { label: "Content creation", to: "/pay-per-service#content-creation" },
      ],
      allTo: "/pay-per-service#paid-media",
    },
    {
      title: "Automation and chatbots",
      icon: Sparkles,
      to: "/pay-per-service#automation-and-chatbots",
      links: [
        {
          label: "Chatbot development (AI and Rule-based)",
          to: "/pay-per-service#chatbot-development",
        },
        {
          label: "Workflow automation and drip campaigns",
          to: "/pay-per-service#workflow-automation",
        },
        {
          label: "Appointment & Calendar Automations",
          to: "/pay-per-service#appointment-automation",
        },
        {
          label: "E-commerce automations (Shopify-WooCommerce)",
          to: "/pay-per-service#ecommerce-automation",
        },
        {
          label: "Done-for-you Custom Templates",
          to: "/pay-per-service#automation-templates",
        },
      ],
      allTo: "/pay-per-service#automation-and-chatbots",
    },
    {
      title: "Lead ops and CRM systems",
      icon: BarChart3,
      to: "/pay-per-service#lead-ops-crm",
      links: [
        {
          label: "Lead capture and channel sync",
          to: "/pay-per-service#lead-capture",
        },
        {
          label: "Appointment booking and reminders",
          to: "/pay-per-service#appointment-booking",
        },
        {
          label: "CRM pipeline setup (GoHighLevel)",
          to: "/pay-per-service#crm-pipeline",
        },
        {
          label: "CRM integration and data sync",
          to: "/pay-per-service#crm-integration",
        },
        {
          label: "Reporting and performance dashboards",
          to: "/pay-per-service#reporting-dashboards",
        },
      ],
      allTo: "/pay-per-service#lead-ops-crm",
    },
    {
      title: "Websites and funnels",
      icon: Search,
      to: "/pay-per-service#websites-and-funnels",
      links: [
        {
          label: "Corporate and business websites",
          to: "/pay-per-service#corporate-websites",
        },
        {
          label: "E-commerce storefronts (Websites and Funnels)",
          to: "/pay-per-service#ecommerce-storefronts",
        },
        {
          label: "Campaign landing pages (conversion-focused design)",
          to: "/pay-per-service#campaign-landing-pages",
        },
        { label: "Content hubs and blogs", to: "/pay-per-service#content-hubs" },
        {
          label: "Custom digital experiences",
          to: "/pay-per-service#custom-digital-experiences",
        },
      ],
      allTo: "/pay-per-service#websites-and-funnels",
    },
  ],
};

const desktopNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "relative text-sm font-medium text-ink-500 transition hover:text-brand-600",
    isActive
      ? "text-brand-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-500"
      : "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
  );

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_55%)] text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8 relative">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-ocean-500 text-white shadow-brand-soft">
              <span className="text-lg font-semibold">DF</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-tight">
                DigitalFace Marketing
              </span>
              <span className="text-sm text-ink-500">
                Colombia - Florida
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) =>
              item.label === megaNav.label ? (
                <div
                  key={item.to}
                  className="group -my-4 flex items-center py-4"
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={desktopNavLinkClass}
                  >
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
                                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                  <Icon className="h-4 w-4" aria-hidden="true" />
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
                              <Link
                                to={category.allTo}
                                className="inline-flex items-center text-sm font-semibold text-brand-600 transition hover:text-brand-700 cursor-pointer"
                              >
                                {`All ${category.title} services ->`}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={desktopNavLinkClass}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              className="rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link to="/contact">Book a demo</Link>
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 text-ink-600 transition hover:border-brand-200 hover:text-brand-600 md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div
          className={cn(
            "md:hidden",
            menuOpen
              ? "max-h-[22rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <div className="mx-4 mb-4 rounded-2xl border border-ink-200 bg-white/90 shadow-brand-card backdrop-blur">
            <nav className="flex flex-col divide-y divide-ink-100">
              {navItems.map((item) => (
                <NavLink
                  key={`mobile-${item.to}`}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center justify-between px-5 py-4 text-sm font-semibold text-ink-500 transition hover:text-brand-600",
                      isActive && "text-brand-600"
                    )
                  }
                >
                  {item.label}
                  <span className="text-xs font-medium text-ink-300">
                    →
                  </span>
                </NavLink>
              ))}
            </nav>
            <div className="px-5 py-4">
              <Button
                asChild
                className="w-full rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-brand-soft"
              >
                <Link to="/contact">Book a demo</Link>
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
            <Link to="/" className="flex items-center gap-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-ocean-500 shadow-brand-soft">
                <span className="text-sm font-semibold">DF</span>
              </div>
              <span className="text-lg font-semibold">DigitalFace Marketing</span>
            </Link>
            <p className="text-sm text-white/70">
              The DigitalFace Marketing Sales System is a done-for-you automated sales engine for local service businesses.
            </p>
            <p className="text-sm font-medium text-ocean-200">
              Never lose another lead.
            </p>
          </div>
          <div className="grid flex-1 gap-10 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Navigate
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={`footer-${item.to}`}>
                    <Link className="text-white/80 transition hover:text-white" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Contact
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <span className="block font-semibold text-white">sales@digitalfacemarketing.com</span>
                  <span>Email</span>
                </li>
                <li>
                  <span className="block font-semibold text-white">&lt;24h response Monday-Friday</span>
                  <span>Service window</span>
                </li>
                <li>
                  <span className="block font-semibold text-white">Miami, FL + Cali, CO</span>
                  <span>Locations</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Offices
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <span className="block font-semibold text-white">Miami, Florida</span>
                  <span>Remote-first across the East Coast</span>
                </li>
                <li>
                  <span className="block font-semibold text-white">Cali, Colombia</span>
                  <span>Zona Rosa innovation hub</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>Copyright {new Date().getFullYear()} DigitalFace Marketing. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link className="transition hover:text-white" to="/privacy">
                Privacy Policy
              </Link>
              <Link className="transition hover:text-white" to="/terms">
                Terms of Service
              </Link>
              <Link className="transition hover:text-white" to="/sitemap">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}




