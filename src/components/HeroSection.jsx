import { useEffect, useState, useCallback } from "react";
import { ArrowDown, ChevronRight, MapPin } from "lucide-react";
import { OrbitWidget } from "./OrbitWidget";
import { personal } from "@/lib/config";

const TelemetryCounter = ({ endValue, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 12);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / 15));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return (
    <span className="font-mono font-black text-foreground tracking-tighter tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const TypeWriter = ({ texts, speed = 50, deleteSpeed = 30, pauseDuration = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      setDisplayedText(currentText.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayedText(currentText.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [texts, textIndex, charIndex, isDeleting, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span>
      {displayedText}
      <span className="inline-block w-0.5 h-5 ml-0.5 bg-primary animate-[blink_1s_infinite] align-middle" />
    </span>
  );
};

export const HeroSection = () => {
  const [telemetryActive, setTelemetryActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTelemetryActive(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden border-b border-border/40"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
          
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-mono font-bold text-emerald-500 tracking-wider uppercase opacity-0 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>ORBITAL TELEMETRY SYSTEM ACTIVE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-none max-w-xl">
              <span className="block text-muted-foreground opacity-0 animate-fade-in text-lg sm:text-xl font-semibold tracking-wide uppercase">
                SYSTEM INTERFACE
              </span>
              <span className="block mt-2 text-shimmer text-glow font-black opacity-0 animate-fade-in-delay-1">
                {personal.name}
              </span>
            </h1>

            <div className="h-8 sm:h-10 flex items-center opacity-0 animate-fade-in-delay-2">
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                <TypeWriter
                  texts={[
                    "Full-Stack Developer & UI Architect",
                    "React • Node.js • MongoDB Specialist",
                    "Building Scalable Distributed Systems",
                    "Open Source Contributor",
                  ]}
                />
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="cosmic-button text-xs sm:text-sm group inline-flex items-center gap-2">
                View My Work
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="secondary-button text-xs sm:text-sm">
                Get In Touch
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-t border-border/80 pt-6 w-full opacity-0 animate-fade-in-delay-4">
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm text-muted-foreground/90 font-mono tracking-wide bg-background/50 backdrop-blur-md px-5 py-3 rounded-xl border border-border/60 hover:border-primary/40 transition-colors">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </div>
                <span>Available for 2026/2027 Opportunities</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm text-muted-foreground/90 font-mono tracking-wide bg-background/50 backdrop-blur-md px-5 py-3 rounded-xl border border-border/60 hover:border-primary/40 transition-colors">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center opacity-0 animate-fade-in-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-150" />
              <OrbitWidget />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none z-0" />

    </section>
  );
};
