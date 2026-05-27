import { useState } from "react";
import { cn } from "@/lib/utils";

export const OrbitWidget = () => {
  const [hoveredOrbit, setHoveredOrbit] = useState(null);

  const satelliteSpecs = [
    { id: "leo", name: "Low Earth Orbit [LEO]", dist: 75, speed: "12s", label: "Debris Level: DENSE", size: 6 },
    { id: "meo", name: "Medium Earth Orbit [MEO]", dist: 125, speed: "20s", label: "Debris Level: MODERATE", size: 8 },
    { id: "geo", name: "Geostationary Orbit [GEO]", dist: 175, speed: "32s", label: "Debris Level: STABLE", size: 10 }
  ];

  return (
    <div className="w-full max-w-[400px] h-[400px] flex items-center justify-center relative overflow-hidden select-none z-10">
      {/* SVG Viewport */}
      <svg
        className="w-full h-full text-foreground/20 dark:text-foreground/10"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Core Center Pulsing HUD Planet */}
        <g transform="translate(200, 200)">
          {/* Outer glowing shield rings */}
          <circle
            r="38"
            className="fill-none stroke-current opacity-30 animate-pulse"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle
            r="30"
            className="fill-none stroke-current opacity-50"
            strokeWidth="1"
          />
          <circle
            r="25"
            className="fill-primary/20 dark:fill-primary/10 stroke-primary/40 animate-pulse"
            strokeWidth="2"
          />
          {/* Inner core dot */}
          <circle
            r="6"
            className="fill-primary animate-ping"
          />
          <circle
            r="4"
            className="fill-foreground"
          />
        </g>

        {/* Orbit paths */}
        {satelliteSpecs.map((orbit) => (
          <g key={orbit.id} transform="translate(200, 200)">
            {/* Interactive invisible thicker circle for easy hovering */}
            <circle
              r={orbit.dist}
              className="fill-none stroke-transparent cursor-pointer"
              strokeWidth="24"
              onMouseEnter={() => setHoveredOrbit(orbit.id)}
              onMouseLeave={() => setHoveredOrbit(null)}
            />
            {/* Dotted target path line */}
            <circle
              r={orbit.dist}
              className={cn(
                "fill-none transition-all duration-300 pointer-events-none",
                hoveredOrbit === orbit.id
                  ? "stroke-primary opacity-80"
                  : "stroke-current opacity-25"
              )}
              strokeWidth={hoveredOrbit === orbit.id ? "2" : "1"}
              strokeDasharray={orbit.id === "meo" ? "6 6" : orbit.id === "leo" ? "3 3" : "8 4"}
            />

            {/* Rotating satellite node */}
            <g
              className="animate-spin pointer-events-none"
              style={{
                animationDuration: orbit.speed,
                animationTimingFunction: "linear",
                transformOrigin: "center"
              }}
            >
              {/* Pulsing ring behind the satellite dot */}
              <circle
                cx={orbit.dist}
                cy="0"
                r={orbit.size + 4}
                className={cn(
                  "fill-none transition-all duration-300",
                  hoveredOrbit === orbit.id ? "stroke-primary/40 animate-ping" : "stroke-transparent"
                )}
                strokeWidth="1.5"
              />
              {/* Satellite dot */}
              <circle
                cx={orbit.dist}
                cy="0"
                r={orbit.size / 2}
                className={cn(
                  "transition-all duration-300",
                  hoveredOrbit === orbit.id ? "fill-primary" : "fill-foreground"
                )}
              />
            </g>
          </g>
        ))}
      </svg>

      {/* Floating HUD info panel reacting to the hovered orbit */}
      <div
        className={cn(
          "absolute bottom-4 left-1/2 transform -translate-x-1/2",
          "glass-card px-4 py-2.5 rounded-md border border-border/80 w-[240px] text-left transition-all duration-300 ease-in-out font-mono text-[10px] tracking-tight",
          hoveredOrbit ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
      >
        {satelliteSpecs.map((orbit) => (
          <div
            key={orbit.id}
            className={cn(
              "space-y-1 transition-all duration-300",
              hoveredOrbit === orbit.id ? "block opacity-100" : "hidden opacity-0"
            )}
          >
            <div className="font-bold text-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {orbit.name}
            </div>
            <div className="text-muted-foreground">{orbit.label}</div>
            <div className="text-muted-foreground flex justify-between">
              <span>Velocity: 7.8 km/s</span>
              <span>Orb: #{orbit.dist}px</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
