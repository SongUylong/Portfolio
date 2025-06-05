"use client";
import { cn } from "@/lib/cn";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import EducationSection from "@/components/EducationSection";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: invisible, slightly below
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Animate to: visible, original position
};
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-20">
        {/* Hero Section */}
        <motion.section
          initial="hidden" // Start from hidden state
          animate="visible" // Animate to visible state on component mount
          variants={sectionVariants} // Apply the defined variants
          className="text-center py-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Uylong Song
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Frontend Developer & Designer
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <EducationSection />
        </motion.section>
      </main>
    </div>
  );
}
