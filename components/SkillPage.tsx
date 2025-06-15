"use client";

import React from "react";
import {
  BrainCircuit,
  Database,
  LayoutTemplate,
  Rocket,
  Wrench,
  Group,
  Lightbulb,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"; // Make sure this path is correct

// Converted skills data for the timeline
const timelineData = [
  {
    id: 1,
    title: "Professional Skills",
    date: "Core",
    content:
      "Foundation of my development approach, focusing on collaboration and quality.",
    category: "Soft Skills",
    icon: BrainCircuit,
    relatedIds: [2, 3, 4, 5, 6, 7],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Problem Solving",
    date: "Foundational",
    content: "Creative and analytical problem-solving.",
    category: "Soft Skills",
    icon: Lightbulb,
    relatedIds: [1],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Team Collaboration",
    date: "Foundational",
    content: "Effective communication and teamwork.",
    category: "Soft Skills",
    icon: Group,
    relatedIds: [1],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Frontend Development",
    date: "Specialization",
    content:
      "Building responsive and intuitive user interfaces. Key technologies include React, Next.js, and Tailwind CSS.",
    category: "Technical",
    icon: LayoutTemplate,
    relatedIds: [1, 5, 6],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Backend Development",
    date: "Specialization",
    content:
      "Creating robust server-side applications and APIs with Node.js and Express.",
    category: "Technical",
    icon: Database,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 6,
    title: "Development Tools",
    date: "Efficiency",
    content:
      "Utilizing Git, VS Code, and other tools to streamline the development process.",
    category: "Technical",
    icon: Wrench,
    relatedIds: [4, 5, 7],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 7,
    title: "Deployment & Testing",
    date: "Delivery",
    content:
      "Ensuring application quality and deployment with Vercel and React Testing Library.",
    category: "Technical",
    icon: Rocket,
    relatedIds: [6],
    status: "pending" as const,
    energy: 60,
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dynamic overview of my technical and professional abilities.
          </p>
        </div>

        {/* Radial Orbital Timeline */}
        <div className="w-full h-[600px] md:h-[800px] flex items-center justify-center">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
