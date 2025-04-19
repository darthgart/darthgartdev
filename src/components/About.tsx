"use client";

import React from "react";
import { motion } from "framer-motion";
import { calculateAge } from "@/utils/calculateAge";

export default function About() {
  const birthDate = new Date(1999, 4, 6);
  const age = calculateAge(birthDate);
  return (
    <section>
     <motion.div
        className="flex justify-center items-center mt-12 rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="flex-grow flex flex-col items-center xl:py-24 xl:pt-28">
          <div className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-xl md:mx-10 lg:mx-auto">    
            <div className="flex justify-center items-center">
              <img src="./edgar.png" alt="funko me" width={"350px"} height={"250px"} />
            </div>
            <motion.div
              className="flex flex-col justify-normal items-start p-4 space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h2 
                className="text-2xl font-bold motion-safe:animate-text-reveal" 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                Edgar Sanchez (@darthgart)
              </motion.h2>

              <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                ¡Hola! Mi nombre es Edgar, soy de Tarragona, tengo {age} años y soy Desarrollador Full Stack.
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                Con experiencia en tecnologías tanto web como multiplataforma, actualmente trabajo en una empresa del sector automovilístico, desarrollando aplicaciones y servicios.
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                Además de la tecnología, me apasiona el arte, las artes marciales y la buena música. Si no estoy con algún proyecto entre manos, puedes encontrarme creando y haciendo tatuajes en mi tiempo libre.
              </motion.p>
            </motion.div>
          </div>
          
          <motion.div
            className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-lg md:mx-10 lg:mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.div 
              className="flex flex-col justify-normal items-start p-4 rounded-lg space-y-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h2 className="text-2xl font-bold motion-safe:animate-text-reveal">ESTUDIOS</h2>
              <ul>
                <motion.li 
                  className="relative border-l py-4 pl-4 pr-2 last:border-b-0"
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                  <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                    <span className="rounded-full border bg-background px-2 py-1 text-xs font-bold">
                      2022 - 2024
                    </span>
                    <span className="text-xs font-medium">INS Vidal i Barraquer</span>
                  </div>
                  <div className="flex flex-col pt-10">
                    <h2 className="font-bold">CFGS Desarrollo de Aplicaciones Multiplataforma</h2>
                    <p>En 2023 accedí al CFGS en DAM donde me formé como Desarrollador Multiplataforma, creando apps móviles para Android utilizando tecnologías como <b>Java</b>, <b>Python</b> y <b>C#</b>.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>


            <motion.div 
              className="flex flex-col justify-normal items-start p-4 rounded-lg space-y-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h2 className="text-2xl font-bold motion-safe:animate-text-reveal">EXPERIENCIA</h2>
              <ul>
                <motion.li 
                  className="relative border-b border-l py-4 pl-4 last:border-b-0"
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                  <div className="absolute -left-2 top-3 flex items-center space-x-2 md:-left-4">
                    <span className="whitespace-nowrap rounded-full border bg-background px-2 py-1 text-xs font-bold">
                      2023 - ACTUAL
                    </span>
                    <span className="text-xs font-medium">Grup Oliva Motor</span>
                  </div>
                  <div className="flex flex-col pt-10">
                    <h2 className="font-bold">Full Stack Junior Developer</h2>
                    <p>Durante mi período de estudio, realicé mis prácticas como Auxiliar de Programación en Grup Oliva Motor. Aquí amplié mis conocimientos al trabajar en el desarrollo de aplicaciones y servicios web, y donde me estoy formando como Desarrollador Full Stack.</p>
                    <ul>
                      <li><b>Frontend:</b> React, Next.js, TypeScript, JavaScript, TailwindCSS</li>
                      <li><b>Backend:</b> Node.js, Python, MongoDB</li>
                    </ul>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </section>
      </motion.div>
    </section>
  );
}

const SkillIcon = ({ icon: Icon, label, color }: any) => (
  <div className="flex flex-col items-center justify-center">
    <Icon className={`text-5xl ${color}`} aria-label={label} />
    <span className="text-sm mt-2">{label}</span>
  </div>
);
