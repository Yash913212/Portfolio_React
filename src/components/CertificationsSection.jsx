import { AnimatedSection } from "./AnimatedSection";
import { ShieldCheck, X } from "lucide-react";
import { certifications } from "@/lib/config";
import { useState } from "react";

export const CertificationsSection = () => {
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <AnimatedSection id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-4 inline-block">
            Verified Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none mb-4">
            Professional <span className="text-shimmer font-black">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed mx-auto">
            Industry-recognized certifications validating expertise in databases, version control, and core programming paradigms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="glass-card rounded-xl border border-border/60 hover:border-primary/40 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 shadow-lg hover:shadow-primary/10 overflow-hidden">
              <div 
                className="w-full h-48 relative overflow-hidden bg-background/50 cursor-pointer group/image"
                onClick={() => setPreviewImage(cert.image)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity z-20 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-xs font-bold tracking-widest uppercase bg-black/50 px-3 py-1.5 rounded-full border border-white/20">View Certificate</span>
                </div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
                <div className="absolute top-3 right-3 z-30 text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-background/80 backdrop-blur px-2 py-1 rounded-md border border-border/50">
                  {cert.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow font-medium">
                Issued by {cert.organization}
              </p>
              
              <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-widest">Credential ID</span>
                  <span className="text-[10px] font-mono text-muted-foreground truncate font-bold">
                    {cert.credentialId}
                  </span>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setPreviewImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors border border-white/10 cursor-pointer"
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
            <img 
              src={previewImage} 
              alt="Certificate Preview" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </AnimatedSection>
  );
};
