"use client";
import AppLayout from "@/components/layout/AppLayout";
import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
    </AppLayout>
  );
}
