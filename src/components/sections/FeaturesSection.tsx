import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, BarChart4, Headset as HeadsetHelp } from "lucide-react";
import { Activity } from "lucide-react";
import { COMPANY_FEATURES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, textVariant } from "@/lib/animations";

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-10 w-10 text-white" />;
      case "Workflow":
        return <Activity className="h-10 w-10 text-white" />;
      case "BarChart4":
        return <BarChart4 className="h-10 w-10 text-white" />;
      case "HeadsetHelp":
        return <HeadsetHelp className="h-10 w-10 text-white" />;
      default:
        return <Users className="h-10 w-10 text-white" />;
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={textVariant}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-[#1E3A8A]">Why Choose</span> <span className="text-[#168AAD]">QuoreTex</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-[#168AAD] mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="text-lg text-[#1E3A8A]"
          >
            We deliver exceptional value through our expertise, client-centric approach, and commitment to quality.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANY_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.1 * index)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <Card className="h-full border border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex gap-6">
                  <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center flex-shrink-0">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;