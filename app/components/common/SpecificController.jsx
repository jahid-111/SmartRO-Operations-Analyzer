"use client";

import { XCircle } from "lucide-react";
import { ControlDial } from "./ControlDial";
import RoundButton from "./RoundButton";
import SimulationToggle from "./SimulationToggle";
import { useState } from "react";

export default function SpecificController() {
  const [isSimulating, setIsSimulating] = useState(false);

  return (
    <div className="relative border border-slate-200 bg-white text-slate-800 w-full max-w-xl p-8 m-10 rounded-[40px] shadow-xl flex flex-col items-center gap-10">
      {/* 1. Header & Close Button */}
      <button className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
        <XCircle size={24} />
      </button>

      {/* 2. Simulation Control Section */}
      <div className="w-full max-w-md">
        <SimulationToggle
          systemEngine="Engine Dynamic v1.0"
          checked={isSimulating}
          onCheckedChange={setIsSimulating}
        />
      </div>

      {/* 3. Action Buttons Section (Push Buttons) */}
      <div className="flex flex-col items-center gap-4 w-full">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
          Manual Commands
        </span>
        <div className="flex flex-row items-center justify-center gap-8 w-full p-6 bg-slate-50 rounded-[30px] border border-slate-100 shadow-inner">
          <RoundButton label="start" color="green" isActive={isSimulating} />
          <RoundButton label="stop" color="red" isActive={!isSimulating} />
          <RoundButton label="interlock" color="yellow" />
        </div>
      </div>

      {/* 4. Control Dials Section (Selectors) */}
      <div className="flex flex-col items-center gap-4 w-full">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
          Control Source
        </span>
        <div className="flex flex-row items-center justify-center gap-16 w-full">
          <ControlDial label1="OPERATOR" label2="REMOTE" />
          <ControlDial label1="MANUAL" label2="AUTO" />
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="w-full pt-4 border-t border-slate-100 flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              isSimulating ? "bg-green-500 animate-pulse" : "bg-slate-300"
            }`}
          />
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
            System Ready
          </span>
        </div>
        <span className="text-[9px] font-mono text-slate-300 tracking-tighter">
          ID: RO-PFD-99
        </span>
      </div>
    </div>
  );
}
