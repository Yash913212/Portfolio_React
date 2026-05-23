import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HUDPreloader } from "../components/HUDPreloader";

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Cinematic Boot Preloader */}
      <HUDPreloader onComplete={() => setIsLoaded(true)} />

      {/* Actual Portfolio Website (Renders after load/bypass) */}
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Floating Action Theme Switch */}
        <ThemeToggle />
        
        {/* Ambient nextjs grids and glows background */}
        <StarBackground />

        {/* Header Navbar */}
        <Navbar />

        {/* Page sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footnotes copyright operational status */}
        <Footer />
      </div>
    </>
  );
};
