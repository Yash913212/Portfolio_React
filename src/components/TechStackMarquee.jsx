import { motion } from "framer-motion";
import { techStack } from "@/lib/config";

const MarqueeRow = ({ items, direction = "left", baseDelay = 0 }) => {
  return (
    <div className="relative flex overflow-hidden mask-image-linear-gradient-to-r from-transparent via-black to-transparent [--mask:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask:var(--mask)]">
      <motion.div
        className="flex gap-16 flex-shrink-0"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: baseDelay,
        }}
      >
        {[...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-md border border-border/50 bg-secondary/20 backdrop-blur-sm whitespace-nowrap group hover:border-primary/40 transition-colors duration-300"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-sm font-mono font-bold text-muted-foreground group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TechStackMarquee = () => {
  const mid = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, mid);
  const row2 = techStack.slice(mid);

  return (
    <section className="py-20 px-4 relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center flex flex-col items-center justify-center space-y-4 mb-12">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            TECH_STACK // TOOLCHAIN
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tighter leading-none text-center">
            Technologies I <span className="text-shimmer font-black">Work With</span>
          </h2>
        </div>

        <div className="space-y-6">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" baseDelay={0.5} />
        </div>
      </div>
    </section>
  );
};
