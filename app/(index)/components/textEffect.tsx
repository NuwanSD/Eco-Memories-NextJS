"use client";

import React from "react";

import { TextGenerateEffect } from "../../../components/ui/text-generate-effect";

const words = `Eco Memories crafts souvenirs from recycled plastic, turning
waste into keepsakes that inspire eco-conscious living.`;

const textEffect = () => {
  return (
    <div>
      <TextGenerateEffect words={words} />
    </div>
  );
};

export default textEffect;
