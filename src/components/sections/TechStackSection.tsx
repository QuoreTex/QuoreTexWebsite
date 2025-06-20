import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const TechStackSection: React.FC = () => {
  const technologies = [
    { name: 'AI', color: 'from-purple-500 to-pink-500' },
    { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
    { name: 'Java', color: 'from-red-500 to-orange-500' },
    { name: 'ML', color: 'from-green-500 to-teal-500' },
    { name: 'Python', color: 'from-blue-500 to-cyan-500' },
    { name: 'React JS', color: 'from-cyan-500 to-blue-500' },
    { name: 'React Native', color: 'from-indigo-500 to-purple-500' },
    { name: 'Spring Boot', color: 'from-teal-500 to-green-500' },
  ];

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeIn('up')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index * 0.1}
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              className="group relative"
            >
              <div className={`
                absolute -inset-0.5 rounded-xl bg-gradient-to-r ${tech.color} 
                opacity-50 blur-sm group-hover:opacity-75 transition duration-500
              `} />
              <div className="
                relative flex items-center justify-center h-32 rounded-lg
                bg-white backdrop-blur-sm border border-slate-200
                p-6 transition duration-300 group-hover:shadow-lg
              ">
                <h3 className={`
                  text-xl font-bold bg-gradient-to-r ${tech.color}
                  bg-clip-text text-transparent group-hover:scale-110
                  transition duration-300
                `}>
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Low-code Platforms Section */}
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-20 mb-8"
        >
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Low-code Platforms
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-md mb-8">
            Accelerate development with powerful low-code tools
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Low-code', color: 'from-green-400 to-blue-400' },
            { name: 'Outsystem', color: 'from-pink-500 to-yellow-500' },
            { name: 'Retool', color: 'from-blue-500 to-indigo-500' },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeIn('up')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index * 0.1}
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              className="group relative"
            >
              <div className={
                `absolute -inset-0.5 rounded-xl bg-gradient-to-r ${tech.color} opacity-50 blur-sm group-hover:opacity-75 transition duration-500`
              } />
              <div className="
                relative flex items-center justify-center h-32 rounded-lg
                bg-white backdrop-blur-sm border border-slate-200
                p-6 transition duration-300 group-hover:shadow-lg
              ">
                <h3 className={
                  `text-xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent group-hover:scale-110 transition duration-300`
                }>
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default TechStackSection;
