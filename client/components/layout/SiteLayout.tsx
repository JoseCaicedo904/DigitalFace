import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink, Outlet } from "react-router-dom";

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

const navPillBase =
  "group relative inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/55 bg-white/40 px-[clamp(0.9rem,2vw,1.3rem)] py-[clamp(0.36rem,0.85vw,0.55rem)] text-[clamp(0.78rem,1.6vw,0.9rem)] font-medium text-slate-600 shadow-[0_12px_24px_-22px_rgba(15,23,42,0.45)] backdrop-blur transition-all duration-300 ease-out hover:scale-[1.03] hover:border-indigo-200 hover:bg-white hover:text-indigo-600 after:absolute after:bottom-[0.2rem] after:left-1/2 after:h-0.5 after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-indigo-500/85 after:opacity-0 after:transition-all after:duration-300 group-hover:after:translate-y-[0.18rem] group-hover:after:opacity-100";

const navPillActive =
  "border-indigo-400 bg-indigo-600/90 text-white shadow-[0_20px_45px_-20px_rgba(79,70,229,0.6)] after:opacity-100 after:bg-indigo-200/90";

const navPillInactive =
  "text-slate-600 hover:shadow-[0_18px_34px_-24px_rgba(79,70,229,0.4)]";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/40 bg-white/70 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/30">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-8 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-[clamp(0.5rem,1.5vw,0.75rem)]"
          >
            <div className="flex h-[clamp(2.5rem,5vw,2.9rem)] w-[clamp(2.5rem,5vw,2.9rem)] items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
              <span className="text-[clamp(1rem,2vw,1.15rem)] font-semibold">
                DF
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[clamp(1.05rem,2.4vw,1.25rem)] font-semibold tracking-tight">
                DigitalFace Marketing
              </span>
              <span className="text-[clamp(0.65rem,1.6vw,0.75rem)] text-slate-500">
                Colombia &middot; Florida
              </span>
            </div>
          </Link>

          <div className="flex flex-shrink-0 items-center justify-end gap-4">
            <Button
              asChild
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_25px_55px_-20px_rgba(79,70,229,0.65)] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:shadow-[0_30px_60px_-24px_rgba(79,70,229,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <Link to="/contact">Book a Strategy Session</Link>
            </Button>
          </div>
        </div>
        <div className="border-t border-white/55 bg-white/40 shadow-[0_25px_45px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/20">
          <nav className="mx-auto flex w-full max-w-screen-xl flex-nowrap items-center justify-center gap-3 overflow-x-auto px-4 py-3 text-slate-600 sm:gap-4 sm:px-6 sm:py-3.5 md:gap-6 lg:px-8">
            {navItems.map((item) => (
              <NavLink
                key={`badge-${item.to}`}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    navPillBase,
                    isActive ? navPillActive : navPillInactive
                  )
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
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
                Miami &middot; Remote-first across the East Coast
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Cali, Colombia
                </span>
                <br />
                Zona Rosa &middot; Serving LATAM growth brands
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
            <p>
              &copy; {new Date().getFullYear()} DigitalFace Marketing. All
              rights reserved.
            </p>
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
