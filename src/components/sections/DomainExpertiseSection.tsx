import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";
import { fadeIn } from "@/lib/animations";

const domains = [
  {
    title: "Web Applications",
    description: "Custom web applications with responsive designs, modern frameworks, and seamless user experiences.",
    icon: "",
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to meet specific business needs and operational requirements.",
    icon: "",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android with cutting-edge features.",
    icon: "",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services leveraging AWS, Azure, or Google Cloud platforms.",
    icon: "",
  },
];

export default function DomainExpertiseSection() {
  return (
    <section className="py-16 bg-background" id="domain-expertise">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Domain Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We bring extensive experience across various industries, delivering specialized solutions
            that drive innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const isLastOdd =
              domains.length % 2 !== 0 &&
              index === domains.length - 1 &&
              domains.length < 6;

            return (
              <motion.div
                key={domain.title}
                variants={fadeIn("up")}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index * 0.2}
                className={isLastOdd ? "md:col-span-2 lg:col-span-1 mx-auto" : ""}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 w-full max-w-md">
                  <CardHeader>
                    <div className="text-4xl mb-4">{domain.icon}</div>
                    <h3 className="text-xl font-semibold">{domain.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{domain.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
