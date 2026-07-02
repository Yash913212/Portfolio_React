import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experience, education } from "@/lib/config";
import { AnimatedSection } from "./AnimatedSection";

const TimelineItem = ({ item, index, type }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-4 md:gap-8 group`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="glass-card p-6 rounded-md border border-border/80 hover:border-primary/40 transition-all duration-300 relative">
          <div className={`flex items-center gap-2 mb-3 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-center`}>
            <span className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded border ${
              type === "work" ? "bg-primary/10 text-primary border-primary/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
            }`}>
              {item.type || item.degree}
            </span>
          </div>
          <div className={`flex items-center gap-2 text-muted-foreground text-xs font-mono mb-2 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-center`}>
            <Calendar size={12} />
            <span>{item.period}</span>
          </div>
          <h3 className="font-bold text-lg tracking-tight text-foreground">
            {type === "work" ? item.role : item.degree}
          </h3>
          <div className={`flex items-center gap-2 text-sm text-muted-foreground mt-1 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-center`}>
            <span className="font-semibold text-primary/80">{type === "work" ? item.company : item.school}</span>
            <span className="text-[10px] font-mono">//</span>
            <span className="flex items-center gap-1">
              <MapPin size={10} />
              {item.location}
            </span>
          </div>
          {type === "work" && (
            <ul className={`mt-4 space-y-2 ${isLeft ? "md:text-right" : "md:text-left"} text-center`}>
              {item.achievements.map((ach, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-primary mt-1 flex-shrink-0">▹</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          )}
          {type === "education" && (
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {item.details}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center md:w-12 relative">
        <div className="w-10 h-10 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center z-10 group-hover:border-primary transition-colors duration-300">
          {type === "work" ? <Briefcase size={16} className="text-primary" /> : <GraduationCap size={16} className="text-emerald-500" />}
        </div>
        {index < (type === "work" ? experience.length - 1 : education.length - 1) && (
          <div className="absolute top-10 w-0.5 h-full bg-border hidden md:block" />
        )}
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <AnimatedSection id="experience" className="py-28 px-4 relative overflow-hidden bg-secondary/5 border-y border-border/40">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center flex flex-col items-center justify-center space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            SYSTEM_HISTORY // TIMELINE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none text-center">
            Experience & <span className="text-shimmer font-black">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed text-center mx-auto">
            A chronological overview of my professional journey and academic background.
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} type="work" />
          ))}
          {education.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} type="education" />
          ))}
        </div>
      </div>

      <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </AnimatedSection>
  );
};
