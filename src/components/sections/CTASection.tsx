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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's work together to create innovative software solutions that drive growth and success.
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
      </div>
    </section>
  );
};

export default CTASection;