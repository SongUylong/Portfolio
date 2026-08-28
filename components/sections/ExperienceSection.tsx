"use client";
import React from "react";
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealTitle,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtain,
} from "@/components/ui/card-curtain-reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Code,
  Palette,
  Server,
  Zap,
  Users,
  ShoppingCart,
  Shield,
  Sparkles,
  Globe,
  Database,
  Megaphone,
  LineChart,
  Calendar,
  Cpu,
  Layers,
  Bot,
} from "lucide-react";
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
  SiLaravel,
  SiFacebook,
  SiInstagram,
  SiNuxt,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiArduino,
} from "react-icons/si";
import { TbApi, TbPaint } from "react-icons/tb";
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
    const timeout = setTimeout(() => setFade(false), 3200);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % Math.ceil(points.length / groupSize));
        setFade(true);
      }, 300);
    }, 3500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [points.length]);
  const start = index * groupSize;
  const current = points.slice(start, start + groupSize);
  const padded = [...current];
  while (padded.length < groupSize) padded.push({ icon: null, text: "" });
  return (
    <ul
      className={`space-y-3 text-sm transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"} ${className || ""}`}
    >
      {padded.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 ${item.text ? undefined : "invisible"}`}
        >
          {item.icon && (
            <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
          )}
          <span dangerouslySetInnerHTML={{ __html: item.text || "." }} />
        </li>
      ))}
    </ul>
  );
}

const experienceEntries = [
  {
    position: "Full Stack Developer",
    company: "SALATECH PTE LTD",
    dates: "Jan 2026 ~ Present",
    technologies: [
      {
        name: "Nuxt.js",
        icon: <SiNuxt className="w-3 h-3" />,
        color: "bg-emerald-600 text-white",
      },
      {
        name: "NestJS",
        icon: <SiNestjs className="w-3 h-3" />,
        color: "bg-red-600 text-white",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-3 h-3" />,
        color: "bg-blue-600 text-white",
      },
      {
        name: "REST APIs",
        icon: <TbApi className="w-3 h-3" />,
        color: "bg-purple-600 text-white",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-3 h-3" />,
        color: "bg-sky-700 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Sparkles className="w-4 h-4 text-amber-500" />,
            text: "Engineered autonomous AI agent loops and LLM workflows to streamline student advisory and internal digital tools at sala.co.",
          },
          {
            icon: <Code className="w-4 h-4 text-emerald-500" />,
            text: "Architected modern web applications and student portals using Nuxt.js, TypeScript, and NestJS microservices.",
          },
          {
            icon: <Server className="w-4 h-4 text-blue-500" />,
            text: "Engineered scalable REST APIs, optimized backend queries, and implemented secure authentication pipelines.",
          },
          {
            icon: <Zap className="w-4 h-4 text-sky-500" />,
            text: "Enhanced performance and Core Web Vitals across Sala's digital education guidance ecosystem.",
          },
        ]}
      />
    ),
    url: "https://sala.co",
    image: "/sala-tech-logo-1024x1024.png",
  },
  {
    position: "Backend Developer & RAG Engineer Intern",
    company: "Paragon International University",
    dates: "Nov 2025 ~ Present",
    technologies: [
      {
        name: "Laravel",
        icon: <SiLaravel className="w-3 h-3" />,
        color: "bg-red-600 text-white",
      },
      {
        name: "RAG & AI",
        icon: <Bot className="w-3 h-3" />,
        color: "bg-violet-600 text-white",
      },
      {
        name: "PHP",
        icon: <SiPhp className="w-3 h-3" />,
        color: "bg-indigo-600 text-white",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-3 h-3" />,
        color: "bg-orange-600 text-white",
      },
      {
        name: "REST APIs",
        icon: <TbApi className="w-3 h-3" />,
        color: "bg-green-600 text-white",
      },
      {
        name: "Database",
        icon: <Database className="w-3 h-3" />,
        color: "bg-blue-600 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Bot className="w-4 h-4 text-violet-500" />,
            text: "Engineered Retrieval-Augmented Generation (RAG) pipelines using Neuron AI (PHP) on Paragon IU's ERP system for intelligent information retrieval.",
          },
          {
            icon: <Server className="w-4 h-4 text-red-500" />,
            text: "Specialized in Laravel backend development, building and maintaining robust APIs for university internal systems.",
          },
          {
            icon: <Database className="w-4 h-4 text-orange-500" />,
            text: "Managed databases, query optimization, and implemented server-side logic to support university applications.",
          },
          {
            icon: <Shield className="w-4 h-4 text-green-500" />,
            text: "Ensured high data integrity, secure student-facing APIs, and role-based access control.",
          },
        ]}
      />
    ),
    url: "https://paragoniu.edu.kh",
    image: "/paragon.jpg",
  },
  {
    position: "Project Management (Tech & Operations)",
    company: "Global SDGs & Leadership Center (UNITAR Singapore)",
    dates: "Jan 2026 ~ Present",
    technologies: [
      {
        name: "Project Mgmt",
        icon: <Layers className="w-3 h-3" />,
        color: "bg-indigo-600 text-white",
      },
      {
        name: "Java",
        icon: <Code className="w-3 h-3" />,
        color: "bg-red-600 text-white",
      },
      {
        name: "Meta & Social",
        icon: <SiFacebook className="w-3 h-3" />,
        color: "bg-blue-700 text-white",
      },
      {
        name: "Design",
        icon: <Palette className="w-3 h-3" />,
        color: "bg-pink-600 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Sparkles className="w-4 h-4 text-amber-500" />,
            text: "Spearheaded tech operations for global youth initiatives including the AIGC for Future Challenge (co-hosted with ITU & DEC40).",
          },
          {
            icon: <Calendar className="w-4 h-4 text-orange-500" />,
            text: "Managed cross-border digital campaigns, event information sessions, and international delegate submissions.",
          },
          {
            icon: <Users className="w-4 h-4 text-blue-500" />,
            text: "Coordinated digital workflows with partner institutions across Singapore, Beijing, and Geneva.",
          },
        ]}
      />
    ),
    url: "https://ungyldc.org",
    image: "/gsldc_logo_new.png",
  },
  {
    position: "Founder & Full-Stack Developer",
    company: "CamboConnect",
    dates: "Feb 2025 ~ Present",
    technologies: [
      {
        name: "Next.js 14",
        icon: <SiNextdotjs className="w-3 h-3" />,
        color: "bg-black text-white",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-3 h-3" />,
        color: "bg-blue-600 text-white",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-3 h-3" />,
        color: "bg-cyan-500 text-white",
      },
      {
        name: "Zustand",
        icon: <Zap className="w-3 h-3" />,
        color: "bg-orange-500 text-white",
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma className="w-3 h-3" />,
        color: "bg-indigo-600 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Globe className="w-4 h-4 text-blue-500" />,
            text: "Founded and engineered a centralized platform for youth opportunities across Cambodia (hackathons, competitions, internships).",
          },
          {
            icon: <Zap className="w-4 h-4 text-yellow-500" />,
            text: "Built responsive, SEO-optimized UI with Next.js 14 App Router and Zustand for lightweight state management.",
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Implemented real-time notification streams, opportunity tracking, and administrative analytics dashboards.",
          },
          {
            icon: <Shield className="w-4 h-4 text-emerald-500" />,
            text: "Integrated PostgreSQL and Prisma ORM for type-safe data access with high reliability.",
          },
        ]}
      />
    ),
    url: "https://camboconnect.vercel.app",
    image: "/cambo.png",
  },
  {
    position: "Webapp & Tech Dev Executive Intern",
    company: "Origins Studios",
    dates: "Aug 2025 ~ Oct 2025",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-3 h-3" />,
        color: "bg-black text-white",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-3 h-3" />,
        color: "bg-blue-600 text-white",
      },
      {
        name: "Python",
        icon: <SiPython className="w-3 h-3" />,
        color: "bg-yellow-600 text-white",
      },
      {
        name: "Arduino",
        icon: <SiArduino className="w-3 h-3" />,
        color: "bg-teal-600 text-white",
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="w-3 h-3" />,
        color: "bg-indigo-600 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Code className="w-4 h-4 text-blue-500" />,
            text: "Architected, developed, and deployed internal workflow systems and client websites using Next.js.",
          },
          {
            icon: <Cpu className="w-4 h-4 text-emerald-500" />,
            text: "Engineered a wireless RC car powered by Python & Arduino with gaming steering wheel control and live FPV camera streaming.",
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Integrated Cloudflare R2 object storage for asset pipelines and structured databases via Prisma ORM.",
          },
          {
            icon: <Users className="w-4 h-4 text-pink-500" />,
            text: "Delivered production-ready web features under high performance and security benchmarks.",
          },
        ]}
      />
    ),
    url: "",
    image: "/origins_certificate.jpg",
  },
  {
    position: "Marketing Executive",
    company: "OSG Youth Alliance",
    dates: "Jan 2026 ~ Present",
    technologies: [
      {
        name: "Social & Meta",
        icon: <SiFacebook className="w-3 h-3" />,
        color: "bg-blue-700 text-white",
      },
      {
        name: "Instagram",
        icon: <SiInstagram className="w-3 h-3" />,
        color: "bg-pink-600 text-white",
      },
      {
        name: "Photoshop",
        icon: <TbPaint className="w-3 h-3" />,
        color: "bg-blue-600 text-white",
      },
      {
        name: "WordPress",
        icon: <SiWordpress className="w-3 h-3" />,
        color: "bg-blue-700 text-white",
      },
      {
        name: "Canva & Design",
        icon: <Palette className="w-3 h-3" />,
        color: "bg-sky-500 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Megaphone className="w-4 h-4 text-red-500" />,
            text: "Designed marketing strategies for youth programs (Startathon, leadership development, sustainability challenges).",
          },
          {
            icon: <Calendar className="w-4 h-4 text-orange-500" />,
            text: "Managed the digital marketing calendar, branding guidelines, and multimedia asset production.",
          },
          {
            icon: <LineChart className="w-4 h-4 text-emerald-500" />,
            text: "Monitored campaign analytics and engagement to boost youth participation and community reach.",
          },
        ]}
      />
    ),
    url: "https://www.osgyouthalliance.org/",
    image: "/osg-youth-alliance.png",
  },

  {
    position: "Frontend Developer Intern",
    company: "CodeForCambodia",
    dates: "Nov 2024 ~ Feb 2025",
    technologies: [
      {
        name: "React",
        icon: <SiReact className="w-3 h-3" />,
        color: "bg-blue-500 text-white",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-3 h-3" />,
        color: "bg-cyan-500 text-white",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-3 h-3" />,
        color: "bg-yellow-500 text-black",
      },
      {
        name: "Git",
        icon: <SiGit className="w-3 h-3" />,
        color: "bg-red-500 text-white",
      },
      {
        name: "REST APIs",
        icon: <TbApi className="w-3 h-3" />,
        color: "bg-green-600 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <Palette className="w-4 h-4 text-blue-500" />,
            text: "Built responsive and animated user interfaces using React.js and Tailwind CSS.",
          },
          {
            icon: <Code className="w-4 h-4 text-green-500" />,
            text: "Collaborated across Git feature branches to ship new features and improve client web performance.",
          },
          {
            icon: <Server className="w-4 h-4 text-indigo-500" />,
            text: "Integrated dynamic REST APIs and optimized state handling across user-facing pages.",
          },
        ]}
      />
    ),
    image: "/cfc.png",
    url: "https://codeforcambodia.com",
  },
  {
    position: "Ecommerce Website Developer",
    company: "Soriya Pearl",
    dates: "May 2024 ~ Present",
    technologies: [
      {
        name: "WordPress",
        icon: <SiWordpress className="w-3 h-3" />,
        color: "bg-blue-700 text-white",
      },
      {
        name: "WooCommerce",
        icon: <SiWoo className="w-3 h-3" />,
        color: "bg-purple-600 text-white",
      },
      {
        name: "Elementor",
        icon: <SiElementor className="w-3 h-3" />,
        color: "bg-pink-500 text-white",
      },
      {
        name: "PHP",
        icon: <SiPhp className="w-3 h-3" />,
        color: "bg-indigo-600 text-white",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-3 h-3" />,
        color: "bg-orange-600 text-white",
      },
    ],
    description: (
      <BulletPointCycle
        points={[
          {
            icon: <ShoppingCart className="w-4 h-4 text-blue-500" />,
            text: "Developed a complete e-commerce solution with WooCommerce for fine jewelry and pearl retail.",
          },
          {
            icon: <Shield className="w-4 h-4 text-green-500" />,
            text: "Integrated secure payment gateways, optimized checkout flow, and custom catalog filtering.",
          },
        ]}
      />
    ),
    image: "/soriyapearl.png",
    url: "https://soriyapearl.com/",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {experienceEntries.map((entry, index) => {
          const getExperienceImage = (position: string, image?: string) => {
            if (image) return image;
            if (
              position.includes("Full-Stack") ||
              position.includes("Developer")
            ) {
              return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop";
            }
            return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1920&auto=format&fit=crop";
          };

          const isGSLDC = entry.company.includes(
            "Global SDGs & Leadership Center",
          );
          const showFullLogo =
            entry.company === "OSG Youth Alliance" ||
            entry.company === "SALATECH PTE LTD" ||
            isGSLDC;

          return (
            <div key={index}>
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
                  {entry.url && (
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
                  )}

                  <CardCurtain className="bg-zinc-50" />
                </CardCurtainRevealBody>

                <CardCurtainRevealFooter
                  className={`mt-auto h-64 relative p-0 overflow-hidden rounded-b-xl ${showFullLogo ? "bg-white" : ""}`}
                >
                  <Image
                    alt={entry.position}
                    className={
                      isGSLDC
                        ? "absolute inset-0 h-full w-full object-contain object-center p-2 scale-110 rounded-b-xl"
                        : showFullLogo
                          ? "absolute inset-0 h-full w-full object-contain object-center p-5 rounded-b-xl"
                          : "absolute left-0 top-0 w-full h-full object-cover object-top rounded-b-xl"
                    }
                    src={getExperienceImage(entry.position, entry.image)}
                    width={400}
                    height={256}
                  />
                </CardCurtainRevealFooter>
              </CardCurtainReveal>
            </div>
          );
        })}
      </div>

      {/* See All Projects Link */}
      <div className="mt-12 text-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
        >
          See All Projects & Highlights
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
}
