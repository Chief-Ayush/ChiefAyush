"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:ayush.attarde@example.com",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/ayushattarde",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ayushattarde", 
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Resume",
      href: "/resume.pdf",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        {/* Menu Items */}
        <motion.div
          className="absolute bottom-16 left-0 flex flex-col space-y-3"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg`}
              initial={{ scale: 0, x: -20 }}
              animate={isOpen ? { 
                scale: 1, 
                x: 0 
              } : { 
                scale: 0, 
                x: -20 
              }}
              transition={{ 
                delay: isOpen ? index * 0.1 : 0,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 360 
              }}
              whileTap={{ scale: 0.9 }}
              title={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}