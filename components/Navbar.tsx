"use client";

import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="navbar w-full gap-5 py-6 md:px-20 px-6 text-cyan-950 font-medium border-b">
      <nav className="wrapper">
        <div className="flex-center flex-between">
          <div className="flex">
            <Link
              href="/"
              className="logo uppercase text-2xl md:font-xl font-bold"
            >
              <p className="flex">
                Eco- <span>Memories</span>
              </p>
            </Link>
          </div>

          <div className="navitem flex gap-2">
            {/*Desktop Navigation*/}
            <div className="items-center space-x-4 xl:text-lg md:flex hidden font-bold">
              <Link href="/" className="hover:text-green-500">
                Home
              </Link>
              <Link href="/about" className="hover:text-green-500">
                About
              </Link>
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
