"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import AppLayout from "@/components/layout/AppLayout";
import SkillsPage from "@/components/SkillPage";

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

const experienceEntries = [
  {
    position: "Frontend Developer Intern",
    company: "Tech Startup Inc.",
    dates: "Jan 2024 - Apr 2024",
    description:
      "Built responsive UI components using React and Tailwind CSS. Integrated REST APIs and delivered features for the internal dashboard.",
  },
  {
    position: "Freelance Web Developer",
    company: "Self-employed",
    dates: "May 2023 - Dec 2023",
    description:
      "Designed and developed websites for small businesses using React, Next.js. Focused on SEO and performance optimization.",
  },
  {
    position: "IT Support Assistant",
    company: "Paragon University",
    dates: "Aug 2022 - May 2023",
    description:
      "Provided technical support to students and staff. Maintained computer labs and resolved hardware/network issues.",
  },
];

export default function AboutPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const experienceRef = useRef(null);

  // Scroll and color interpolation
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });

  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#3b82f6", "#22c55e", "#a855f7"], // Blue → Green → Purple
  );

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
    <AppLayout>
      {/* === Skills Section === */}
      <section id="skills" className="py-12">
        <SkillsPage />
      </section>

      {/* === Experience Section === */}
      <section id="experience" className="py-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
          Experience
        </h2>

        <div className="relative max-w-3xl mx-auto pl-6 md:pl-8 lg:pl-10">
          {/* Animated vertical line */}
          <motion.div
            style={{ backgroundColor: lineColor }}
            className="absolute left-0 top-0 bottom-0 w-0.5 md:left-4 lg:left-6"
          />

          <motion.div
            ref={experienceRef}
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
          >
            {experienceEntries.map((entry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-8 relative pl-8 md:pl-12"
              >
                <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20 md:left-[10px] lg:left-[18px]" />
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">
                      {entry.position}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {entry.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      {entry.dates}
                    </p>
                    <p className="text-sm text-foreground">
                      {entry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === Education Section === */}
      <section id="education" className="py-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
          Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {educationEntries.map((entry, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={index}
                className="relative w-full h-64 perspective"
                onClick={() =>
                  setFlippedIndex((prev) => (prev === index ? null : index))
                }
              >
                <motion.div
                  className="absolute inset-0 w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden">
                    <Card className="h-full cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">
                          {entry.degree}
                        </CardTitle>
                        <CardDescription>{entry.institution}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {entry.dates}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden">
                    <Card className="h-full cursor-pointer bg-secondary">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {entry.current}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-foreground">
                          {entry.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* === Achievements Section === */}
      <section id="achievements" className="py-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
          Achievements
        </h2>
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {educationEntries
              .filter(entry => entry.description.includes("Achieved") || entry.description.includes("ranking"))
              .map((entry, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary">
                        {entry.degree}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {entry.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {entry.dates}
                      </p>
                      <p className="text-sm text-foreground">
                        {entry.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
}
