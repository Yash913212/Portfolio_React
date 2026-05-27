import { Briefcase, Code, User, ChevronRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Asymmetrical 12-column layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Command Panel (Dossier Specs) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 text-center flex flex-col items-center justify-center">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                SYSTEM_METADATA // CORE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-none mx-auto">
                About <span className="text-shimmer font-black">Me</span>
              </h2>
              <h3 className="text-xl font-bold tracking-tight text-foreground/90 mx-auto max-w-sm">
                Passionate Web Architect & Creative Developer
              </h3>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mx-auto max-w-sm">
              <p>
                With deep expertise in designing and engineering high-quality web products, I specialize in crafting accessible, responsive, and ultra-performant React applications.
              </p>
              <p>
                I love turning intricate technical challenges into smooth, intuitive user experiences. Guided by Vercel's philosophy, I strive for visual excellence, speed, and seamless interactivity in every codebase.
              </p>
            </div>

            {/* Architectural Telemetry stats grid */}
            <div className="border border-border/80 rounded-md bg-secondary/20 p-5 font-mono text-[11px] space-y-3.5 shadow-sm w-full max-w-sm mx-auto">
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest border-b border-border/85 pb-2 font-bold text-center">
                Telemetry Dossier
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground uppercase">Response Performance:</span>
                <span className="font-bold text-foreground">&lt;85ms avg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground uppercase">Distributed Target:</span>
                <span className="font-bold text-foreground">10M+ Global Req</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground uppercase">Production Builds:</span>
                <span className="font-bold text-foreground">140+ Deployed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground uppercase">Fault-Tolerance (SLA):</span>
                <span className="font-bold text-emerald-500">99.999% uptime</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="#contact" className="cosmic-button text-xs sm:text-sm">
                Get In Touch
              </a>
              <a href="/cv.pdf" download="Yaswanth_Amjuri_CV.pdf" className="secondary-button text-xs sm:text-sm">
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Focus blueprints timeline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Blueprint Indicator Card 1 */}
            <div className="glass-card p-8 rounded-md border border-border/80 hover:border-primary/40 card-hover transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/2.5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-center gap-5">
                <div className="p-3.5 rounded-md bg-secondary text-foreground group-hover:text-primary transition-colors border border-border/60">
                  <Code className="h-5 w-5" />
                </div>
                <div className="space-y-2 flex-grow flex flex-col items-center w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 w-full">
                    <h4 className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                      Web Development
                    </h4>
                    <span className="text-[9px] font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Active Node
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Building robust, scalable applications with React.js, Node.js, and state-of-the-art tooling.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 pt-2 cursor-pointer">
                    Inspect Stack Architecture <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Blueprint Indicator Card 2 */}
            <div className="glass-card p-8 rounded-md border border-border/80 hover:border-primary/40 card-hover transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/2.5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-center gap-5">
                <div className="p-3.5 rounded-md bg-secondary text-foreground group-hover:text-primary transition-colors border border-border/60">
                  <User className="h-5 w-5" />
                </div>
                <div className="space-y-2 flex-grow flex flex-col items-center w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 w-full">
                    <h4 className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                      UI/UX & Creative Engineering
                    </h4>
                    <span className="text-[9px] font-mono uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">
                      Vector Lab
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Designing layout hierarchies and high-fidelity fluid motion profiles for delightful responsive interactions.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 pt-2 cursor-pointer">
                    Inspect Motion Vectors <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Blueprint Indicator Card 3 */}
            <div className="glass-card p-8 rounded-md border border-border/80 hover:border-primary/40 card-hover transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/2.5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-center gap-5">
                <div className="p-3.5 rounded-md bg-secondary text-foreground group-hover:text-primary transition-colors border border-border/60">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="space-y-2 flex-grow flex flex-col items-center w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 w-full">
                    <h4 className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                      Technical Leadership
                    </h4>
                    <span className="text-[9px] font-mono uppercase tracking-widest bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/20">
                      SLA Guard
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    Managing project lifecycles from concept to production-ready deployment with extreme focus on code quality.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 pt-2 cursor-pointer">
                    Inspect System Blueprints <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
