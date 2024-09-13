"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Android,
  Html,
  Java,
  JavaScript,
  NextJS,
  Python,
  TypeScript,
  Node,
  ReacJs,
  MongoDB,
  Postgres,
  Docker,
  MySql,
  Dynamics,
} from "./icons";

export default function About() {
  var actualDate = new Date();
  var actualYear = actualDate.getFullYear();
  return (
    <section>
      <section className="container mx-auto pt-10 sm:mt-30 ">
        <div>
          <h1 className="text-2xl mb-5 sm:m-10">
            ¡Hola, Mi nombre es Edgar Sanchez, bienvenido a mi web!
          </h1>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-gray-600">
          <div className="text-lg text-justify sm:mx-10 bg-red-600">
            <p>
              Con {actualYear - 1999} años, actualmente trabajo como
              desarrollador en una destacada empresa del sector automotriz, con
              sede en Tarragona, España.
            </p>
          </div>
          <div className="text-lg text-justify sm:mx-10 bg-green-600">
            <p>
              Soy un desarrollador apasionado con {actualYear - 2023} año de
              experiencia, que emplea investigación, datos y un diseño
              meticuloso para desarrollar soluciones escalables.
            </p>
          </div>
          <div className="text-lg text-justify items-center sm:mx-10 bg-blue-600">
            <div className="mb-5">
              Aquí os dejo mi correo de contacto y mis redes sociales
            </div>
            <Button variant="default" className="text-xl w-full ">
              <a href="mailto:darthgart.dev@gmail.com">
                darthgart.dev@gmail.com
              </a>
            </Button>
            <br />
            <br />
            <div className="flex justify-between gap-x-6 sm:gap-x-3 ">
              <Link href="https://www.github.com/darthgart">
                <Button variant="default" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/edgar-sanchez-gimenez-365739234/">
                <Button variant="default" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.25,3H5.75C4.233,3,3,4.233,3,5.75v12.5C3,19.767,4.233,21,5.75,21h12.5c1.517,0,2.75-1.233,2.75-2.75V5.75	C21,4.233,19.767,3,18.25,3z M9.237,16H7.063V9.962h2.174V16z M8.11,8.857C7.445,8.857,7,8.412,7,7.819	c0-0.589,0.445-1.033,1.186-1.033c0.665,0,1.105,0.445,1.105,1.033C9.291,8.412,8.851,8.857,8.11,8.857z M17,16h-2.107v-3.302	c0-0.912-0.562-1.123-0.773-1.123c-0.211,0-0.912,0.144-0.912,1.123c0,0.144,0,3.302,0,3.302h-2.174V9.962h2.174v0.845	c0.283-0.494,0.845-0.845,1.896-0.845S17,10.807,17,12.698V16z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
              <Link href="https://www.instagram.com/edsagi_99/">
                <Button variant="default" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
              <Link href="https://twitter.com/darthgart">
                <Button variant="default" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,7v10	c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V7c0-2.209,1.791-4,4-4h10C19.209,3,21,4.791,21,7z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto sm:mt-30 ">
        <header className="flex items-center justify-center mb-14 sm:mb-14 md:mb-24" />
        <div className="flex items-center justify-center mb-8 text-center">
          Algunas de las herramientas que he utilizado
        </div>
        <div className="space-y-3 flex flex-col items-center justify-center">
          <div className="relative gap-8 sm:gap-4 md:gap-6 lg:gap-8 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 items-center justify-center">
            <SkillIcon icon={Java} label="Java" color="hover:text-red-500" />
            <SkillIcon
              icon={JavaScript}
              label="JavaScript"
              color="hover:text-yellow-500"
            />
            <SkillIcon
              icon={TypeScript}
              label="TypeScript"
              color="hover:text-blue-300"
            />
            <SkillIcon
              icon={Html}
              label="HTML5"
              color="hover:text-orange-500"
            />
            <SkillIcon
              icon={Python}
              label="Python"
              color="hover:text-teal-500"
            />
            <SkillIcon
              icon={NextJS}
              label="Next.js"
              color="hover:text-gray-300"
            />
            <SkillIcon
              icon={Node}
              label="Node.js"
              color="hover:text-green-500"
            />
            <SkillIcon
              icon={ReacJs}
              label="React"
              color="hover:text-blue-500"
            />
            <SkillIcon
              icon={Android}
              label="Android"
              color="hover:text-lime-500"
            />
            <SkillIcon
              icon={MongoDB}
              label="MongoDB"
              color="hover:text-green-500"
            />
            <SkillIcon icon={MySql} label="MySQL" color="hover:text-blue-500" />
            <SkillIcon
              icon={Postgres}
              label="PostgreSQL"
              color="hover:text-gray-500"
            />
            <SkillIcon
              icon={Docker}
              label="Docker"
              color="hover:text-sky-500"
            />
            <SkillIcon
              icon={Dynamics}
              label="Dynamics"
              color="hover:text-violet-500"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

const SkillIcon = ({ icon: Icon, label, color }: any) => (
  <div className="flex flex-col items-center justify-center">
    <Icon className={`text-5xl ${color}`} aria-label={label} />
    <span className="text-sm mt-2">{label}</span>
  </div>
);
