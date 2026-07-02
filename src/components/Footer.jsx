import { personal } from "@/lib/config";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background/5 border-t border-border mt-20 relative z-10">
      <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 text-[10px] font-semibold text-emerald-500 tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>All systems operational</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#hero"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
        </div>
      </div>
    </footer>
  );
};
