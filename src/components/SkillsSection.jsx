import { useState } from "react";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, PenTool, Database } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend", stats: { scale: 75, efficiency: 70, robustness: 72 } },
  { name: "JavaScript", level: 70, category: "frontend", stats: { scale: 72, efficiency: 68, robustness: 70 } },
  { name: "React.js", level: 70, category: "frontend", stats: { scale: 74, efficiency: 66, robustness: 70 } },
  { name: "React Native", level: 62, category: "frontend", stats: { scale: 70, efficiency: 74, robustness: 72 } },
  { name: "Tailwind CSS", level: 75, category: "frontend", stats: { scale: 78, efficiency: 72, robustness: 68 } },

  // Backend
  { name: "Node.js", level: 70, category: "backend", stats: { scale: 78, efficiency: 70, robustness: 74 } },
  { name: "Express", level: 65, category: "backend", stats: { scale: 75, efficiency: 72, robustness: 68 } },
  { name: "MongoDB", level: 70, category: "backend", stats: { scale: 82, efficiency: 75, robustness: 80 } },

  // Tools
  { name: "Git / GitHub", level: 90, category: "tools", stats: { scale: 96, efficiency: 90, robustness: 95 } },
  { name: "Docker", level: 70, category: "tools", stats: { scale: 90, efficiency: 80, robustness: 88 } },
  { name: "VS Code", level: 95, category: "tools", stats: { scale: 95, efficiency: 92, robustness: 94 } },
];

const categories = ["all", "frontend", "backend", "tools"];

const getCategoryIcon = (category) => {
  switch (category) {
    case "frontend":
      return <Cpu size={16} />;
    case "backend":
      return <Database size={16} />;
    case "tools":
      return <Terminal size={16} />;
    default:
      return <PenTool size={16} />;
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden bg-secondary/10 border-y border-border/40">
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Asymmetrical title layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 text-left">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEM_BLUEPRINTS // STACK
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none">
              Systems & <span className="text-shimmer font-black">Competencies</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
              A comprehensive view of active engineering layers, performance bounds, and resource efficiencies.
            </p>
          </div>

          {/* Categories Tab selectors */}
          <div className="flex flex-wrap gap-1.5 border border-border/80 bg-background/50 backdrop-blur-md p-1 rounded-md">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-[10px] font-mono font-bold tracking-wider uppercase rounded transition-all duration-200 cursor-pointer active:scale-95",
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Competency Matrix Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="glass-card p-6 sm:p-8 rounded-md border border-border/85 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between opacity-0 animate-fade-in group text-left relative overflow-hidden"
              style={{ animationDelay: `${key * 0.05}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/2.5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              {/* Header: Competency name & Icon */}
              <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-secondary border border-border/80 text-muted-foreground group-hover:text-primary transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg tracking-tight text-foreground">
                      {skill.name}
                    </h3>
                    <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                      SYS_CLASS::{skill.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-foreground bg-secondary px-2.5 py-1 rounded border border-border/80">
                  REF::{skill.level}0
                </span>
              </div>

              {/* Advanced Technical Odometer Metrics */}
              <div className="space-y-3 font-mono text-[10px] tracking-tight">

                {/* Metric 1: Scale Factor */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>CONCURRENCY SCALE</span>
                    <span className="font-bold text-foreground">{skill.stats.scale}%</span>
                  </div>
                  <div className="flex gap-0.5 w-full bg-secondary h-1 rounded overflow-hidden">
                    <div
                      className="bg-foreground/80 group-hover:bg-primary h-full transition-all duration-1000 ease-out"
                      style={{ width: skill.stats.scale + "%" }}
                    />
                  </div>
                </div>

                {/* Metric 2: Efficiency */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>COMPUTE EFFICIENCY</span>
                    <span className="font-bold text-foreground">{skill.stats.efficiency}%</span>
                  </div>
                  <div className="flex gap-0.5 w-full bg-secondary h-1 rounded overflow-hidden">
                    <div
                      className="bg-foreground/80 group-hover:bg-primary h-full transition-all duration-1000 ease-out"
                      style={{ width: skill.stats.efficiency + "%" }}
                    />
                  </div>
                </div>

                {/* Metric 3: Robustness */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span>FAULT-TOLERANCE RATE</span>
                    <span className="font-bold text-foreground">{skill.stats.robustness}%</span>
                  </div>
                  <div className="flex gap-0.5 w-full bg-secondary h-1 rounded overflow-hidden">
                    <div
                      className="bg-foreground/80 group-hover:bg-primary h-full transition-all duration-1000 ease-out"
                      style={{ width: skill.stats.robustness + "%" }}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom blur element */}
      <div className="absolute bottom-[-10%] left-[30%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </section>
  );
};
