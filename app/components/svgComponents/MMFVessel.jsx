"use client";

import React, { useState } from "react";
import ValveIcon from "./MovValveIcon";

export default function MMFVessel() {
  const valveLayout = [
    { id: 1, name: "feedInlet", label: "Feed Inlet", x: 4, y: 40 },
    { id: 2, name: "backwashOutlet", label: "BW Outlet", x: 140, y: 40 },
    { id: 3, name: "backwashInlet", label: "BW Inlet", x: 4, y: 170 },
    { id: 4, name: "serviceOutlet", label: "Service Out", x: 140, y: 170 },
    { id: 5, name: "rinsing", label: "Rinse", x: 140, y: 105 },
  ];

  const MODES = {
    SERVICE: {
      feedInlet: "open",
      serviceOutlet: "open",
      backwashInlet: "closed",
      backwashOutlet: "closed",
      rinsing: "closed",
    },
    BACKWASH: {
      feedInlet: "closed",
      serviceOutlet: "closed",
      backwashInlet: "open",
      backwashOutlet: "open",
      rinsing: "closed",
    },
    RINSE: {
      feedInlet: "closed",
      serviceOutlet: "open",
      backwashInlet: "closed",
      backwashOutlet: "closed",
      rinsing: "open",
    },
  };
  const [mode, setMode] = useState("SERVICE");

  const getStatus = (name) => MODES[mode][name] ?? "closed";

  return (
    <div className="p-6 space-y-4">
      {/* HEADER */}
      <h2 className="text-lg font-semibold text-gray-700">
        MMF Vessel – Mode: <span className="te  xt-blue-600">{mode}</span>
      </h2>

      {/* MODE BUTTONS */}
      <div className="flex gap-2 ">
        {Object.keys(MODES).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1 rounded text-sm border
                    ${
                      mode === m
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600"
                    }
                  `}
          >
            {m}
          </button>
        ))}
      </div>

      {/* VESSEL */}
      <div className="relative w-48 h-64 rounded-3xl border-2 border-gray-400 bg-blue-200 shadow-inner">
        {/* Vessel title */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-gray-500">
          Multimedia Filter
        </div>

        {valveLayout.map((v) => {
          const status = getStatus(v.name);

          return (
            <div
              key={v.id}
              className="absolute group"
              style={{ left: v.x, top: v.y }}
            >
              <button
                onClick={() => {
                  console.log("hello");
                }}
                className="focus:outline-none"
              >
                <ValveIcon
                  size={38}
                  className="transition-all duration-300 border"
                  style={{
                    transform:
                      status === "open" ? "rotate(0deg)" : "rotate(90deg)",
                  }}
                  fill={status === "open" ? "#22c55e" : "#ef4444"}
                />
              </button>

              {/* LABEL */}
              <div className="text-[10px] text-gray-600 text-center mt-1">
                {v.label}
              </div>

              {/* TOOLTIP */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2
                                    hidden group-hover:block
                                    bg-black text-white text-[10px]
                                    px-2 py-0.5 rounded"
              >
                {status.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>

      {/* LEGEND */}
      <div className="flex gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-500 inline-block rounded"></span>
          Open
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-red-500 inline-block rounded"></span>
          Closed
        </div>
      </div>
    </div>
  );
}
