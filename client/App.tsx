import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Automations from "./pages/Automations";
import AutomationsChatbots from "./pages/AutomationsChatbots";
import AutomationsWorkflows from "./pages/AutomationsWorkflows";
import AutomationsCrm from "./pages/AutomationsCrm";
import ManyChatTemplates from "./pages/ManyChatTemplates";
import SocialMediaAds from "./pages/SocialMediaAds";
import Websites from "./pages/Websites";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="automations" element={<Automations />} />
            <Route path="automations/chatbots" element={<AutomationsChatbots />} />
            <Route path="automations/workflows" element={<AutomationsWorkflows />} />
            <Route path="automations/crm-integration" element={<AutomationsCrm />} />
            <Route path="automations/templates" element={<ManyChatTemplates />} />
            <Route path="social-media-ads" element={<SocialMediaAds />} />
            <Route path="websites" element={<Websites />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
