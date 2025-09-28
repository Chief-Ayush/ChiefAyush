'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { getPersonalInfo, getSocialLinks } from '@/data/portfolio-data';
import { Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  const personal = getPersonalInfo();
  const social = getSocialLinks();
  const placeholder = `/api/placeholder?width=512&height=512&text=${encodeURIComponent((personal.name || 'Profile').split(' ')[0])}`;

  // Derive a GitHub avatar from social.github if present
  const githubUsername = social?.github ? social.github.replace(/\/$/, '').split('/').pop() : undefined;
  const githubAvatar = githubUsername ? `https://avatars.githubusercontent.com/${githubUsername}` : undefined;

  // If personal.avatar looks like a local path, extract the filename to request via API
  const avatarFileName = personal.avatar ? personal.avatar.split('/').pop() : undefined;
  const apiAvatar = `/api/avatar${avatarFileName ? `?file=${encodeURIComponent(avatarFileName)}` : ''}`;

  const isRemote = typeof personal.avatar === 'string' && /^https?:\/\//i.test(personal.avatar);
  const isPublicImage = typeof personal.avatar === 'string' && personal.avatar.startsWith('/image/');
  const publicWithBust = personal.avatar;
  const isDataImage = typeof personal.avatar === 'string' && personal.avatar.startsWith('/data/');

  // Prefer valid sources and avoid known 404 (/data/*) by routing through our API first
  const candidates = (() => {
    if (isRemote || isPublicImage) {
      return [publicWithBust as string, githubAvatar, placeholder].filter(Boolean) as string[];
    }
    if (isDataImage && avatarFileName) {
      return [apiAvatar, githubAvatar, placeholder].filter(Boolean) as string[];
    }
    // Fallback ordering
    return [apiAvatar, personal.avatar, githubAvatar, placeholder].filter(Boolean) as string[];
  })();

  const [avatarIndex, setAvatarIndex] = useState(0);
  const avatarSrc = candidates[Math.min(avatarIndex, candidates.length - 1)] || placeholder;

  // Reset attempt index when data changes so new URLs are retried on Fast Refresh
  useEffect(() => {
    setAvatarIndex(0);
  }, [personal.avatar, social?.github]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-green-400/10 opacity-30 blur-xl"
            style={{ zIndex: -1 }}
          />

          <div className="relative bg-transparent backdrop-blur-sm rounded-3xl border border-gray-700/30 p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left: Text */}
              <div className="lg:col-span-7 xl:col-span-8">
              <div className="mb-8">
                <div className="relative typewriter-container prevent-layout-shift">
                  {/* Invisible clone to reserve final space */}
                  <h1
                    aria-hidden="true"
                      className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent leading-tight tracking-tight select-none pointer-events-none"
                    style={{ WebkitTextStroke: '0 transparent' }}
                  >
                    {personal.name}
                  </h1>
                  {/* Absolutely positioned typing text */}
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight absolute inset-0">
                    <TypewriterText 
                      text={personal.name} 
                      speed={100} 
                      delay={500}
                      showCursor={true}
                      startEmpty
                    />
                  </h1>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4"
                >
                    <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-medium text-blue-400 tracking-tight">
                    {personal.title}
                  </h2>
                </motion.div>
              </div>

              <div className="space-y-4 max-w-3xl">
                <div className="relative typewriter-container prevent-layout-shift">
                  <p
                    aria-hidden="true"
                    className="font-body text-base sm:text-lg text-transparent leading-relaxed font-light tracking-wide select-none pointer-events-none whitespace-pre-wrap"
                  >
                    {personal.description}
                  </p>
                  <p className="font-body text-base sm:text-lg text-gray-300 leading-relaxed font-light tracking-wide absolute inset-0 whitespace-pre-wrap">
                    <TypewriterText 
                      text={personal.description} 
                      speed={30} 
                      delay={2000}
                      showCursor={false}
                      startEmpty
                    />
                  </p>
                </div>
                
                <div className="relative typewriter-container prevent-layout-shift">
                  <p
                    aria-hidden="true"
                    className="font-body text-base sm:text-lg text-transparent leading-relaxed font-normal tracking-wide select-none pointer-events-none whitespace-pre-wrap"
                  >
                    {personal.subtitle}
                  </p>
                  <p className="font-body text-base sm:text-lg text-blue-200 leading-relaxed font-normal tracking-wide absolute inset-0 whitespace-pre-wrap">
                    <TypewriterText 
                      text={personal.subtitle} 
                      speed={25} 
                      delay={4000}
                      showCursor={false}
                      startEmpty
                    />
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 glow-blue inline-flex items-center gap-3 font-body font-medium text-white text-base sm:text-lg justify-center sm:justify-start tracking-wide"
                >
                  <ExternalLink size={20} />
                  View Projects
                </motion.a>
                
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 rounded-xl transition-all duration-300 inline-flex items-center gap-3 font-body font-semibold text-base sm:text-lg justify-center sm:justify-start"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </motion.div>
              </div>

              {/* Right: Profile Photo */}
              <div className="lg:col-span-5 xl:col-span-4 order-first lg:order-none">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative mx-auto w-48 sm:w-56 lg:w-64 aspect-square shrink-0"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/15 to-green-400/20 blur-2xl z-0" />
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-green-400 opacity-20 z-0" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-700/50 shadow-2xl z-10 bg-black/10">
                    <Image
                      src={avatarSrc}
                      alt={`${personal.name} profile photo`}
                      fill
                      sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 12rem"
                      priority
                      unoptimized
                      className="object-cover object-center"
                      onError={() => setAvatarIndex((i) => Math.min(i + 1, candidates.length - 1))}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};