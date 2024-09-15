"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

import Link from "next/link";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="navbar w-full gap-5 py-6 md:px-20 px-12 bg-green-200 font-semibold">
      <nav className="wrapper">
        <div className="flex-center flex-between">
          <div className="flex">
            <Link href="/" className="logo">
              <Image src="/logo.svg" alt="logo" width={102} height={102} />
            </Link>
          </div>

          <div className="navitem flex gap-2">
            {/*Desktop Navigation*/}
            <div className="items-center space-x-4 text-xl md:flex hidden">
              <Link href="/" className="">
                Home
              </Link>
              <Link href="/about" className="">
                About
              </Link>
              <Popover>
                <PopoverTrigger onClick={() => setVisible(true)}>
                  Location
                </PopoverTrigger>

                {visible && (
                  <PopoverContent className=" relative flex flex-col gap-5 bg-slate-100 drop-shadow-xl mt-2 font-semibold text-xl">
                    <div className=" absolute top-2 right-2">
                      <X
                        className=" hover:border-2 hover:border-black cursor-pointer"
                        onClick={() => setVisible(false)}
                      />
                    </div>

                    <Link href="/colombo" className="">
                      Colombo
                    </Link>
                    <Link href="/galle-face" className="">
                      Galle Face
                    </Link>
                    <Link href="/galle" className="">
                      Galle
                    </Link>
                    <Link href="/kandy" className="">
                      Kandy
                    </Link>
                  </PopoverContent>
                )}
              </Popover>

              {/* <Link href="/analytics" className="hover:text-green-500">
                Anaylitcs
              </Link> */}
            </div>

            {/*Mobile Navbar*/}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
