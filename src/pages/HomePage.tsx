import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import TechStackSection from "@/components/sections/TechStackSection";
import DomainExpertiseSection from "@/components/sections/DomainExpertiseSection";
import { Helmet } from "react-helmet"; // You can switch to "react-helmet-async" if needed


const HomePage = () => {
  return (
    <div className="pt-24 w-full overflow-x-hidden bg-neongreen-900 text-white">
      <Helmet>
        <title>QuoreTex Technologies Pvt. Ltd. | Custom Software, Web & Mobile App Development</title>
        <meta
          name="description"
          content="QuoreTex Technologies is a top-tier IT services provider offering custom software development, web and mobile applications, cloud computing solutions, and long-term support."
        />
        <meta
          name="keywords"
          content="Custom software development, Web application development, Mobile app development, Cloud solutions, IT consulting, QuoreTex Technologies"
        />
        <meta name="author" content="QuoreTex Technologies Pvt. Ltd." />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="QuoreTex Technologies Pvt. Ltd. | Custom Software Solutions" />
        <meta
          property="og:description"
          content="Delivering high-quality custom software, web & mobile applications, and cloud solutions tailored to your business needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quore-tex.com/" />
        <meta property="og:image" content="https://quore-tex.com/images/preview.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QuoreTex Technologies | Custom Software & Mobile Apps" />
        <meta name="twitter:description" content="Expertly crafted software, web/mobile apps & cloud services tailored to your goals." />
        <meta name="twitter:image" content="https://quore-tex.com/images/preview.png" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      





      
      <DomainExpertiseSection />
      <FeaturesSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
