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
import { ArrowUpRight, Code, Palette, Server, Zap, Users, GitBranch, ShoppingCart, Shield, Sparkles } from "lucide-react";
import { TypewriterCycle } from "@/components/ui/typewriter-cycle";

function BulletPointCycle({
  points,
  className,
}: {
  points: { icon: React.ReactNode; text: string }[];
  className?: string;
}) {
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
  while (padded.length < groupSize) padded.push({ icon: null, text: "" });
  return (
    <ul
      className={`space-y-3 text-sm transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"} ${className || ""}`}
    >
      {padded.map((item, i) => (
        <li key={i} className={`flex items-start gap-3 ${item.text ? undefined : "invisible"}`}>
          {item.icon && <span className="flex-shrink-0 mt-0.5">{item.icon}</span>}
          <span dangerouslySetInnerHTML={{ __html: item.text || "." }} />
        </li>
      ))}
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
          {
            icon: <Code className="w-4 h-4 text-blue-500" />,
            text: "Designed and developed the entire web application from <em class='text-blue-400 font-medium'>frontend to backend</em> using <em class='text-green-400 font-medium'>Next.js</em>, <em class='text-cyan-400 font-medium'>Tailwind CSS</em>."
          },
          {
            icon: <Zap className="w-4 h-4 text-yellow-500" />,
            text: "Created highly <em class='text-yellow-400 font-medium'>responsive</em>, <em class='text-green-400 font-medium'>SEO-friendly</em>, and <em class='text-purple-400 font-medium'>fast-loading</em> user interfaces, resulting in strong SEO rankings and excellent performance scores."
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Built robust <em class='text-indigo-400 font-medium'>backend API integrations</em> and implemented <em class='text-orange-400 font-medium'>server-side rendering</em> and <em class='text-teal-400 font-medium'>static generation</em> for optimal performance."
          },
          {
            icon: <Sparkles className="w-4 h-4 text-purple-500" />,
            text: "Managed global and local application state efficiently using <em class='text-purple-400 font-medium'>Zustand</em>, ensuring smooth and <em class='text-pink-400 font-medium'>scalable state management</em>."
          },
          {
            icon: <Palette className="w-4 h-4 text-rose-500" />,
            text: "Architected and implemented new features across the stack, delivering a <em class='text-rose-400 font-medium'>seamless</em> and <em class='text-amber-400 font-medium'>engaging user experience</em>."
          },
          {
            icon: <Shield className="w-4 h-4 text-emerald-500" />,
            text: "Utilized built-in methods for routing and data fetching with <em class='text-emerald-400 font-medium'>TypeScript</em> for <em class='text-blue-400 font-medium'>type safety</em> and <em class='text-violet-400 font-medium'>maintainability</em>."
          },
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
          {
            icon: <Palette className="w-4 h-4 text-blue-500" />,
            text: "Built <em class='text-blue-400 font-medium'>responsive</em> and <em class='text-purple-400 font-medium'>animated</em> user interfaces using <em class='text-cyan-400 font-medium'>React.js</em> and <em class='text-teal-400 font-medium'>Tailwind CSS</em>, resulting in a <em class='text-green-400 font-bold'>30% improvement</em> in load times."
          },
          {
            icon: <Code className="w-4 h-4 text-green-500" />,
            text: "Developed new features for web applications using <em class='text-green-400 font-medium'>React</em>, increasing application functionality by <em class='text-yellow-400 font-bold'>25%</em>."
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Worked with <em class='text-indigo-400 font-medium'>backend APIs</em> to fetch and display data <em class='text-orange-400 font-medium'>dynamically</em>, enriching the user experience."
          },
          {
            icon: <Users className="w-4 h-4 text-pink-500" />,
            text: "Collaborated effectively with a <em class='text-pink-400 font-medium'>team</em> and adapted to the <em class='text-violet-400 font-medium'>startup environment</em>."
          },
          {
            icon: <GitBranch className="w-4 h-4 text-orange-500" />,
            text: "Utilized <em class='text-orange-400 font-medium'>Git</em> for version control, collaborating through <em class='text-yellow-400 font-medium'>feature branches</em>, team-based development workflow."
          },
          {
            icon: <Users className="w-4 h-4 text-emerald-500" />,
            text: "Communicated with <em class='text-emerald-400 font-medium'>stakeholders</em> to gather requirements and deliver solutions."
          },
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
          {
            icon: <ShoppingCart className="w-4 h-4 text-blue-500" />,
            text: "Developed a complete <em class='text-blue-400 font-medium'>e-commerce solution</em> using <em class='text-purple-400 font-medium'>WordPress</em>, <em class='text-green-400 font-medium'>Elementor</em>, and <em class='text-orange-400 font-medium'>WooCommerce</em>."
          },
          {
            icon: <Sparkles className="w-4 h-4 text-yellow-500" />,
            text: "Built an online store for selling <em class='text-yellow-400 font-medium'>high-quality pearls</em> to <em class='text-pink-400 font-medium'>jewelry businesses</em>."
          },
          {
            icon: <Palette className="w-4 h-4 text-indigo-500" />,
            text: "Customized the website <em class='text-indigo-400 font-medium'>design</em> and <em class='text-cyan-400 font-medium'>functionality</em> to create a unique <em class='text-rose-400 font-medium'>brand experience</em>."
          },
          {
            icon: <Shield className="w-4 h-4 text-green-500" />,
            text: "Ensured a <em class='text-green-400 font-medium'>seamless</em> and <em class='text-red-400 font-medium'>secure</em> checkout process by integrating <em class='text-violet-400 font-medium'>payment gateways</em>."
          },
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
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
      
      {/* See All Projects Link */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
        >
          See All Projects
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>
    </section>
  );
}
