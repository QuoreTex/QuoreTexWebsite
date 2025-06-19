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
// import { Button } from "@/components/ui/button";
import { 
  Badge 
} from "@/components/ui/badge";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { fadeIn, textVariant, staggerContainer } from "@/lib/animations";

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = PORTFOLIO_ITEMS;
  // Projects are now visible
  const showProjects = true;

  return (
    <section ref={ref} id="portfolio-list" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={textVariant}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]"
          >
            Our <span className="text-[#168AAD]">Portfolio</span>
          </motion.h2>
          <motion.p
            variants={textVariant}
            className="text-[#1E3A8A]/80 text-lg mb-8"
          >
            Explore our recent projects and discover how we've helped businesses across various industries achieve their goals through innovative software solutions.
          </motion.p>
        </motion.div>

        {/* Low-code card (fancy) */}
        <motion.div
          variants={fadeIn()}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.div 
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.15)' }} 
            className="relative bg-gradient-to-br from-green-100 via-white to-green-50 rounded-2xl p-6 shadow-lg border-2 border-green-200 overflow-hidden transition-all duration-300"
          >
            <h3 className="font-extrabold text-xl text-green-700 mb-3 tracking-wide drop-shadow">Low-code</h3>
            <div className="flex flex-wrap gap-2">
              {['Outsystem', 'Retool'].map(tool => (
                <span key={tool} className="bg-green-200/80 text-green-900 px-3 py-1 rounded-full text-xs font-semibold shadow hover:scale-110 hover:bg-green-300/90 hover:shadow-lg transition-all duration-200 cursor-pointer">{tool}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Conditionally render the projects grid */}
        {showProjects && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.1 * index)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <Card className="overflow-hidden border border-[#168AAD]/20 hover:border-[#168AAD]/50 transition-all duration-300">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-[#168AAD]/10 text-white border-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    {/* <Button
                      variant="outline"
                      className="w-full border-[#168AAD] text-[#168AAD] hover:bg-[#168AAD] hover:text-white transition-all duration-300"
                    >
                      View Project
                    </Button> */}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;