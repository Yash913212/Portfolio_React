import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { TechStackMarquee } from "../components/TechStackMarquee";
import { ExperienceSection } from "../components/ExperienceSection";

import { ProjectsSection } from "../components/ProjectsSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HUDPreloader } from "../components/HUDPreloader";
import { ScrollToTop } from "../components/ScrollToTop";
import { CursorGlow } from "../components/CursorGlow";
import { navItems, personal, site } from "@/lib/config";

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(() => {
    return sessionStorage.getItem("hasLoadedPortfolioHUD") === "true";
  });
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isLoaded]);

  return (
    <>
      <Helmet>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={site.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:image" content={site.image} />
        <link rel="canonical" href={site.url} />
      </Helmet>

      {!isLoaded && <HUDPreloader onComplete={() => setIsLoaded(true)} />}

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {isLoaded && <ScrollToTop />}
        
        <StarBackground />
        <CursorGlow />
        <Navbar activeSection={activeSection} />

        <main>
          <HeroSection />
          <TechStackMarquee />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />

          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};
