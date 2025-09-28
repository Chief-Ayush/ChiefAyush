'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { getCertifications } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';

export const CertificationsSection: React.FC = () => {
  const certifications = getCertifications();
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section 
      id="certifications" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" 
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center mb-16 min-h-[4rem]">
          <div className="flex-shrink-0">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text tracking-tight">
              <TypewriterText text="Certifications" speed={50} showCursor={false} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <h3 className="font-heading text-xl font-bold text-white mb-2 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-blue-400 font-semibold mb-1">{cert.issuer}</p>
                <p className="font-mono text-gray-400 text-sm mb-3">{cert.date}</p>
              </div>
              
              <p className="font-body text-gray-300 leading-relaxed font-light tracking-wide text-center mb-4">
                {cert.description}
              </p>
              
              <div className="text-center">
                <span className="font-mono text-green-400 text-sm bg-green-500/10 px-2 py-1 rounded border border-green-500/30">
                  {cert.credentialId}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};