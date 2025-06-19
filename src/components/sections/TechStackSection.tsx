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
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Our Tech Stack
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

        {/* Decorative Elements */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default TechStackSection;
