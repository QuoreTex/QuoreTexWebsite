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
        return <Users className="h-10 w-10 text-primary" />;
      case "Workflow":
        return <Activity className="h-10 w-10 text-primary" />;
      case "BarChart4":
        return <BarChart4 className="h-10 w-10 text-primary" />;
      case "HeadsetHelp":
        return <HeadsetHelp className="h-10 w-10 text-primary" />;
      default:
        return <Users className="h-10 w-10 text-primary" />;
    }
  };

  return (
    <section ref={ref} className="py-20">
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
            Why Choose <span className="text-primary">QuoreTex</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="text-lg text-muted-foreground"
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

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-16 bg-muted/40 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
              <p className="text-muted-foreground mb-6">
                Our team of experts is ready to help you leverage technology to achieve your business goals. 
                Let's work together to create a solution that's tailored to your unique needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent pricing and timeline</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing support and maintenance</span>
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

export default FeaturesSection;