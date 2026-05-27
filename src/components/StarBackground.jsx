import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background transition-colors duration-500">
      {/* Dynamic Coordinate Grid (moves at 0.15x speed of scroll) */}
      <div 
        className="absolute inset-0 grid-lines grid-masked opacity-[0.3] dark:opacity-[0.5]" 
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />
      
      {/* Premium Vercel Radial Glow Blobs (move at different speeds to create multi-plane parallax depth) */}
      <div 
        className="absolute -top-[10%] left-[10%] w-[60%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] animate-float-slow" 
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute -top-[5%] right-[10%] w-[50%] h-[45%] rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-[130px] animate-float-slow-reverse" 
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />
      <div 
        className="absolute top-[35%] left-[20%] w-[50%] h-[50%] rounded-full bg-violet-500/5 dark:bg-violet-600/5 blur-[150px] animate-float-slow" 
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div 
        className="absolute bottom-[-10%] right-[5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[140px] animate-float-slow-reverse" 
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      />
    </div>
  );
};
