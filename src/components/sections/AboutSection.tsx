import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, textVariant, staggerContainer } from "@/lib/animations";
import { COMPANY_VALUES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Leaf, Users } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    const baseClass =
      "h-14 w-14 text-white p-3 rounded-full bg-[#168AAD] shadow-lg shadow-[#168AAD]/20 border border-[#168AAD]/30 transform hover:scale-110 transition-transform duration-200";
    switch (iconName) {
      case "Star":
        return <Star className={baseClass} />;
      case "Shield":
        return <Shield className={baseClass} />;
      case "Leaf":
        return <Leaf className={baseClass} />;
      case "Users":
        return <Users className={baseClass} />;
      default:
        return <Star className={baseClass} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us | QuoreTex Technologies</title>
        <meta
          name="description"
          content="Learn about QuoreTex Technologies Pvt. Ltd.—our mission, vision, values, and commitment to delivering innovative software and IT solutions globally."
        />
        <meta name="keywords" content="QuoreTex, software development, IT solutions, web applications, mobile apps, India, UK, custom software, digital transformation" />
        <meta property="og:title" content="About Us | QuoreTex Technologies" />
        <meta property="og:description" content="Empowering businesses with innovative, secure, and scalable digital solutions since 2025." />
      </Helmet>

      <section ref={ref} id="vision-mission" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 bg-white rounded">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h1
              variants={textVariant}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]"
            >
              About <span className="text-[#168AAD]">QuoreTex</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="w-24 h-1 bg-[#168AAD] mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="text-lg font-medium text-[#168AAD] mb-8 px-2 sm:px-4 md:px-8 text-justify whitespace-pre-line"
            >
              {`Founded in 2025, QuoreTex Technologies Pvt. Ltd. is a software development company dedicated to delivering innovative and scalable digital solutions. We specialize in web applications, mobile apps, cloud services, and custom enterprise software.

We follow an agile approach with a strong focus on quality, user experience, and long-term business value. Our presence in India and the UK allows us to serve clients globally and bridge the digital divide.

Our team of engineers, designers, and consultants are passionate about transforming ideas into robust solutions that make a difference.`}
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
                  alt="Our team working on software solutions"
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
              <h2 className="text-2xl font-bold text-[#1E3A8A]">Our Mission</h2>
              <p className="text-lg leading-relaxed text-[#168AAD] text-justify">
                To empower businesses with innovative, efficient, and scalable technology solutions
                that drive digital transformation and create measurable impact.
              </p>

              <h2 className="text-2xl font-bold text-[#1E3A8A]">Our Vision</h2>
              <p className="text-lg leading-relaxed text-[#168AAD] text-justify">
                To be a global leader in ethical and sustainable software development, delivering
                value through customer-centric design, transparency, and cutting-edge innovation.
              </p>
            </motion.div>
          </div>

          <motion.h2
            variants={textVariant}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            <span className="text-[#1E3A8A]">Our</span>{" "}
            <span className="text-[#168AAD]">Core Values</span>
          </motion.h2>

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
                    <div className="mb-4 flex justify-center">{getIcon(value.icon)}</div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
