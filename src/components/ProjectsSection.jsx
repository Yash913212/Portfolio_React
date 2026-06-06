import { ArrowRight, ExternalLink, Github, Layers, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Multi-tenant SaaS Platform",
    description: "A comprehensive multi-tenant SaaS platform featuring tenant isolation, secure role-based access control, and scalable system architecture.",
    image: "/projects/project1.webp",
    tags: ["React.js", "Node.js", "MongoDB", "Auth0"],
    demoUrl: "https://github.com/Yash913212/Multi-tenant-saas",
    githubUrl: "https://github.com/Yash913212/Multi-tenant-saas",
    metrics: {
      load: "50,000 req/sec",
      sla: "99.99%",
      database: "PostgreSQL Isolation"
    }
  },
  {
    id: 2,
    title: "Oryx Data Analytics Dashboard",
    description: "A high-performance real-time data processing and analytics tool equipped with interactive dashboards and advanced D3 visualizations.",
    image: "/projects/project2.webp",
    tags: ["React", "TypeScript", "D3.js", "TailwindCSS"],
    demoUrl: "https://github.com/Yash913212/Oryx",
    githubUrl: "https://github.com/Yash913212/Oryx",
    metrics: {
      load: "1.2 GB/s streams",
      sla: "99.95%",
      database: "D3 Canvas Engine"
    }
  },
  {
    id: 3,
    title: "Async Payment Gateway",
    description: "A robust, PCI-compliant asynchronous payment gateway offering webhook streams, secure tokens, and detailed transaction logs.",
    image: "/projects/project3.webp",
    tags: ["Node.js", "Express", "Stripe API", "Redis"],
    demoUrl: "https://github.com/Yash913212/Async-payment-gateway",
    githubUrl: "https://github.com/Yash913212/Async-payment-gateway",
    metrics: {
      load: "Redis BullMQ Queue",
      sla: "99.999%",
      database: "Latency: <12ms"
    }
  },
  {
    id: 4,
    title: "VitaNova Auth & Onboarding Core",
    description: "A secure multi-account authentication, onboarding, and profile orchestration engine built with post-login setup redirection, robust theme synchronizations, and sleek micro-animations.",
    image: "/projects/project4.webp",
    tags: ["React", "Supabase Auth", "Zustand", "TailwindCSS"],
    demoUrl: "https://vitanova-one.vercel.app/login",
    githubUrl: "https://github.com/Yash913212/Vitanova",
    metrics: {
      load: "250,000+ Active Auth Events",
      sla: "99.999% Session Resiliency",
      database: "Post-Login Profile Flow"
    }
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-28 px-4 relative overflow-hidden border-b border-border/40"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center flex flex-col items-center justify-center space-y-4 mb-20"
        >
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            SYSTEM_INTEGRATIONS // CASE_STUDIES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none text-center">
            Featured <span className="text-shimmer font-black">Architectures</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed text-center mx-auto">
            A showcase of production-ready distributed architectures mapped across real-world scaling, security bounds, and transaction safety.
          </p>
        </motion.div>

        {/* Alternating Asymmetrical Projects Stack */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                )}
                initial={{ opacity: 0, y: 32, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                
                {/* Image Showcase Container Column (Col-Span 7) */}
                <div
                  className={cn(
                    "lg:col-span-7 group glass-card rounded-md overflow-hidden border border-border/80 flex flex-col justify-between relative min-h-[300px]",
                    isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-sm text-[9px] uppercase font-mono font-bold tracking-widest bg-background/80 text-foreground border border-border">
                    ACTIVE DEPLOYMENT
                  </div>

                  {/* Tiny SVG trajectory decorative HUD in bottom left of image */}
                  <div className="absolute bottom-4 left-4 z-10 font-mono text-[9px] text-white/50 tracking-wider">
                    SYS_PING: SUCCESS // LATENCY_TEST
                  </div>

                  {/* Actions floated right bottom inside the image */}
                  <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-black/60 hover:bg-black/90 backdrop-blur text-white transition-colors border border-white/10"
                        aria-label={`View Live Demo for ${project.title}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-black/60 hover:bg-black/90 backdrop-blur text-white transition-colors border border-white/10"
                      aria-label={`View GitHub Repository for ${project.title}`}
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>

                {/* Case Study Details Column (Col-Span 5) */}
                <div
                  className={cn(
                    "lg:col-span-5 flex flex-col justify-between items-center p-6 sm:p-8 rounded-md border border-border/80 bg-secondary/10 text-center w-full",
                    isEven ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="space-y-6 w-full flex flex-col items-center">
                    <div className="space-y-2 flex flex-col items-center">
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[9px] font-mono font-bold border rounded bg-background text-foreground/80 border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground pt-2 text-center">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {project.description}
                    </p>

                    {/* Hardened System Metrics Specification Table */}
                    <div className="border border-border/80 rounded-sm bg-background/50 p-4 font-mono text-[10px] space-y-2.5 w-full">
                      <div className="text-[9px] text-muted-foreground uppercase tracking-widest border-b border-border/80 pb-1.5 font-bold flex items-center justify-center gap-1.5 w-full">
                        <Layers size={10} className="text-primary" />
                        Architectural Specs
                      </div>
                      <div className="flex justify-between w-full">
                        <span className="text-muted-foreground uppercase">LOAD CAPACITY:</span>
                        <span className="font-bold text-foreground flex items-center gap-1">
                          <Zap size={10} className="text-amber-500 animate-pulse" />
                          {project.metrics.load}
                        </span>
                      </div>
                      <div className="flex justify-between w-full">
                        <span className="text-muted-foreground uppercase">SYSTEM SLA:</span>
                        <span className="font-bold text-emerald-500 flex items-center gap-1">
                          <ShieldCheck size={10} />
                          {project.metrics.sla}
                        </span>
                      </div>
                      <div className="flex justify-between w-full">
                        <span className="text-muted-foreground uppercase">CORE ENGINE:</span>
                        <span className="font-bold text-foreground">{project.metrics.database}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-center border-t border-border/60 mt-6 w-full">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 mx-auto"
                    >
                      Browse Repo Source <ArrowRight size={10} />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="text-center mt-24">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Yash913212"
          >
            Explore Complete Stack <Github size={16} />
          </a>
        </div>

      </div>

      {/* Decorative center radial glow */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </motion.section>
  );
};
