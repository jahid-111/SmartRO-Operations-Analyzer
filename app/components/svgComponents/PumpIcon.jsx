"use client";

import React, { memo } from "react";

const COLORS = {
  idleFill: "#F8FAFC",
  idleStroke: "#94A3B8",
  runFill: "#EFF6FF",
  runStroke: "#3B82F6",
  impellerIdle: "#CBD5E1",
  impellerRun: "#2563EB",
};

function PumpIcon({ active = true, size = 100 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
      aria-label="High Pressure Pump"
    >
      {/* Pump casing (volute) */}
      <path
        d="M50 90C72.1 90 90 72.1 90 50S72.1 10 50 10C35.5 10 22.5 17.5 15 29H5V50H15C15 65 25 85 50 90Z"
        fill={active ? COLORS.runFill : COLORS.idleFill}
        stroke={active ? COLORS.runStroke : COLORS.idleStroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Discharge nozzle */}
      <rect
        x="40"
        y="0"
        width="20"
        height="12"
        fill={active ? "#DBEAFE" : "#E2E8F0"}
        stroke={active ? COLORS.runStroke : COLORS.idleStroke}
        strokeWidth="3"
      />

      {/* Suction eye */}
      <circle
        cx="50"
        cy="50"
        r="18"
        fill="#ffffff"
        stroke={active ? COLORS.runStroke : COLORS.idleStroke}
        strokeWidth="3"
      />

      {/* Impeller */}
      <g
        className={active ? "animate-spin-slow" : ""}
        style={{ transformOrigin: "50% 50%" }}
      >
        <path
          d="M50 50 L50 38 M50 50 L60.5 56 M50 50 L39.5 56"
          stroke={active ? COLORS.impellerRun : COLORS.impellerIdle}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="50"
          r="4"
          fill={active ? COLORS.impellerRun : COLORS.idleStroke}
        />
      </g>

      {/* Flow direction indicator */}
      {active && (
        <path
          d="M50 25 L50 15 M50 15 L46 19 M50 15 L54 19"
          stroke={COLORS.runStroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
        />
      )}
    </svg>
  );
}

export default memo(PumpIcon);
