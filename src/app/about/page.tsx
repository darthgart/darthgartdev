import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
} from "@/components/icons";
import { calculateAge } from "@/utils/calculateAge";
import React from "react";
import Image from "next/image";

export default function About() {
  const birthDate = new Date(1999, 4, 6);
  const age = calculateAge(birthDate);
  const images = ["/mountain.jpg", "/rome.jpg", "/snow.jpg", "/tuioyop.jpg"];

  return (
    <main className="min-h-screen flex flex-col mt-28 sm:mt-24 xl:mt-0">
      <section className="flex-grow flex flex-col items-center xl:py-24 xl:pt-28">
        <div className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-lg md:mx-10 lg:mx-auto">
          <div className="flex justify-center items-center">
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="w-full">
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden relative">
                          <Image
                            src={src}
                            alt="carousel images"
                            fill
                            className="absolute inset-0 object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:block" />
              <CarouselNext className="hidden sm:block" />
            </Carousel>
          </div>
          <div className="flex flex-col justify-center items-start space-y-4">
            <div>
              <h2 className="text-2xl font-bold">Edgar Sanchez (@darthgart)</h2>
            </div>
            <p>
              ¡Hola! Mi nombre es Edgar, soy de Tarragona, tengo {age} años y
              soy Desarrollador Full Stack junior.
            </p>
            <p>
              Con experiencia en tecnologías tanto web como multiplataforma,
              actualmete trabajo en una empresa del sector automovilístico,
              desarrollando aplicaciones y servicios.
            </p>
            <p>
              Además de la tecnología, me apasiona el arte, las artes marciales,
              y la buena música. También disfruto creando y haciendo tatuajes en
              mi tiempo libre.
            </p>
          </div>
        </div>
        {/* <div className="flex items-center justify-center mb-8 text-center">
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
        </div> */}
        <div className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-lg md:mx-10 lg:mx-auto">
          <div className="flex flex-col justify-normal items-start space-y-4">
            <h2 className="text-2xl font-bold">ESTUDIOS</h2>
            <ul>
              <li className="relative border-l py-4 pl-4 pr-2 last:border-b-0">
                <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                  <span className="rounded-full border bg-background px-2 py-1 text-xs font-bold">
                    2022 - 2024
                  </span>
                  <span className="text-xs font-medium">
                    INS Vidal i Barraquer
                  </span>
                </div>
                <div className="flex flex-col pt-10">
                  <h2 className="font-bold">
                    CFGS Desarrollo de Aplicaciones Multiplataforma
                  </h2>
                  <p className="">
                    En 2023 accedí al CFGS en DAM donde me formé como
                    Desarrollador Multiplataforma, creando apps móviles para
                    android utilizando tecnologías como <b>Java</b>,
                    <b> Python</b> y <b>C#</b>.
                  </p>
                </div>
              </li>
              <li className="relative border-b border-l py-4 pl-4 pr-2 last:border-b-0">
                <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                  <span className="rounded-full border bg-background px-2 py-1 text-xs font-bold">
                    2024 - ACTUAL
                  </span>
                  <span className="text-xs font-medium">
                    IOC Institut Obert de Catalunya
                  </span>
                </div>
                <div className="flex flex-col pt-10">
                  <h2 className="font-bold">
                    CEFP Inteligencia Artificial y Big Data
                  </h2>
                  <p>
                    En 2024 accedí a la especialización en <b>IA</b> y{" "}
                    <b>Big Data</b> donde me estoy formando como especialista en
                    programación de sistemas inteligentes que optimizan la
                    gestión de la información y la explotación de datos masivos,
                    para garantizar el acceso a los datos de manera segura y
                    cumplir los criterios de accesibilidad, usabilidad y calidad
                    exigidas a los estándares establecidos, así como los
                    principios éticos y legales.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-normal items-start space-y-4">
            <h2 className="text-2xl font-bold">EXPERIENCIA</h2>
            <ul>
              <li className="relative border-b border-l py-4 pl-4 last:border-b-0">
                <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                  <span className="whitespace-nowrap rounded-full border bg-background px-2 py-1 text-xs font-bold">
                    2023 - ACTUAL
                  </span>
                  <span className="text-xs font-medium">Grup Oliva Motor</span>
                </div>
                <div className=" flex flex-col pt-10">
                  <h2 className="font-bold">Full Stack Junior Developer</h2>
                  <p>
                    Durante mi período en prácticas de la beca FP Dual, realizaé
                    mis prácticas como Desarrollador en Grup Oliva Motor. Aunque
                    mi especialización estaba orientada al Desarrollo de
                    Aplicaciones Multiplataforma, tuve la suerte de ampliar mis
                    conocimientos al trabajar también en el desarrollo de
                    aplicaciones y servicios web.
                  </p>
                  <ul>
                    <li>
                      <b>Frontend:</b> React, Next.js, TypeScript, JavaScript,
                      TailwindCss
                    </li>
                    <li>
                      <b>Backend:</b> Node.js, Python, MongoDB
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

const SkillIcon = ({ icon: Icon, label, color }: any) => (
  <div className="flex flex-col items-center justify-center">
    <Icon className={`text-5xl ${color}`} aria-label={label} />
    <span className="text-sm mt-2">{label}</span>
  </div>
);
