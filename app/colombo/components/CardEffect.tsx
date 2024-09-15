"use client";

import { cn } from "../../../lib/utils";

export function CardDemo() {
  return (
    <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
      <div className=" w-full group/card">
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4",
            "bg-[url(https://media.istockphoto.com/id/1164909480/photo/bangkok-city-on-sunset.jpg?s=1024x1024&w=is&k=20&c=zTmXjiPeyfrRz1vGsiuZDBvL2LcYIE6fmb4XlJf7UvI=)] bg-cover"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

          <div className="text content flex flex-col">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Colombo, Sri Lanka
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Join us in Colombo to help reduce plastic waste and protect our
              vibrant cityscape. Every action counts!
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full group/card">
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4",
            "bg-[url(https://media.istockphoto.com/id/1181382649/photo/colombo-sri-lanka-december-05-2018-view-of-the-colombo-city-skyline-with-modern-architecture.jpg?s=1024x1024&w=is&k=20&c=nkdFqLITaHjmp7CEy-P5HV__wMHjLlEGy4sMkqOqXOM=)] bg-cover"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

          <div className="text content flex flex-col">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Colombo, Sri Lanka
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Join us in Colombo to help reduce plastic waste and protect our
              vibrant cityscape. Every action counts!
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full group/card">
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4",
            "bg-[url(https://media.istockphoto.com/id/641627246/photo/aerial-skyline-view-of-hoan-kiem-lake-area-at-twilight-hoan-kiem-is-center-of-hanoi-city-hanoi.jpg?s=1024x1024&w=is&k=20&c=yecRtE1_ssATswWVaYHEyAbBGUhKPVUoSdE9vL4EuRM=)] bg-cover"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

          <div className="text content flex flex-col">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Colombo, Sri Lanka
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Join us in Colombo to help reduce plastic waste and protect our
              vibrant cityscape. Every action counts!
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full group/card">
        <div
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4",
            "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
          )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

          <div className="text content flex flex-col">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              Colombo, Sri Lanka
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Join us in Colombo to help reduce plastic waste and protect our
              vibrant cityscape. Every action counts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
