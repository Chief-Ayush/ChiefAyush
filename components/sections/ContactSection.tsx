'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { getPersonalInfo, getSocialLinks } from '@/data/portfolio-data';
import { useInView } from '@/hooks/useInView';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const personal = getPersonalInfo();
  const social = getSocialLinks();
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center mb-8 min-h-[4rem]">
          <div className="flex-shrink-0">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text tracking-tight">
              <TypewriterText text="Get In Touch" speed={50} showCursor={false} />
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative mb-10">
            <p className="font-body text-gray-300 text-lg leading-relaxed font-light tracking-wide">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              <Mail className="text-blue-400" size={24} />
              <span className="font-mono text-gray-300 text-sm sm:text-base">{personal.email}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center md:justify-end gap-3"
            >
              <MapPin className="text-green-400" size={24} />
              <span className="font-mono text-gray-300 text-sm sm:text-base">{personal.location}</span>
            </motion.div>
          </div>

          <div className="flex justify-center gap-8">
            <motion.a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono text-gray-300 hover:text-green-400 transition-colors text-sm sm:text-base"
            >
              <Github size={32} />
            </motion.a>

            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              <Linkedin size={32} />
            </motion.a>

            <motion.a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono text-gray-300 hover:text-purple-400 transition-colors text-sm sm:text-base"
            >
              <Twitter size={32} />
            </motion.a>

            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="font-mono text-gray-300 hover:text-red-400 transition-colors text-sm sm:text-base"
            >
              <Mail size={32} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};