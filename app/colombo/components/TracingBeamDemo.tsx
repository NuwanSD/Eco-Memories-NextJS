"use client";
import React from "react";
//import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p className={twMerge("text-xl mb-4")}>{item.title}</p>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Colombo City, Sri Lanka.",
    description: (
      <div className=" space-y-2">
        <p>
          Colombo is the executive and judicial capita and largest city of Sri
          Lanka by population. According to the Brookings Institution, the
          Colombo metropolitan area has a population of 5.6 million, and 752,993
          in the Municipality. It is the financial centre of the island and a
          tourist destination. It is located on the west coast of the island and
          adjacent to the Greater Colombo area which includes Sri
          Jayawardenepura Kotte, the legislative capital of Sri Lanka, and
          Dehiwala-Mount Lavinia. Colombo is often referred to as the capital
          since Sri Jayawardenepura Kotte is itself within the urban/suburban
          area of Colombo. It is also the administrative capital of the Western
          Province and the district capital of Colombo District. Colombo is a
          busy and vibrant city with a mixture of modern life, colonial
          buildings and monuments.
        </p>
        <p>
          It was made the capital of the island when Sri Lanka was ceded to the
          British Empire in 1815, and its status as capital was retained when
          the nation became independent in 1948. In 1978, when administrative
          functions were moved to Sri Jayawardenepura Kotte, Colombo was
          designated as the commercial capital of Sri Lanka.
        </p>
      </div>
    ),
    badge: "History of Colombo City",
    image: "/assets/images/img (4).jpg",
  },
];
