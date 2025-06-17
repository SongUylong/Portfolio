"use client";

import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiFramer,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiNginx,
  SiAxios,
} from "react-icons/si";
import { 
  Database,
  Server,
  Zap,
  RefreshCw,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"; // Make sure this path is correct
import { group } from "console";

// Converted skills data for the timeline
const timelineData = [
  {
    id: 1,
    title: "React.js",
    date: "Frontend",
    content:
      "Built dynamic UIs with React.js using hooks, component-based architecture, and performance optimizations.",
    category: "Frontend",
    icon: SiReact,
    status: "completed" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  {
    id: 2,
    title: "Tailwind CSS",
    date: "Styling",
    content:
      "Created responsive and modern interfaces rapidly with Tailwind CSS utility classes.",
    category: "Frontend",
    icon: SiTailwindcss,
    status: "completed" as const,
    skillLevel: 90,
    relatedIds: [],
  },
  {
    id: 3,
    title: "Next.js",
    date: "Full-Stack",
    content:
      "Built full-stack apps using Next.js with SSR, SSG, dynamic routing, and API routes.",
    category: "Full-Stack",
    icon: SiNextdotjs,
    status: "completed" as const,
    skillLevel: 90,
    relatedIds: [],
  },
  {
    id: 4,
    title: "TypeScript",
    date: "Code Quality",
    content:
      "Used TypeScript across the stack to improve type safety, maintainability, and developer confidence.",
    category: "Full-Stack",
    icon: SiTypescript,
    status: "completed" as const,
    skillLevel: 90,
    relatedIds: [],
  },
  {
    id: 5,
    title: "Express.js",
    date: "Backend",
    content:
      "Built RESTful APIs and server-side logic using Express.js with middleware and modular architecture.",
    category: "Backend",
    icon: SiExpress,
    status: "completed" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 6,
    title: "Database",
    date: "Data Layer",
    content:
      "Integrated relational databases using PostgreSQL and Prisma ORM for scalable, type-safe, and efficient data operations.",
    category: "Backend",
    icon: SiPostgresql, // or SiPrisma depending on which you want more visually
    status: "completed" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 7,
    title: "Zustand",
    date: "State Management",
    content:
      "Managed local and global state using Zustand for clean, scalable React applications.",
    category: "Frontend",
    icon: Zap,
    status: "completed" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 8,
    title: "Redux",
    date: "State Management",
    content:
      "Handled complex state logic and asynchronous data flows with Redux and middleware.",
    category: "Frontend",
    icon: SiRedux,
    status: "completed" as const,
    skillLevel: 80,
    relatedIds: [],
  },
  {
    id: 9,
    title: "React Query & Axios",
    date: "Data Fetching",
    content:
      "Used React Query and Axios to fetch, cache, and sync data efficiently in real-time interfaces.",
    category: "Frontend",
    icon: RefreshCw,
    status: "completed" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 10,
    title: "Framer Motion",
    date: "UI/UX",
    content:
      "Added interactive animations and transitions to enhance user experience using Framer Motion.",
    category: "UI/UX",
    icon: SiFramer,
    status: "completed" as const,
    skillLevel: 80,
    relatedIds: [],
  },
  {
    id: 11,
    title: "Figma",
    date: "Design",
    content:
      "Collaborated with designers and prototyped layouts using Figma for seamless frontend handoff.",
    category: "Workflow",
    icon: SiFigma,
    status: "completed" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 12,
    title: "Git & GitHub",
    date: "Collaboration",
    content:
      "Used Git with branching strategies and GitHub for version control and team collaboration.",
    category: "Workflow",
    icon: SiGithub,
    status: "completed" as const,
    skillLevel: 90,
    relatedIds: [],
  },
  {
    id: 13,
    title: "Docker",
    date: "DevOps",
    content:
      "Containerized development environments and prepared apps for production using Docker.",
    category: "DevOps",
    icon: SiDocker,
    status: "completed" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 14,
    title: "Deployment",
    date: "DevOps",
    content:
      "Deployed full-stack web apps using Vercel and custom VPS environments with Nginx for production-ready infrastructure.",
    category: "DevOps",
    icon: SiNginx, // Alternative: use SiVercel or a custom icon if preferred
    status: "completed" as const,
    skillLevel: 85,
    relatedIds: [],
  },
];


const Skills = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-foreground leading-tight">
            My Skills
          </h2>
          <p className="text-md sm:text-base md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
            A dynamic overview of my technical and professional abilities.
          </p>
        </div>

        {/* Radial Orbital Timeline */}
        <div className="w-full flex items-center justify-center overflow-hidden">
          <div className="w-full">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
