"use client";

import { cn } from "@/utils";
import React, { HTMLAttributes, useState } from "react";

interface DualSliderProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  wrapperStyle?: string;
}

export const DoubleRangeSlider = ({
  className,
  wrapperStyle,
  ...rest
}: DualSliderProps) => {
  const [range1, setRange1] = useState(20);
  const [range2, setRange2] = useState(80);

  return (
    <div className={cn("flex", wrapperStyle)}>
      <input
        type="range"
        min="0"
        max="100"
        value={range1}
        onChange={(e) => setRange1(e.currentTarget.valueAsNumber)}
        className={cn("slider-primary rounded-l-full ", className)}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={range2}
        onChange={(e) => setRange2(e.currentTarget.valueAsNumber)}
        className={cn("slider-primary  rounded-r-full", className)}
      />
    </div>
  );
};
