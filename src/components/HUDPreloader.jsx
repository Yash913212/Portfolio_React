import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { personal, site } from "@/lib/config";

const logLines = [
  "INITIALIZING YASWANTH_OS COMMAND INTERFACE...",
  "ESTABLISHING TELEMETRY CONNECTION...",
  "BOOTING GRAPHICS & CSS RENDER ENGINES...",
  "CALCULATING ORBITAL TRAJECTORIES...",
  "RESOLVING PORTFOLIO DIRECTIVES...",
  "SYSTEM RENDER: 100% OPERATIONAL."
];

export const HUDPreloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLogs, setCurrentLogs] = useState([]);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    // Check if loaded in this session to bypass for quick refresh comfort (Optional but highly recommended)
    const hasLoaded = sessionStorage.getItem("hasLoadedPortfolioHUD");
    if (hasLoaded) {
      onComplete();
      return;
    }

    // Incremental progress loop
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 4) + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsWiping(true);
          sessionStorage.setItem("hasLoadedPortfolioHUD", "true");
          setTimeout(() => {
            onComplete();
          }, 800); // Wait for transition
        }, 600);
      }
      setProgress(currentProgress);
    }, 45);

    // Incremental logs display
    const logIntervals = [];
    logLines.forEach((line, index) => {
      const delay = index * 600;
      const timeoutId = setTimeout(() => {
        setCurrentLogs((prev) => [...prev, line]);
      }, delay);
      logIntervals.push(timeoutId);
    });

    return () => {
      clearInterval(progressInterval);
      logIntervals.forEach((id) => clearTimeout(id));
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black z-[9999] flex flex-col justify-between p-6 sm:p-12 font-mono text-xs sm:text-sm text-emerald-500 transition-all duration-700 ease-in-out select-none",
        isWiping ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      {/* HUD Header */}
      <div className="flex justify-between items-center border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold uppercase tracking-wider text-emerald-400">
            {personal.name.split(" ")[0]} OS {site.preloaderOsVersion}
          </span>
        </div>
        <div className="text-[10px] sm:text-xs text-emerald-500/60 uppercase tracking-widest hidden sm:block">
          LAT: {site.preloaderLat} | LON: {site.preloaderLon}
        </div>
      </div>

      {/* Center Console Content */}
      <div className="flex-grow flex flex-col md:flex-row items-stretch justify-center gap-12 my-8">
        {/* Typewriting Log Console */}
        <div className="flex-1 flex flex-col justify-start text-left bg-emerald-950/10 border border-emerald-500/10 p-6 rounded-md space-y-3 font-mono overflow-hidden max-h-[300px] sm:max-h-none">
          <div className="text-[10px] text-emerald-500/40 uppercase tracking-widest border-b border-emerald-500/10 pb-2 mb-2 font-bold">
            Telemetry Boot Logs
          </div>
          {currentLogs.map((log, index) => (
            <div key={index} className="flex items-start gap-2 animate-fade-in">
              <span className="text-emerald-500/40">&gt;</span>
              <span className="leading-relaxed font-semibold tracking-wide">
                {log}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-1">
            <span className="text-emerald-500/40 animate-pulse">&gt;</span>
            <span className="w-1.5 h-4 bg-emerald-500 animate-[blink_1s_infinite]" />
          </div>
        </div>

        {/* Big Percentage Telemetry Gauge */}
        <div className="flex-1 flex flex-col items-center justify-center border border-emerald-500/10 rounded-md p-8 bg-emerald-950/5 relative overflow-hidden">
          {/* Decorative radar circular mesh */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-emerald-500/5 flex items-center justify-center">
            <div className="w-[180px] h-[180px] rounded-full border border-emerald-500/5 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20 absolute top-0" />
            </div>
          </div>

          <div className="z-10 text-center space-y-2">
            <div className="text-[10px] text-emerald-500/40 uppercase tracking-widest font-bold">
              System Core Ready
            </div>
            <div className="text-6xl sm:text-8xl font-black font-mono tracking-tighter text-glow text-emerald-400">
              {progress}%
            </div>
            <div className="text-[10px] uppercase tracking-widest text-emerald-500/60 font-semibold">
              Boot sequence active
            </div>
          </div>
        </div>
      </div>

      {/* HUD Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-emerald-500/20 pt-4 text-[10px] sm:text-xs text-emerald-500/50 uppercase tracking-widest">
        <div>STATUS: PENDING CONNECTION SECURE</div>
        <div>&copy; {new Date().getFullYear()} {personal.name.split(" ")[0].toUpperCase()} PORTFOLIO INTERFACE</div>
      </div>
    </div>
  );
};
