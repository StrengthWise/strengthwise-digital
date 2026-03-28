import React from "react";

interface WaveTransitionProps {
  from: string;
  to: string;
  mid?: string;
}

const WaveTransition: React.FC<WaveTransitionProps> = ({ from, to, mid }) => {
  const midColor = mid || mixColors(from, to);
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "90px" }}>
      <div
        className="absolute inset-0"
        style={{
          background: from,
        }}
      />
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: "40px" }}
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
          fill={to}
        />
      </svg>
    </div>
  );
};

function mixColors(c1: string, c2: string): string {
  // Simple midpoint for hex
  const parse = (h: string) => {
    const v = h.replace("#", "");
    return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
  };
  const [r1, g1, b1] = parse(c1);
  const [r2, g2, b2] = parse(c2);
  const mix = (a: number, b: number) => Math.round((a + b) / 2).toString(16).padStart(2, "0");
  return `#${mix(r1, r2)}${mix(g1, g2)}${mix(b1, b2)}`;
}

export default WaveTransition;
