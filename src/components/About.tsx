"use client";

import React from "react";
import { motion } from "framer-motion";
import { calculateAge } from "@/utils/calculateAge";
import Image from "next/image";

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
              <Image src="/edgar.png" alt="funko me" width={350} height={250} />
            </div>
            {/* <motion.div
              className="flex flex-col justify-normal items-start p-4 space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
              }}
            > */}
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
            {/* </motion.div> */}
          </div>
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
