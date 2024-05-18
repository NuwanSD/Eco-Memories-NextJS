"use client";

import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { id: 1, imgUrl: "/assets/images/colombo-1.jpg", alt: "colombo-1" },
  { id: 2, imgUrl: "/assets/images/colombo-2.jpg", alt: "colombo-2" },
  { id: 3, imgUrl: "/assets/images/galle-1.jpg", alt: "galle-1" },
  { id: 4, imgUrl: "/assets/images/galle-face-1.jpg", alt: "galle-face-1" },
  { id: 5, imgUrl: "/assets/images/galle-face-3.jpg", alt: "galle-face-3" },
  { id: 6, imgUrl: "/assets/images/sigiriya-1.jpg", alt: "sigiriya-1" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="rounded-xl"
            key={image.id}
          />
        ))}
      </Carousel>

      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;
