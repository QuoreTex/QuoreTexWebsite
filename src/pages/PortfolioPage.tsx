import { motion } from "framer-motion";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { fadeIn } from "@/lib/animations";

const PortfolioPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our past projects and discover how we've helped businesses achieve their goals.
            </p>
          </div>
        </div>
      </motion.section>

      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default PortfolioPage;