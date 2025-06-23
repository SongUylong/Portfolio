'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export interface TypewriterCycleProps {
  texts: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorClassName?: string;
}

export function TypewriterCycle({
  texts,
  className,
  typeSpeed = 80,
  deleteSpeed = 40,
  delayBetweenTexts = 1500,
  loop = true,
  showCursor = true,
  cursorClassName,
}: TypewriterCycleProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [_isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex] || '';
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Finished typing
          setIsComplete(true);
          setTimeout(() => {
            if (loop) {
              setIsDeleting(true);
              setIsComplete(false);
            }
          }, delayBetweenTexts);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts, typeSpeed, deleteSpeed, delayBetweenTexts, loop]);

  return (
    <div className={cn('inline-flex items-center', className)}>
      <motion.span
        key={displayText}
        className="inline-block min-h-[1em]"
        style={{ minWidth: '1ch' }}
      >
        {displayText}
      </motion.span>
      
      {showCursor && (
        <motion.span
          animate={{
            opacity: [1, 1, 0, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
          }}
          className={cn(
            "inline-block w-[2px] h-[1em] bg-current ml-1",
            cursorClassName
          )}
        />
      )}
    </div>
  );
} 