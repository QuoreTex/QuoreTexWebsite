import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  AspectRatio 
} from "@/components/ui/aspect-ratio";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Badge 
} from "@/components/ui/badge";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { fadeIn, textVariant, staggerContainer } from "@/lib/animations";

type Category = "All" | "Web Application" | "Custom Software" | "Mobile App" | "Cloud Solution";

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<Category>("All");

  const filteredProjects = filter === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  const categories: Category[] = ["All", "Web Application", "Custom Software", "Mobile App", "Cloud Solution"];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={textVariant}
            className="text-3xl md:text-4xl font-bold mb-4 "
          >
            Our <span className="text-primary">Portfolio</span>
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="text-lg text-muted-foreground"
          >
            Explore our recent projects and discover how we've helped businesses across various 
            industries achieve their goals through innovative software solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                category === "All"
                  ? "default"
                  : category === "Web Application"
                  ? "webapp"
                  : category === "Custom Software"
                  ? "custom"
                  : category === "Mobile App"
                  ? "mobile"
                  : category === "Cloud Solution"
                  ? "cloud"
                  : "outline"
              }
              size="sm"
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <Card className="overflow-hidden h-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="p-1">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-t-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-foreground"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;