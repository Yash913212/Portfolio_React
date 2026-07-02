import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { personal } from "@/lib/config";
import { AnimatedSection } from "./AnimatedSection";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      
      if (!formspreeId) {
        const subject = encodeURIComponent(`Contact from Portfolio: ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
        
        toast({
          title: "Redirecting...",
          description: "Opening your default mail client to send the message.",
        });
        
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
      });
      console.error("Email error:", error);
    }
    setIsSubmitting(false);
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: personal.github },
    { name: "LinkedIn", icon: Linkedin, url: personal.linkedin },
  ];

  return (
    <AnimatedSection id="contact" className="py-24 px-4 relative overflow-hidden bg-secondary/10 border-t border-border/40">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 sm:mb-24 text-center">
          <span className="text-xs font-mono tracking-widest text-primary uppercase font-bold px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
            Let&apos;s Build <span className="text-shimmer font-black">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
            Ready to bring your ideas to life? Whether you have a project in mind or just want to chat about web architecture, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col space-y-8 lg:pr-8 relative">
            <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Reach out to me directly via email or phone. I'm currently open for new opportunities and exciting freelance projects.
              </p>
            </div>

            <div className="flex flex-col space-y-6 relative z-10">
              <div className="flex items-start gap-4 group">
                <div className="p-3 sm:p-4 rounded-xl bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-primary/20">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-muted-foreground font-mono font-medium tracking-widest uppercase mb-1">Email</span>
                  <a href={`mailto:${personal.email}`} className="text-foreground hover:text-primary transition-colors font-semibold text-sm sm:text-base">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 sm:p-4 rounded-xl bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-primary/20">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-muted-foreground font-mono font-medium tracking-widest uppercase mb-1">Phone</span>
                  <a href={`tel:${personal.phone}`} className="text-foreground hover:text-primary transition-colors font-semibold text-sm sm:text-base">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 sm:p-4 rounded-xl bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-all duration-300 shadow-sm group-hover:shadow-primary/20">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-muted-foreground font-mono font-medium tracking-widest uppercase mb-1">Location</span>
                  <span className="text-foreground font-semibold text-sm sm:text-base">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border/60 relative z-10">
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase block mb-4">Connect on Socials</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      aria-label={`Visit my ${social.name}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card p-6 sm:p-10 rounded-2xl border border-border/80 shadow-xl relative w-full overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none" />
            
            <form className="space-y-6 relative z-10 text-left" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-hidden focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-foreground text-background font-bold text-sm sm:text-base transition-all duration-300 hover:bg-foreground/90 hover:scale-[0.99] shadow-md border border-border group disabled:opacity-70 disabled:hover:scale-100"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
    </AnimatedSection>
  );
};
