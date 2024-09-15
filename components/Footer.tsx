import React from "react";
import TypewriterEffectSmoothDemo from "./witterEffect";

const Footer = () => {
  return (
    <div className="py-5 font-semibold bg-green-300">
      <TypewriterEffectSmoothDemo />
      <p className="text-center">
        &copy; {new Date().getFullYear()} Eco-Memories. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
