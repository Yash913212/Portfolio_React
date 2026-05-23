export const StarBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background transition-colors duration-500">
      {/* Dynamic Next.js Coordinate Grid */}
      <div className="absolute inset-0 grid-lines grid-masked opacity-[0.3] dark:opacity-[0.5]" />
      
      {/* Premium Vercel Radial Glow Blobs */}
      <div className="absolute -top-[10%] left-[10%] w-[60%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] animate-float-slow" />
      <div className="absolute -top-[5%] right-[10%] w-[50%] h-[45%] rounded-full bg-purple-500/10 dark:bg-purple-600/15 blur-[130px] animate-float-slow-reverse" />
      <div className="absolute top-[35%] left-[20%] w-[50%] h-[50%] rounded-full bg-violet-500/5 dark:bg-violet-600/5 blur-[150px] animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[140px] animate-float-slow-reverse" />
    </div>
  );
};
