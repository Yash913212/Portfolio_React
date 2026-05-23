import { useEffect, useState } from "react";
import { ArrowDown, Code2 } from "lucide-react";
import { OrbitWidget } from "./OrbitWidget";

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
    <span className="font-mono font-black text-foreground tracking-tighter">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const HeroSection = () => {
  const [telemetryActive, setTelemetryActive] = useState(false);

  useEffect(() => {
    // Trigger count up animation slightly after render
    const timer = setTimeout(() => {
      setTelemetryActive(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden border-b border-border/40"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* Narrative HUD Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col items-start">
            {/* Telemetry Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-mono font-bold text-emerald-500 tracking-wider uppercase opacity-0 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>ORBITAL TELEMETRY SYSTEM ACTIVE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-none max-w-xl">
              <span className="block text-muted-foreground opacity-0 animate-fade-in text-2xl sm:text-3xl font-semibold tracking-wide uppercase">
                SYSTEM INTERFACE
              </span>
              <span className="block mt-2 text-shimmer text-glow font-black opacity-0 animate-fade-in-delay-1">
                Yaswanth Amjuri
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed opacity-0 animate-fade-in-delay-2">
              A responsive human-agent digital workspace mapping advanced client-server frameworks, creative interface mechanics, and premium micro-interactions.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="cosmic-button text-xs sm:text-sm">
                Initiate Systems
              </a>
              <a href="#contact" className="secondary-button text-xs sm:text-sm">
                Ping Core Agent
              </a>
            </div>

            {/* Odometer HUD statistics rows */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-border/80 pt-6 w-full opacity-0 animate-fade-in-delay-4">
              <div className="space-y-1 text-left">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                  Telemetry commits
                </div>
                <div className="text-xl sm:text-3xl font-black">
                  {telemetryActive ? <TelemetryCounter endValue="48290" suffix="+" /> : "0"}
                </div>
              </div>

              <div className="space-y-1 text-left">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                  Tech Chronology
                </div>
                <div className="text-xl sm:text-3xl font-black">
                  {telemetryActive ? <TelemetryCounter endValue="2026" duration={1200} /> : "2018"}
                </div>
              </div>

              <div className="space-y-1 text-left">
                <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                  Modules Shipped
                </div>
                <div className="text-xl sm:text-3xl font-black">
                  {telemetryActive ? <TelemetryCounter endValue="24" suffix="+" duration={1000} /> : "0"}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Orbits Column */}
          <div className="lg:col-span-5 flex justify-center items-center opacity-0 animate-fade-in-delay-2">
            <OrbitWidget />
          </div>
        </div>
      </div>

      {/* Decorative radial tech background glow */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[130px] pointer-events-none z-0" />

      {/* Explore chevron */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10 pointer-events-none">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-muted-foreground mb-1">
          Explore Telemetry
        </span>
        <ArrowDown className="h-4 w-4 text-foreground/50" />
      </div>
    </section>
  );
};
