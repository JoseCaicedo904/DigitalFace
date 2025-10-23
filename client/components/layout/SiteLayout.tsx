import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Automations", to: "/automations" },
  { label: "Social Media Ads", to: "/social-media-ads" },
  { label: "Websites", to: "/websites" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const badgeItems = [
  "Automation Systems",
  "ManyChat Experts",
  "ROI-Driven Campaigns",
  "Conversion Design",
];

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
              <span className="text-lg font-semibold">DF</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">
                DigitalFace Marketing
              </span>
              <span className="text-xs text-slate-500">
                Colombia · Florida
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden text-sm font-semibold text-slate-600 transition hover:text-slate-900 md:inline"
            >
              hello@digitalfacemarketing.com
            </Link>
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700"
            >
              <Link to="/contact">Book a Strategy Session</Link>
            </Button>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-white/95 lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-4 py-3 text-sm font-medium text-slate-600 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.to}`}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "whitespace-nowrap rounded-full px-3 py-2 transition-colors",
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                  )
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="border-t border-slate-200 bg-indigo-50/60 py-2">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-2 px-4 text-xs font-medium text-indigo-700 sm:px-6 lg:px-8">
            {badgeItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-indigo-200 bg-white px-3 py-1 shadow-sm"
              >
                {item}
              </span>
            ))}
            <span className="rounded-full border border-indigo-200 bg-white px-3 py-1 shadow-sm">
              {location.pathname === "/"
                ? "Automation-first marketing partner"
                : "Let's build your next growth play"}
            </span>
          </div>
        </div>
      </header>

      <main className="relative">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                <span className="text-sm font-semibold">DF</span>
              </div>
              <span className="text-lg font-semibold">
                DigitalFace Marketing
              </span>
            </Link>
            <p className="text-sm text-slate-500">
              Automation-first marketing agency helping brands across Colombia
              and Florida scale with systems, campaigns, and conversion-led
              experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-indigo-600">
              <span>Powered by automation.</span>
              <span>Fuelled by creativity.</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Offices
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">
                  Florida, USA
                </span>
                <br />
                Miami · Remote-first across the East Coast
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Cali, Colombia
                </span>
                <br />
                Zona Rosa · Serving LATAM growth brands
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {navItems.map((item) => (
                <li key={`footer-${item.to}`}>
                  <Link
                    to={item.to}
                    className="transition hover:text-indigo-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Email</span>
                <br />
                <a
                  className="transition hover:text-indigo-600"
                  href="mailto:hello@digitalfacemarketing.com"
                >
                  hello@digitalfacemarketing.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-900">WhatsApp</span>
                <br />
                <a
                  className="transition hover:text-indigo-600"
                  href="https://wa.me/573001112233"
                >
                  +57 300 111 2233
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-900">Call</span>
                <br />
                +1 (305) 555-0134
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-indigo-50 py-4">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} DigitalFace Marketing. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a className="hover:text-indigo-600" href="/privacy">
                Privacy Policy
              </a>
              <a className="hover:text-indigo-600" href="/terms">
                Terms of Service
              </a>
              <a className="hover:text-indigo-600" href="/sitemap">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
