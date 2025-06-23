// src/components/projects-section.tsx
"use client"; // Mark as Client Component for Framer Motion

import { motion } from "framer-motion";
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
import { Github, ExternalLink } from "lucide-react"; // Lucide React icons
import AppLayout from "@/components/layout/AppLayout";
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
  SiGreensock
} from "react-icons/si";
import { TbApi, TbCloudRain } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";

export default function ProjectsSection() {
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
    };
    
    return iconMap[tech] || <TbApi className="w-3 h-3 text-gray-500" />;
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
    {
      name: "ChatApp ",
      description:
        "A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js). Features user authentication, real-time messaging, group chats, and responsive design for seamless communication across devices.",
      technologies: [
        "MongoDB",
        "Express.js", 
        "React",
        "Node.js",
        "Socket.io",
        "JWT"
      ],
      imageUrl:
        "/chat.png",
      liveUrl: "https://chatapp-mern-iupl.onrender.com", // Replace with your live project URL
      githubUrl: "https://github.com/LongisthebestAgain/ChatApp---MERN", // Replace with your GitHub repo URL
    },
    {
      name: "SpotiDown",
      description:
        "A full-stack web application that allows users to download Spotify playlists and individual tracks as high-quality MP3 files. Features real-time progress tracking, smart YouTube search, and modern UI with dark theme.",
      technologies: [
        "React 18",
        "TypeScript", 
        "Node.js",
        "Express.js",
        "Spotify API",
        "FFmpeg"
      ],
      imageUrl: "/spotidown.png",
      liveUrl: "https://spoti-down-iota.vercel.app",
      githubUrl: "https://github.com/SongUylong/SpotiDown",
    },
    {
      name: "Weather App",
      description:
        "A responsive weather application that fetches real-time weather data from an API, displaying current conditions and forecasts with a clean user interface.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      imageUrl:"/weather.png",
      liveUrl: "https://longisthebestagain.github.io/Weather-App/",
      githubUrl: "https://github.com/LongisthebestAgain/Weather-App",
    },
    {
      name: "ChemoType",
      description:
        "A typing speed test application inspired by MonkeyType. Built with vanilla JavaScript to practice fundamental web development skills and DOM manipulation. Features WPM calculation, accuracy tracking, and clean minimalist design.",
      technologies: ["JavaScript", "HTML", "CSS"],
      imageUrl: "/chemotype.png",
      liveUrl: "https://longisthebestagain.github.io/Typing-Test/",
      githubUrl: "https://github.com/LongisthebestAgain/Typing-Test",
    },
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

  return (
    <AppLayout>
      <section id="projects" className="py-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-neutral-800 dark:text-neutral-200">
          Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the container is in view
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-[600px] flex flex-col relative ${
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
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                  // Fallback for image loading errors
                  onError={(e) => {
                    e.currentTarget.src =
                      "[https://placehold.co/600x400/E0E0E0/333333?text=Image+Error](https://placehold.co/600x400/E0E0E0/333333?text=Image+Error)";
                  }}
                />
                <CardHeader>
                  <CardTitle className={`text-lg font-semibold ${
                    project.name === "CamboConnect" 
                      ? "text-amber-800 dark:text-amber-200" 
                      : "text-neutral-800 dark:text-neutral-200"
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
      </section>
    </AppLayout>
  );
}
