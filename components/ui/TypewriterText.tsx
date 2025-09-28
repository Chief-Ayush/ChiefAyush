'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  /** If true, do not render the text initially; start empty and type in */
  startEmpty?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
  startEmpty = false
}) => {
  const [ref, isInView] = useInView<HTMLSpanElement>();
  const [displayedText, setDisplayedText] = useState(startEmpty ? '' : text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  // Use a ref to ensure the animation only starts once without retriggering the effect cleanup
  const hasStartedRef = useRef(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // If animation has already started, don't run again
    if (hasStartedRef.current) return;

    // Clear existing timeouts
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    if (!isInView || !text) {
      return;
    }

    // Mark as started (avoid effect retrigger + cleanup cancelling timers)
    hasStartedRef.current = true;
    
    // Start animation after delay
    const startTimeout = setTimeout(() => {
      setIsAnimating(true);
      setIsComplete(false);
      // Only clear text if we intend to start from empty
      if (!startEmpty) {
        // If we didn't start empty, keep current text until we begin typing over it using slice
        // We will still update progressively to the same content; no flash to empty
      } else {
        setDisplayedText('');
      }
      
      // Schedule character additions immediately after clearing
      // Start from 1 to avoid an extra 0-length update
      for (let i = 1; i <= text.length; i++) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, i));
          if (i === text.length) {
            setIsComplete(true);
            setIsAnimating(false);
            if (onComplete) {
              onComplete();
            }
          }
        }, i * speed);
        
        timeoutsRef.current.push(timeout);
      }
    }, delay);

    timeoutsRef.current.push(startTimeout);

    // Cleanup function
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [isInView, text, speed, delay, onComplete]);

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block', minHeight: '1.2em' }}>
      {displayedText}
      {showCursor && isAnimating && displayedText.length > 0 && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-blue-400"
          style={{ marginLeft: '2px' }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};