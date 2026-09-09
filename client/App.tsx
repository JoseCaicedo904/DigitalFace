import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, type ComponentType } from "react";
import MainLayout from "./components/layout/MainLayout";

import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { LocaleProvider } from "./i18n/LocaleProvider";
import { ServiceRequestProvider } from "./components/request/ServiceRequestProvider";
import { Analytics } from "./components/seo/Analytics";
import { WhatsAppButton } from "./components/contact/WhatsAppButton";
import { GhlChatWidget } from "./components/ghl/GhlChatWidget";
import { localePath } from "./i18n/locale";
import site from "@shared/site.json";

// The route manifest also drives static HTML, the sitemap and status handling.
// Route chunks keep the booking widget and unrelated pages off the initial path.
const pages: Record<string, ComponentType> = {
  home: lazy(() => import("./pages/Index")),
  about: lazy(() => import("./pages/About")),
  features: lazy(() => import("./pages/Features")),
  "paid-advertising": lazy(() => import("./pages/PaidAdvertising")),
  "pay-per-service": lazy(() => import("./pages/PayPerService")),
  pricing: lazy(() => import("./pages/Pricing")),
  contact: lazy(() => import("./pages/Contact")),
  book: lazy(() => import("./pages/Book")),
  privacy: lazy(() => import("./pages/Privacy")),
  terms: lazy(() => import("./pages/Terms")),
  dental: lazy(() =>
    import("./pages/industries/IndustryPages").then((m) => ({
      default: m.DentalPracticesPage,
    })),
  ),
  aesthetic: lazy(() =>
    import("./pages/industries/IndustryPages").then((m) => ({
      default: m.AestheticMedicinePage,
    })),
  ),
  "med-spa": lazy(() =>
    import("./pages/industries/IndustryPages").then((m) => ({
      default: m.MedSpasPage,
    })),
  ),
};

/** Router supplied by the entry point: BrowserRouter or build-time StaticRouter. */
export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LocaleProvider>
          <ServiceRequestProvider>
            <ScrollToTop />
            <Analytics />
            <GhlChatWidget />
            <WhatsAppButton />
            <Suspense
              fallback={
                <div className="flex min-h-screen items-center justify-center bg-slate-950 text-sm font-semibold text-white">
                  DigitalFace…
                </div>
              }
            >
              <Routes>
                {(["en", "es"] as const).map((locale) => (
                  <Route key={locale} element={<MainLayout />}>
                    {site.routes
                      .filter((r) => r.layout === "corporate")
                      .map((route) => {
                        const Page = pages[route.id];
                        return (
                          <Route
                            key={route.id}
                            path={localePath(locale, route.path)}
                            element={<Page />}
                          />
                        );
                      })}
                  </Route>
                ))}
                {(["en", "es"] as const).flatMap((locale) =>
                  site.routes
                    .filter((r) => r.layout === "industry")
                    .map((route) => {
                      const Page = pages[route.id];
                      return (
                        <Route
                          key={locale + route.id}
                          path={localePath(locale, route.path)}
                          element={<Page />}
                        />
                      );
                    }),
                )}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ServiceRequestProvider>
        </LocaleProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
