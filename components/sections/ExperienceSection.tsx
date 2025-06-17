"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealTitle,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtain,
} from "@/components/ui/card-curtain-reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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

export function ExperienceSection() {
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
    <section id="experience" className="py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
        Experience
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4"
      >
        {experienceEntries.map((entry, index) => {
          // Map experience to appropriate images
          const getExperienceImage = (position: string) => {
            if (position.includes("Frontend Developer")) {
              return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop";
            } else if (position.includes("Freelance")) {
              return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop";
            } else if (position.includes("IT Support")) {
              return "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1920&auto=format&fit=crop";
            }
            return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1920&auto=format&fit=crop";
          };

          return (
            <motion.div key={index} variants={itemVariants}>
              <CardCurtainReveal className="h-[400px] w-full border border-zinc-100 bg-zinc-950 text-zinc-50 shadow">
                <CardCurtainRevealBody>
                  <CardCurtainRevealTitle className="text-2xl font-medium tracking-tight">
                    {entry.position}
                  </CardCurtainRevealTitle>
                  <CardCurtainRevealDescription className="my-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      {entry.company} • {entry.dates}
                    </p>
                    <p className="text-sm">
                      {entry.description}
                    </p>
                  </CardCurtainRevealDescription>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="aspect-square rounded-full"
                  >
                    <ArrowUpRight />
                  </Button>

                  <CardCurtain className="bg-zinc-50" />
                </CardCurtainRevealBody>

                <CardCurtainRevealFooter className="mt-auto">
                  <img
                    width="100%"
                    height="100%"
                    alt={entry.position}
                    className="object-cover"
                    src={getExperienceImage(entry.position)}
                  />
                </CardCurtainRevealFooter>
              </CardCurtainReveal>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
} 