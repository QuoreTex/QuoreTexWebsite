import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";
import { fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - QuoreTex Technologies</title>
        <meta name="description" content="Contact QuoreTex Technologies for custom software, web, and mobile app development inquiries." />
        <meta name="keywords" content="contact, QuoreTex, software development, web development, mobile app" />
        <link rel="canonical" href="https://quore-tex.com/contact" />
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us - QuoreTex Technologies" />
        <meta property="og:description" content="Contact QuoreTex Technologies for custom software, web, and mobile app development inquiries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quore-tex.com/contact" />
        <meta property="og:image" content="https://quore-tex.com/images/preview.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - QuoreTex Technologies" />
        <meta name="twitter:description" content="Contact QuoreTex Technologies for custom software, web, and mobile app development inquiries." />
        <meta name="twitter:image" content="https://quore-tex.com/images/preview.png" />
      </Helmet>
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