"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiBitbucket,
  SiGitea,
  SiPostgresql,
  SiMariadb,
  SiPrisma,
  SiFigma,
  SiFramer,
  SiRedux,
  SiVuedotjs,
  SiDocker,
  SiVercel,
  SiNginx,
  SiNuxt,
  SiNestjs,
  SiLaravel,
  SiSpringboot,
  SiApachekafka,
  SiRabbitmq,
  SiOpenjdk,
  SiCloudflare,
  SiWordpress,
  SiElementor,
  SiAnthropic,
  SiOpenai,
} from "react-icons/si";
import {
  Server,
  Network,
  Sparkles,
  BrainCircuit,
  Terminal,
  Cpu,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"; // Make sure this path is correct
import { MdGroups, MdGroupWork } from "react-icons/md";
import {
  TbBrush,
  TbPaint,
  TbWorldWww,
  TbTopologyStarRing3,
  TbRoute,
} from "react-icons/tb";
const timelineData = [
  {
    id: 1,
    title: "React & Next.js",
    date: "Frontend & SSR",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiNextdotjs className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">
            Built scalable applications with Next.js App Router, SSR, ISR, and
            SEO optimizations.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiReact className="w-full h-full text-[#61DAFB]" />
          </div>
          <span className="flex-1">
            Developed responsive UIs with modern React patterns, custom hooks,
            and performance optimizations.
          </span>
        </div>
      </div>
    ),
    category: "Full-Stack",
    icon: SiReact,
    status: "Expert" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  {
    id: 2,
    title: "Java Spring Boot",
    date: "Backend & Microservices",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiSpringboot className="w-full h-full text-[#6DB33F]" />
          </div>
          <span className="flex-1">
            Built robust RESTful APIs, microservices, and enterprise backend
            architectures with Spring Boot.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiOpenjdk className="w-full h-full text-[#ED8B00]" />
          </div>
          <span className="flex-1">
            Implemented OOP principles, Spring Security, JPA/Hibernate, and
            dependency injection.
          </span>
        </div>
      </div>
    ),
    category: "Backend",
    icon: SiSpringboot,
    status: "Expert" as const,
    skillLevel: 90,
    relatedIds: [],
  },
  {
    id: 3,
    title: "Nacos & Eureka",
    date: "Service Discovery & Config",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <TbTopologyStarRing3 className="w-full h-full text-blue-500" />
          </div>
          <span className="flex-1">
            Configured dynamic service discovery, registration, and load
            balancing with Netflix Eureka & Spring Cloud.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <TbRoute className="w-full h-full text-emerald-500" />
          </div>
          <span className="flex-1">
            Implemented centralized configuration management, health monitoring,
            and service governance with Nacos.
          </span>
        </div>
      </div>
    ),
    category: "Backend",
    icon: Network,
    status: "Expert" as const,
    skillLevel: 88,
    relatedIds: [],
  },
  {
    id: 4,
    title: "RabbitMQ & Kafka",
    date: "Message Brokers",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiApachekafka className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">
            Engineered event-driven streaming pipelines and distributed pub/sub
            messaging with Apache Kafka.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiRabbitmq className="w-full h-full text-[#FF6600]" />
          </div>
          <span className="flex-1">
            Implemented asynchronous background job processing, message queuing,
            and reliable delivery with RabbitMQ.
          </span>
        </div>
      </div>
    ),
    category: "Backend",
    icon: SiApachekafka,
    status: "Advanced" as const,
    skillLevel: 88,
    relatedIds: [],
  },
  {
    id: 5,
    title: "TypeScript",
    date: "Code Quality",
    content: (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
          <SiTypescript className="w-full h-full text-[#3178C6]" />
        </div>
        <span className="flex-1">
          Enforced type safety and reduced bugs across frontend and backend
          codebases.
        </span>
      </div>
    ),
    category: "Full-Stack",
    icon: SiTypescript,
    status: "Expert" as const,
    skillLevel: 95,
    relatedIds: [],
  },
  {
    id: 6,
    title: "Backend & APIs",
    date: "NestJS & Laravel",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiNestjs className="w-full h-full text-[#E0234E]" />
          </div>
          <span className="flex-1">
            Architected enterprise microservices and modular dependency
            injection pipelines with NestJS.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiLaravel className="w-full h-full text-[#FF2D20]" />
          </div>
          <span className="flex-1">
            Built secured university backend services, role-based auth, and REST
            APIs using PHP Laravel.
          </span>
        </div>
      </div>
    ),
    category: "Backend",
    icon: SiNestjs,
    status: "Expert" as const,
    skillLevel: 92,
    relatedIds: [],
  },
  {
    id: 7,
    title: "Database",
    date: "Data Layer",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiPostgresql className="w-full h-full text-[#336791]" />
          </div>
          <span className="flex-1">
            Designed normalized schemas and optimized queries for PostgreSQL.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiMariadb className="w-full h-full text-[#003545]" />
          </div>
          <span className="flex-1">
            Managed relational data, indexing, and transactions with MariaDB.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiPrisma className="w-full h-full text-[#2D3748]" />
          </div>
          <span className="flex-1">
            Utilized Prisma ORM for structured, type-safe database access.
          </span>
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
    id: 8,
    title: "State Management",
    date: "State Architecture",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiRedux className="w-full h-full text-[#764ABC]" />
          </div>
          <span className="flex-1">
            Built predictable React state architecture using Redux Toolkit &
            Zustand.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiVuedotjs className="w-full h-full text-[#4FC08D]" />
          </div>
          <span className="flex-1">
            Engineered centralized, reactive stores for Vue & Nuxt using Pinia
            and Vuex.
          </span>
        </div>
      </div>
    ),
    category: "Frontend",
    icon: SiRedux,
    status: "Advanced" as const,
    skillLevel: 88,
    relatedIds: [],
  },
  {
    id: 9,
    title: "Git, GitHub, Bitbucket & Gitea",
    date: "Version Control",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiGit className="w-full h-full text-[#F05032]" />
          </div>
          <span className="flex-1">
            Advanced Git branching, rebasing, merge conflict resolution, and
            hooks.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiGithub className="w-full h-full text-[#181717] dark:text-white" />
          </div>
          <span className="flex-1">
            GitHub Actions CI/CD pipelines, code reviews, and pull request
            workflows.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiBitbucket className="w-full h-full text-[#0052CC]" />
          </div>
          <span className="flex-1">
            Collaborated across enterprise codebases using Bitbucket
            repositories and pipelines.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiGitea className="w-full h-full text-[#609926]" />
          </div>
          <span className="flex-1">
            Self-hosted private Git repositories and lightweight webhooks using
            Gitea.
          </span>
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
    title: "HomeServer & Cloudflare Tunnel",
    date: "Self-Hosting & Network",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <Server className="w-full h-full text-primary" />
          </div>
          <span className="flex-1">
            Self-hosted home server infrastructure for local services,
            containers, and data management.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiCloudflare className="w-full h-full text-[#F38020]" />
          </div>
          <span className="flex-1">
            Exposed home lab services securely with Cloudflare Tunnels (Zero
            Trust) without open ports.
          </span>
        </div>
      </div>
    ),
    category: "DevOps",
    icon: SiCloudflare,
    status: "Advanced" as const,
    skillLevel: 85,
    relatedIds: [],
  },
  {
    id: 11,
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
          <span className="flex-1">
            Set up NGINX with HTTPS on VPS for secure routing.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiGithub className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">
            Automated deployments using GitHub Actions CI/CD
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiVercel className="w-full h-full text-foreground" />
          </div>
          <span className="flex-1">
            Setting up Vercel for reliable and scalable deployment.
          </span>
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
    id: 12,
    title: "Nuxt.js & Vue",
    date: "Full-Stack",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiNuxt className="w-full h-full text-[#00DC82]" />
          </div>
          <span className="flex-1">
            Built server-side rendered Vue 3 applications with Nuxt.js at
            SALATECH PTE LTD.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <TbWorldWww className="w-full h-full text-[#00DC82]" />
          </div>
          <span className="flex-1">
            Implemented SSR, dynamic routing, auto-imports, and optimized SEO
            performance.
          </span>
        </div>
      </div>
    ),
    category: "Full-Stack",
    icon: SiNuxt,
    status: "Advanced" as const,
    skillLevel: 88,
    relatedIds: [],
  },
  {
    id: 13,
    title: "WordPress & Elementor",
    date: "CMS & E-Commerce",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiWordpress className="w-full h-full text-[#21759B]" />
          </div>
          <span className="flex-1">
            Developed custom WordPress themes, e-commerce stores (WooCommerce),
            and plugins.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiElementor className="w-full h-full text-[#92003B]" />
          </div>
          <span className="flex-1">
            Built responsive, high-converting landing pages and dynamic
            templates with Elementor Pro.
          </span>
        </div>
      </div>
    ),
    category: "CMS",
    icon: SiWordpress,
    status: "Expert" as const,
    skillLevel: 92,
    relatedIds: [],
  },
  {
    id: 14,
    title: "Design",
    date: "UI/UX & Design",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiFigma className="w-full h-full text-[#F24E1E]" />
          </div>
          <span className="flex-1">
            Transformed Figma prototypes into pixel-perfect, responsive UIs.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <TbPaint className="w-full h-full text-[#31A8FF]" />
          </div>
          <span className="flex-1">
            Created and edited graphics, images, and visual assets using Adobe
            Photoshop.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <TbBrush className="w-full h-full text-[#FF9A00]" />
          </div>
          <span className="flex-1">
            Designed vector graphics, logos, and illustrations using Adobe
            Illustrator.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiFramer className="w-full h-full text-[#0055FF]" />
          </div>
          <span className="flex-1">
            Designed interactive motion elements to enhance UX using Framer
            Motion.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiTailwindcss className="w-full h-full text-[#06B6D4]" />
          </div>
          <span className="flex-1">
            Rapidly built clean, modern layouts using utility-first Tailwind
            CSS.
          </span>
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
    id: 15,
    title: "Collaboration",
    date: "Soft Skills",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <MdGroups className="w-full h-full text-[#F05032]" />
          </div>
          <span className="flex-1">
            Experienced in effective team collaboration within fast-paced
            startup environments
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <MdGroupWork className="w-full h-full dark:text-white text-black" />
          </div>
          <span className="flex-1">
            Communicates clearly, asks thoughtful questions, and fosters open
            dialogue to ensure project success.
          </span>
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

const aiSkillsData = [
  {
    id: 101,
    title: "Claude Code",
    date: "Agentic Engineering",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiAnthropic className="w-full h-full text-[#D97757]" />
          </div>
          <span className="flex-1">
            Proficient with Claude Code CLI, tool orchestration, sub-agents, and
            autonomous full-stack terminal workflows.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <Terminal className="w-4 h-4 text-blue-500" />
          </div>
          <span className="flex-1">
            Leveraging headless agent automation, architectural refactoring, and
            multi-file code synthesis.
          </span>
        </div>
      </div>
    ),
    category: "AI & LLMs",
    icon: SiAnthropic,
    status: "Expert" as const,
    skillLevel: 96,
    relatedIds: [],
  },
  {
    id: 102,
    title: "Pi Agent (pi.dev)",
    date: "Harness & Extensions",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <Terminal className="w-4 h-4 text-blue-500" />
          </div>
          <span className="flex-1">
            Mastered Pi (pi.dev) agent harness: custom TypeScript extensions,
            tool calling, sub-agents, and interactive TUI/RPC workflows.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <Cpu className="w-4 h-4 text-emerald-500" />
          </div>
          <span className="flex-1">
            Context engineering with minimal system prompts, dynamic compaction,
            skill progressive disclosure, and session tree branching.
          </span>
        </div>
      </div>
    ),
    category: "AI & LLMs",
    icon: Terminal,
    status: "Expert" as const,
    skillLevel: 98,
    relatedIds: [],
  },
  {
    id: 103,
    title: "OpenAI Codex & Frontier Models",
    date: "Reasoning & Agent APIs",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <SiOpenai className="w-full h-full text-black dark:text-white" />
          </div>
          <span className="flex-1">
            Integrated OpenAI Codex, frontier reasoning models, structured tool
            calling, and multimodal vision APIs.
          </span>
        </div>
      </div>
    ),
    category: "AI & LLMs",
    icon: SiOpenai,
    status: "Expert" as const,
    skillLevel: 94,
    relatedIds: [],
  },
  {
    id: 104,
    title: "RAG & Neuron AI (PHP)",
    date: "Paragon ERP • Retrieval & Embeddings",
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <BrainCircuit className="w-4 h-4 text-purple-500" />
          </div>
          <span className="flex-1">
            Engineered enterprise RAG systems and semantic search workflows for
            Paragon IU&apos;s ERP system using the Neuron AI framework in PHP.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
          <span className="flex-1">
            Implemented custom document chunking, vector embeddings, re-ranking,
            and high-accuracy internal ERP knowledge retrieval.
          </span>
        </div>
      </div>
    ),
    category: "AI & LLMs",
    icon: BrainCircuit,
    status: "Expert" as const,
    skillLevel: 94,
    relatedIds: [],
  },
];

const Skills = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Main Skills Orbit */}
        <div>
          <div className="text-center mb-4 sm:mb-6 md:mb-10">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-primary leading-tight">
              My Skills
            </h2>
            <p className="text-md sm:text-base md:text-lg text-foreground/80 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
              A dynamic overview of my full-stack engineering and software
              architecture abilities.
            </p>
          </div>

          <div className="w-full flex items-center justify-center relative">
            <div className="w-full">
              <RadialOrbitalTimeline
                timelineData={timelineData}
                themeColor="orange"
              />
            </div>
          </div>
        </div>

        {/* Dedicated Blue AI Skills Orbit */}
        <div>
          <div className="text-center mb-4 sm:mb-6 md:mb-10">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-blue-500 leading-tight">
              AI & Agentic Skills
            </h2>
            <p className="text-md sm:text-base md:text-lg text-foreground/80 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
              Specialized expertise in modern LLM agent orchestration, prompt
              engineering, code synthesis, and intelligent workflows.
            </p>
          </div>

          <div className="w-full flex items-center justify-center relative">
            <div className="w-full">
              <RadialOrbitalTimeline
                timelineData={aiSkillsData}
                themeColor="blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
