// src/app/page.tsx
import { HeroSlider } from "../../components/hero/HeroSlider";
import IntroSection from "../../components/home/IntroSection";
import { ServicesSection } from "../../components/home/ServicesSection";
import { ProjectsSection } from "../../components/home/ProjectsSection";
import { TeamSection } from "../../components/home/TeamSection";
import { LikesStatsSection } from "../../components/home/LikesStatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <LikesStatsSection />
    </>
  );
}
