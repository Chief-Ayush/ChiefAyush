'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Visible test element to confirm rendering */}
      <div 
        className="fixed top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs rounded z-50"
        style={{ pointerEvents: 'none' }}
      >
        BG Active
      </div>
      
      <div 
        className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none animated-bg"
        style={{ 
          zIndex: -1,
          background: 'rgba(0, 0, 0, 0.1)', // Subtle background to ensure visibility
        }}
      >
        {/* Large visible stars for testing */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '3px',
              height: '3px',
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 2, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Colored moving particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`colored-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '6px',
              height: '6px',
              backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'][i % 5],
              boxShadow: `0 0 10px ${['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'][i % 5]}`,
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Pulsing gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
};

export default AnimatedBackground;