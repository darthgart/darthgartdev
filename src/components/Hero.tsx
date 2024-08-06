"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[82vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="sm:containerHero mx-auto h-full mt-24">
        <div className="uppercase font-extrabold text-center mb-4 text-primary text-4xl tracking-[4px] sm:text-8xl sm:tracking-[-12px]">
          SOFTWARE DEVELOPER
        </div>
        {/* <div className="container mx-auto">
        </div> */}
      </div>
    </section>
  );
}
