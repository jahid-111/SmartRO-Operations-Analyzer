"use client";

import React from "react";

/**
 * A technical SVG representation of an Energy Recovery Device (Pressure Exchanger - PX).
 * Visualizes high-pressure transfer and internal rotation.
 * * @param {boolean} active - If true, the internal rotor spins and flow lines glow.
 * @param {number} size - Width/Height in pixels (component is wider than it is tall).
 */
export default function ErdPxIcon({ active = false, size = 120 }) {
  // Aspect ratio correction: The device is wide, so we adjust height relative to width base.
  const width = size;
  const height = size * 0.6; // 60% height ratio for cylindrical look

  // Theme colors used in the previous industrial UI examples
  const colors = {
    bodyFill: active ? "#F1F5F9" : "#F8FAFC", // slate-100 / slate-50
    bodyStroke: active ? "#94A3B8" : "#CBD5E1", // slate-400 / slate-300
    hpFlow: active ? "#DC2626" : "#EF4444", // red-600 / red-500 (High Pressure / Brine)
    lpFlow: active ? "#2563EB" : "#3B82F6", // blue-600 / blue-500 (Low Pressure / Feed)
    rotor: active ? "#64748B" : "#94A3B8", // slate-500 / slate-400
  };

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-500"
      style={{ width: width, height: height }}
    >
      <svg
        viewBox="0 0 200 120" // Wide viewbox for the cylindrical shape
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* --- MAIN BODY (Cylinder) --- */}
        {/* End Caps */}
        <ellipse
          cx="30"
          cy="60"
          rx="15"
          ry="40"
          fill={colors.bodyFill}
          stroke={colors.bodyStroke}
          strokeWidth="3"
        />
        <ellipse
          cx="170"
          cy="60"
          rx="15"
          ry="40"
          fill={colors.bodyFill}
          stroke={colors.bodyStroke}
          strokeWidth="3"
        />
        {/* Main Shell connecting caps */}
        <rect
          x="30"
          y="20"
          width="140"
          height="80"
          fill={colors.bodyFill}
          stroke={colors.bodyStroke}
          strokeWidth="3"
        />
        {/* Front sealing line for depth perspective */}
        <path
          d="M30 20 C 15 20, 15 100, 30 100"
          stroke={colors.bodyStroke}
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        {/* --- FLOW PATHS (Arrows) --- */}
        {/* TOP PATH: High Pressure Brine IN (Left) -> Energy Transfer -> Low Pressure Brine OUT (Right) */}
        {/* Note: In reality, flows cross, but for a P&ID icon, we show top/bottom separation for clarity. 
            Let's show HP Energy entering top left, and pressurizing the top right stream. */}
        {/* HP Brine In (Top Left Port) */}
        <path
          d="M5 40 L30 40"
          stroke={colors.hpFlow}
          strokeWidth="4"
          markerEnd="url(#arrowhead-hp)"
          className={active ? "animate-pulse" : ""}
        />
        <rect x="25" y="30" width="10" height="20" fill={colors.bodyStroke} />{" "}
        {/* Port Flange */}
        {/* HP Seawater Out (Top Right Port - Pressurized) */}
        <path
          d="M170 40 L195 40"
          stroke={colors.lpFlow}
          strokeWidth="4"
          markerEnd="url(#arrowhead-lp)"
          className={active ? "animate-pulse" : ""}
        />
        <rect x="165" y="30" width="10" height="20" fill={colors.bodyStroke} />{" "}
        {/* Port Flange */}
        {/* BOTTOM PATH: Low Pressure Feed IN (Right) -> Pressurized -> High Pressure Feed OUT (Left) */}
        {/* LP Seawater In (Bottom Right Port) */}
        <path
          d="M195 80 L170 80"
          stroke={colors.lpFlow}
          strokeWidth="4"
          markerEnd="url(#arrowhead-lp-rev)"
          className={active ? "animate-pulse" : ""}
        />
        <rect x="165" y="70" width="10" height="20" fill={colors.bodyStroke} />{" "}
        {/* Port Flange */}
        {/* LP Brine Out (Bottom Left Port - Depressurized) */}
        <path
          d="M30 80 L5 80"
          stroke={colors.hpFlow}
          strokeWidth="4"
          markerEnd="url(#arrowhead-hp)"
          className={active ? "animate-pulse" : ""}
        />
        <rect x="25" y="70" width="10" height="20" fill={colors.bodyStroke} />{" "}
        {/* Port Flange */}
        {/* --- INTERNAL ROTOR (The "PX" Action) --- */}
        {/* A central symbol indicating the spinning ceramic rotor that performs the exchange */}
        <g
          className={`origin-center ${active ? "animate-spin-slow" : ""}`}
          style={{ transformBox: "fill-box" }}
        >
          <circle
            cx="100"
            cy="60"
            r="25"
            stroke={colors.rotor}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
          />
          {/* Exchange Arrows inside circle */}
          <path
            d="M90 50 C 95 40, 105 40, 110 50"
            stroke={colors.hpFlow}
            strokeWidth="3"
            markerEnd="url(#arrowhead-hp-small)"
          />
          <path
            d="M110 70 C 105 80, 95 80, 90 70"
            stroke={colors.lpFlow}
            strokeWidth="3"
            markerEnd="url(#arrowhead-lp-small)"
          />
        </g>
        {/* --- DEFINITIONS FOR ARROWHEADS --- */}
        <defs>
          {/* Red/HP Arrowhead */}
          <marker
            id="arrowhead-hp"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.hpFlow} />
          </marker>
          {/* Blue/LP Arrowhead */}
          <marker
            id="arrowhead-lp"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.lpFlow} />
          </marker>
          {/* Reversed Blue/LP Arrowhead */}
          <marker
            id="arrowhead-lp-rev"
            markerWidth="10"
            markerHeight="7"
            refX="1"
            refY="3.5"
            orient="auto-start-reverse"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.lpFlow} />
          </marker>
          {/* Small Internal Arrowheads */}
          <marker
            id="arrowhead-hp-small"
            markerWidth="6"
            markerHeight="4"
            refX="5"
            refY="2"
            orient="auto"
          >
            <polygon points="0 0, 6 2, 0 4" fill={colors.hpFlow} />
          </marker>
          <marker
            id="arrowhead-lp-small"
            markerWidth="6"
            markerHeight="4"
            refX="5"
            refY="2"
            orient="auto"
          >
            <polygon points="0 0, 6 2, 0 4" fill={colors.lpFlow} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
