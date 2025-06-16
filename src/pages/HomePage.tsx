import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

const HomePage = () => {
  return (
    <div className="bg-neongreen-900 text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <FeaturesSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default HomePage;