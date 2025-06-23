"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import { TextParticle } from "@/components/ui/text-particle";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterCycle } from "@/components/ui/typewriter-cycle";
import { StarBorder } from "@/components/ui/star-border";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { MdMail } from "react-icons/md";

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {/* GitHub */}
      <a
        href="https://github.com/SongUylong"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
      >
        <GitHubLogoIcon className="w-5 h-5" />
        <span>GitHub</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://kh.linkedin.com/in/uylong-song-9683aa2aa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
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
      <a
        href="mailto:uylongsong@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
      >
        <MdMail className="h-6 w-6" />
        <span>Email</span>
      </a>
    </div>
  );
}

export function Description() {
  const developerTitles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer"
  ];

  return (
    <div className="flex flex-col items-center justify-center mb-5 font-sans">
      <div className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center text-primary">
        <TypewriterCycle
          texts={developerTitles}
          typeSpeed={100}
          deleteSpeed={50}
          delayBetweenTexts={2000}
          className="text-primary font-sans"
          cursorClassName="bg-primary"
        />
      </div>
    </div>
  );
}

export function NameDemo() {
  const { theme } = useTheme();
  const router = useRouter();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/UylongSong.pdf';
    link.download = 'Uylong Song.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    router.push('/contact');
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <TextParticle
        text="Song Uylong"
        fontFamily="font-serif"
        particleColor={theme === "dark" ? "#FF6500" : "#1E3E62"}
        particleSize={1}
        particleDensity={2}
      />
      <StarBorder
        className="mb-5"
        color={theme === "dark" ? "#ffffff" : "#000000"}
        speed="2s"
        as="div"
      >
        <Image
          width={192}
          src="/uylongsong.png"
          height={192}
          alt={"uylong"}
          className="rounded-full object-cover w-48 h-48 border border-foreground/20"
        />
      </StarBorder>

      <Description />
      <span className="text-center inline-block py-1.5 px-3 rounded-lg md:text-lg font-semibold text-foreground mb-5">
  Full-stack developer who loves turning ideas into real impact. Adaptable, open to new opportunities.
</span>

      <div className="flex space-x-4 mb-5">
        <button
          onClick={handleContactMe}
          className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors font-medium"
        >
          Contact Me
        </button>
        <button
          onClick={downloadCV}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-secondary/90 transition-colors font-medium"
        >
          Download CV
        </button>
      </div>
      <div className="flex justify-center mb-5">
        <SocialLinks />
      </div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={theme === "dark" ? "#FF6500" : "#1E3E62"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(351px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center sm:mt-20 ">
      <NameDemo />
    </section>
  );
} 