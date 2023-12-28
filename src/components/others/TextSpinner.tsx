"use client";

import React, { useEffect, useState } from "react";
interface Props {
  text: string;
}

const SpinningText = ({ text }: Props) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 5) % 360);
    }, 20); // Adjust interval for desired speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <span className={`rotate-${rotation} inline-block rounded-full bg-gray-200 px-4 py-2 text-center`}>{text}</span>
    </div>
  );
};

export default SpinningText;
