import React from "react";
import { TracingBeamDemo } from "./components/TracingBeamDemo";
import { CardDemo } from "./components/CardEffect";
import { LayoutGridDemo } from "../../components/LayoutGridDemo";
import PhotoCard from "./components/PhotoCard";

const page = () => {
  return (
    <>
      <section className="pr-12 py-20">
        <h1 className=" section-text text-center">Colombo City</h1>
        <div className="w-full gap-2 mt-10 flex justify-center items-center">
          <div className="w-2/3">
            <TracingBeamDemo />
          </div>
          <div className="lg:flex w-1/3 hidden">
            <PhotoCard />
          </div>
        </div>
      </section>

      <section className=" px-12 py-20 bg-green-100">
        <h1 className="mb-10 section-text text-center">
          Trending Places in Colombo
        </h1>
        <CardDemo />
      </section>

      <section className="px-12 py-20 mb-10">
        <h1 className="section-text text-center">Trending Destination</h1>
        <div className=" mt-10">
          <LayoutGridDemo />
        </div>
      </section>
    </>
  );
};

export default page;
