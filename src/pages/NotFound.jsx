import { ArrowLeft, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { personal } from "@/lib/config";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <StarBackground />
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="text-center max-w-lg mx-auto space-y-8">
          <div className="inline-flex p-4 rounded-full bg-secondary border border-border/80">
            <Code2 className="w-12 h-12 text-muted-foreground" />
          </div>

          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEM_ERROR // 404
            </span>
            <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tighter text-shimmer">
              404
            </h1>
            <p className="text-xl font-bold tracking-tight text-foreground/90">
              NODE_NOT_FOUND
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
              The requested endpoint does not exist in the system architecture.
              Redirecting to primary node.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/" className="cosmic-button text-xs sm:text-sm flex items-center gap-2">
              <ArrowLeft size={14} />
              Return to Home
            </Link>
            <a href={`mailto:${personal.email}`} className="secondary-button text-xs sm:text-sm">
              Report Issue
            </a>
          </div>

          <div className="border border-border/80 rounded-md bg-secondary/20 p-4 font-mono text-[10px] text-left max-w-xs mx-auto">
            <div className="text-muted-foreground mb-2">$ ping {personal.name.toLowerCase().replace(/\s+/g, "-")}.dev</div>
            <div className="text-red-500">Request timeout: Node unreachable</div>
            <div className="text-emerald-500 mt-1">$ traceroute --diagnostic</div>
            <div className="text-muted-foreground">1  *  *  *</div>
            <div className="text-muted-foreground">2  404_ERROR @ ROUTE_TABLE</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
