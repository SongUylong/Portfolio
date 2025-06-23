"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { InfoCard } from "@/components/ui/info-card";
import { ChevronDown, ChevronUp } from "lucide-react";

const achievements = [
  {
    title: "Best Presentation Skill",
    date: "Aug 2024",
    description:
      "Won Best Presentation at ACIYLS 2024 for an OpenCV-based occupancy tracking system integrated with IoT for smart electricity control. Ranked Top 4 overall.",
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
      "Finalist in the Techno Innovation Challenge Hackathon. Built a web platform using Next.js and MongoDB to centralize youth opportunities. Gained hands-on experience in entrepreneurship, teamwork, and full-stack development.",
    image: "/techo.jpg",
  },
  {
    title: "Full Academic Scholarship",
    date: "Jan 2023",
    description:
      "Received a full academic scholarship at Paragon International University, awarded for outstanding academic performance and leadership potential. This scholarship has enabled me to pursue higher education and further develop my skills and knowledge.",
    image: "/scholar.jpg",
  },
];

export function AchievementsSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(prev => prev === index ? null : index);
  };

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
      <h2 className="text-4xl font-bold mb-10 text-center text-neutral-800 dark:text-neutral-200">
        Achievements
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 items-center lg:justify-items-center"
        >
          {achievements.map((achievement, index) => {
            const isExpanded = expandedCard === index;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                layout
                className="w-full max-w-[388px] flex justify-center"
              >
                <div className="relative">
                  {/* Original InfoCard */}
                  <div 
                    onClick={() => toggleCard(index)}
                    className="cursor-pointer transition-transform duration-200 hover:scale-[1.02] relative"
                  >
                    <InfoCard
                      image={achievement.image}
                      title={achievement.title}
                      description={`${achievement.description.slice(0, 80)}...`}
                      width={388}
                      height={378}
                      borderColor="var(--border-color-1)"
                      borderBgColor="var(--border-bg-color)"
                      cardBgColor="var(--card-bg-color)"
                      textColor="var(--text-color)"
                      hoverTextColor="var(--hover-text-color-1)"
                      fontFamily="var(--font-family)"
                      rtlFontFamily="var(--rtl-font-family)"
                      effectBgColor="var(--border-color-1)"
                      patternColor1="var(--pattern-color1)"
                      patternColor2="var(--pattern-color2)"
                      contentPadding="5px 15px"
                    />
                    
                    {/* Expand/Collapse indicator */}
                    <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground p-2 rounded-full backdrop-blur-sm">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Description Section */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                            {achievement.title}
                          </h3>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {achievement.date}
                          </span>
                        </div>
                        
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                            {achievement.description}
                          </p>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-border/30">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCard(index);
                            }}
                            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors text-sm"
                          >
                            <ChevronUp className="w-4 h-4" />
                            Click to collapse
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

