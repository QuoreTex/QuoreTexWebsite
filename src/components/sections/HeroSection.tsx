import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import { Helmet } from "react-helmet-async"; // Helmet for SEO

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Innovating Code. Empowering Business | QuoreTex</title>
        <meta
          name="description"
          content="We transform your business challenges into powerful software solutions that drive growth, efficiency, and competitive advantage."
        />
        <meta
          name="keywords"
          content="QuoreTex, software development, web development, mobile apps, IT solutions, business automation, tech company"
        />
        <link rel="canonical" href="https://quore-tex.com/" />
      </Helmet>

      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-lightest-blue text-blue-dark">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

        {/* Animated Shapes */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Hero Content */}
            <motion.div variants={fadeIn("right")} className="max-w-xl">
              <motion.h1
                variants={textVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-blue-900 drop-shadow-lg"
              >
                <span className="text-primary">Innovating</span> Code. <br />
                <span className="text-primary">Empowering</span> Business.
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.2)}
                className="text-lg md:text-xl mb-8 leading-relaxed text-blue-900 drop-shadow"
              >
                We transform your business challenges into powerful software solutions
                that drive growth, efficiency, and competitive advantage.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.4)}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="rounded-full px-8">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                  <Link to="/services">Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                {/* Decorative elements */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                {/* Main image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Team collaboration"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>

                  {/* Floating card elements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 max-w-[200px]"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-white">Project Status</span>
                    </div>
                    <div className="text-2xl font-bold text-white">95%</div>
                    <p className="text-xs text-white">Completion rate</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -top-6 -right-6 bg-background rounded-lg shadow-lg p-4"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-white">Client Satisfaction</span>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-5 w-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
