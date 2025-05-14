"use client";
import { calculateAge } from "@/utils/calculateAge";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  const birthDate = new Date(1999, 4, 6);
  const age = calculateAge(birthDate);

  return (
    <main className="mt-28 px-6 xl:px-0 max-w-7xl mx-auto text-foreground">
      <motion.section
        className="bg-muted/30 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-border"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid lg:grid-cols-2 gap-10 p-8 md:p-16">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground">
              Hola, soy Edgar Sanchez
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Desarrollador Full Stack con una pasión inagotable por crear
              soluciones digitales que realmente marcan la diferencia.
              <br /><br />
              Empecé como autodidacta y consolidé mis conocimientos con el ciclo
              de DAM. Desde entonces, no he parado de aprender, crear y evolucionar.
              <br /><br />
            </p>
            <Link
              href="/work"
              className="w-full"
            >
              <Button
                className="w-full text-bold bg-primary text-primary-foreground 
                  transition-colors rounded-xl px-6 py-2
                  hover:bg-foreground"
              >
                IR A MIS PROYECTOS
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/edgar.png"
              alt="Edgar Sanchez"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Hobbies */}
      <motion.section
        className="p-5 sm:p-10 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-semibold text-primary">Pero no todo es desarrollo...</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          La tecnología me apasiona, pero también encuentro inspiración en otras áreas. 
          Practico artes marciales, hago tatuajes y disfruto creando desde diferentes perspectivas. 
          Además, la música rock y techno forma parte de mi día a día: me acompaña, me inspira y me 
          activa para afrontar cada reto.
        </p>
      </motion.section>

      {/* Estudios + Trabajo */}
      <motion.section
        className="grid lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Formación */}
        <div className="bg-muted/30 border border-border rounded-2xl p-8 shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Formación</h3>
          <div className="relative border-l border-primary/30 pl-6 space-y-10">
            <div className="relative">
              <h4 className="text-lg font-semibold text-primary">Autodidacta</h4>
              <p className="text-muted-foreground text-base">
                Empecé mi camino aprendiendo por cuenta propia, explorando diferentes tecnologías y frameworks modernos.
              </p>
            </div>
            <div className="relative">
              <h4 className="text-lg font-semibold text-primary">CFGS DAM</h4>
              <p className="text-muted-foreground text-base">
                Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), donde consolidé bases sólidas
                en programación, bases de datos y arquitectura de software.
              </p>
            </div>
            <div className="relative">
              <h4 className="text-lg font-semibold text-primary">CEFP IA & Big Data</h4>
              <p className="text-muted-foreground text-base">
                Actualmente, me encuentro ampliando mis conocimientos con el curso de Especialización en Inteligencia
                Artificial, análisis de datos y Machine Learning.
              </p>
            </div>
          </div>
        </div>

        {/* Experiencia */}
        <div className="bg-muted/30 border border-border rounded-2xl p-8 shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Experiencia profesional</h3>
          <div className="relative border-l border-primary/30 pl-6 space-y-10">
            <div className="relative">
              <h4 className="text-lg font-semibold text-primary">Prácticas FP Dual - Grup Oliva Motor</h4>
              <p className="text-muted-foreground text-base">
                Me incorporé al equipo como desarrollador durante las prácticas, participando en la modernización de herramientas internas.
              </p>
            </div>
            <div className="relative">
              <h4 className="text-lg font-semibold text-primary">Full Stack Developer - Grup Oliva Motor</h4>
              <p className="text-muted-foreground text-base">
                Actualmente formo parte del equipo de desarrollo, creando soluciones, APIs y plataformas internas para el sector automovilístico, con foco en eficiencia, usabilidad y escalabilidad.
              </p>
              <div className="mt-4">
                <h5 className="text-sm font-medium text-muted-foreground mb-2">Tecnologías destacadas:</h5>
                <ul className="flex flex-wrap gap-2 text-sm text-foreground">
                  <li className="bg-card px-3 py-1 rounded-xl">Next.js</li>
                  <li className="bg-card px-3 py-1 rounded-xl">React</li>
                  <li className="bg-card px-3 py-1 rounded-xl">JavaScript</li>
                  <li className="bg-card px-3 py-1 rounded-xl">TypeScript</li>
                  <li className="bg-card px-3 py-1 rounded-xl">Node.js</li>
                  <li className="bg-card px-3 py-1 rounded-xl">Dynamics 365</li>
                  <li className="bg-card px-3 py-1 rounded-xl">PowerApps & BI</li>
                  <li className="bg-card px-3 py-1 rounded-xl">PostgreSQL</li>
                  <li className="bg-card px-3 py-1 rounded-xl">Docker</li>
                  <li className="bg-card px-3 py-1 rounded-xl">GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

const SkillIcon = ({ icon: Icon, label, color }: any) => (
  <div className="flex flex-col items-center justify-center">
    <Icon className={`text-5xl ${color}`} aria-label={label} />
    <span className="text-sm mt-2">{label}</span>
  </div>
);
