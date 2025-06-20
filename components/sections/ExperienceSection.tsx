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
import { TypewriterCycle } from "@/components/ui/typewriter-cycle";

// Helper component to cycle bullet points
function BulletPointCycle({ points, className }: { points: string[]; className?: string }) {
  const [index, setIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);
  const groupSize = 2;
  React.useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 3200); // start fade out before switch
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % Math.ceil(points.length / groupSize));
        setFade(true);
      }, 300); // fade duration
    }, 3500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [points.length]);
  const start = index * groupSize;
  const current = points.slice(start, start + groupSize);
  // Always render 2 items for consistent height
  const padded = [...current];
  while (padded.length < groupSize) padded.push("");
  return (
    <ul
      className={`list-disc pl-5 space-y-1 text-sm transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
    >
      {padded.map((pt, i) => <li key={i} className={pt ? undefined : 'invisible'}>{pt || '.'}</li>)}
    </ul>
  );
}

const experienceEntries = [
  {
    position: "Full-Stack Developer",
    company: "CamboConnect",
    dates: "Jan 2025 ~ Present",
    description: (
      <BulletPointCycle
        points={[
          "Designed and developed the entire web application from frontend to backend using Next.js, Tailwind CSS.",
          "Created highly responsive, SEO-friendly, and fast-loading user interfaces, resulting in strong SEO rankings and excellent performance scores.",
          "Built robust backend API integrations and implemented server-side rendering and static generation for optimal performance and dynamic content delivery.",
          "Managed global and local application state efficiently using Zustand, ensuring smooth and scalable state management.",
          "Architected and implemented new features across the stack, delivering a seamless and engaging user experience.",
          "Utilized built-in methods for routing and data fetching with TypeScript for type safety and maintainability."
        ]}
      />
    ),
    url: "https://camboconnect.com",
    image: "/cambo.png",
  },
  {
    position: "Frontend Developer Intern",
    company: "CodeForCambodia",
    dates: "Nov 2024 ~ May 2025",
    description: (
      <BulletPointCycle
        points={[
          "Built responsive and animated user interfaces using React.js and Tailwind CSS, resulting in a 30% improvement in load times.",
          "Developed new features for web applications using React, increasing application functionality by 25%.",
          "Worked with backend APIs to fetch and display data dynamically, enriching the user experience.",
          "Collaborated effectively with a team and adapted to the startup environment.",
          "Utilized Git for version control, collaborating through feature branches, team-based development workflow.",
          "Communicated with stakeholders to gather requirements and deliver solutions."
        ]}
      />
    ),
    image: "/cfc.png",
    url: "https://codeforcambodia.com",
  },
  {
    position: "Ecommerce Website ",
    company: "Soriya Pearl",
    dates: "May 2024 ~ Present",
    description: (
      <BulletPointCycle
        points={[
          "Developed a complete e-commerce solution using WordPress, Elementor, and WooCommerce.",
          "Built an online store for selling high-quality pearls to jewelry businesses.",
          "Customized the website design and functionality to create a unique brand experience.",
          "Ensured a seamless and secure checkout process by integrating payment gateways.",
          "Focused on creating a responsive design for optimal viewing on all devices.",
        ]}
      />
    ),
    image: "/soriyapearl.png",
    url: "https://soriyapearl.com/",
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
          const getExperienceImage = (position: string, image?: string) => {
            if (image) return image;
            if (position.includes("Full-Stack Developer")) {
              return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop";
            }
            return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1920&auto=format&fit=crop";
          };

          return (
            <motion.div key={index} variants={itemVariants}>
              <CardCurtainReveal className="h-[480px] w-full border border-zinc-100 bg-zinc-950 text-zinc-50 shadow">
                <CardCurtainRevealBody>
                  <CardCurtainRevealTitle className="text-2xl font-medium tracking-tight">
                    {entry.position}
                  </CardCurtainRevealTitle>
                  <CardCurtainRevealDescription className="my-4 ">
                    <p className="text-sm text-muted-foreground mb-2">
                      {entry.company} • {entry.dates}
                    </p>
                    {entry.description}
                  </CardCurtainRevealDescription>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="aspect-square rounded-full"
                    asChild
                  >
                    <a href={entry.url} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight />
                    </a>
                  </Button>

                  <CardCurtain className="bg-zinc-50" />
                </CardCurtainRevealBody>

                <CardCurtainRevealFooter className="mt-auto h-64 relative p-0 overflow-hidden">
                  <img
                    alt={entry.position}
                    className="absolute left-0 top-0 w-full h-full object-cover object-top rounded-b-xl"
                    src={getExperienceImage(entry.position, entry.image)}
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