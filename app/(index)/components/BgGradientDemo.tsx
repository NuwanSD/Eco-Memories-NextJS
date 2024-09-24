"use client";
import React from "react";

import { BackgroundGradient } from "../../../components/ui/background-gradient";

import Image from "next/image";

import Link from "next/link";

const CardProvider = [
  {
    id: 1,
    title: "Colombo",
    description:
      "Join us in Colombo to help reduce plastic waste and protect our vibrant cityscape. Every action counts!",
    imgUrl: "/assets/images/colombo-1.jpg",
    vote: "",
    link: "/colombo",
  },
  {
    id: 2,
    title: "Sigiriya",
    description:
      "Join us in Sigiriya to help reduce plastic waste and protect our vibrant cityscape. Every action counts!!",
    imgUrl: "/assets/images/sigiriya-1.jpg",
    vote: "",
    link: "",
  },
  {
    id: 3,
    title: "Galle",
    description:
      "Join us in Galle to help reduce plastic waste and protect our vibrant cityscape. Every action counts!",
    imgUrl: "/assets/images/galle-1.jpg",
    vote: "",
    link: "",
  },
  {
    id: 4,
    title: "Galle face",
    description:
      "Join us in Galle face to help reduce plastic waste and protect our vibrant cityscape. Every action counts!",
    imgUrl: "/assets/images/galle-face-3.jpg",
    vote: "",
    link: "",
  },
];

export function BackgroundGradientDemo() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {CardProvider.map((Item) => (
        <BackgroundGradient
          key={Item.id}
          className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
        >
          <div>
            <Image
              src={`${Item.imgUrl}`}
              alt={Item.title}
              height="512"
              width="512"
              className="object-contain rounded-xl"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {Item.title}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {Item.description}
            </p>
            <button className="rounded-full p-5 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <Link href={Item.link}>See more</Link>
            </button>
          </div>
        </BackgroundGradient>
      ))}
    </div>
  );
}
