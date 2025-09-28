import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (
  text: string,
  speed: number = 50,
  delay: number = 0
): string => {
  const [displayedText, setDisplayedText] = useState('');
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear existing timeouts
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];

    if (!text) {
      setDisplayedText('');
      return;
    }

    // Reset displayed text
    setDisplayedText('');

    // Schedule character additions
    for (let i = 0; i <= text.length; i++) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, i));
      }, delay + i * speed);
      
      timeoutsRef.current.push(timeout);
    }

    // Cleanup function
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [text, speed, delay]);

  return displayedText;
};