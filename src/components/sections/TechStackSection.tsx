import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import aiLogo from '../../../img/AI-removebg-preview.png';
import awsLogo from '../../../img/aws-logo-removebg-preview.png';
import javaLogo from '../../../img/JAVA-removebg-preview.png';
import mlLogo from '../../../img/Machine-Learning-removebg-preview-removebg-preview.png';
import pythonLogo from '../../../img/PYTHON-removebg-preview.png';
import reactjsLogo from '../../../img/REACT_JS-removebg-preview.png';
import springBootLogo from '../../../img/SPRINGBOOT-removebg-preview.png';
import powerAppsLogo from '../../../img/POWER_APPS.png';
import powerAutomationLogo from '../../../img/POWER_AUTOMATE.png';
import powerBiLogo from '../../../img/POWER_BI.png';
import powerVaLogo from '../../../img/POWER_VA.png';
import outsystemLogo from '../../../img/OUTSYSTEM-removebg-preview.png';
import retoolLogo from '../../../img/RETOOL-removebg-preview.png';
import reactNativeLogo from '../../../img/REACTNATIVE-removebg-preview.png';
import serviceNowLogo from '../../../img/servicenowlogo.png';

const logos = [
  { src: pythonLogo, alt: 'Python' },
  { src: aiLogo, alt: 'AI' },
  { src: awsLogo, alt: 'AWS' },
  { src: javaLogo, alt: 'Java' },
  { src: mlLogo, alt: 'ML' },
  { src: reactjsLogo, alt: 'React JS' },
  { src: springBootLogo, alt: 'Spring Boot' },
  { src: serviceNowLogo, alt: 'ServiceNow'},
  { src: powerAppsLogo, alt: 'Power Apps' },
  { src: powerAutomationLogo, alt: 'Power Automation' },
  { src: powerBiLogo, alt: 'Power BI' },
  { src: powerVaLogo, alt: 'Power VA' },
  { src: outsystemLogo, alt: 'Outsystem' },
  { src: retoolLogo, alt: 'Retool' },
  { src: outsystemLogo, alt: 'Outsystem' },
  { src: retoolLogo, alt: 'Retool' },
  { src: reactNativeLogo, alt: 'React Native' },
  
];
const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span style={{ color: '#1E3A8A' }}>Our </span>{' '}
            <span style={{ color: '#168AAD' }}>Tech Stack</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Leveraging cutting-edge technologies to build the future
          </p>
        </motion.div>

        {/* Logo Marquee Section */}
        <div className="w-full overflow-hidden py-4" style={{ backgroundColor: '#E6F6FF' }}>
          <div
            className="flex gap-10 whitespace-nowrap items-center animate-smooth-scroll"
            style={{ display: 'inline-flex', willChange: 'transform' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-auto max-h-20 object-contain"
                style={{ maxWidth: 120 }}
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes smooth-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-smooth-scroll {
            animation: smooth-scroll 20s linear infinite;
            animation-timing-function: linear;
          }
          .animate-smooth-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Decorative Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default TechStackSection;
