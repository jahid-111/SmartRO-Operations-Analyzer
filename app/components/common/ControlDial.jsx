"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function ControlDial({ label1 = "OPERATOR", label2 = "REMOTE" }) {
  const [isRemote, setIsRemote] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Mode Labels */}
      <div className="flex justify-between gap-3 w-full px-4">
        <p
          className={`text-[10px] font-bold transition-colors ${
            !isRemote ? "text-blue-400" : "text-slate-600"
          }`}
        >
          {label1}
        </p>
        <p
          className={`text-[10px] font-bold transition-colors ${
            isRemote ? "text-blue-400" : "text-slate-600"
          }`}
        >
          {label2}
        </p>
      </div>

      {/* The Central Controller Circle */}
      <div className="relative rounded-full h-36 w-36 border-4 border-slate-800 bg-slate-900/50 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
        {/* THE LINE (The Pointer) */}
        <div
          className="absolute w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-transform duration-700 ease-in-out"
          style={{
            height: "60px",
            bottom: "50%",
            transformOrigin: "bottom center",
            transform: isRemote ? "rotate(45deg)" : "rotate(-45deg)",
          }}
        />

        {/* THE CENTER HUB */}
        <div className="relative z-10 rounded-full h-8 w-8 border-4 border-slate-700 bg-slate-800 flex items-center justify-center shadow-lg">
          <div className="h-1.5 w-1.5 bg-blue-400 rounded-full animate-pulse" />
        </div>

        {/* Decorative Ticks */}
        <div className="absolute inset-2 rounded-full border border-dashed border-slate-700/30 pointer-events-none" />
      </div>

      {/* Action Button */}
      <Button
        onClick={() => setIsRemote(!isRemote)}
        className="w-full bg-slate-600 text-slate-50 hover:bg-slate-800 border border-slate-700 text-[9px] tracking-widest h-8"
      >
        TOGGLE
      </Button>
    </div>
  );
}
