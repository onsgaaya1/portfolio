"use client";

import { useMemo } from "react";

type Density = "light" | "medium" | "normal" | "lush";

interface FlowerBgProps {
  density?: Density;
  className?: string;
}

// Single flower SVG shape, color/size/rotation configurable
function Flower({ size, color, opacity, rotate }: { size: number; color: string; opacity: number; rotate: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ transform: `rotate(${rotate}deg)`, display: "block" }}>
      {[0, 60, 120, 180, 240, 300].map((d, i) => (
        <ellipse key={d} cx="50" cy="20" rx="11" ry="22" fill={color} opacity={(i < 3 ? 0.85 : 0.55) * opacity} transform={`rotate(${d} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="13" fill={color} opacity={opacity} />
      <circle cx="50" cy="50" r="5" fill="#ecfdf5" opacity={opacity * 0.3} />
    </svg>
  );
}

function SmallFlower({ size, color, opacity, rotate }: { size: number; color: string; opacity: number; rotate: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ transform: `rotate(${rotate}deg)`, display: "block" }}>
      {[0, 72, 144, 216, 288].map((d) => (
        <ellipse key={d} cx="50" cy="22" rx="10" ry="20" fill={color} opacity={0.8 * opacity} transform={`rotate(${d} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="11" fill={color} opacity={opacity} />
    </svg>
  );
}

const PALETTE = ["#22c55e", "#86efac", "#10843f", "#4ade80", "#d4af37"];

const DENSITY_COUNT: Record<Density, number> = {
  light: 5,
  medium: 9,
  normal: 12,
  lush: 18,
};

// Deterministic pseudo-random so SSR/CSR match (no Math.random at render)
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function FlowerBg({ density = "medium", className }: FlowerBgProps) {
  const count = DENSITY_COUNT[density];

  const flowers = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = i * 17.3 + 1;
      const top = seededRandom(seed) * 100;
      const left = seededRandom(seed + 1) * 100;
      const size = 40 + seededRandom(seed + 2) * 100;
      const isSmall = seededRandom(seed + 3) > 0.55;
      const color = PALETTE[Math.floor(seededRandom(seed + 4) * PALETTE.length)];
      const opacity = 0.05 + seededRandom(seed + 5) * 0.08;
      const rotate = seededRandom(seed + 6) * 360;
      const duration = 14 + seededRandom(seed + 7) * 16;
      const delay = seededRandom(seed + 8) * -20;
      const drift = 10 + seededRandom(seed + 9) * 20;

      return { id: i, top, left, size, isSmall, color, opacity, rotate, duration, delay, drift };
    });
  }, [count]);

  return (
    <div className={className} style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {flowers.map(f => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            top: `${f.top}%`,
            left: `${f.left}%`,
            animation: `flowerDrift ${f.duration}s ease-in-out ${f.delay}s infinite`,
            // @ts-ignore — custom property read by keyframes via inline style trick
            "--drift": `${f.drift}px`,
          } as React.CSSProperties}
        >
          {f.isSmall
            ? <SmallFlower size={f.size * 0.6} color={f.color} opacity={f.opacity} rotate={f.rotate} />
            : <Flower size={f.size} color={f.color} opacity={f.opacity} rotate={f.rotate} />}
        </div>
      ))}

      <style>{`
        @keyframes flowerDrift {
          0%   { transform: translate(0, 0) rotate(0deg); }
          25%  { transform: translate(calc(var(--drift) * 0.6), calc(var(--drift) * -1)) rotate(4deg); }
          50%  { transform: translate(calc(var(--drift) * -0.4), calc(var(--drift) * -0.3)) rotate(-3deg); }
          75%  { transform: translate(calc(var(--drift) * -0.8), calc(var(--drift) * 0.6)) rotate(3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
