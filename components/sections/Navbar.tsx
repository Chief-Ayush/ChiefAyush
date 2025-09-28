'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { getPersonalInfo } from '@/data/portfolio-data';

export const Navbar: React.FC = () => {
  getPersonalInfo();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-lg shadow-blue-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo size="md" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white tracking-tight text-lg">
              Chief Ayush
            </span>
            <span className="font-mono text-xs text-blue-400/80 -mt-1">
              Backend Specialist
            </span>
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              className="relative font-mono text-sm text-gray-300 hover:text-white transition-all duration-300 group px-2 py-1"
              href={item.href}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.label}
              {/* Underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-400 group-hover:w-full transition-all duration-300" />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-400/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>
      
      {/* Enhanced gradient border with animation */}
      <motion.div 
        className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Additional subtle glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-green-400/20" />
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block font-mono text-gray-300 hover:text-white hover:bg-gray-800/30 px-4 py-3 rounded-lg transition-all duration-300 relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <div className="absolute left-4 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-400 group-hover:w-16 transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};