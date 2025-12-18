"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiFigma,
  SiFramer,
  SiRedux,
  SiAxios,
  SiReactrouter,
  SiReactquery,
  SiDocker,
  SiVercel,
  SiNginx,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"; // Make sure this path is correct
import { MdGroups,MdGroupWork, MdRouter } from "react-icons/md";
// Converted skills data for the timeline
import { TbWorldWww, TbBrandNextjs } from "react-icons/tb";
const timelineData = [
  {
    id: 1,
    title: "React.js",
    date: "Frontend",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiReactrouter className="w-full h-full text-[#CA4245]" />
          </div>
          <span className="flex-1">Integrated React Router for dynamic navigation and route-based rendering.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiReact className="w-full h-full text-[#61DAFB]" />
          </div>
          <span className="flex-1">Built dynamic UIs using hooks, component patterns, and performance optimizations such as <code>React.memo</code> and lazy loading.</span>
        </div>
      </div>
    ),
    category: "Frontend",
    icon: SiReact,
    status: "Expert" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  {
    id: 2,
    title: "Design",
    date: "UI/UX & Design",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiFigma className="w-full h-full text-[#F24E1E]" />
          </div>
          <span className="flex-1">Transformed Figma prototypes into pixel-perfect, responsive UIs.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiAdobephotoshop className="w-full h-full text-[#31A8FF]" />
          </div>
          <span className="flex-1">Created and edited graphics, images, and visual assets using Adobe Photoshop.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiAdobeillustrator className="w-full h-full text-[#FF9A00]" />
          </div>
          <span className="flex-1">Designed vector graphics, logos, and illustrations using Adobe Illustrator.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiFramer className="w-full h-full text-[#0055FF]" />
          </div>
          <span className="flex-1">Designed interactive motion elements to enhance UX using Framer Motion.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiTailwindcss className="w-full h-full text-[#06B6D4]" />
          </div>
          <span className="flex-1">Rapidly built clean, modern layouts using utility-first Tailwind CSS.</span>
        </div>
      </div>
    ),
    category: "UI/UX",
    icon: SiFigma,
    status: "Advanced" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 3,
    title: "Next.js",
    date: "Full-Stack",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <TbBrandNextjs className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">Implemented SSR, ISR, and App Router </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <MdRouter className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">Follow best practices to structure and maintain projects effectively.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <TbWorldWww className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">SEO optimization and enhancing web performance, Ensure cross-platform compatibility</span>
        </div>
      </div>
    ),
    category: "Full-Stack",
    icon: SiNextdotjs,
    status: "Expert" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  {
    id: 4,
    title: "TypeScript",
    date: "Code Quality",
    content: (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
          <SiTypescript className="w-full h-full text-[#3178C6]" />
        </div>
        <span className="flex-1">Enforced type safety and reduced bugs across frontend and backend codebases.</span>
      </div>
    ),
    category: "Full-Stack",
    icon: SiTypescript,
    status: "Expert" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  {
    id: 5,
    title: "Express.js",
    date: "Backend",
    content: (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
          <SiExpress className="w-full h-full text-foreground/80" />
        </div>
        <span className="flex-1">Created scalable RESTful APIs and modular backend logic with middleware pipelines.</span>
      </div>
    ),
    category: "Backend",
    icon: SiExpress,
    status: "Expert" as const,
    skillLevel: 90,
    relatedIds: [],
  },
  {
    id: 6,
    title: "Database",
    date: "Data Layer",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiPrisma className="w-full h-full text-[#2D3748]" />
          </div>
          <span className="flex-1">Utilized Prisma ORM for structured, type-safe access to PostgreSQL data.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiPostgresql className="w-full h-full text-[#336791]" />
          </div>
          <span className="flex-1">Designed normalized schemas for efficient relational queries.</span>
        </div>
      </div>
    ),
    category: "Backend",
    icon: SiPostgresql,
    status: "Expert" as const,
    skillLevel: 90,
    relatedIds: [],
  },
  {
    id: 7,
    title: "State Management",
    date: "State Management",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiRedux className="w-full h-full text-[#764ABC]" />
          </div>
          <span className="flex-1">Built reliable app state architecture using Redux with dev tools and middleware.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiRedux className="w-full h-full text-[#764ABC]" />
          </div>
          <span className="flex-1">Handled async state using thunks and maintained clean reducers.</span>
        </div>
      </div>
    ),
    category: "Frontend",
    icon: SiRedux,
    status: "Advanced" as const,
    skillLevel: 80,
    relatedIds: [],
  },
  {
    id: 8,
    title: "React Query & Axios",
    date: "Data Fetching",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiAxios className="w-full h-full text-[#5A29E4]" />
          </div>
          <span className="flex-1">Built consistent data layers with Axios for robust REST API communication.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiReactquery className="w-full h-full text-[#FF4154]" />
          </div>
          <span className="flex-1">Managed caching, background sync, and query invalidation with React Query.</span>
        </div>
      </div>
    ),
    category: "Frontend",
    icon: SiReactquery,
    status: "Advanced" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 9,
    title: "Git & GitHub",
    date: "Collaboration",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiGit className="w-full h-full text-[#F05032]" />
          </div>
          <span className="flex-1">Adopted Git workflows with feature branches, rebase and merge strategies and detailed commit histories.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiGithub className="w-full h-full text-[#181717] dark:text-white" />
          </div>
          <span className="flex-1">Collaborated with team using pull requests, issue tracking</span>
        </div>
      </div>
    ),
    category: "Workflow",
    icon: SiGithub,
    status: "Expert" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  {
    id: 10,
    title: "Deployment",
    date: "DevOps",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiDocker className="w-full h-full text-[#2496ED]" />
          </div>
          <span className="flex-1">Containerized apps with Docker</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiNginx className="w-full h-full text-[#009639]" />
          </div>
          <span className="flex-1">Set up NGINX with HTTPS on VPS for secure routing.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiGithub className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">Automated deployments using GitHub Actions CI/CD</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiVercel className="w-full h-full text-foreground" />
          </div>
          <span className="flex-1">Setting up Vercel for reliable and scalable deployment.</span>
        </div>
      </div>
    ),
    category: "DevOps",
    icon: SiDocker,
    status: "Intermediate" as const,
    skillLevel: 70,
    relatedIds: [],
  },
  {
    id: 11,
    title: "Collaboration",
    date: "Soft Skills",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <MdGroups className="w-full h-full text-[#F05032]" />
          </div>
          <span className="flex-1">Experienced in effective team collaboration within fast-paced startup environments</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <MdGroupWork className="w-full h-full dark:text-white text-black" />
          </div>
          <span className="flex-1">Communicates clearly, asks thoughtful questions, and fosters open dialogue to ensure project success.</span>
        </div>
      </div>
    ),
    category: "Soft Skills",
    icon: MdGroupWork,
    status: "Proactive" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  

];


const Skills = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-primary leading-tight">
            My Skills
          </h2>
          <p className="text-md sm:text-base md:text-lg text-foreground/80 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
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
