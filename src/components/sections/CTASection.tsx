import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fadeIn } from "@/lib/animations";

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary/90 to-primary/70 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90 drop-shadow">
            Let's work together to create innovative software solutions that drive
            growth and success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-white text-white hover:bg-white/20"
              asChild
            >
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-16  rounded-2xl p-8 md:p-12 bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Ready to transform your business?</h3>
              <p className="text-[#1E3A8A]/80 mb-6">
                Our team of experts is ready to help you leverage technology to achieve your business goals. 
                Let's work together to create a solution that's tailored to your unique needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#1E3A8A]">Free initial consultation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#1E3A8A]">Transparent pricing and timeline</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#1E3A8A]">Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;