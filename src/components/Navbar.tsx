"use client";
import { Button } from "./ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "next-themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    // const handleScroll = () => {
    //   const currentScrollPos = window.scrollY;

    //   if (currentScrollPos > prevScrollpos) {
    //     // Scrolling down
    //     setScrollingDown(true);
    //   } else {
    //     // Scrolling up
    //     setScrollingDown(false);
    //   }

    //   prevScrollpos = currentScrollPos;
    // };
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (currentScrollPos > 100 && prevScrollpos < currentScrollPos) {
          navbar.style.top = "-100px";
        } else {
          navbar.style.top = "0";
        }
        prevScrollpos = currentScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  const logoSrc =
    resolvedTheme === "light" ? "/dglogo-light.svg" : "/dglogo-dark.svg";

  return (
    //   className="fixed w-full bg-gradient-to-b from-blur-20 to-transparent backdrop-blur-md z-50"
    <header
      id="navbar"
      className="fixed w-full bg-background z-50 transition-all duration-300"
    >
      <motion.div
        className="sm:container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex container mx-auto h-full w-full items-center justify-between p-4 md:p-8">
          <div className="hidden sm:flex items-center relative group">
            {/* Logo */}
            <Link href="/">
              <Image
                alt="Logo darthgart"
                src={logoSrc}
                width={40}
                height={40}
                priority
              />
            </Link>
            <div className="ml-4 font-light flex flex-col items-left leading-none text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300 ease-in-out">
              <span>DARTH</span>
              <span>GART</span>
            </div>
          </div>
          <div className="items-center justify-center justify hidden sm:flex">
            <Link href="/about">
              <Button
                variant="link"
                className="text-lg font-light"
                data-text="About"
              >
                About
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="link"
                className="text-lg font-light"
                data-text="Work"
              >
                Work
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="link"
                className="text-lg font-light"
                data-text="Blog"
              >
                Blog
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="link"
                className="text-lg font-light"
                data-text="Contact"
              >
                Contact
              </Button>
            </Link>
            <ModeToggle />
          </div>
          {/* Mobile View */}
          <div className="flex sm:hidden items-center justify-between w-full">
            <Link href="/">
              <Image
                alt="Logo darthgart"
                src={logoSrc}
                width={40}
                height={40}
                className="mt-5 size-11"
                priority
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild className="">
                <Button variant="none" aria-label="Menu">
                  <HamburgerMenuIcon className="size-9 mt-5 -mr-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="space-y-3 flex flex-col items-left grid-cols-1 ">
                <ModeToggle />
                <Link href="/about">
                  <Button variant="link" className="text-lg font-light mt-14">
                    About
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="link" className="text-lg font-light">
                    Work
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="link" className="text-lg font-light">
                    Blog
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="link" className="text-lg font-light">
                    Contact
                  </Button>
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
