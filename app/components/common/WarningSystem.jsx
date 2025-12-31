import React from "react";

export default function WarningSystem({ active, label }) {
  return (
    <>
      {active && (
        <div className="flex flex-col items-center gap-1 animate-in fade-in slide-in-from-top-2 duration-700">
          {/* The Warning Text */}
          <p className="text-red-500 text-[10px] font-black uppercase tracking-widest animate-pulse">
            {label || "WARNING: SIMULATION ACTIVE"}
          </p>

          {/* Subtle soft glow line */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </div>
      )}
    </>
  );
}
