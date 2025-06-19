import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Cloud, 
  Wrench,
  Brain,
  Zap 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { fadeIn, textVariant, cardHoverVariant } from "@/lib/animations";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="h-10 w-10 text-white" />;
      case "Globe":
        return <Globe className="h-10 w-10 text-white" />;
      case "Smartphone":
        return <Smartphone className="h-10 w-10 text-white" />;
      case "Cloud":
        return <Cloud className="h-10 w-10 text-white" />;
      case "Wrench":
        return <Wrench className="h-10 w-10 text-white" />;
      case "Brain":
        return <Brain className="h-10 w-10 text-white" />;
      case "Zap":
        return <Zap className="h-10 w-10 text-white" />;
      default:
        return <Code2 className="h-10 w-10 text-white" />;
    }
  };

  return (
    <section ref={ref} id="services-list" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={textVariant}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]"
          >
            Our <span className="text-[#168AAD]">Services</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-[#168AAD] mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="text-lg text-[#168AAD]"
          >
            We offer comprehensive software development services tailored to meet your unique business needs.
            From initial concept to deployment and ongoing support, we're with you at every step.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn("up", 0.1 * index)}
              initial="rest"
              animate={inView ? "show" : "hidden"}
              whileHover="hover"
              className={index === SERVICES.length - 1 ? "lg:col-start-2" : ""}
            >
              <motion.div variants={cardHoverVariant}>
                <Card className="h-full bg-[#1A759F] transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-white/90 mb-6">{service.description}</p>
                    <Button
                      variant="outline"
                      className="group text-white hover:text-[#1A759F] hover:bg-white"
                      asChild
                    >
                      <Link to="/services">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;