import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, textVariant, staggerContainer } from "@/lib/animations";
import { COMPANY_VALUES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Shield, 
  Target, 
  Award 
} from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="h-8 w-8 text-primary" />;
      case "Shield":
        return <Shield className="h-8 w-8 text-primary" />;
      case "Target":
        return <Target className="h-8 w-8 text-primary" />;
      case "Award":
        return <Award className="h-8 w-8 text-primary" />;
      default:
        return <Lightbulb className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <section ref={ref} className="py-20 ">
      <div className="container mx-auto px-4 p-4 md:px-6  bg-[#0096D6] rounded ">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={textVariant}
            className="text-3xl md:text-4xl font-bold mb-4 text-green-400"
          >
            About <span className="text-green">QuoreTex</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="text-lg text-muted-foreground mb-8"
          >
            Founded in 2025, QuoreTex has quickly established itself as a leader in custom software development, 
            delivering innovative solutions to businesses across diverse industries.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="relative">
              <div className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-primary/30 to-primary rounded-2xl blur-2xl opacity-75"></div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              At QuoreTex, our mission is to empower businesses through innovative technology solutions that 
              drive growth, efficiency, and competitive advantage. We combine technical expertise with 
              deep industry knowledge to deliver software that solves real-world challenges.
            </p>
            
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground">
             Our vision is to develop innovative, sustainable software solutions with integrity,
             putting customers first. We strive to create technology that drives positive 
             impact,fosters trust, and shapes a smarter, more sustainable future.
            </p>
{/*             
            <h3 className="text-2xl font-bold">Our Approach</h3>
            <p className="text-muted-foreground">
              We follow a collaborative, client-centric approach, working closely with you at every stage 
              of the development process. Our agile methodology ensures flexibility, transparency, and 
              continuous delivery of value.
            </p> */}
          </motion.div>
        </div>

        <motion.h3 
          variants={textVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          Our Values
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_VALUES.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {getIcon(value.icon)}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;