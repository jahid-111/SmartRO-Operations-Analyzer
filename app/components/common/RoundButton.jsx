"use client";

import React from "react";

export default function RoundButton({
  label,
  color = "blue",
  isActive,
  onClick,
  disabled,
}) {
  const colors = {
    green:
      "from-green-400 to-green-600 border-green-500 shadow-[0_5px_0_0_rgba(21,128,61,1)]",
    red: "from-red-400 to-red-600 border-red-500 shadow-[0_5px_0_0_rgba(185,28,28,1)]",
    yellow:
      "from-yellow-300 to-yellow-500 border-yellow-400 shadow-[0_5px_0_0_rgba(161,98,7,1)]",
    blue: "from-blue-400 to-blue-600 border-blue-500 shadow-[0_5px_0_0_rgba(29,78,216,1)]",
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Outer Housing - Fixed size ensures no layout shift */}
      <div className="p-1.5 bg-slate-50 rounded-full border border-slate-200 shadow-inner flex items-center justify-center w-20 h-20">
        <button
          onClick={onClick}
          disabled={disabled}
          className={`
            relative w-16 h-16 rounded-full border transition-all duration-75 bg-gradient-to-br
            ${colors[color]}
            ${
              disabled
                ? "opacity-20 grayscale cursor-not-allowed shadow-none border-b"
                : "cursor-pointer hover:brightness-110 active:translate-y-[4px] active:shadow-none"
            }
          `}
        >
          {/* Hardware Reflection */}
          <div className="absolute inset-1 rounded-full border-t border-white/40 pointer-events-none" />

          {/* High-Intensity Status LED */}
          <div
            className={`
            absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full transition-all duration-300
            ${
              isActive
                ? "bg-white shadow-[0_0_8px_white] opacity-100"
                : "bg-black/10 opacity-40"
            }
          `}
          />
        </button>
      </div>

      {/* Label stays perfectly still now */}
      {label && (
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] leading-none">
          {label}
        </span>
      )}
    </div>
  );
}
