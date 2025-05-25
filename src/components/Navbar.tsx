"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ModeToggle } from "@/components/ModeToggle"
import { useTheme } from "next-themes"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()
  const [ mounted, setMounted ] = useState(false)
  const buttons = [
    { label: "Sobre Mi", href: "/about" },
    { label: "Proyectos", href: "/work" },
    // { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contact" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])


  useEffect(() => {
    let prevScrollpos = window.scrollY
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const navbar = document.getElementById("navbar")

      if (navbar) {
        if (currentScrollPos > 10 && prevScrollpos < currentScrollPos) {
          navbar.style.top = "-100px"
        } else {
          navbar.style.top = "0"
        }
        prevScrollpos = currentScrollPos
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  const logoSrc =
    resolvedTheme === "light" ? "/dglogo-light.svg" : "/dglogo-dark.svg"

  return (
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
        <nav className=" flex container mx-auto h-full w-full items-center justify-between p-4 md:p-8">
          <div className="hidden sm:flex items-center relative group">
            <Link href="/">
              <Image
                alt="Logo"
                src={logoSrc}
                width={40}
                height={40}
                priority
              />
            </Link>
            <h1 className="ml-4 text-foreground font-light flex flex-col items-left leading-none text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300 ease-in-out">
              <span>DARTH</span>
              <span>GART<b className="text-primary">.dev</b></span>
            </h1>
          </div>
          <div className="items-center justify-center gap-2 hidden sm:flex">
            { buttons.map((button, index) => {
              const isActive = pathname == button.href
              return (
                <Link href={button.href} key={index}>
                    <Button
                      variant="link"
                      className={`text-lg text-foreground font-light hover-underline-animation ${
                      isActive ? "active-underline text-primary" : ""
                    }`}
                      data-text={button.label}
                    >
                      {button.label}
                    </Button>
                  </Link>
              )
              }
            )}
            <ModeToggle />
          </div>
          {/* Mobile View */}
          <div className="flex sm:hidden items-center justify-between w-full">
            <Link href="/">
              <Image
                alt="Logo"
                src={logoSrc}
                width={40}
                height={40}
                className="mt-5 size-11"
                priority
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="none" aria-label="Menu">
                  <HamburgerMenuIcon className="size-9 mt-5 -mr-3" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <ModeToggle />
                {buttons.map((button, index) => (
                   <Link href={button.href} key={index} className="mt-5 p-2 rounded-xl hover:bg-muted transition-colors">
                   <Button variant="none" className="text-lg font-light">
                     {button.label}
                   </Button>
                 </Link>
                ))}
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.div>
    </header>
  )
}
