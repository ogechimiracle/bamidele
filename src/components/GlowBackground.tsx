import { useEffect, useRef, useState } from 'react';

export default function GlowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate coords relative to the page or viewport
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x, y });
        containerRef.current.style.setProperty('--x', `${x}px`);
        containerRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-50 overflow-hidden bg-[#050816] pointer-events-none"
    >
      {/* Dynamic Cursor Glow */}
      <div className="absolute inset-0 glow-spot opacity-60 transition-opacity duration-300" />

      {/* Grid Mesh Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Gradient Ambient Highlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-accent/5 blur-[120px] animate-float" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-accent-secondary/5 blur-[100px] animate-pulse-slow" />
      <div className="absolute top-[40%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-indigo-500/5 blur-[110px]" style={{ animationDelay: '2s' }} />
    </div>
  );
}
