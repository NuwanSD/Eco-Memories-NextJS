"üse client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

import Image from "next/image";
import { Separator } from "../components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

const MobileNav = () => {
  const [status, setStatus] = useState(false);

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu />
        </SheetTrigger>

        <SheetContent className="flex flex-col bg-white md:hidden text-xl">
          <SheetClose asChild>
            <Link
              href="/"
              className="logo uppercase text-3xl md:font-xl font-bold "
            >
              <Image src="/logo.svg" alt="logo" width={102} height={102} />
            </Link>
          </SheetClose>

          <Separator className="border border-gray-500 my-5" />

          <SheetClose asChild>
            <Link href="/" className="dropdown">
              Home
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/about" className="dropdown">
              About
            </Link>
          </SheetClose>

          <div className="flex flex-col">
            <div className="flex justify-between items-center dropdown">
              <div>Location</div>
              {!status ? (
                <ChevronDown
                  onClick={() => setStatus(true)}
                  className=" cursor-pointer"
                />
              ) : (
                <ChevronUp
                  onClick={() => setStatus(false)}
                  className=" cursor-pointer"
                />
              )}
            </div>
            {status && (
              <div className="flex flex-col ml-5">
                <SheetClose asChild>
                  <Link href="/colombo" className="dropdown">
                    Colombo
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/galle-face" className="dropdown">
                    Galle Face
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/galle" className="dropdown">
                    Galle
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/kandy" className="dropdown">
                    Kandy
                  </Link>
                </SheetClose>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
