"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "Eco-Memories",
      className: "text-black",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default TypewriterEffectSmoothDemo;
