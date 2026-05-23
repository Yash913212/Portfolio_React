import { cn } from "@/lib/utils";
import { Menu, X, Github, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fix: Use pageYOffset or scrollY instead of screenY
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-xl border-border/80 shadow-xs"
          : "py-5 bg-transparent border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Senior Developer Logo Brand */}
        <a
          className="text-sm font-mono font-bold tracking-tight text-foreground flex items-center gap-2.5 group"
          href="#hero"
        >
          <div className="p-1 bg-primary/10 border border-primary/20 rounded-md">
            <Code2 className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="tracking-widest uppercase text-xs font-black">
            Yaswanth Amjuri <span className="text-primary/80 font-mono font-normal">// DEV</span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://github.com/Yash913212"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-secondary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
        </div>

        {/* mobile nav trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="https://github.com/Yash913212"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-secondary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 rounded-md hover:bg-secondary transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}{" "}
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 ease-in-out md:hidden",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl font-medium text-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
