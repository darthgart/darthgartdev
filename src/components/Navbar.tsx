"use client";
import { Button } from "./ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "next-themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();

  const handleClick = (e: any, id: any) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const logoSrc = theme === "light" ? "/dglogo-light.svg" : "/dglogo-dark.svg";

  return (
    <header className="fixed w-full bg-gradient-to-b from-blur-20 to-transparent backdrop-blur-md z-50">
      <div className="sm:container">
        <nav className="flex container mx-auto h-full w-full items-center justify-between p-4 md:p-8">
          <div className="hidden sm:flex items-center">
            <Link href="/">
              <Image
                alt="Logo darthgart"
                src={logoSrc}
                width={40}
                height={40}
                priority
              />
            </Link>
            <div className="ml-4 hidden sm:flex flex-col items-left leading-none text-lg">
              <span>DARTH</span>
              <span>GART</span>
            </div>
          </div>
          <div className="items-center justify-center justify hidden sm:flex">
            <Link href="#about">
              <Button variant="link" className="text-lg">
                About
              </Button>
            </Link>
            <Link href="#work">
              <Button variant="link" className="text-lg">
                Work
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="link" className="text-lg">
                Blog
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="link" className="text-lg">
                Contact
              </Button>
            </Link>
            <ModeToggle />
          </div>
          <div className="flex sm:hidden items-center justify-between w-full">
            <Link href="/">
              <Image
                alt="Logo darthgart"
                src={logoSrc}
                width={40}
                height={40}
                className="mt-5 ml-5"
                priority
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild className="">
                <Button variant="none" aria-label="Menu">
                  <HamburgerMenuIcon className="size-8 mt-5 mr-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="space-y-3 flex flex-col items-left grid-cols-1">
                <ModeToggle />
                <Link href="#about">
                  <Button variant="link" className="text-lg mt-14">
                    About
                  </Button>
                </Link>
                <Link href="#work">
                  <Button variant="link" className="text-lg">
                    Work
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="link" className="text-lg">
                    Blog
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="link" className="text-lg">
                    Contact
                  </Button>
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
