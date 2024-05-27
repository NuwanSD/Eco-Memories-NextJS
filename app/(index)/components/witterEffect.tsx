"use client";
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect";

const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "Eco-Memories",
    },
    {
      text: "!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default TypewriterEffectSmoothDemo;
