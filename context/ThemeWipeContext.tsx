"use client";

import { createContext, useContext, useRef, ReactNode } from "react";
import ThemeWipeSwitcher, {
  ThemeWipeSwitcherRef,
} from "@/components/ui/ThemeWipe";

interface ThemeWipeContextType {
  toggleThemeWipe: () => void;
}

const ThemeWipeContext = createContext<ThemeWipeContextType | undefined>(
  undefined,
);

export const ThemeWipeProvider = ({ children }: { children: ReactNode }) => {
  const themeWipeRef = useRef<ThemeWipeSwitcherRef>(null);

  const toggleThemeWipe = () => {
    themeWipeRef.current?.toggleTheme();
  };

  return (
    <ThemeWipeContext.Provider value={{ toggleThemeWipe }}>
      {children}
      {/* The actual switcher component, attached to the ref */}
      <ThemeWipeSwitcher ref={themeWipeRef} />
    </ThemeWipeContext.Provider>
  );
};

export const useThemeWipe = () => {
  const context = useContext(ThemeWipeContext);
  if (context === undefined) {
    throw new Error("useThemeWipe must be used within a ThemeWipeProvider");
  }
  return context;
};
