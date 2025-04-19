"use client"

import React from "react"
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

export default function Skills() {
  return (
    <section>
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
