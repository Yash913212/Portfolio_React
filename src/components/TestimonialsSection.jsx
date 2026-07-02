import { Quote } from "lucide-react";
import { testimonials } from "@/lib/config";
import { AnimatedSection } from "./AnimatedSection";

export const TestimonialsSection = () => {
  return (
    <AnimatedSection id="testimonials" className="py-28 px-4 relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center flex flex-col items-center justify-center space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            PEER_REVIEWS // TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none text-center">
            What People <span className="text-shimmer font-black">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed text-center mx-auto">
            Feedback from colleagues and managers I've worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="glass-card p-8 rounded-md border border-border/80 hover:border-primary/40 transition-all duration-300 group relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote size={24} className="text-primary/20 absolute top-4 left-4" />
              <div className="pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-[10px] font-mono text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[20%] left-[-10%] w-[250px] h-[250px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
    </AnimatedSection>
  );
};
