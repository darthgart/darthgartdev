'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[82vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto h-full">
          <div className="text-sm uppercase font-bold text-center mb-4 text-primary mt-10 text-5xl sm:text-8xl tracking-[4px]">
            SOFTWARE DEVELOPER
          </div>
      </div>
    </section>
  );
}
