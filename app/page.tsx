"use client";
import AppLayout from "@/components/layout/AppLayout";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { TextParticle } from "@/components/ui/text-particle";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
export function NameDemo() {
  const { theme } = useTheme();
  return (
    <div className="h-[40rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <TextParticle
        text="Song Uylong"
        fontFamily="font-serif"
        particleColor="#3b82f6"
        particleSize={1}
        particleDensity={2}
      />
      <Description />
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent "
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={`${theme === "dark" ? "#ffffff" : "#000000"}`}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute background: 'hsl(0, 0%, 100%)', inset-0 w-full h-full bg-background [mask-image:radial-gradient(351px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
export function Description() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <TypewriterEffect words={words} />
    </div>
  );
}

export default function HomePage() {
  return (
    <AppLayout>
      <main className="flex flex-col items-center h-screen">
        <NameDemo />
      </main>
    </AppLayout>
  );
}
