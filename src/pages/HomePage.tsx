import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
// import PortfolioSection from "@/components/sections/PortfolioSection";
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
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A8A]">Our Portfolio</h2>
            <p className="text-xl text-[#168AAD]">
              Explore our past projects and discover how we've helped businesses achieve their goals.
            </p>
            {/* ...existing code... */}
          </div>
        </div>
      </section>
      <DomainExpertiseSection />
      <FeaturesSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
