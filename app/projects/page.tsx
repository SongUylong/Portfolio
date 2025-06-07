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

export default function ProjectsSection() {
  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product listings, shopping cart, and order processing.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "PostgreSQL",
      ],
      imageUrl:
        "[https://placehold.co/600x400/E0E0E0/333333?text=E-commerce](https://placehold.co/600x400/E0E0E0/333333?text=E-commerce)",
      liveUrl: "#", // Replace with your live project URL
      githubUrl: "#", // Replace with your GitHub repo URL
    },
    {
      name: "AI Chatbot Interface",
      description:
        "An interactive web interface for an AI chatbot, integrating with a custom LLM API for dynamic conversations.",
      technologies: ["React", "TypeScript", "Shadcn UI", "Gemini API"],
      imageUrl:
        "[https://placehold.co/600x400/E0E0E0/333333?text=AI+Chatbot](https://placehold.co/600x400/E0E0E0/333333?text=AI+Chatbot)",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and user roles.",
      technologies: ["Next.js", "Firebase", "Zustand", "CSS Modules"],
      imageUrl:
        "[https://placehold.co/600x400/E0E0E0/333333?text=Task+Manager](https://placehold.co/600x400/E0E0E0/333333?text=Task+Manager)",
      liveUrl: "#",
      githubUrl: "#",
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AppLayout>
      <section id="projects" className="py-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-foreground">
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
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                  // Fallback for image loading errors
                  onError={(e) => {
                    e.currentTarget.src =
                      "[https://placehold.co/600x400/E0E0E0/333333?text=Image+Error](https://placehold.co/600x400/E0E0E0/333333?text=Image+Error)";
                  }}
                />
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
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
