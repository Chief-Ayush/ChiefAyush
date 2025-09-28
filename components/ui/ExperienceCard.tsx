'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/types/portfolio';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  totalItems: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, totalItems }) => {
  const isEven = index % 2 === 0;
  const isFirst = index === 0;
  const isLast = index === totalItems - 1;
  
  return (
    <div className="relative mb-16 last:mb-0">
      {/* Desktop Timeline Layout */}
      <div className="hidden md:block relative">
        <div className="grid grid-cols-2 gap-8 items-start relative">
          {/* Left Content */}
          <div className="flex justify-end pr-8">
            {isEven ? (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full max-w-md"
              >
                <ExperienceContent experience={experience} isEven={true} />
              </motion.div>
            ) : (
              <div className="w-full max-w-md opacity-0 pointer-events-none">
                {/* Spacer for alignment */}
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="flex justify-start pl-8">
            {!isEven ? (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full max-w-md"
              >
                <ExperienceContent experience={experience} isEven={false} />
              </motion.div>
            ) : (
              <div className="w-full max-w-md opacity-0 pointer-events-none">
                {/* Spacer for alignment */}
              </div>
            )}
          </div>

          {/* Center Timeline with Diamond */}
          <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-40">
            {/* Timeline Diamond Indicator */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 45 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className={`w-4 h-4 border-4 border-white bg-gradient-to-br from-blue-500 to-green-500 transform rotate-45 shadow-lg shadow-blue-500/50 ${
                isFirst ? 'bg-green-500 border-green-400' : isLast ? 'bg-red-500 border-red-400' : ''
              }`}
            />
          </div>

          {/* Connecting Line to Left Card */}
          {isEven && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
              className="absolute left-1/2 top-10 transform -translate-y-1/2 w-16 h-0.5 bg-gradient-to-l from-blue-400 to-transparent z-30 -ml-16"
            />
          )}

          {/* Connecting Line to Right Card */}
          {!isEven && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
              className="absolute left-1/2 top-10 transform -translate-y-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent z-30"
            />
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative pl-20">
        {/* Mobile Timeline Indicator */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`absolute left-2 top-8 w-4 h-4 border-4 border-white bg-gradient-to-br from-blue-500 to-green-500 transform rotate-45 z-30 shadow-lg shadow-blue-500/50 ${
            isFirst ? 'bg-green-500 border-green-400' : isLast ? 'bg-red-500 border-red-400' : ''
          }`}
        />
        
        {/* Mobile Connecting Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '3.5rem' }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          className="absolute left-6 top-10 h-0.5 bg-gradient-to-r from-blue-400 to-transparent z-20"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ExperienceContent experience={experience} isEven={true} />
        </motion.div>
      </div>
    </div>
  );
};

const ExperienceContent: React.FC<{ experience: Experience; isEven: boolean }> = ({ experience, isEven }) => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
            {experience.period}
          </span>
        </div>
        
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          {experience.title}
        </h3>
        
        <p className="text-blue-400 font-semibold mb-4 text-lg">
          {experience.company}
        </p>
        
        <p className="font-body text-gray-300 mb-6 leading-relaxed font-light tracking-wide">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800/60 text-blue-300 rounded-lg text-xs font-mono border border-gray-600/40 hover:border-blue-400/60 hover:bg-blue-900/20 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};