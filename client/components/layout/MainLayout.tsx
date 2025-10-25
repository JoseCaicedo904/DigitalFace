import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
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
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_55%)] text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
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
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm font-medium text-ink-500 transition hover:text-brand-600",
                    isActive
                      ? "text-brand-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-500"
                      : "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              className="rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-brand-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link to="/contact">Book a strategy session</Link>
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
                <Link to="/contact">Book a strategy session</Link>
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
              Automation-first marketing studio delivering chatbots, high-velocity ads, and conversion design for brands across Colombia and Florida.
            </p>
            <p className="text-sm font-medium text-ocean-200">
              Sin fricción. Siempre medible. Siempre humano.
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
                  <span className="block font-semibold text-white">hello@digitalfacemarketing.com</span>
                  <span>Email</span>
                </li>
                <li>
                  <span className="block font-semibold text-white">+57 300 111 2233</span>
                  <span>WhatsApp</span>
                </li>
                <li>
                  <span className="block font-semibold text-white">+1 (305) 555-0134</span>
                  <span>USA</span>
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
