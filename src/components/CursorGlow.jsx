import { useMousePosition } from "@/hooks/useMousePosition";

export const CursorGlow = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 hidden md:block"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(139, 92, 246, 0.06), transparent 80%)`,
      }}
    />
  );
};
