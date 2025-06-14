"use client";
import AppLayout from "@/components/layout/AppLayout";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { TextParticle } from "@/components/ui/text-particle";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image";

import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-700 hover:text-black"
      >
        <GitHubLogoIcon className="w-5 h-5" />
        <span>GitHub</span>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
      >
        <TwitterLogoIcon className="w-5 h-5" />
        <span>Twitter</span>
      </a>

      {/* Facebook (using custom SVG) */}
      <a
        href="https://facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z" />
        </svg>
        <span>Facebook</span>
      </a>

      {/* LinkedIn (using custom SVG) */}
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-blue-700 hover:text-blue-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.6-1 2.1-2.2 4.4-2.2 4.7 0 5.5 3.1 5.5 7.2V24h-5V15.3c0-2.1-.03-4.7-2.9-4.7-2.9 0-3.3 2.3-3.3 4.5V24h-5V8z" />
        </svg>
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
export function NameDemo() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Start position: 100px below and invisible
      animate={{ y: 0, opacity: 1 }} // End position: at its original position and fully visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
      className="h-full w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <TextParticle
        text="Song Uylong"
        fontFamily="font-serif"
        particleColor="#3b82f6"
        particleSize={1}
        particleDensity={2}
      />
      <Image
        width={200}
        src=""
        height={200}
        alt={"uylong"}
        className="rounded-full bg-white mb-5 "
      />

      <Description />
      <span className=" text-center inline-block py-1.5 px-3 rounded-lg md:text-lg font-semibold text-white mb-5 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, ea!
        Corrupti facere nostrum placeat, aut officiis dolor velit, quidem sint
        delectus labore esse fugiat quod sequi corporis quis unde eligendi.
      </span>
      <div className="flex space-x-4 mb-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Button 1
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Download CV
        </button>
      </div>
      <SocialLinks />
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
    </motion.div>
  );
}

export function Description() {
  const words = [
    {
      text: "Focused",
    },
    {
      text: " On ",
    },
    {
      text: "Performance",
      className: "",
    },
    {
      text: "  ",
    },
    {
      text: "Security",
      className: "",
    },
    {
      text: " & ",
    },
    {
      text: "User",
      className: "text-red-500 dark:text-blue-400",
    },
    {
      text: "Experience",
      className: "text-red-500 dark:text-blue-400",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-5">
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
