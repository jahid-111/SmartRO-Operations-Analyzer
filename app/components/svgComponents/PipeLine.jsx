"use client";

import React, { memo } from "react";

function PipeLine({
  length = 200, // pipe length
  diameter = 20, // inlet diameter
  reducerTo = null, // outlet diameter (if reducer)
  active = false, // flow on/off
}) {
  const outDia = reducerTo ?? diameter;
  const stroke = "#1F2937";
  const fill = "#CBD5E1";

  return (
    <svg
      width={length}
      height={Math.max(diameter, outDia) + 10}
      viewBox={`0 0 ${length} ${Math.max(diameter, outDia) + 10}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* PIPE BODY */}
      <rect
        x="0"
        y="5"
        width={length}
        height={diameter}
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        rx="2"
      />

      {/* REDUCER (optional) */}
      {reducerTo && (
        <polygon
          points={`
            ${length - 40},5
            ${length},${5 + (diameter - outDia) / 2}
            ${length},${5 + (diameter + outDia) / 2}
            ${length - 40},${5 + diameter}
          `}
          fill="#E5E7EB"
          stroke={stroke}
          strokeWidth="2"
        />
      )}

      {/* FLOW ANIMATION */}
      {active && (
        <line
          x1="10"
          y1={5 + diameter / 2}
          x2={length - 10}
          y2={5 + diameter / 2}
          stroke="#2563EB"
          strokeWidth="3"
          strokeDasharray="10 8"
          className="pipe-flow"
        />
      )}
    </svg>
  );
}

export default memo(PipeLine);
