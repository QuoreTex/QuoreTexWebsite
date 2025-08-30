import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/layout/ScrollToTop";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import TechStackPage from "@/pages/TechStackPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import TechInfoPage from "@/pages/TechInfoPage";
import VoicesOfTrust from "@/pages/Voices of Trust";

import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/tech/:techName" element={<TechInfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/voices-of-trust" element={<VoicesOfTrust />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
