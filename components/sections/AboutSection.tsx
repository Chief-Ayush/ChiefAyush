'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { getPersonalInfo } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

export const AboutSection: React.FC = () => {
  const personal = getPersonalInfo();
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <motion.section 
      id="about" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" 
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center mb-8 min-h-[4rem]">
          <div className="flex-shrink-0">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text tracking-tight">
              <TypewriterText text="About Me" speed={50} showCursor={false} />
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
        
        <div className="max-w-4xl">
          {/* Reserve full height using an invisible clone to avoid layout shift */}
          <div className="typewriter-container prevent-layout-shift relative">
              <p
                aria-hidden="true"
                className="font-body text-lg leading-relaxed font-light tracking-wide whitespace-pre-wrap invisible select-none pointer-events-none"
              >
                {personal.description}
              </p>
              <p className="font-body text-gray-300 text-lg leading-relaxed font-light tracking-wide whitespace-pre-wrap absolute inset-0">
                <TypewriterText 
                  text={personal.description} 
                  speed={20}
                  delay={1000}
                  showCursor={false}
                />
              </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};