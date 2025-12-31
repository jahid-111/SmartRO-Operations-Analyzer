// "use client";

// import { TrendingDown, TrendingUpIcon, XCircle } from "lucide-react";
// import { ControlDial } from "./ControlDial";
// import RoundButton from "./RoundButton";
// import SimulationToggle from "./SimulationToggle";
// import { useState } from "react";
// import WarningSystem from "./WarningSystem";

// export default function SpecificController() {
//   const [isSimulating, setIsSimulating] = useState(false);

//   return (
//     <div className="relative border border-slate-200 bg-white text-slate-800 w-full max-w-xl p-8 m-10 rounded-[40px] shadow-2xl flex flex-col items-center">
//       {/* 1. Header & Close Button */}
//       <button className="absolute top-4 left-4 text-slate-300 hover:text-red-500 transition-colors">
//         <XCircle size={30} />
//       </button>

//       <div className=" flex">
//         Trend <TrendingUpIcon />
//       </div>

//       {/* 2. Simulation Control Section */}
//       <div className="w-full max-w-md mb-2">
//         <SimulationToggle
//           systemEngine="Engine Dynamic v1.0"
//           checked={isSimulating}
//           onCheckedChange={setIsSimulating}
//         />
//       </div>

//       {/* 3. RESERVED WARNING SPACE
//           Fixes the "jumping" issue by giving the warning a permanent 40px home */}
//       <div className="h-10 w-full flex items-center justify-center mb-6">
//         <WarningSystem
//           label="⚠ System Must Read by Human"
//           active={isSimulating}
//         />
//       </div>

//       {/* 4. Action Buttons Section */}
//       <div className="flex flex-col items-center gap-4 w-full mb-10">
//         <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
//           Manual Commands
//         </span>
//         <div className="flex flex-row items-center justify-center gap-8 w-full p-6 bg-slate-50/50 rounded-[30px] border border-slate-100 shadow-inner">
//           <RoundButton label="start" color="green" isActive={isSimulating} />
//           <RoundButton label="stop" color="red" />
//           <RoundButton label="interlock" color="yellow" />
//         </div>
//       </div>

//       {/* 5. Control Dials Section */}
//       <div className="flex flex-col items-center gap-4 w-full mb-8">
//         <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
//           Control Source
//         </span>
//         <div className="flex flex-row items-center justify-center gap-16 w-full">
//           <ControlDial
//             label1="OPERATOR"
//             label2="REMOTE"
//             isRemote={isSimulating}
//           />
//           <ControlDial label1="MANUAL" label2="AUTO" />
//         </div>
//       </div>

//       {/* 6. Bottom Status Bar */}
//       <div className="w-full pt-6 border-t border-slate-100 flex justify-between items-center px-4">
//         <div className="flex items-center gap-3">
//           <div className="relative flex items-center justify-center">
//             <div
//               className={`absolute h-3 w-3 rounded-full opacity-20 ${
//                 isSimulating ? "bg-green-500 animate-ping" : ""
//               }`}
//             />
//             <div
//               className={`h-2 w-2 rounded-full ${
//                 isSimulating ? "bg-green-500" : "bg-slate-300"
//               }`}
//             />
//           </div>
//           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//             {isSimulating ? "System Active" : "System Standby"}
//           </span>
//         </div>
//         <span className="text-[10px] font-mono text-slate-300">
//           PFD-SN: 9920-X
//         </span>
//       </div>
//     </div>
//   );
// }

"use client";

import { TrendingUp, XCircle, Activity } from "lucide-react";
import { ControlDial } from "./ControlDial";
import RoundButton from "./RoundButton";
import SimulationToggle from "./SimulationToggle";
import { useState } from "react";
import WarningSystem from "./WarningSystem";

export default function SpecificController() {
  const [isSimulating, setIsSimulating] = useState(false);

  return (
    <div className="relative border border-slate-200 bg-white text-slate-800 w-full max-w-xl p-8 m-10 rounded-[40px] shadow-2xl flex flex-col items-center overflow-hidden">
      {/* 1. TOP NAVIGATION / HEADER BAR */}
      <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
        {/* Trend Indicator Button */}
        <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-blue-600 rounded-full transition-colors border border-slate-100 shadow-sm">
          <TrendingUp size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Analytics
          </span>
        </button>

        {/* Panel Identification */}
        <div className="flex flex-col items-center">
          <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">
            Module Controller
          </span>
          {/* <div className="h-1 w-8 bg-slate-100 rounded-full mt-1" /> */}
        </div>

        {/* Close Button */}
        <button className="p-1.5 bg-slate-50 hover:bg-red-50 text-slate-300 hover:text-red-500 rounded-full transition-all border border-slate-100 shadow-sm">
          <XCircle size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* 2. Simulation Control Section */}
      <div className="w-full max-w-md mb-2">
        <SimulationToggle
          systemEngine="Engine Dynamic v1.0"
          checked={isSimulating}
          onCheckedChange={setIsSimulating}
        />
      </div>

      {/* 3. Reserved Warning Space */}
      <div className="h-10 w-full flex items-center justify-center mb-6">
        <WarningSystem
          label="⚠ System Must Read by Human"
          active={isSimulating}
        />
      </div>

      {/* 4. Action Buttons Section */}
      <div className="flex flex-col items-center gap-4 w-full mb-10">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
          Manual Commands
        </span>
        <div className="flex flex-row items-center justify-center gap-8 w-full p-6 bg-slate-50/50 rounded-[30px] border border-slate-100 shadow-inner">
          <RoundButton label="start" color="green" isActive={isSimulating} />
          <RoundButton label="stop" color="red" />
          <RoundButton label="interlock" color="yellow" />
        </div>
      </div>

      {/* 5. Control Dials Section */}
      <div className="flex flex-col items-center gap-4 w-full mb-8">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
          Control Source
        </span>
        <div className="flex flex-row items-center justify-center gap-16 w-full">
          <ControlDial
            label1="OPERATOR"
            label2="REMOTE"
            isRemote={isSimulating}
          />
          <ControlDial label1="MANUAL" label2="AUTO" />
        </div>
      </div>

      {/* 6. Bottom Status Bar */}
      <div className="w-full pt-6 border-t border-slate-100 flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div
              className={`absolute h-3 w-3 rounded-full opacity-20 ${
                isSimulating ? "bg-green-500 animate-ping" : ""
              }`}
            />
            <div
              className={`h-2 w-2 rounded-full ${
                isSimulating ? "bg-green-500" : "bg-slate-300"
              }`}
            />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {isSimulating ? "System Active" : "System Standby"}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-300">
          PFD-SN: 9920-X
        </span>
      </div>
    </div>
  );
}
