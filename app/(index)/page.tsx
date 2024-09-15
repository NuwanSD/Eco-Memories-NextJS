import React from "react";

import FormDialog from "../../components/FormDialog";

import Accordian from "./components/accordianProvider";

import ParagraphEffect from "./components/paraEffect";
import { ImagesSliderDemo } from "../../components/ImagesSlider";
import { LayoutGridDemo } from "../../components/LayoutGridDemo";
import { InfiniteMovingCardsDemo } from "../../components/MovingCard";
import { BackgroundGradientDemo } from "./components/BgGradientDemo";

const Home = () => {
  return (
    <>
      {/*Hero section*/}
      <section className="Hero">
        <div>
          <ImagesSliderDemo />
        </div>
      </section>

      {/*Do you know section*/}
      <section className="px-12 py-20 bg-green-200">
        <div className="text-center ">
          <h1 className="section-text">Do You Know?</h1>
          <div className="py-5">
            <ParagraphEffect />
          </div>
        </div>
      </section>

      {/*Card section*/}
      <section className="px-12 py-20">
        <p className="section-text text-center">We Are Available Here</p>
        <div className="flex mt-10 justify-center">
          <BackgroundGradientDemo />
        </div>
      </section>

      {/*Feedback section*/}
      <section className="px-12 py-20">
        <div className="feedback">
          <p className="section-text text-center">
            Give your valubale feedback
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

      <section className="px-12 py-20">
        <h1 className="section-text text-center">Trending destination</h1>
        <div className=" mt-10">
          <LayoutGridDemo />
        </div>
      </section>

      <section className="px-12 py-20">
        <div className="items-center justify-center">
          <p className="section-text text-center">You need to know</p>
          <Accordian />
        </div>
      </section>

      <section className="py-20 px-12">
        <InfiniteMovingCardsDemo />
      </section>
    </>
  );
};

export default Home;
