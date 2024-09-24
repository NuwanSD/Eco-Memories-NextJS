"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen  w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="">
      <p className="font-bold text-4xl text-white">Nine Arch Bridge</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        It is located in Demodara, between Ella and Demodara railway stations.
        The surrounding area has seen a steady increase of tourism due to the
        bridge's architectural ingenuity and the profuse greenery in the nearby
        hillsides
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Kandy, Sri Lanka</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The city is situated in the midst of hills in the Kandy plateau, which
        crosses an area of tropical plantations, mainly tea. Kandy is both an
        administrative and religious city and the capital of the Central
        Province.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Galle Fort</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        the Bay of Galle on the southwest coast of Sri Lanka, was built first in
        1588 by the Portuguese, then extensively fortified by the Dutch during
        the 17th century from 1649 onwards
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Trincomalee</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Trincomalee District and major resort port city of Eastern Province, Sri
        Lanka. Located on the east coast of the island overlooking the
        Trincomalee Harbour, Trincomalee has been one of the main centres of Sri
        Lankan Tamil speaking culture on the island for nearly a millennium
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/assets/images/img (5).jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/assets/images/img (2).jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/assets/images/img (3).jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/assets/images/img (6).jpg",
  },
];
