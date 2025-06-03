import { motion } from "framer-motion";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import { fadeIn } from "@/lib/animations";

const ServicesPage = () => {
  return (
    <>
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn("down")}
        className="pt-32 pb-16 md:pt-40 md:pb-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 !text-green-400">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive range of software development services designed to meet your business needs.
            </p>
          </div>
        </div>
      </motion.section>

      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
};

export default ServicesPage;