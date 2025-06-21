"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Database, Shield, TrendingUp, Globe, Award, Trophy, Languages } from "lucide-react";
import Image from "next/image";

export function EducationSection() {
  return (
    <section id="education" className="py-12">
      <Timeline
        data={[
          {
            title: "2024 - Present",
            content: (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Bachelor of Management Information Systems
                    </p>
                    <a 
                      href="https://paragoniu.edu.kh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm font-normal hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                    >
                      Paragon International University
                    </a>
                  </div>
                  <Badge variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">
                    Currently Junior
                  </Badge>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <p>
                      Equipped with <em className="text-blue-600 dark:text-blue-400 font-medium">technical and business skills</em> to solve real-world problems with technology.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p>
                      Learning about <em className="text-green-600 dark:text-green-400 font-medium">data management</em>, <em className="text-purple-600 dark:text-purple-400 font-medium">software development</em>, <em className="text-orange-600 dark:text-orange-400 font-medium">networks</em>, and <em className="text-red-600 dark:text-red-400 font-medium">cybersecurity</em>.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 mt-0.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                    <p>
                      Gaining insight into <em className="text-indigo-600 dark:text-indigo-400 font-medium">business strategy</em> and <em className="text-teal-600 dark:text-teal-400 font-medium">decision-making</em>.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/music.jpg"
                    alt="University Education"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/paragon.jpg"
                    alt="Data Management"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "June 2023 - Dec 2023",
            content: (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold mb-1 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      Certified Web Developer
                    </p>
                    <a 
                      href="https://www.instinct.edu.kh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm font-normal hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                    >
                      Instinct Institute
                    </a>
                  </div>
                  <Badge variant="secondary" className="bg-green-500 hover:bg-green-600 text-white">
                    Graduated
                  </Badge>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <Code className="w-4 h-4 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p>
                      Learned to develop <em className="text-green-600 dark:text-green-400 font-medium">responsive web apps</em> with <em className="text-blue-600 dark:text-blue-400 font-medium">front-end</em> and <em className="text-purple-600 dark:text-purple-400 font-medium">back-end integration</em>.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 mt-0.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <p>
                      Using modern technologies: <em className="text-orange-600 dark:text-orange-400 font-medium">Express.js</em> and <em className="text-cyan-600 dark:text-cyan-400 font-medium">React.js</em>.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/instinct.jpg"
                    alt="Express.js Backend"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/instinct2.jpg"
                    alt="Full Stack Development"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "2017 - 2023",
            content: (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold mb-1 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      High School Diploma
                    </p>
                    <a 
                      href="https://westlineschool.edu.kh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm font-normal hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                    >
                      The Westline School
                    </a>
                  </div>
                  <Badge variant="secondary" className="bg-green-500 hover:bg-green-600 text-white">
                    Graduated
                  </Badge>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-4 h-4 mt-0.5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                    <p>
                      Achieved a score of <em className="text-yellow-600 dark:text-yellow-400 font-bold">99.5</em> and earned a <em className="text-green-600 dark:text-green-400 font-bold">Grade A</em>, ranking within the <em className="text-purple-600 dark:text-purple-400 font-bold">top 1%</em> on the <em className="text-blue-600 dark:text-blue-400 font-medium">national exam of Cambodia</em>.
                    </p>
                  </div>
                </div>
                <div className="mb-8 space-y-2">
                  <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                    <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span><em className="text-blue-600 dark:text-blue-400 font-medium">TOEFL ITP Score:</em> <strong>532</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                    <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span><em className="text-green-600 dark:text-green-400 font-medium">IELTS Score:</em> <strong>6</strong></span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/gradeA.jpg"
                    alt="High School Achievement"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="/graduate.jpeg"
                    alt="Graduation Success"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
}
