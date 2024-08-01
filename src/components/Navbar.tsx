'use client'
import { Button } from "./ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "next-themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
  
export default function Navbar() {;
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: any, id: any) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  const logoSrc = theme === "dark" ? "/dglogo-dark.svg" : "/dglogo-light.svg";

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-blur-20 to-transparent backdrop-filter backdrop-blur-md z-50">
    <nav className="flex container mx-auto h-full w-full items-center justify-between p-4 md:p-8 text-2xl">
      <div className="hidden sm:flex items-center">
          <Image 
            alt="Portrait of Edgar Sánchez"
            src= {logoSrc}
            width={40}
            height={40}
            priority
          />
          <div className="ml-4 hidden sm:flex flex-col items-left leading-none text-lg">
            <span>DARTH</span>
            <span>GART</span>
          </div>
      </div>
      <div className="flex items-center justify-center justify hidden sm:flex">
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'work')}>Work</Button>
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'about')}>About</Button>
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'blog')}>Blog</Button>
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'contact')}>Contact</Button>
        <ModeToggle />
      </div>
      <div className="flex lg:hidden">
        <Image 
          alt="Portrait of Edgar Sánchez"
          src= {logoSrc}
          width={40}
          height={40}
          priority
        />
        <Sheet>
          <SheetTrigger asChild className="">
            <Button variant="none" aria-label="Menu">
              <HamburgerMenuIcon className="size-8 mt-10 mr-5"/>
            </Button>
          </SheetTrigger>
          <SheetContent className="space-y-3 flex flex-col items-left grid-cols-1">
              <ModeToggle/>
              <Button variant="link"  className="text-lg mt-14" onClick={(e) => handleClick(e, 'work')}>Work</Button>
              <Button variant="link"  className="text-lg" onClick={(e) => handleClick(e, 'about')}>About</Button>        
              <Button variant="link"  className="text-lg" onClick={(e) => handleClick(e, 'blog')}>Blog</Button>    
              <Button variant="link"  className="text-lg" onClick={(e) => handleClick(e, 'contact')}>Contact</Button>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
  );
}