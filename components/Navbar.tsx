"use client";

import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar w-full gap-5 py-6 md:px-20 px-12 border border-b bg-slate-100 font-semibold">
      <nav className="wrapper">
        <div className="flex-center flex-between">
          <div className="flex">
            <Link
              href="/"
              className="logo uppercase text-2xl md:font-xl font-bold"
            >
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
