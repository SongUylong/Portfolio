"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { InfoCard } from "@/components/ui/info-card";

const educationEntries = [
  {
    degree: "Bachelor of Management Information Systems",
    institution: "Paragon International University",
    dates: "2024 - Present",
    current: "Junior",
    description:
      "Equipped with technical and business skills to solve real-world problems with technology. Learning about data management, software development, networks, and cybersecurity, while also gaining insight into business strategy and decision-making.",
  },
  {
    degree: "High School Diploma",
    institution: "The Westline School",
    dates: "2017 - 2023",
    current: "Graduated",
    description:
      "Achieved a score of 99.5 and earned a Grade A, ranking within the top 1% on the national exam of Cambodia.",
  },
  {
    degree: "TOEFL ITP Certification",
    institution: "Australian Centre for Education",
    dates: "2022 - 2023",
    current: "Completed",
    description: "Achieved a TOEFL ITP score of 532.",
  },
  {
    degree: "IELTS Certification",
    institution: "Australian Centre for Education",
    dates: "2022 - 2023",
    current: "Completed",
    description: "Achieved an IELTS score of 6.",
  },
  {
    degree: "Certified Web Developer",
    institution: "Instinct Institute",
    dates: "June 2023 - Dec 2023",
    current: "Graduated",
    description:
      "Learned to develop responsive web apps with front-end and back-end integration using Express.js and React.js.",
  },
];

export function AchievementsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="achievements" className="py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
        Achievements
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center"
        >
          {educationEntries
            .filter(entry => entry.description.includes("Achieved") || entry.description.includes("ranking"))
            .map((entry, index) => {
              // Map achievements to appropriate images
              const getAchievementImage = (degree: string) => {
                if (degree.includes("High School")) {
                  return "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop";
                } else if (degree.includes("TOEFL")) {
                  return "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920&auto=format&fit=crop";
                } else if (degree.includes("IELTS")) {
                  return "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1920&auto=format&fit=crop";
                }
                return "https://images.unsplash.com/photo-1567777285486-8af9bfd5d7db?q=80&w=1920&auto=format&fit=crop";
              };

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <InfoCard
                    image={getAchievementImage(entry.degree)}
                    title={entry.degree}
                    description={entry.description}
                    borderColor="var(--border-color-1)"
                    borderBgColor="var(--border-bg-color)"
                    cardBgColor="var(--card-bg-color)"
                    shadowColor="var(--shadow-color)"
                    textColor="var(--text-color)"
                    hoverTextColor="var(--hover-text-color-1)"
                    fontFamily="var(--font-family)"
                    rtlFontFamily="var(--rtl-font-family)"
                    effectBgColor="var(--border-color-1)"
                    patternColor1="var(--pattern-color1)"
                    patternColor2="var(--pattern-color2)"
                    contentPadding="14.3px 16px"
                  />
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
} 