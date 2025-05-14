"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin, Xtwitter } from "./icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10 rounded-xl">
        <motion.div
          className="relative w-fit"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent-foreground via-accent to-foreground blur-2xl opacity-50 z-[-1]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <Image
            alt="imgPortada"
            src="/portada.png"
            width={150}
            height={150}
            priority
            className="rounded-full z-10 relative"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col w-full gap-4 text-center sm:text-start">
            <h1 className="text-foreground font-light text-4xl sm:text-4xl">
              Edgar Sánchez
            </h1>
            <p className="text-primary text-3xl sm:text-2xl font-light">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Frontend Lover",
                  "Node.js Developer",
                  "Tech Explorer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex justify-center mt-5 gap-x-5 sm:gap-x-20 px-8 rounded-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://www.github.com/darthgart">
          <Button variant="none">
            <Github />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/edgar-sanchez-gimenez-365739234/">
          <Button variant="none">
            <Linkedin />
          </Button>
        </Link>
        <Link href="https://www.instagram.com/edsagi_99/">
          <Button variant="none">
            <Instagram />
          </Button>
        </Link>
        <Link href="https://twitter.com/darthgart">
          <Button variant="none">
            <Xtwitter />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
