import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/layout/MainLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import PayPerService from "./pages/PayPerService";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const DentalPracticesPage = lazy(() =>
  import("./pages/industries/IndustryPages").then((module) => ({
    default: module.DentalPracticesPage,
  })),
);
const AestheticMedicinePage = lazy(() =>
  import("./pages/industries/IndustryPages").then((module) => ({
    default: module.AestheticMedicinePage,
  })),
);
const MedSpasPage = lazy(() =>
  import("./pages/industries/IndustryPages").then((module) => ({
    default: module.MedSpasPage,
  })),
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-sm font-semibold text-white">
              Loading DigitalFace experience…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="about" element={<About />} />
              <Route path="features" element={<Features />} />
              <Route path="pay-per-service" element={<PayPerService />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
            </Route>
            <Route
              path="/industries/dental-practices"
              element={<DentalPracticesPage />}
            />
            <Route
              path="/industries/aesthetic-medicine"
              element={<AestheticMedicinePage />}
            />
            <Route path="/industries/med-spas" element={<MedSpasPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
