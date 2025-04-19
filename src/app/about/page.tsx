"use client";
import { calculateAge } from "@/utils/calculateAge";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const birthDate = new Date(1999, 4, 6);
  const age = calculateAge(birthDate);

  return (
    <main className="flex flex-col mt-28 p-5 sm:mt-24 xl:mt-0">
      <motion.div
        className="flex justify-center items-center rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="flex-grow flex flex-col items-center relative overflow-hidden text-white rounded-2xl xl:mt-28 shadow-xl text-background bg-gradient-to-br from-[#1e1e2f] via-[#2a2a40] to-[#1b1b2c]">
        <div className="absolute inset-0 opacity-30 blur-2xl bg-gradient-to-tr" />
          <div className="grid justify-between grid-cols-1 mx-5 lg:grid-cols-2 gap-10 p-4 max-w-screen-xl md:mx-10 lg:mx-auto z-10">
            <motion.div
              className="flex flex-col justify-normal items-start py-4 sm:px-4 space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.h2
                className="text-2xl font-bold motion-safe:animate-text-reveal"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Edgar Sanchez (@darthgart)
              </motion.h2>

              <motion.p
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                ¡Hola! Soy Edgar Sánchez, Desarrollador Full Stack con una
                pasión inagotable por crear soluciones digitales que realmente
                marcan la diferencia.
                <br /><br />
                Mi camino en el desarrollo comenzó de forma autodidacta, y tras
                sumergirme de lleno en este mundo, decidí consolidar mis
                conocimientos estudiando el CFGS de Desarrollo de Aplicaciones
                Multiplataforma (DAM). Desde entonces, no he dejado de aprender,
                experimentar y construir.
                <br /><br />
                Actualmente trabajo como Desarrollador Full Stack en el sector
                automovilístico, donde participo en proyectos web y de software
                a medida. También continúo formandome como dearrollador, aprendiendo
                y adaptándome a nuevas tecnologías, siempre buscando la mejor 
                experiencia de usuario y eficiencia técnica.
              </motion.p>
            </motion.div>

            <div className="flex justify-center items-center rounded-full">
              <Image src="/edgar.png" alt="Edgar Photo" width={400} height={400} />
            </div>
          </div>
        </section>
        <section></section>
      </motion.div>
      <motion.div
        className="flex flex-col justify-normal items-start p-4 space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h2
          className="text-2xl font-bold motion-safe:animate-text-reveal"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Pero no todo es programar ...
        </motion.h2>
        <motion.p
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                Disfruto del deporte artes y
              </motion.p>
      </motion.div>
    </main>
  );
}

const SkillIcon = ({ icon: Icon, label, color }: any) => (
  <div className="flex flex-col items-center justify-center">
    <Icon className={`text-5xl ${color}`} aria-label={label} />
    <span className="text-sm mt-2">{label}</span>
  </div>
);
