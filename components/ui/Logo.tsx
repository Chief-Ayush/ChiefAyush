'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg'
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${className} relative flex items-center justify-center`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Outer ring with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 p-0.5">
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
          {/* Inner content */}
          <div className="relative flex items-center justify-center" aria-label="Logo: Double A">
            <svg viewBox="0 0 128 128" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" aria-hidden>
              <defs>
                <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
              {/* Back A (slight offset, softer) */}
              <g transform="translate(-5,-5)" opacity="0.5">
                <path d="M28 108 L64 20 L100 108" fill="none" stroke="url(#logo-g)" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44 76 H84" fill="none" stroke="url(#logo-g)" strokeWidth="11" strokeLinecap="round"/>
              </g>
              {/* Front A */}
              <g>
                <path d="M28 108 L64 20 L100 108" fill="none" stroke="url(#logo-g)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44 76 H84" fill="none" stroke="url(#logo-g)" strokeWidth="12" strokeLinecap="round"/>
              </g>
            </svg>

            {/* Accent dot */}
            <motion.div 
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-400"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-green-400/20 blur-sm -z-10" />
    </motion.div>
  );
};