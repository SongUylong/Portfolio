"use client";
import { motion } from "framer-motion";
import {
  CardTitle,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export function EducationSection() {
  const EducationEntries = [
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
      duration: "6 months",
      current: "Graduated",
      description:
        "Learned to develop responsive web apps with front-end and back-end integration using Express.js and React.js.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="education" className="py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
        Education
      </h2>
      <motion.div
        className="relative max-w-3xl mx-auto pl-6 md:pl-8 lg:pl-10"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:left-4 lg:left-6" />
        {EducationEntries.map((entry, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-8 relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20 md:left-[10px] lg:left-[18px]"></div>
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
                <p className="text-xs text-muted-foreground mb-2">
                  {entry.current}
                </p>
                <p className="text-sm text-foreground">{entry.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
export default EducationSection;
