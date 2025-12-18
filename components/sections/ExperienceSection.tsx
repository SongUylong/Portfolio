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
import { ArrowUpRight, Code, Palette, Server, Zap, Users, GitBranch, ShoppingCart, Shield, Sparkles, Globe, Database, Video, Share2 } from "lucide-react";
import Image from "next/image";
// Technology Icons
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiReact, 
  SiJavascript, 
  SiGit, 
  SiWordpress, 
  SiPhp, 
  SiMysql,
  SiElementor,
  SiExpress,
  SiLaravel,
  SiAdobephotoshop,
  SiFacebook,
  SiInstagram
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiWoo } from "react-icons/si";

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
    position: "Backend Intern",
    company: "Paragon International University",
    dates: "Nov 2025 ~ Present",
    technologies: [
      { name: "Laravel", icon: <SiLaravel className="w-3 h-3" />, color: "bg-red-600 text-white" },
      { name: "PHP", icon: <SiPhp className="w-3 h-3" />, color: "bg-indigo-600 text-white" },
      { name: "MySQL", icon: <SiMysql className="w-3 h-3" />, color: "bg-orange-600 text-white" },
      { name: "REST APIs", icon: <TbApi className="w-3 h-3" />, color: "bg-green-600 text-white" },
      { name: "Database", icon: <Database className="w-3 h-3" />, color: "bg-blue-600 text-white" },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Server className="w-4 h-4 text-red-500" />,
            text: "Specialized in Laravel backend development, building and maintaining APIs for the university's internal systems."
          },
          {
            icon: <Database className="w-4 h-4 text-orange-500" />,
            text: "Managed databases and implemented server-side logic to support university applications."
          },
          {
            icon: <Code className="w-4 h-4 text-blue-500" />,
            text: "Developed scalable backend solutions using Laravel framework and best practices."
          },
          {
            icon: <Shield className="w-4 h-4 text-green-500" />,
            text: "Ensured data integrity and security in all backend implementations."
          },
        ]}
      />
    ),
    url: "https://paragoniu.edu.kh",
    image: "/paragon.jpg",
  },
  {
    position: "Full-Stack Developer",
    company: "Origins Studios",
    dates: "Aug 2024 ~ Nov 2024",
    technologies: [
      { name: "React", icon: <SiReact className="w-3 h-3" />, color: "bg-blue-500 text-white" },
      { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3" />, color: "bg-black text-white" },
      { name: "TypeScript", icon: <SiTypescript className="w-3 h-3" />, color: "bg-blue-600 text-white" },
      { name: "REST APIs", icon: <TbApi className="w-3 h-3" />, color: "bg-green-600 text-white" },
      { name: "Database", icon: <Database className="w-3 h-3" />, color: "bg-blue-600 text-white" },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Code className="w-4 h-4 text-blue-500" />,
            text: "Contributed to 4 large-scale projects by developing full-stack features and integrating APIs."
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Managed databases and backend systems to deliver scalable and reliable solutions."
          },
          {
            icon: <Zap className="w-4 h-4 text-yellow-500" />,
            text: "Worked on internal systems and client websites with focus on performance and reliability."
          },
          {
            icon: <Users className="w-4 h-4 text-pink-500" />,
            text: "Collaborated with cross-functional teams to deliver high-quality solutions."
          },
        ]}
      />
    ),
    url: "",
    image: "/origins.png",
  },
  {
    position: "Full-Stack Developer",
    company: "CamboConnect",
    dates: "Jan 2025 ~ Present",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3" />, color: "bg-black text-white" },
      { name: "TypeScript", icon: <SiTypescript className="w-3 h-3" />, color: "bg-blue-600 text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 h-3" />, color: "bg-cyan-500 text-white" },
      { name: "Zustand", icon: <Zap className="w-3 h-3" />, color: "bg-orange-500 text-white" },
      { name: "React", icon: <SiReact className="w-3 h-3" />, color: "bg-blue-500 text-white" },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Code className="w-4 h-4 text-blue-500" />,
            text: "Designed and developed the entire web application from frontend to backend using Next.js, Tailwind CSS."
          },
          {
            icon: <Zap className="w-4 h-4 text-yellow-500" />,
            text: "Created highly responsive, SEO-friendly, and fast-loading user interfaces, resulting in strong SEO rankings and excellent performance scores."
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Built robust backend API integrations and implemented server-side rendering and static generation for optimal performance."
          },
          {
            icon: <Sparkles className="w-4 h-4 text-purple-500" />,
            text: "Managed global and local application state efficiently using Zustand, ensuring smooth and scalable state management."
          },
          {
            icon: <Palette className="w-4 h-4 text-rose-500" />,
            text: "Architected and implemented new features across the stack, delivering a seamless and engaging user experience."
          },
          {
            icon: <Shield className="w-4 h-4 text-emerald-500" />,
            text: "Utilized built-in methods for routing and data fetching with TypeScript for type safety and maintainability."
          },
        ]}
      />
    ),
    url: "https://camboconnect.com",
    image: "/cambo.png",
  },
  {
    position: "Full-Stack Developer",
    company: "Ministry of Agriculture, Forestry and Fisheries",
    dates: "Dec 2024 ~ Jan 2025",
    technologies: [
      { name: "React", icon: <SiReact className="w-3 h-3" />, color: "bg-blue-500 text-white" },
      { name: "Express.js", icon: <SiExpress className="w-3 h-3" />, color: "bg-gray-600 text-white" },
      { name: "React Router", icon: <GitBranch className="w-3 h-3" />, color: "bg-red-500 text-white" },
      { name: "i18n", icon: <Globe className="w-3 h-3" />, color: "bg-purple-600 text-white" },
      { name: "JavaScript", icon: <SiJavascript className="w-3 h-3" />, color: "bg-yellow-500 text-black" },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Server className="w-4 h-4 text-green-500" />,
            text: "Developed a comprehensive tree inventory system for Phnom Penh's urban forest documentation and conservation."
          },
          {
            icon: <Code className="w-4 h-4 text-blue-500" />,
            text: "Built interactive QR code system allowing users to scan and learn about each tree's unique story and characteristics."
          },
          {
            icon: <Globe className="w-4 h-4 text-purple-500" />,
            text: "Implemented multilingual support with i18n for Khmer and English languages to serve local and international users."
          },
          {
            icon: <Palette className="w-4 h-4 text-teal-500" />,
            text: "Created an interactive map and tree database for environmental education and urban biodiversity conservation."
          },
          {
            icon: <Shield className="w-4 h-4 text-orange-500" />,
            text: "Built scalable and secure admin dashboard for government officials to manage tree data and monitor system performance."
          },
          {
            icon: <Users className="w-4 h-4 text-indigo-500" />,
            text: "Delivered a platform promoting environmental awareness and community engagement with Cambodia's urban forest."
          },
        ]}
      />
    ),
    url: "",
    image: "/tree.png",
  },
  {
    position: "Frontend Developer Intern",
    company: "CodeForCambodia",
    dates: "Nov 2024 ~ May 2025",
    technologies: [
      { name: "React", icon: <SiReact className="w-3 h-3" />, color: "bg-blue-500 text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 h-3" />, color: "bg-cyan-500 text-white" },
      { name: "JavaScript", icon: <SiJavascript className="w-3 h-3" />, color: "bg-yellow-500 text-black" },
      { name: "Git", icon: <SiGit className="w-3 h-3" />, color: "bg-red-500 text-white" },
      { name: "REST APIs", icon: <TbApi className="w-3 h-3" />, color: "bg-green-600 text-white" },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Palette className="w-4 h-4 text-blue-500" />,
            text: "Built responsive and animated user interfaces using React.js and Tailwind CSS, resulting in a 30% improvement in load times."
          },
          {
            icon: <Code className="w-4 h-4 text-green-500" />,
            text: "Developed new features for web applications using React, increasing application functionality by 25%."
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Worked with backend APIs to fetch and display data dynamically, enriching the user experience."
          },
          {
            icon: <Users className="w-4 h-4 text-pink-500" />,
            text: "Collaborated effectively with a team and adapted to the startup environment."
          },
          {
            icon: <GitBranch className="w-4 h-4 text-orange-500" />,
            text: "Utilized Git for version control, collaborating through feature branches, team-based development workflow."
          },
          {
            icon: <Users className="w-4 h-4 text-emerald-500" />,
            text: "Communicated with stakeholders to gather requirements and deliver solutions."
          },
        ]}
      />
    ),
    image: "/cfc.png",
    url: "https://codeforcambodia.com",
  },
  {
    position: "Content & Social Media Manager",
    company: "CodeForCambodia",
    dates: "Nov 2024 ~ May 2025",
    technologies: [
      { name: "Photoshop", icon: <SiAdobephotoshop className="w-3 h-3" />, color: "bg-blue-600 text-white" },
      { name: "Facebook", icon: <SiFacebook className="w-3 h-3" />, color: "bg-blue-700 text-white" },
      { name: "Instagram", icon: <SiInstagram className="w-3 h-3" />, color: "bg-pink-600 text-white" },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Video className="w-4 h-4 text-red-500" />,
            text: "Created and managed video content including shooting, editing, and post-production for social media campaigns."
          },
          {
            icon: <Share2 className="w-4 h-4 text-purple-500" />,
            text: "Managed social media presence across platforms, creating engaging content to grow community engagement."
          },
          {
            icon: <Palette className="w-4 h-4 text-blue-500" />,
            text: "Designed graphics and visual content using Adobe Photoshop for marketing materials and social posts."
          },
          {
            icon: <Sparkles className="w-4 h-4 text-yellow-500" />,
            text: "Developed content strategy and maintained consistent brand voice across all social media channels."
          },
        ]}
      />
    ),
    image: "/cfcfacebook.png",
    url: "https://www.facebook.com/share/v/1Cq4dZ3XYb/",
  },
  {
    position: "Ecommerce Website ",
    company: "Soriya Pearl",
    dates: "May 2024 ~ Present",
    technologies: [
      { name: "WordPress", icon: <SiWordpress className="w-3 h-3" />, color: "bg-blue-700 text-white" },
      { name: "WooCommerce", icon: <SiWoo className="w-3 h-3" />, color: "bg-purple-600 text-white" },
      { name: "Elementor", icon: <SiElementor className="w-3 h-3" />, color: "bg-pink-500 text-white" },
      { name: "PHP", icon: <SiPhp className="w-3 h-3" />, color: "bg-indigo-600 text-white" },
      { name: "MySQL", icon: <SiMysql className="w-3 h-3" />, color: "bg-orange-600 text-white" },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <ShoppingCart className="w-4 h-4 text-blue-500" />,
            text: "Developed a complete e-commerce solution using WordPress, Elementor, and WooCommerce."
          },
          {
            icon: <Sparkles className="w-4 h-4 text-yellow-500" />,
            text: "Built an online store for selling high-quality pearls to jewelry businesses."
          },
          {
            icon: <Palette className="w-4 h-4 text-indigo-500" />,
            text: "Customized the website design and functionality to create a unique brand experience."
          },
          {
            icon: <Shield className="w-4 h-4 text-green-500" />,
            text: "Ensured a seamless and secure checkout process by integrating payment gateways."
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
              <CardCurtainReveal className="h-[520px] w-full border border-zinc-100 bg-zinc-950 text-zinc-50 shadow">
                <CardCurtainRevealBody>
                  <CardCurtainRevealTitle className="text-2xl font-medium tracking-tight">
                    {entry.position}
                  </CardCurtainRevealTitle>
                  <CardCurtainRevealDescription className="my-4 ">
                    <p className="text-sm text-muted-foreground mb-2">
                      {entry.company} • {entry.dates}
                    </p>
                    
                    {/* Technology Icons */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {entry.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-md ${tech.color}`}
                          title={tech.name}
                        >
                          {tech.icon}
                        </span>
                      ))}
                    </div>
                    
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
                  <Image
                    alt={entry.position}
                    className="absolute left-0 top-0 w-full h-full object-cover object-top rounded-b-xl"
                    src={getExperienceImage(entry.position, entry.image)}
                    width={400}
                    height={256}
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
