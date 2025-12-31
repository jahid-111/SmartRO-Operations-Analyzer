"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SimulationToggle({
  checked,
  onCheckedChange,
  systemEngine = "PLC-CORE-01",
}) {
  return (
    <div className="flex justify-between items-center w-full px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300">
      <div className="flex flex-col">
        <Label
          htmlFor="simulation-mode"
          className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase"
        >
          {systemEngine}
        </Label>
        <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">
          Simulation Mode
        </span>
      </div>

      <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
        <span
          className={`text-[10px] font-mono font-bold transition-colors ${
            !checked ? "text-red-600" : "text-slate-300"
          }`}
        >
          OFF
        </span>

        <Switch
          id="simulation-mode"
          checked={checked}
          onCheckedChange={onCheckedChange}
          // Customizing colors for white theme
          className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-slate-200"
        />

        <span
          className={`text-[10px] font-mono font-bold transition-colors text-green-700`}
        >
          ON
        </span>
      </div>
    </div>
  );
}
