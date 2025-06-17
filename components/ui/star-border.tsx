import { cn } from "@/lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

interface StarBorderProps<T extends ElementType> {
  as?: T;
  color?: string;
  speed?: string;
  className?: string;
  children: React.ReactNode;
}

export function StarBorder<T extends ElementType = "div">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "div";
  const defaultColor = color || "hsl(var(--foreground))";

  return (
    <Component
      className={cn(
        "relative inline-block overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      {/* Main star effect - larger and more visible */}
      <div
        className={cn(
          "absolute w-[400%] h-[60%] bottom-[-15px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
          "opacity-80 dark:opacity-95"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, ${defaultColor}60, transparent 30%)`,
          animationDuration: speed,
          filter: "blur(2px)",
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[60%] top-[-15px] left-[-350%] rounded-full animate-star-movement-top z-0",
          "opacity-80 dark:opacity-95"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, ${defaultColor}60, transparent 30%)`,
          animationDuration: speed,
          filter: "blur(2px)",
        }}
      />
      
      {/* Secondary star effect - sharper and brighter */}
      <div
        className={cn(
          "absolute w-[350%] h-[50%] bottom-[-8px] right-[-275%] rounded-full animate-star-movement-bottom z-1",
          "opacity-95 dark:opacity-100"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`,
          animationDuration: `${parseFloat(speed) * 0.7}s`,
        }}
      />
      <div
        className={cn(
          "absolute w-[350%] h-[50%] top-[-8px] left-[-275%] rounded-full animate-star-movement-top z-1",
          "opacity-95 dark:opacity-100"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`,
          animationDuration: `${parseFloat(speed) * 0.7}s`,
        }}
      />
      
      <div
        className={cn(
          "relative z-10 rounded-full overflow-hidden"
        )}
      >
        {children}
      </div>
    </Component>
  );
}
