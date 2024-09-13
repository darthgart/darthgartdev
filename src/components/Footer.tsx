"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin, Xtwitter } from "./icons";
import { Card } from "./ui/card";

export default function Footer() {
  return (
    <footer className="mt-auto w-full flex flex-col items-center justify-center">
      <Card className="shadow-xl rounded-none w-full mx-8 mt-8">
        <p className="font-light text-xs text-center my-2">
          Copyright © <a href="https://www.darthgart.dev">darthgart.dev</a> All
          rights reserved.
        </p>
      </Card>
    </footer>
  );
}
