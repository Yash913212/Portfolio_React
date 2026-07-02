import { cn } from "@/lib/utils";
import { Menu, X, Github, Code2, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, personal } from "@/lib/config";

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

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
        <a
          className="text-sm font-mono font-bold tracking-tight text-foreground flex items-center gap-2.5 group"
          href="#hero"
        >
          <div className="p-1 bg-primary/10 border border-primary/20 rounded-md">
            <Code2 className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="tracking-widest uppercase text-xs font-black">
            {personal.name} <span className="text-primary/80 font-mono font-normal">// DEV</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative py-1 group",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            );
          })}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Toggle theme mode"
          >
            {isDarkMode ? <Sun size={16} className="text-yellow-500" /> : <Moon size={16} className="text-indigo-500" />}
          </button>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Toggle theme mode"
          >
            {isDarkMode ? <Sun size={16} className="text-yellow-500" /> : <Moon size={16} className="text-indigo-500" />}
          </button>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 rounded-md hover:bg-secondary transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

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
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors duration-200",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            <button
              onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
