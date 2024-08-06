"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CircleIcon } from "@radix-ui/react-icons";

export default function About() {
  var actualDate = new Date();
  var actualYear = actualDate.getFullYear();
  return (
    <section className="container mx-auto">
        <h1 className="text-2xl m-10">¡Hola, Mi nombre es Edgar Sanchez, bienvenido a mi web!</h1>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="text-lg text-justify sm:mx-10">
                <p>
                 Con {actualYear-1999} años, actualmente trabajo como desarrollador en una destacada empresa del sector automotriz, con sede en Tarragona, España.
                </p>
            </div>
            <div className="text-lg text-justify sm:mx-10">
                <p>
                 Soy un desarrollador apasionado con {actualYear-2023} año de experiencia, que emplea investigación, datos y un diseño meticuloso para desarrollar soluciones escalables.
                </p>
            </div>
            <div className="text-lg text-justify items-center sm:mx-10">
                <Button variant="default" className="text-xl">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-spacing">
                        <path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                    <a href="mailto:darthgart.dev@gmail.com">darthgart.dev@gmail.com</a>
                </Button>
                <br/><br/>
                {/* <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

                </div>     */}
                <div className='flex justify-between gap-x-6 sm:gap-x-3 '>
                    <Link href="https://www.github.com/darthgart">
                    <Button variant="default" size="lg"> 
                        FB
                    </Button> 
                    </Link>
                    <Link href="https://www.linkedin.com/in/edgar-sanchez-gimenez-365739234/">
                    <Button variant="default" size="lg"> 
                        LK
                    </Button> 
                    </Link>
                    <Link href="https://www.instagram.com/edsagi_99/">
                    <Button variant="default" size="lg"> 
                        IG
                    </Button> 
                    </Link>
                    <Link href="https://twitter.com/darthgart">
                    <Button variant="default" size="lg"> 
                        X
                    </Button> 
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
