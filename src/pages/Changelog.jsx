import { Link } from "react-router-dom";
import { ArrowLeft, GitCommit, ShieldCheck, Layers, GitPullRequest, Code } from "lucide-react";

const changelogData = [
  {
    version: "v4.2.0",
    date: "2026-05-23",
    title: "Overhauled Skills & Asymmetric Systems Competencies",
    author: "Yaswanth Amjuri",
    hash: "f1b192c",
    category: "feat",
    details: "Rebuilt the standard linear percentage metric bars into an advanced triple-tier matrix mapping Concurrency, Compute Efficiency, and SLA Fault-Tolerance rates under tabbed blueprinted stack groupings."
  },
  {
    version: "v4.1.2",
    date: "2026-05-23",
    title: "Integrated VitaNova Auth & Onboarding Core",
    author: "Yaswanth Amjuri",
    hash: "e5a3c9b",
    category: "feat",
    details: "Integrated the multi-account auth redirection dashboard showcasing secure post-login onboarding streams, theme sync overrides, and modular session validation."
  },
  {
    version: "v4.0.0",
    date: "2026-05-22",
    title: "Designed Asymmetric Alternating Case Studies Grid",
    author: "Yaswanth Amjuri",
    hash: "d97b1a2",
    category: "refactor",
    details: "Overhauled simple project lists into an alternating 70/30 case-study display showing high-resolution active screenshots side-by-side with strict hardware and software specifications."
  },
  {
    version: "v3.8.5",
    date: "2026-05-21",
    title: "Programmed Real-Time SSL Handshake Terminal",
    author: "Yaswanth Amjuri",
    hash: "a49cb2e",
    category: "feat",
    details: "Engineered a custom secure log shell in green monospace typeface rendering simulated TLS 1.3 cryptographic handshakes, input focuses, and character byte arrays dynamically."
  }
];

export const Changelog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-mono px-4 py-24 flex flex-col justify-between">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Background glow glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 space-y-12">
        
        {/* Navigation back and header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-border/60 pb-8 text-left">
          <div className="space-y-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-2 font-bold uppercase tracking-wider"
            >
              <ArrowLeft size={12} /> BACK_TO_DOCK
            </Link>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-none">
              Engineering <span className="text-shimmer font-black">Changelog</span>
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              A comprehensive system update log mapping structural changes, optimizations, and integrations.
            </p>
          </div>
          
          <div className="flex gap-3 border border-border/80 bg-secondary/15 p-4 rounded-md text-[10px]">
            <div>
              <span className="text-muted-foreground uppercase block">LOG_SOURCE</span>
              <span className="font-bold text-foreground">REPOS//PORTFOLIO_CORE</span>
            </div>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-border/80 pl-6 sm:pl-8 space-y-12 text-left">
          
          {changelogData.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Commit bubble node on border-l line */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1 rounded-full bg-background border-2 border-border/80 group-hover:border-primary transition-colors duration-300">
                <GitCommit size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Card content container */}
              <div className="glass-card p-6 sm:p-8 rounded-md border border-border/80 hover:border-primary/40 transition-all duration-300 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-bold text-sm tracking-wide bg-primary/10 px-2 py-0.5 border border-primary/20 rounded">
                      {item.version}
                    </span>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 border border-border/80 bg-secondary/10 text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-muted-foreground font-mono text-[10px]">
                    {item.date} // {item.author}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.details}
                </p>

                {/* Technical meta footer */}
                <div className="border-t border-border/40 pt-4 flex flex-wrap justify-between items-center gap-3 text-[10px] text-muted-foreground font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-emerald-500" /> Commit Signed: SHA256//OK
                  </span>
                  <span className="bg-secondary/40 border border-border/80 px-2 py-0.5 rounded text-foreground font-bold">
                    commit::{item.hash}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Decorative radial blur */}
      <div className="absolute bottom-[-10%] left-[30%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </div>
  );
};
