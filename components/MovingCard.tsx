"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const images = [
  { img: "/assets/images/colombo-1.jpg" },
  { img: "/assets/images/colombo-2.jpg" },
  { img: "/assets/images/galle-1.jpg" },
  { img: "/assets/images/sigiriya-1.jpg" },
  { img: "/assets/images/galle-face-3.jpg" },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={images} direction="right" speed="slow" />
    </div>
  );
}
