'use client';

import React from 'react';
import { getPersonalInfo } from '@/data/portfolio-data';

export const Footer: React.FC = () => {
  const personal = getPersonalInfo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-gray-400 text-sm">
          © {currentYear} {personal.name}. Built with Next.js, TypeScript, and Framer Motion.
        </p>
        <p className="font-mono text-gray-500 text-xs mt-2">
          Designed and developed with 💙 using Monaco font family.
        </p>
      </div>
    </footer>
  );
};