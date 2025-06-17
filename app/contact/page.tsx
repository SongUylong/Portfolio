"use client"; // Mark as Client Component for useState and form handling

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react"; // Lucide React icons
import AppLayout from "@/components/layout/AppLayout";
import { SubmissionForm } from "@/components/SubmissionForm";
import { TextMorph } from '@/components/ui/text-morph';
import { GlowEffect } from '@/components/ui/glow-effect';
export default function ContactSection() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleVisible = (data:boolean) => {
    setIsVisible(data);
  }
  // Framer Motion variants for the contact card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <AppLayout>
      <section id="contact" className="py-12 md:py-20 relative min-h-screen w-full flex items-center justify-center px-4">
        <motion.div
          className='pointer-events-none absolute w-[290px] h-[500px] sm:w-[330px] sm:h-[450px] md:w-[430px] md:h-[530px] lg:w-[530px] lg:h-[550px] -z-10'
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <GlowEffect
            colors={['#FFFFFF', '#0894FF', '#0066CC', '#004C99']}
            mode='colorShift'
            blur='strongest'
            duration={4}
          />
        </motion.div>
        <motion.div
          className='relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[520px] mx-auto p-4 sm:p-6 md:p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-white border-border/50 shadow-2xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-foreground">
            Get in Touch
          </h2>
          <SubmissionForm handleVisible={handleVisible} />
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </motion.div>
      </section>
    </AppLayout>
  );
}
