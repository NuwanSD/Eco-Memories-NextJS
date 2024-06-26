"use client";

import React from "react";

import { TextGenerateEffect } from "../../../components/ui/text-generate-effect";

const words = `Plastics harm ecosystems worldwide, demanding immediate action to
reduce usage and promote sustainability. Every small change in
consumption habits can make a significant difference in protecting
our planet's health.`;

const ParagraphEffect = () => {
  return (
    <div className=" paragraph-text">
      <TextGenerateEffect words={words} />
    </div>
  );
};

export default ParagraphEffect;
