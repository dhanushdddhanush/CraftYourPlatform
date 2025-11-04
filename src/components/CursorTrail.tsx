import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrails((prev) => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor glow */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen transition-transform duration-100"
        style={{
          left: cursorPos.x - 16,
          top: cursorPos.y - 16,
        }}
      >
        <div className="w-full h-full bg-blue-500 rounded-full blur-xl opacity-50"></div>
      </div>

      {/* Trail particles */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed w-2 h-2 pointer-events-none z-40 animate-trail-fade"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: (index + 1) / trails.length,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm"></div>
        </div>
      ))}
    </>
  );
}
