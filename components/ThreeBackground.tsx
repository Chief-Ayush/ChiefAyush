'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ClassicStarField: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-screen pointer-events-none overflow-hidden" 
      style={{ 
        zIndex: -10,
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%)'
      }}
    >
      {/* Small twinkling stars */}
      {Array.from({ length: 200 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Royal blue stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`blue-star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            backgroundColor: '#2563eb', // Royal blue
            boxShadow: '0 0 6px #2563eb, 0 0 12px #2563eb',
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Neon green stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`green-star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: '#00ff88', // Neon green
            boxShadow: '0 0 8px #00ff88, 0 0 16px #00ff88',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.8, 1],
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Shooting stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            width: '2px',
            height: '2px',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 6px #ffffff',
          }}
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: [0, typeof window !== 'undefined' ? window.innerWidth : 1920],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 10 + 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Large glowing orbs */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + Math.random() * 60}%`,
            width: `${15 + Math.random() * 20}px`,
            height: `${15 + Math.random() * 20}px`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, #2563eb40, transparent)'
              : 'radial-gradient(circle, #00ff8840, transparent)',
            border: i % 2 === 0 ? '1px solid #2563eb30' : '1px solid #00ff8830',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nebula effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 800px 400px at 25% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 600px 300px at 75% 75%, rgba(0, 255, 136, 0.08) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ClassicStarField;