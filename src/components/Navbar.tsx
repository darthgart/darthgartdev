'use client'
import { Button } from "./ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
  
export default function Navbar() {;
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-blur-20 to-transparent backdrop-filter backdrop-blur-md z-50">
    <nav className="flex container mx-auto h-full w-full items-center justify-between p-4 md:p-8 text-2xl">
      <div className="flex items-center">
          <Image 
            alt="Portrait of Edgar Sánchez"
            src="/logo.svg"
            width={40}
            height={40}
            priority
          />
          <aside aria-label="Site Logo" className="ml-4 hidden sm:block">
            DARTHGART
          </aside> 
      </div>
      <div className="flex items-center justify-center justify hidden sm:flex">
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'work')}>Work</Button>
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'about')}>About</Button>
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'blog')}>Blog</Button>
        <Button variant="link" className="text-lg" onClick={(e) => handleClick(e, 'contact')}>Contact</Button>
        <ModeToggle />
      </div>
      <div className="flex sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="none" aria-label="Menu">
              *
            </Button>
          </SheetTrigger>
          <SheetContent className="space-y-3 flex flex-col items-left grid-cols-1">
              <Button variant="link"  className="text-lg text-left mt-14" onClick={(e) => handleClick(e, 'work')}>Work</Button>
              <Button variant="link"  className="text-lg" onClick={(e) => handleClick(e, 'about')}>About</Button>        
              <Button variant="link"  className="text-lg" onClick={(e) => handleClick(e, 'blog')}>Blog</Button>    
              <Button variant="link"  className="text-lg" onClick={(e) => handleClick(e, 'contact')}>Contact</Button>
            <ModeToggle />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
  );
}