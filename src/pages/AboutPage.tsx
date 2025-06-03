import { motion } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import { fadeIn } from "@/lib/animations";

const AboutPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about our company, mission, and the team behind QuoreTex.
            </p>
          </div>
        </div>
      </motion.section>

      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default AboutPage;