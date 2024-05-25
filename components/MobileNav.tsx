import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import Image from "next/image";
import { Separator } from "../components/ui/separator";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent className="flex flex-col bg-white md:hidden">
          <SheetClose asChild>
            <Link
              href="/"
              className="logo uppercase text-3xl md:font-xl font-bold "
            >
              Eco-Memories
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

          {/* <Link href="/analytics" className="dropdown">
            Anaylitcs
          </Link> */}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
