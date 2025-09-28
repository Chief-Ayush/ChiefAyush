'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { getSkills } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

export const SkillsSection: React.FC = () => {
  const skills = getSkills();
  const [ref] = useInView<HTMLElement>();

  return (
    <section
      id="skills" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center mb-16 min-h-[4rem]">
          <div className="flex-shrink-0">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text tracking-tight">
              <TypewriterText text="Skills & Expertise" speed={50} showCursor={false} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient}`}
                >
                  <div className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-gray-300 text-sm font-light">
                        {skill.name}
                      </span>
                      <span className="font-mono text-blue-400 text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};