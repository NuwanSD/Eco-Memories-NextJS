import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import FormDialog from "../../components/FormDialog";
import HeroCarousel from "../../components/HeroCarousel";
import CardContent from "../../components/CardContext";
import Map from "../../components/MapProvider";
import Accordian from "./components/accordianProvider";

const Home = () => {
  return (
    <>
      {/*Hero section*/}
      <section className="px-6 md:px-20 py-20">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Converting Plastic Waste into Souvnirs:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <div className="flex">
              <h1 className="head-text flex">
                Eco-<span>Memories</span>
              </h1>
            </div>
            <p className="mt-6">
              "Eco Memories crafts souvenirs from recycled plastic, turning
              waste into keepsakes that inspire eco-conscious living."
            </p>
          </div>
          <HeroCarousel />
        </div>
      </section>

      {/*Do you know section*/}
      <section className="px-6 md:px-20 py-20">
        <div className="text-center">
          <h1 className="section-text">Do You Know?</h1>
          <div>
            <p className=" paragraph-text mt-5">
              Plastics harm ecosystems worldwide, demanding immediate action to
              reduce usage and promote sustainability. Every small change in
              consumption habits can make a significant difference in protecting
              our planet's health.
            </p>
          </div>
        </div>
      </section>

      {/* Available other places*/}
      <section className="px-6 md:px-20 py-20">
        <p className="section-text text-center">We Are Here Available</p>
        <div className="flex mt-10">
          <CardContent />
        </div>
      </section>

      {/*Feedback section*/}
      <section className="px-6 md:px-20 py-20">
        <div className="feedback">
          <p className="section-text text-center">
            Give Your Valubale Feedback
          </p>
          <div className=" flex mt-10 ">
            <div className="flex max-xl:flex-col gap-16">
              <FormDialog /> {/*Feedback from*/}
              <div className="space-y-4 flex flex-col justify-center xl:w-1/2">
                <p>
                  Plastic pollution is a global crisis that severely impacts our
                  environment and health. Discarded plastics accumulate in
                  landfills, rivers, and oceans, where they can persist for
                  centuries. Marine animals often mistake plastic debris for
                  food, leading to ingestion and entanglement, which can cause
                  injury or death. Over time, plastics break down into
                  microplastics that infiltrate the food chain, posing
                  significant risks to wildlife and humans. To mitigate these
                  effects, we must adopt sustainable practices such as reducing
                  single-use plastics, increasing recycling efforts, and
                  supporting eco-friendly products and policies.
                </p>
                <p>
                  Communities play a crucial role in combating plastic
                  pollution. By participating in local clean-up events,
                  implementing educational programs, and advocating for systemic
                  changes, we can make a significant difference. Encouraging the
                  use of reusable bags, bottles, and containers can drastically
                  cut down on plastic waste. Supporting businesses that
                  prioritize sustainable packaging and reducing our reliance on
                  disposable plastics are vital steps towards a healthier
                  planet. Every small action, when multiplied across
                  communities, contributes to a larger impact, helping to
                  preserve our environment for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Reviews*/}
      <section className="px-6 md:px-20 py-20">
        <div>
          <p className="section-text text-center">Something You Need to Know</p>
          <Accordian />
        </div>
      </section>
      {/*google map*/}
      <section className="px-6 md:px-20 py-20">
        <div>
          <p className="section-text text-center">Find US</p>
          <div className="mt-6 flex max-xl:flex-col gap-10 justify-between">
            <div className="w-full">
              <Map />
            </div>
            <div className="flex flex-col xl:w-1/3 bg-[#F2F4F7] rounded-xl px-5 py-5 justify-center">
              <p className="paragraph-text font-bold">Follow US</p>
              <Link href="/">
                <span className="flex items-center gap-5 pt-3">
                  <FaFacebook />
                  Facebook
                </span>
              </Link>
              <Link href="/">
                <span className="flex items-center gap-5 pt-3">
                  <FaInstagram />
                  Instagram
                </span>
              </Link>
              <Link href="/">
                <span className="flex items-center gap-5 pt-3">
                  <FaYoutube />
                  YouTube
                </span>
              </Link>
              <Link href="/">
                <span className="flex items-center gap-5 pt-3">
                  <FaPinterest />
                  Pinterest
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
