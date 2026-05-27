import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Terminal,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [terminalLogs, setTerminalLogs] = useState([
    "SYS_PING: INITIALIZING CONTACT PROTOCOL [PORT_443]...",
    "SECURE_LAYER: TLS_1.3 HANDSHAKE ACTIVE...",
  ]);

  const [activeConsoleInput, setActiveConsoleInput] = useState("NONE");

  // Mock handshake sequence on component mount
  useEffect(() => {
    const logs = [
      "CIPHER_SUITE::ECDHE-RSA-AES256-GCM-SHA384",
      "ESTABLISHING CRYPTOGRAPHIC TUNNEL...",
      "TUNNEL: ESTABLISHED [RTT: 42ms]",
      "TRANSMISSION NODE READIED."
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, log]);
      }, (index + 1) * 800);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Log keypress events to terminal console for supreme hacker aesthetic
    const size = value.length;
    setTerminalLogs((prev) => {
      const filtered = prev.filter(line => !line.startsWith(`INPUT_EVENT::${name.toUpperCase()}`));
      return [
        ...filtered,
        `INPUT_EVENT::${name.toUpperCase()}::[${size} BYTES_BUFFERED]`
      ];
    });
  };

  const handleFocus = (fieldName) => {
    setActiveConsoleInput(fieldName.toUpperCase());
    setTerminalLogs((prev) => [
      ...prev,
      `FOCUS_ACQUIRED::CHANNEL_NODE::${fieldName.toUpperCase()}`
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTerminalLogs((prev) => [
      ...prev,
      "DISPATCH_REQUEST: SENDING FORM PAYLOAD TO FORMSPREE CORE..."
    ]);

    try {
      const response = await fetch("https://formspree.io/f/xqazvogy", {
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
        setTerminalLogs((prev) => [
          ...prev,
          "DISPATCH_STATUS: 200 OK. TRANSMISSION SUCCESSFUL."
        ]);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
      });
      setTerminalLogs((prev) => [
        ...prev,
        "DISPATCH_STATUS: 500 SERVER_ERROR. DEVIATED PATH ACTIVE."
      ]);
      console.error("Email error:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-28 px-4 relative overflow-hidden bg-secondary/5 border-t border-border/40"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Asymmetrical headers */}
        <div className="text-left space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            COMMUNICATION_CHANNELS // COMMAND_PING
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none">
            Get In <span className="text-shimmer font-black">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed">
            Let's collaborate on building the future of the web. Reach out directly or send an instant message.
          </p>
        </div>

        {/* Technical 50/50 dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Handshake Cryptographic Terminal Console */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Terminal Body */}
            <div className="flex-grow flex flex-col justify-between bg-black border border-emerald-500/20 rounded-md p-6 font-mono text-[10px] sm:text-xs text-emerald-500 space-y-4 text-left min-h-[300px] shadow-md">
              <div className="space-y-3">
                <div className="text-[9px] text-emerald-500/40 uppercase tracking-widest border-b border-emerald-500/10 pb-2 mb-2 font-bold flex justify-between">
                  <span>SECURE_NODE_TERMINAL [SSL//TLS]</span>
                  <span className="animate-pulse text-emerald-400">● LIVE</span>
                </div>
                
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-1.5 leading-relaxed font-semibold">
                    <span className="text-emerald-500/30">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
                
                <div className="flex items-center gap-1">
                  <span className="text-emerald-500/30">&gt;</span>
                  <span className="w-1.5 h-4 bg-emerald-500 animate-[blink_1s_infinite]" />
                </div>
              </div>

              {/* Console Status Summary Footer */}
              <div className="border-t border-emerald-500/10 pt-3 text-[9px] text-emerald-500/40 uppercase tracking-widest flex justify-between">
                <span>ACTIVE_FIELD: {activeConsoleInput}</span>
                <span>TUNNEL_BUFF::OK</span>
              </div>
            </div>

            {/* Direct Core Telemetry Specs (Phone/Mail/Loc/Github/Linkedin) */}
            <div className="grid grid-cols-1 gap-4 font-mono text-[10px] border border-border/85 rounded-md p-5 bg-secondary/15">
              
              <div className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-muted-foreground uppercase block font-bold">EMAIL_TARGET</span>
                  <a href="mailto:yaswanthamjuri@gmail.com" className="text-foreground hover:text-primary transition-colors font-bold text-xs">
                    yaswanthamjuri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-muted-foreground uppercase block font-bold">NODE_TEL</span>
                  <a href="tel:+918688209206" className="text-foreground hover:text-primary transition-colors font-bold text-xs">
                    +91 8688209206
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-colors">
                  <Github className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-muted-foreground uppercase block font-bold">GITHUB_NODE</span>
                  <a href="https://github.com/Yash913212" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-bold text-xs">
                    github.com/Yash913212
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-muted-foreground uppercase block font-bold">LINKEDIN_NODE</span>
                  <a href="https://linkedin.com/in/yaswanth-amjuri" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-bold text-xs">
                    linkedin.com/in/yaswanth-amjuri
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2.5 rounded bg-background border border-border/80 text-muted-foreground group-hover:text-primary transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-muted-foreground uppercase block font-bold">LOCATION_COORD</span>
                  <span className="text-foreground font-bold text-xs">
                    Andhra Pradesh, India
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: High-Tech minimalist Form Input */}
          <div className="md:col-span-7 glass-card p-8 rounded-md border border-border/80 flex flex-col justify-center">
            
            <form className="space-y-6 text-left" onSubmit={handleSubmit}>
              
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border/80 bg-background/50 backdrop-blur-md text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="Enter name..."
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border/80 bg-background/50 backdrop-blur-md text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  required
                  className="w-full px-4 py-3 rounded-md border border-border/80 bg-background/50 backdrop-blur-md text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Hello, I would like to collaborate..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm font-bold uppercase tracking-wider pt-3 pb-3"
                )}
              >
                {isSubmitting ? "SENDING PAYLOAD..." : "SEND TRANSMISSION"}
                <Send size={15} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Decorative radial blur background */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </section>
  );
};
