import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setIsReducedMotion(media.matches);

    syncPreference();
    media.addEventListener("change", syncPreference);

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      media.removeEventListener("change", syncPreference);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      setScrollY(0);
      return;
    }

    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isReducedMotion]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background transition-colors duration-500">
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
          <div
            className="absolute top-[-20%] left-[-10%] w-[80%] h-[60%] rounded-full bg-purple-600/15 blur-[150px] animate-aurora-1"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />
          <div
            className="absolute top-[30%] right-[-15%] w-[70%] h-[50%] rounded-full bg-blue-600/10 blur-[140px] animate-aurora-2"
            style={{ transform: `translateY(${scrollY * -0.06}px)` }}
          />
          <div
            className="absolute bottom-[-15%] left-[20%] w-[60%] h-[50%] rounded-full bg-violet-600/15 blur-[160px] animate-aurora-3"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div
            className="absolute top-[10%] left-[30%] w-[50%] h-[40%] rounded-full bg-cyan-600/5 blur-[130px] animate-aurora-1"
            style={{ transform: `translateY(${scrollY * -0.04}px)` }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 grid-lines grid-masked opacity-[0.3]"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
          <div
            className="absolute -top-[10%] left-[10%] w-[60%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] animate-float-slow"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div
            className="absolute -top-[5%] right-[10%] w-[50%] h-[45%] rounded-full bg-purple-500/10 blur-[130px] animate-float-slow-reverse"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          />
          <div
            className="absolute top-[35%] left-[20%] w-[50%] h-[50%] rounded-full bg-violet-500/5 blur-[150px] animate-float-slow"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />
          <div
            className="absolute bottom-[-10%] right-[5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[140px] animate-float-slow-reverse"
            style={{ transform: `translateY(${scrollY * -0.12}px)` }}
          />
        </>
      )}
    </div>
  );
};
