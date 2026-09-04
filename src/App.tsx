import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chatbot } from "./components/Chatbot";

// Core Pages (Eagerly Loaded for speed)
import Index from "./pages/Index";

// Lazy Loaded Pages (Code Splitting to keep website extremely lightweight)
const Contact = lazy(() => import("./pages/Contact"));
const CrossPlatformApps = lazy(() => import("./pages/CrossPlatformApps"));
const ShopifyEcommerce = lazy(() => import("./pages/ShopifyEcommerce"));
const DevOpsAgile = lazy(() => import("./pages/DevOpsAgile"));
const TeamAugmentation = lazy(() => import("./pages/TeamAugmentation"));
const WeAreDevelopers = lazy(() => import("./pages/WeAreDevelopers"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Blog = lazy(() => import("./pages/Blog"));
const Industries = lazy(() => import("./pages/Industries"));
const Products = lazy(() => import("./pages/Products"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Careers = lazy(() => import("./pages/Careers"));
const Newsroom = lazy(() => import("./pages/Newsroom"));
const Legal = lazy(() => import("./pages/Legal"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Partner = lazy(() => import("./pages/Partner"));
const Industry = lazy(() => import("./pages/Industry"));
const Service = lazy(() => import("./pages/Service"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Heavy ERP/Interactive Pages (Lazy Loaded)
const FencingERP = lazy(() => import("./pages/FencingERP"));
const PropTechERP = lazy(() => import("./pages/PropTechERP"));
const RetailERP = lazy(() => import("./pages/RetailERP"));
const HealthcareERP = lazy(() => import("./pages/HealthcareERP"));
const LogisticsERP = lazy(() => import("./pages/LogisticsERP"));
const HospitalityPOS = lazy(() => import("./pages/HospitalityPOS"));

const queryClient = new QueryClient();

// Loading Screen
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cross-platform-apps" element={<CrossPlatformApps />} />
            <Route path="/shopify-ecommerce" element={<ShopifyEcommerce />} />
            <Route path="/devops-agile" element={<DevOpsAgile />} />
            <Route path="/team-augmentation" element={<TeamAugmentation />} />
            <Route path="/about-us" element={<WeAreDevelopers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/fencing-erp" element={<FencingERP />} />
            <Route path="/proptech-erp" element={<PropTechERP />} />
            <Route path="/retail-erp" element={<RetailERP />} />
            <Route path="/healthcare-erp" element={<HealthcareERP />} />
            <Route path="/logistics-erp" element={<LogisticsERP />} />
            <Route path="/hospitality-pos" element={<HospitalityPOS />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/industry/:id" element={<Industry />} />
            <Route path="/service/:id" element={<Service />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
