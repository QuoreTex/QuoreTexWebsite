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
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 28, 0], opacity: [0, 1, 0.8, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.7,
              ease: "easeInOut"
            }}
            className="relative flex items-center justify-center mt-8 cursor-pointer"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.6, behavior: "smooth" });
            }}
            tabIndex={0}
            role="button"
            aria-label="Scroll down"
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.scrollBy({ top: window.innerHeight * 0.3, behavior: "smooth" });
              }
            }}
          >
            <span className="absolute animate-ping rounded-full bg-gradient-to-br from-[#168AAD] to-[#1E3A8A] opacity-30 w-16 h-16"></span>
            <span className="absolute animate-pulse rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] opacity-60 w-12 h-12"></span>
            <div className="rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] p-4 shadow-2xl border-2 border-[#168AAD] group-hover:scale-110 transition-transform duration-300">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="arrow-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#168AAD"/>
                    <stop offset="100%" stopColor="#1E3A8A"/>
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="url(#arrow-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
              </svg>
            </div>
          </motion.div>
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
