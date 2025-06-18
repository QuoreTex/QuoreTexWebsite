import { motion } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import { fadeIn } from "@/lib/animations";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn("down")}
        className="pt-32 pb-16 md:pt-40 md:pb-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A8A]">About Us</h1>
            <p className="text-xl text-[#168AAD]">
              Learn more about our company, mission, and the team behind QuoreTex.
            </p>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, 28, 0], opacity: [0, 1, 0.8, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.7,
                ease: "easeInOut"
              }}
              className="flex justify-center mt-8 cursor-pointer group"
              onClick={() => {
                const vision = document.getElementById('vision-mission');
                if (vision) {
                  vision.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Scroll to Vision and Mission"
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  const vision = document.getElementById('vision-mission');
                  if (vision) {
                    vision.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }}
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute animate-ping rounded-full bg-gradient-to-br from-[#168AAD] to-[#1E3A8A] opacity-30 w-16 h-16"></span>
                <span className="absolute animate-pulse rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] opacity-60 w-12 h-12"></span>
                <div className="rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-4 shadow-2xl border-2 border-[#168AAD] group-hover:scale-110 transition-transform duration-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="arrow-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#168AAD"/>
                        <stop offset="100%" stopColor="#1E3A8A"/>
                      </linearGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <AboutSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default AboutPage;