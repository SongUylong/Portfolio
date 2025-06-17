'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export interface TextCycleProps {
  texts: string[];
  className?: string;
  interval?: number;
  as?: React.ElementType;
}

export function TextCycle({
  texts,
  className,
  interval = 2000,
  as: Component = 'span',
}: TextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const currentText = texts[currentIndex] || texts[0];

  return (
    <Component className={cn('inline-block', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className="inline-block"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </Component>
  );
} 