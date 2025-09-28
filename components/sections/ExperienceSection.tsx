'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { getExperience } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

export const ExperienceSection: React.FC = () => {
  const experiences = getExperience();
  const [ref] = useInView<HTMLElement>();

  return (
    <section 
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" 
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="relative flex items-center mb-4 min-h-[5rem]">
            <div className="flex-shrink-0">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text tracking-tight">
                <TypewriterText text="Experience" speed={60} showCursor={false} />
              </h2>
            </div>
            {/* dot + gradient line accent */}
            <div className="relative flex-grow ml-6">
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(56,189,248,0.6)]" />
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-cyan-300 via-blue-500 to-transparent"
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Main Timeline Line - Desktop */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-red-500 transform -translate-x-0.5 z-10 rounded-full shadow-lg shadow-blue-500/30"
          />
          
          {/* Main Timeline Line - Mobile */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
            className="md:hidden absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-red-500 z-10 rounded-full shadow-lg shadow-blue-500/30"
          />

          {/* Start Marker - Desktop */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hidden md:block absolute left-1/2 -top-4 w-8 h-8 bg-green-500 rounded-full transform -translate-x-1/2 z-30 border-4 border-white shadow-xl shadow-green-500/50"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
          
          {/* Start Marker - Mobile */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="md:hidden absolute left-2 -top-4 w-6 h-6 bg-green-500 rounded-full transform -translate-x-1/2 z-30 border-4 border-white shadow-xl shadow-green-500/50"
          />

          {/* Experience cards */}
          <div className="relative z-20 pt-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                totalItems={experiences.length}
              />
            ))}
          </div>

          {/* End Marker - Desktop */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="hidden md:block absolute left-1/2 -bottom-4 w-8 h-8 bg-red-500 rounded-full transform -translate-x-1/2 z-30 border-4 border-white shadow-xl shadow-red-500/50"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
          
          {/* End Marker - Mobile */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="md:hidden absolute left-2 -bottom-4 w-6 h-6 bg-red-500 rounded-full transform -translate-x-1/2 z-30 border-4 border-white shadow-xl shadow-red-500/50"
          />
        </div>
      </div>
    </section>
  );
};