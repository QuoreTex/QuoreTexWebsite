import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import { fadeIn } from "@/lib/animations";

const ContactPage = () => {
  return (
    <>
      <motion.section 
        initial="hidden"
        animate="show"
        variants={fadeIn("down")}
        className="pt-32 pb-16 md:pt-40 md:pb-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Reach out to discuss your project or ask any questions.
            </p>
          </div>
        </div>
      </motion.section>

      <ContactSection />
    </>
  );
};

export default ContactPage;