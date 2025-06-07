// components/ThemeWipeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useImperativeHandle, forwardRef } from "react"; // Add forwardRef and useImperativeHandle

interface ThemeWipeSwitcherRef {
  toggleTheme: () => void;
}

// Use forwardRef to expose the toggleTheme function
const ThemeWipeSwitcher = forwardRef<ThemeWipeSwitcherRef>((props, ref) => {
  const { theme, setTheme } = useTheme();
  const [isWiping, setIsWiping] = useState(false);
  const [nextTheme, setNextTheme] = useState<"light" | "dark">("dark");

  const animationDuration = 0.8; // seconds

  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleTheme = useCallback(() => {
    if (isWiping) return;

    const newTheme = theme === "dark" ? "light" : "dark";
    setNextTheme(newTheme);
    setIsWiping(true);

    setTimeout(
      () => {
        setTheme(newTheme);
      },
      animationDuration * 1000 * 0.9,
    );

    setTimeout(() => {
      setIsWiping(false);
    }, animationDuration * 1000);
  }, [isWiping, theme, setTheme, animationDuration]);

  // Expose the toggleTheme function via the ref
  useImperativeHandle(ref, () => ({
    toggleTheme,
  }));

  return (
    <>
      <AnimatePresence>
        {isWiping && (
          <motion.div
            key="theme-wipe-overlay"
            className="fixed inset-0 z-[999] pointer-events-none"
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask id="circular-mask">
                  <motion.circle
                    cx="0"
                    cy="100"
                    r={0}
                    animate={{ r: 150 }}
                    transition={{
                      duration: animationDuration,
                      ease: [0.2, 0.8, 0.2, 1],
                    }}
                    fill="white"
                  />
                </mask>
              </defs>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill={nextTheme === "dark" ? "black" : "white"}
                mask="url(#circular-mask)"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isWiping && (
          <motion.div
            key="blur-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: animationDuration / 2 }}
            className="fixed inset-0 z-[998] pointer-events-none"
            style={{
              backgroundColor:
                theme === "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

ThemeWipeSwitcher.displayName = "ThemeWipeSwitcher"; // Add display name for debugging

export default ThemeWipeSwitcher;

export type { ThemeWipeSwitcherRef }; // Export the ref type
