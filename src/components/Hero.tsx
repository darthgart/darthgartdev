'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[82vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      {/* <div className="container mx-auto h-full mt-24">
          <div className="text-sm uppercase font-bold text-center text-primary mt-10 text-5xl sm:text-8xl sm:tracking-[10px]">
            SOFTWARE DEVELOPER
          </div>
          <div className="flex items-center w-full my-5 space-x-4">
              <div className="flex-grow h-px bg-stone-200"></div>
            </div>
          <div className="text-sm uppercase font-bold text-center mb-4 text-primary text-3xl sm:text-5xl sm:tracking-[30px]">
            EDGAR SANCHEZ GIMENEZ
          </div>
      </div> */}
    </section>
  );
}
