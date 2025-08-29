import TechStackSection from "@/components/sections/TechStackSection";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const TechStackPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Tech Stack - QuoreTex Technologies</title>
        <meta 
          name="description" 
          content="Explore our cutting-edge technology stack including AI, AWS, Java, Python, React, and more. We leverage the latest technologies to build innovative solutions." 
        />
        <meta 
          name="keywords" 
          content="tech stack, AI, AWS, Java, Python, React, React Native, Spring Boot, machine learning, cloud computing" 
        />
        <link rel="canonical" href="https://quore-tex.com/tech-stack" />
        {/* Open Graph */}
        <meta property="og:title" content="Tech Stack - QuoreTex Technologies" />
        <meta property="og:description" content="Explore our cutting-edge technology stack including AI, AWS, Java, Python, React, and more. We leverage the latest technologies to build innovative solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quore-tex.com/tech-stack" />
        <meta property="og:image" content="https://quore-tex.com/images/preview.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Stack - QuoreTex Technologies" />
        <meta name="twitter:description" content="Explore our cutting-edge technology stack including AI, AWS, Java, Python, React, and more. We leverage the latest technologies to build innovative solutions." />
        <meta name="twitter:image" content="https://quore-tex.com/images/preview.png" />
      </Helmet>
      
      <div className="pt-20">
        <TechStackSection />
      </div>
    </>
  );
};

export default TechStackPage; 