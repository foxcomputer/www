import React from "react";

export default function VercelGrid({
  className = "",
  cell = 64,
  gridColor = "rgba(255,255,255,0.06)",
  markerColor = "rgba(255,255,255,0.14)",
  markerPositions = [
    { x: 40, y: 60 },
    { x: 150, y: 100 },
    { x: 300, y: 80 }
  ],
  children,
  style = {}
}) {
  return (
    <div
      className={`relative w-full min-h-screen bg-black ${className}`}
      style={style}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
        viewBox="0 0 1920 1080"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="vercel-grid-pattern"
            width={cell}
            height={cell}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${cell} 0 L 0 0 0 ${cell}`}
              fill="none"
              stroke={gridColor}
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Grid background */}
        <rect width="100%" height="100%" fill="url(#vercel-grid-pattern)" />

        {/* Subtle border */}
        <rect
          width="100%"
          height="100%"
          fill="none"
          stroke="rgba(255,255,255,0.02)"
          strokeWidth="1"
        />

        {/* Crosshair markers */}
        <g stroke={markerColor} strokeWidth={1.5} strokeLinecap="round">
          {markerPositions.map((p, i) => (
            <g key={i} transform={`translate(${p.x}, ${p.y})`}>
              <line x1="-6" y1="0" x2="6" y2="0" />
              <line x1="0" y1="-6" x2="0" y2="6" />
            </g>
          ))}
        </g>

        {/* Micro-grid overlay */}
        <g opacity="0.03">
          <rect
            x="0"
            y="0"
            width={cell * 3}
            height={cell * 2}
            fill="none"
            stroke={gridColor}
            strokeWidth="1"
          />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
