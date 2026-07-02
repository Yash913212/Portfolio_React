import { useState } from "react";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, PenTool, Database } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { skills, skillCategories } from "@/lib/config";

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
    <AnimatedSection id="skills" className="py-28 px-4 relative overflow-hidden bg-secondary/10 border-y border-border/40">
      <div className="container mx-auto max-w-5xl relative z-10">

        <div className="flex flex-col items-center gap-6 mb-16 text-center">
          <div className="space-y-4 max-w-xl mx-auto flex flex-col items-center">
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center gap-1.5 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEM_BLUEPRINTS // STACK
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none text-center">
              Systems & <span className="text-shimmer font-black">Competencies</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center mx-auto max-w-md">
              A comprehensive view of active engineering layers, performance bounds, and resource efficiencies.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 border border-border/80 bg-background/50 backdrop-blur-md p-1 rounded-md justify-center">
            {skillCategories.map((category, key) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "glass-card p-6 sm:p-8 rounded-md border border-border/85 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between opacity-0 group text-center relative overflow-hidden",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${key * 0.05}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/2.5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/60 pb-4 mb-4 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="p-2.5 rounded bg-secondary border border-border/80 text-muted-foreground group-hover:text-primary transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
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

              <div className="space-y-3 font-mono text-[10px] tracking-tight">

                <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                  <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-[10px] font-bold">
                    {skill.stats.metric1}
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-[10px] font-bold">
                    {skill.stats.metric2}
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-[10px] font-bold">
                    {skill.stats.metric3}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-10%] left-[30%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </AnimatedSection>
  );
};
