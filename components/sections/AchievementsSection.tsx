"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { InfoCard } from "@/components/ui/info-card";

const achievements = [
  {
    title: "The Best Presentation Skill",
    date: "Aug 2024",
    description:
      "Awarded Best Presentation Skills at the ACIYLS ASEAN-China-India Youth Leadership Summit 2024. Our team was honored to be in the Top 4 overall, presenting in front of international youth leaders and judges. A memorable experience that fostered teamwork, leadership, and growth.",
    image: "/award.jpg",
  },
  {
    title: "ASEAN Data Science Explorers (DSE) Finalist",
    date: "Jul 2024",
    description:
      "Selected as a finalist in the ASEAN Data Science Explorers competition, recognized for excellence in problem solving and sustainability. Developed data-driven solutions to address regional challenges and collaborated with talented peers from across Southeast Asia.",
    image: "/asean.png",
  },
  {
    title: "Techno Innovation Challenge Finalist",
    date: "May 2024",
    description:
      "Finalist in the Techno Innovation Challenge after two months of intensive training. Designed and pitched innovative tech solutions, gaining valuable experience in entrepreneurship, teamwork, and technical development.",
    image: "/techo.jpg",
  },
  {
    title: "Full Academic Scholarship",
    date: "Jan 2023",
    description:
      "Received a full academic scholarship at Paragon International University, awarded for outstanding academic performance and leadership potential. This scholarship has enabled me to pursue higher education and further develop my skills and knowledge.",
    image:"/scholar.jpg"
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
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <InfoCard
                image={achievement.image}
                title={achievement.title}
                description={`${achievement.description} (${achievement.date})`}
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
                contentPadding="5px 15px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 