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
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"; // Lucide React icons
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
  SiCss3,
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
  SiAdobephotoshop,
  SiAdobeillustrator
} from "react-icons/si";
import { TbApi, TbCloudRain } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

export default function ProjectsSection() {
  const [fullscreenImage, setFullscreenImage] = useState<{images: string[], currentIndex: number} | null>(null);

  // Disable scroll when fullscreen is open
  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [fullscreenImage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!fullscreenImage) return;
      
      if (e.key === 'Escape') {
        setFullscreenImage(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [fullscreenImage]);

  const handlePrevImage = () => {
    setFullscreenImage(prev => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
      };
    });
  };

  const handleNextImage = () => {
    setFullscreenImage(prev => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length
      };
    });
  };

  const openFullscreen = (images: string[], startIndex: number = 0) => {
    setFullscreenImage({ images, currentIndex: startIndex });
  };

  // Function to get technology icon
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Next.js 14": <SiNextdotjs className="w-3 h-3 text-black dark:text-white" />,
      "Next.js": <SiNextdotjs className="w-3 h-3 text-black dark:text-white" />,
      "React": <SiReact className="w-3 h-3 text-blue-500" />,
      "React 18": <SiReact className="w-3 h-3 text-blue-500" />,
      "React 19": <SiReact className="w-3 h-3 text-blue-500" />,
      "TypeScript": <SiTypescript className="w-3 h-3 text-blue-600" />,
      "TailwindCSS": <SiTailwindcss className="w-3 h-3 text-cyan-500" />,
      "Tailwind CSS": <SiTailwindcss className="w-3 h-3 text-cyan-500" />,
      "JavaScript": <SiJavascript className="w-3 h-3 text-yellow-500" />,
      "HTML": <SiHtml5 className="w-3 h-3 text-orange-600" />,
      "CSS": <SiCss3 className="w-3 h-3 text-blue-600" />,
      "Prisma ORM": <SiPrisma className="w-3 h-3 text-indigo-600" />,
      "PostgreSQL": <SiPostgresql className="w-3 h-3 text-blue-700" />,
      "NextAuth.js": <MdSecurity className="w-3 h-3 text-green-600" />,
      "Recharts": <TbApi className="w-3 h-3 text-purple-500" />,
      "MongoDB": <SiMongodb className="w-3 h-3 text-green-600" />,
      "Express.js": <SiExpress className="w-3 h-3 text-gray-600" />,
      "Node.js": <SiNodedotjs className="w-3 h-3 text-green-500" />,
      "Socket.io": <SiSocketdotio className="w-3 h-3 text-gray-800" />,
      "JWT": <MdSecurity className="w-3 h-3 text-red-500" />,
      "Weather API": <TbCloudRain className="w-3 h-3 text-blue-400" />,
      "Material-UI": <SiMui className="w-3 h-3 text-blue-500" />,
      "Spotify API": <SiSpotify className="w-3 h-3 text-green-500" />,
      "YouTube API": <SiYoutube className="w-3 h-3 text-red-500" />,
      "FFmpeg": <SiFfmpeg className="w-3 h-3 text-green-600" />,
      "GSAP": <SiGreensock className="w-3 h-3 text-green-500" />,
      "Vite": <SiVite className="w-3 h-3 text-purple-500" />,
      "ESLint": <SiEslint className="w-3 h-3 text-indigo-600" />,
      "Cloudflare R2": <SiCloudflare className="w-3 h-3 text-orange-500" />,
      "Prisma": <SiPrisma className="w-3 h-3 text-indigo-600" />,
      "Adobe Photoshop": <SiAdobephotoshop className="w-3 h-3 text-[#31A8FF]" />,
      "Adobe Illustrator": <SiAdobeillustrator className="w-3 h-3 text-[#FF9A00]" />,
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
      name: "CamboConnect",
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
        "Recharts"
      ],
      imageUrl: "/cambo2.png",
      liveUrl: "https://camboconnect.com",
    },
    {
      name: "Cheang Bak Van Hong",
      description:
        "A luxury and modern semi-e-commerce website for a prestigious jewelry shop in Cambodia. Features elegant product showcase, admin management panel, modern responsive layout, easy customer checkout flow, and integrated Telegram checkout system that sends detailed product information directly to the shop for seamless order processing.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS"
      ],
      imageUrl: "/cbvh.png",
      images: [
        "/cbvh.png",
        "/cbvh2.png",
        "/cbvh3.png",
      ],
      liveUrl: "https://cbvh.vercel.app",
    },
    {
      name: "BNI E-Card",
      description:
        "An electronic card platform for BNI (Business Network International) that allows members to view and manage digital business cards. Features member directory, electronic card display, easy contact sharing, and professional networking tools. Streamlines member connections and enhances business relationship management within the BNI community.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS"
      ],
      imageUrl: "/ecard-bni.png",
      liveUrl: "https://e-card-sigma.vercel.app/groups/blue",
    },
    {
      name: "Echtventure",
      description:
        "A professional coaching website for Keith Tay, an ICF Certified Professional Coach & HRD Corp Accredited Trainer based in Malaysia. Over 2,500 individuals impacted through coaching, workshops, and leadership programs. Features people-centered programs and transformative coaching services.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS"
      ],
      imageUrl: "/ecthventure.png",
      liveUrl: "https://www.echtventure.com",
    },
    {
      name: "Poster Design Collection",
      description:
        "A collection of professional posters and graphics created using Adobe Photoshop and Illustrator. Designed for various projects including events, marketing campaigns, and social media content. Features creative compositions, color grading, and visual storytelling.",
      technologies: [
        "Adobe Photoshop",
        "Adobe Illustrator"
      ],
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
      name: "Origins Internal System",
      description:
        "A comprehensive internal management system built for Origins Studios to streamline team workflows. Completed from August to November 2024. Features task management, staff assignments, feedback tracking, todo lists, and progress updates. Integrated with Cloudflare R2 for secure file storage and asset management.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "Cloudflare R2",
        "TailwindCSS"
      ],
      imageUrl: "/originsSytem.png",
      liveUrl: "",
    },
    {
      name: "TheMove",
      description:
        "A stunning, interactive racing game website featuring smooth animations, video transitions, and modern UI design. Includes dynamic video transitions with GSAP, interactive bento grid layout with tilt effects, and responsive design with mobile optimization.",
      technologies: [
        "React 19",
        "TypeScript",
        "GSAP",
        "Tailwind CSS",
        "Vite",
        "ESLint"
      ],
      imageUrl: "/move.png",
      liveUrl: "https://the-move-pink.vercel.app",
      githubUrl: "https://github.com/SongUylong/TheMove",
    },
    // {
    //   name: "ChatApp ",
    //   description:
    //     "A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js). Features user authentication, real-time messaging, group chats, and responsive design for seamless communication across devices.",
    //   technologies: [
    //     "MongoDB",
    //     "Express.js", 
    //     "React",
    //     "Node.js",
    //     "Socket.io",
    //     "JWT"
    //   ],
    //   imageUrl:
    //     "/chat.png",
    //   liveUrl: "https://chatapp-mern-iupl.onrender.com", // Replace with your live project URL
    //   githubUrl: "https://github.com/LongisthebestAgain/ChatApp---MERN", // Replace with your GitHub repo URL
    // },
    // {
    //   name: "SpotiDown",
    //   description:
    //     "A full-stack web application that allows users to download Spotify playlists and individual tracks as high-quality MP3 files. Features real-time progress tracking, smart YouTube search, and modern UI with dark theme.",
    //   technologies: [
    //     "React 18",
    //     "TypeScript", 
    //     "Node.js",
    //     "Express.js",
    //     "Spotify API",
    //     "FFmpeg"
    //   ],
    //   imageUrl: "/spotidown.png",
    //   liveUrl: "https://spoti-down-iota.vercel.app",
    //   githubUrl: "https://github.com/SongUylong/SpotiDown",
    // },
    // {
    //   name: "Weather App",
    //   description:
    //     "A responsive weather application that fetches real-time weather data from an API, displaying current conditions and forecasts with a clean user interface.",
    //   technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    //   imageUrl:"/weather.png",
    //   liveUrl: "https://longisthebestagain.github.io/Weather-App/",
    //   githubUrl: "https://github.com/LongisthebestAgain/Weather-App",
    // },
    // {
    //   name: "ChemoType",
    //   description:
    //     "A typing speed test application inspired by MonkeyType. Built with vanilla JavaScript to practice fundamental web development skills and DOM manipulation. Features WPM calculation, accuracy tracking, and clean minimalist design.",
    //   technologies: ["JavaScript", "HTML", "CSS"],
    //   imageUrl: "/chemotype.png",
    //   liveUrl: "https://longisthebestagain.github.io/Typing-Test/",
    //   githubUrl: "https://github.com/LongisthebestAgain/Typing-Test",
    // },
    // Add more projects as needed
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
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
              <Card className={`shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-auto sm:h-[600px] sm:min-h-[500px] flex flex-col relative bg-white dark:bg-[#1E3E62] ${
                project.name === "CamboConnect" 
                  ? "border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20" 
                  : ""
              }`}>
                {/* Featured Badge for CamboConnect */}
                {project.name === "CamboConnect" && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      FEATURED
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
                  <CardTitle className={`text-lg font-semibold text-neutral-800 dark:text-neutral-200 ${
                    project.name === "CamboConnect" 
                      ? "!text-amber-800 dark:!text-amber-200" 
                      : ""
                  }`}>
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-5 overflow-hidden">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="flex items-center gap-1 bg-gray-100 text-black border border-gray-200 hover:bg-gray-200">
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
              <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={fullscreenImage.images[fullscreenImage.currentIndex]}
                  alt={`Fullscreen image ${fullscreenImage.currentIndex + 1}`}
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[90vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/1920x1080/E0E0E0/333333?text=Image+Error";
                  }}
                />
                
                {/* Image Counter */}
                {fullscreenImage.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {fullscreenImage.currentIndex + 1} / {fullscreenImage.images.length}
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
