// src/components/projects-section.tsx
"use client"; // Mark as Client Component for Framer Motion

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Lucide React icons
import AppLayout from "@/components/layout/AppLayout";
import Image from "next/image";
// Technology Icons
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiSocketdotio,
  SiMui,
  SiSpotify,
  SiYoutube,
  SiFfmpeg,
  SiVite,
  SiEslint,
  SiPrisma,
  SiGreensock,
  SiCloudflare,
  SiSupabase,
  SiApple,
} from "react-icons/si";
import { TbApi, TbCloudRain, TbBrush, TbPaint } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

export default function ProjectsSection() {
  const [fullscreenImage, setFullscreenImage] = useState<{
    images: string[];
    currentIndex: number;
  } | null>(null);

  // Disable scroll when fullscreen is open
  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [fullscreenImage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!fullscreenImage) return;

      if (e.key === "Escape") {
        setFullscreenImage(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [fullscreenImage]);

  const handlePrevImage = () => {
    setFullscreenImage((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex:
          prev.currentIndex === 0
            ? prev.images.length - 1
            : prev.currentIndex - 1,
      };
    });
  };

  const handleNextImage = () => {
    setFullscreenImage((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length,
      };
    });
  };

  const openFullscreen = (images: string[], startIndex: number = 0) => {
    setFullscreenImage({ images, currentIndex: startIndex });
  };

  // Function to get technology icon
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Next.js 14": (
        <SiNextdotjs className="w-3 h-3 text-black dark:text-white" />
      ),
      "Next.js": <SiNextdotjs className="w-3 h-3 text-black dark:text-white" />,
      React: <SiReact className="w-3 h-3 text-blue-500" />,
      "React 18": <SiReact className="w-3 h-3 text-blue-500" />,
      "React 19": <SiReact className="w-3 h-3 text-blue-500" />,
      TypeScript: <SiTypescript className="w-3 h-3 text-blue-600" />,
      TailwindCSS: <SiTailwindcss className="w-3 h-3 text-cyan-500" />,
      "Tailwind CSS": <SiTailwindcss className="w-3 h-3 text-cyan-500" />,
      JavaScript: <SiJavascript className="w-3 h-3 text-yellow-500" />,
      HTML: <SiHtml5 className="w-3 h-3 text-orange-600" />,
      CSS: <SiCss className="w-3 h-3 text-blue-600" />,
      "Prisma ORM": <SiPrisma className="w-3 h-3 text-indigo-600" />,
      PostgreSQL: <SiPostgresql className="w-3 h-3 text-blue-700" />,
      "NextAuth.js": <MdSecurity className="w-3 h-3 text-green-600" />,
      Recharts: <TbApi className="w-3 h-3 text-purple-500" />,
      MongoDB: <SiMongodb className="w-3 h-3 text-green-600" />,
      "Express.js": <SiExpress className="w-3 h-3 text-gray-600" />,
      "Node.js": <SiNodedotjs className="w-3 h-3 text-green-500" />,
      "Socket.io": <SiSocketdotio className="w-3 h-3 text-gray-800" />,
      JWT: <MdSecurity className="w-3 h-3 text-red-500" />,
      "Weather API": <TbCloudRain className="w-3 h-3 text-blue-400" />,
      "Material-UI": <SiMui className="w-3 h-3 text-blue-500" />,
      "Spotify API": <SiSpotify className="w-3 h-3 text-green-500" />,
      "YouTube API": <SiYoutube className="w-3 h-3 text-red-500" />,
      FFmpeg: <SiFfmpeg className="w-3 h-3 text-green-600" />,
      GSAP: <SiGreensock className="w-3 h-3 text-green-500" />,
      Vite: <SiVite className="w-3 h-3 text-purple-500" />,
      ESLint: <SiEslint className="w-3 h-3 text-indigo-600" />,
      "Cloudflare R2": <SiCloudflare className="w-3 h-3 text-orange-500" />,
      Cloudflare: <SiCloudflare className="w-3 h-3 text-orange-500" />,
      Supabase: <SiSupabase className="w-3 h-3 text-emerald-500" />,
      "iOS / App Store": <SiApple className="w-3 h-3 text-black dark:text-white" />,
      "Backend Architecture": <TbApi className="w-3 h-3 text-blue-500" />,
      "Scale & High Availability": <TbApi className="w-3 h-3 text-purple-500" />,
      Prisma: <SiPrisma className="w-3 h-3 text-indigo-600" />,
      "Adobe Photoshop": <TbPaint className="w-3 h-3 text-[#31A8FF]" />,
      "Adobe Illustrator": <TbBrush className="w-3 h-3 text-[#FF9A00]" />,
      "AI & LLMs": <TbApi className="w-3 h-3 text-amber-500" />,
      Python: <TbApi className="w-3 h-3 text-yellow-500" />,
      OpenCV: <TbApi className="w-3 h-3 text-emerald-500" />,
      Arduino: <TbApi className="w-3 h-3 text-teal-500" />,
      IoT: <TbApi className="w-3 h-3 text-cyan-500" />,
    };

    return iconMap[tech] || <TbApi className="w-3 h-3 text-gray-500" />;
  };

  // Image Carousel Component
  const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Change image every 1 second

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div
        className="relative w-full h-64 overflow-hidden cursor-pointer group rounded-t-xl"
        onClick={() => openFullscreen(images, currentIndex)}
      >
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            width={600}
            height={400}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
            }}
          />
        ))}
        {/* Click to expand overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
            Click to expand
          </span>
        </div>
      </div>
    );
  };

  const projects = [
    {
      name: "Amnan Preahthor (អំណានព្រះធម៌)",
      badge: "LIVE APP • 5K+ DOWNLOADS",
      description:
        "Official Khmer Dharma audio streaming mobile application (ស្ដាប់ព្រះធម៌ដោយគ្មានការរំខាន) initiated and organized by Samdech Preah Oddom Vongsa Kou Sopheap, generously sponsored by Lok Vann Hong and Lok Srey Imphan Vanndy. Served as Backend Developer architecting high-performance Supabase database, authentication, and Cloudflare infrastructure to reliably serve audio streams and scale to 5,000+ active downloads across iOS.",
      technologies: [
        "Backend Architecture",
        "Supabase",
        "Cloudflare",
        "Scale & High Availability",
        "iOS / App Store",
      ],
      imageUrl: "/amnan_preahthor_1.jpg",
      images: [
        "/amnan_preahthor_1.jpg",
        "/amnan_preahthor_2.jpg",
        "/amnan_preahthor_3.jpg",
      ],
      liveUrl: "https://apps.apple.com/kh/app/amnan-preahthor/id6767218899",
    },
    {
      name: "Bac.ai",
      badge: "TOP 3 WINNER",
      description:
        "Cambodia's first Khmer-language AI math assistant for Grade 10–12 students aligned with the official MOEYS curriculum. Uses AI to break down complex mathematical formulas into intuitive, step-by-step Khmer explanations. Awarded Top 3 out of 60 teams at the Khmer Enterprise UniPreneur Program Season 3.",
      technologies: [
        "Next.js",
        "TypeScript",
        "AI & LLMs",
        "Tailwind CSS",
        "PostgreSQL",
        "REST APIs",
      ],
      imageUrl: "/top3.jpeg",
      liveUrl:
        "https://www.paragoniu.edu.kh/paragon-international-university-students-secure-top-3-spot-at-unipreneur-program-season-3-with-ai-powered-education-solution/",
    },
    {
      name: "Agentic Engineering & Workflow (Sala.co)",
      badge: "AI & AUTOMATION",
      description:
        "Researched, architected, and built autonomous agentic workflows at SALATECH (sala.co) to revolutionize software development velocity across the company. Engineered end-to-end automated pipelines combining Pi agent (pi.dev), Claude Code, and OpenAI Codex to autonomously execute coding tasks from ticket specification directly to tested pull request (PR).",
      technologies: [
        "Agentic AI",
        "Pi Agent",
        "Claude Code",
        "Codex",
        "TypeScript",
        "CI/CD Automation",
      ],
      imageUrl: "/agentic_workflow_1.jpg",
      images: ["/agentic_workflow_1.jpg", "/agentic_workflow_2.jpg"],
      liveUrl: "https://sala.co",
    },
    {
      name: "CamboConnect",
      badge: "FEATURED",
      description:
        "A comprehensive platform for finding and participating in opportunities across Cambodia, from startups and hackathons to incubation programs, competitions, and internships. Features user authentication, opportunity management, community engagement, messaging system, real-time notifications, and admin analytics dashboard.",
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Prisma ORM",
        "PostgreSQL",
        "NextAuth.js",
        "Recharts",
      ],
      imageUrl: "/cambo2.png",
      liveUrl: "https://camboconnect.vercel.app",
    },
    {
      name: "Smart Occupancy & IoT Energy System (Jubbly)",
      badge: "BEST PRESENTATION",
      description:
        "An intelligent room occupancy and electricity optimization system developed for the ASEAN-China-India Youth Leadership Summit (ACIYLS 2024). Utilizes computer vision and IoT sensors to monitor room capacity in real time and automatically modulate lighting and climate control. Awarded Best Presentation Skills and Top 4 overall.",
      technologies: ["Python", "OpenCV", "IoT", "React", "Tailwind CSS"],
      imageUrl: "/award.jpg",
      images: ["/award.jpg", "/aciyls.jpg"],
      liveUrl: "",
    },
    {
      name: "Origins RC Car & FPV System",
      badge: "IOT ROBOTICS",
      description:
        "Engineered a fully remote-controlled RC vehicle powered by Python and Arduino for Origins Studios. Integrated real-time First-Person-View (FPV) video streaming and wireless telemetry control mapped to a physical gaming steering wheel controller.",
      technologies: ["Python", "Arduino", "IoT", "Next.js", "WebSockets"],
      imageUrl: "/origins_rc_car.jpg",
      liveUrl: "",
    },
    {
      name: "Cheang Bak Van Hong",
      badge: "FEATURED",
      description:
        "A luxury and modern semi-e-commerce platform for a prestigious jewelry shop in Cambodia. Architected as a Turborepo monorepo with Next.js frontend and NestJS backend. Features elegant product showcases, administrative inventory control panel, responsive checkout flows, and integrated Telegram checkout notifications for seamless order processing.",
      technologies: [
        "Monorepo",
        "NestJS",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
      ],
      imageUrl: "/cbvh_screenshot.png",
      liveUrl: "https://cbvh.com.kh/",
    },
    {
      name: "Origins Internal System",
      description:
        "A comprehensive internal management system built for Origins Studios to streamline team workflows. Completed from August to November 2024. Features task management, staff assignments, feedback tracking, todo lists, and progress updates. Integrated with Cloudflare R2 for secure file storage and asset management.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "Cloudflare R2",
        "TailwindCSS",
      ],
      imageUrl: "/originsSytem.png",
      liveUrl: "",
    },
    {
      name: "Cambodia SME Alliance",
      description:
        "Official platform for Cambodia SME Alliance connecting small and medium enterprises across Cambodia. Features business directories, networking initiatives, member event showcases, resource sharing, and modern responsive digital experience tailored for business leaders and entrepreneurs.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      imageUrl: "/cambodiasmealliance.png",
      liveUrl: "https://www.cambodiasmealliance.com/",
    },
    {
      name: "Echtventure",
      description:
        "A professional coaching website for Keith Tay, an ICF Certified Professional Coach & HRD Corp Accredited Trainer based in Malaysia. Over 2,500 individuals impacted through coaching, workshops, and leadership programs. Features people-centered programs and transformative coaching services.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      imageUrl: "/ecthventure.png",
      liveUrl: "https://www.echtventure.com",
    },

    {
      name: "Poster Design Collection",
      description:
        "A collection of professional posters and graphics created using Adobe Photoshop and Illustrator. Designed for various projects including events, marketing campaigns, and social media content. Features creative compositions, color grading, and visual storytelling.",
      technologies: ["Adobe Photoshop", "Adobe Illustrator"],
      imageUrl: "/poster/thumbnail.avif",
      images: [
        "/poster/481827823_122098939118790284_6376039529041113714_n.jpg",
        "/poster/495576178_122124023438790284_7210057441666196237_n.jpg",
        "/poster/514743688_122134315286790284_2338813963048858815_n.jpg",
        "/poster/520569159_122137517108790284_8427795646377014543_n.jpg",
      ],
      liveUrl: "",
    },
    {
      name: "TheMove",
      description:
        "An interactive racing game website featuring smooth animations, video transitions, and modern UI design. Includes dynamic video transitions with GSAP, interactive bento grid layout with tilt effects, and responsive design with mobile optimization.",
      technologies: [
        "React 19",
        "TypeScript",
        "GSAP",
        "Tailwind CSS",
        "Vite",
        "ESLint",
      ],
      imageUrl: "/move.png",
      liveUrl: "https://the-move-pink.vercel.app",
      githubUrl: "https://github.com/SongUylong/TheMove",
    },
  ];

  // Framer Motion variants for staggered animation of project cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Check if device is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AppLayout>
      <section id="projects" className="py-6 sm:py-12 w-full overflow-x-hidden">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center text-neutral-800 dark:text-neutral-200">
          Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0"
          variants={isMobile ? undefined : containerVariants}
          initial={isMobile ? { opacity: 1 } : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          animate={isMobile ? { opacity: 1 } : undefined}
          viewport={{ once: true, amount: isMobile ? 0 : 0.2 }} // Animate when 20% of the container is in view
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={isMobile ? undefined : itemVariants}
              initial={isMobile ? { opacity: 1, y: 0 } : undefined}
              animate={isMobile ? { opacity: 1, y: 0 } : undefined}
              className="w-full"
            >
              <Card
                className={`shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-auto sm:h-[600px] sm:min-h-[500px] flex flex-col relative bg-white dark:bg-[#1E3E62] ${
                  project.name === "Bac.ai"
                    ? "border-2 border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20"
                    : project.name === "CamboConnect"
                      ? "border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20"
                      : ""
                }`}
              >
                {/* Featured Badge */}
                {project.badge && (
                  <div className="absolute top-3 right-3 z-10">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 ${
                        project.badge.includes("WINNER")
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                          : project.badge.includes("FEATURED")
                            ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black"
                            : "bg-gradient-to-r from-indigo-500 to-blue-600 text-white"
                      }`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.badge}
                    </div>
                  </div>
                )}
                {project.images && project.images.length > 0 ? (
                  <ImageCarousel images={project.images} />
                ) : (
                  <div
                    className="relative w-full h-64 overflow-hidden cursor-pointer group rounded-t-xl"
                    onClick={() => openFullscreen([project.imageUrl], 0)}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/600x400/E0E0E0/333333?text=Image+Error";
                      }}
                    />
                    {/* Click to expand overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                        Click to expand
                      </span>
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle
                    className={`text-lg font-semibold text-neutral-800 dark:text-neutral-200 ${
                      project.name === "CamboConnect"
                        ? "!text-amber-800 dark:!text-amber-200"
                        : ""
                    }`}
                  >
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-5 overflow-hidden">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="flex items-center gap-1 bg-gray-100 text-black border border-gray-200 hover:bg-gray-200"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 mt-auto">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" /> GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Fullscreen Image Modal */}
        {fullscreenImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setFullscreenImage(null)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Previous Button */}
              {fullscreenImage.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
              )}

              {/* Image Container */}
              <div
                className="relative max-w-7xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={fullscreenImage.images[fullscreenImage.currentIndex]}
                  alt={`Fullscreen image ${fullscreenImage.currentIndex + 1}`}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[90vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/1920x1080/E0E0E0/333333?text=Image+Error";
                  }}
                />

                {/* Image Counter */}
                {fullscreenImage.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {fullscreenImage.currentIndex + 1} /{" "}
                    {fullscreenImage.images.length}
                  </div>
                )}
              </div>

              {/* Next Button */}
              {fullscreenImage.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </AppLayout>
  );
}
