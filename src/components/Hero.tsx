"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin, Xtwitter } from "./icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CircleIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Form } from "./ui/form";
import { Textarea } from "./ui/textarea";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen xl:py-24 xl:pt-28">
      <motion.div
        className="flex justify-center items-center mt-12 shadow-xl rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          alt="imgPortadat"
          src="/portada.png"
          width={180}
          height={180}
          priority
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-xl rounded-2xl max-w-96 mx-8 mt-8">
          <CardHeader className="relative">
            <div className="font-extralight text-center my-2 text-primary text-4xl sm:text-4xl">
              Edgar Sanchez
            </div>
            <div className="p-1 text-justify">
              <CardDescription>
                Hola, soy desarrollador Full Stack Junior, enfocado en crear
                experiencias digitales eficientes, funcionales y siempre
                explorando nuevas tecnologías.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {/* <Button variant="default" className="w-full mb-5">
              <a href="mailto:darthgart.dev@gmail.com">
                darthgart.dev@gmail.com
              </a>
            </Button> */}
            <Link href="/contact">
              <Button variant="default" className="w-full mb-5">
                darthgart.dev@gmail.com
              </Button>
            </Link>
            {/* <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="w-full mb-5">
                  darthgart.dev@gmail.com
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>¿Hablamos?</DialogTitle>
                  <DialogDescription>
                    Puedes rellenar el siguiente formulario, en cuanto lea el
                    mensaje me pondre en contacto!
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-left">
                      Nombre
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-left">
                      Email
                    </Label>
                    <Input id="email" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="message" className="text-left">
                      Mensaje
                    </Label>
                    <Textarea id="mesage" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Enviar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog> */}
            <div className="flex w-full justify-center gap-x-8 sm:gap-x-12">
              <Link href="https://www.github.com/darthgart">
                <Button variant="none" size="box">
                  <Github />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/edgar-sanchez-gimenez-365739234/">
                <Button variant="none" size="box">
                  <Linkedin />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/edsagi_99/">
                <Button variant="none" size="box">
                  <Instagram />
                </Button>
              </Link>
              <Link href="https://twitter.com/darthgart">
                <Button variant="none" size="box">
                  <Xtwitter />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
