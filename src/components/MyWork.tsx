"use client"

import CardRepo from "@/components/Cardrepo"
import { FC, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bin } from "@/components/icons"
import CardSkeleton from "@/components/CardSkeleton"
import { motion } from "framer-motion"
import { localProjects } from "./projects/projects"

interface Repo {
  html_url: string
  id: number
  name: string
  description: string
  language: string
  updated_at: string
  owner: {
    avatar_url: string
  };
}

const MyWork: FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

   useEffect(() => {
    setRepos(localProjects)
  }, [])

  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Mis proyectos",
      "author": {
        "@type": "Person",
        "name": "Edgar Sánchez"
      },
      "url": "https://darthgart.dev/work",
      "description": "Explora los proyectos realizados por Edgar Sánchez, Desarrollador Full Stack en Tarragona."
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [])

  const languages = Array.from(new Set(repos.map((repo) => repo.language)))
  const filteredRepos = selectedLanguage
    ? repos.filter((repo) => repo.language === selectedLanguage)
    : repos

  return (
    <main className="mt-24 xl:mt-0 flex flex-col items-center justify-center">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow flex flex-col items-center xl:py-24 xl:pt-28 w-full"
      >
        {/* Intro + tecnologías */}
        <div className="w-full px-10 sm:px-5 mt-10 mb-8">
          <div className="space-y-4 w-full">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">DESCUBRE MIS PROYECTOS</h2>
              <p className="text-muted-foreground text-sm max-w-prose">
                Aquí encontrarás mi colección de proyectos, tanto profesionales como personales.
              </p>
            </div>
            <div
              className="flex gap-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide items-center"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {selectedLanguage && (
                <Button
                  variant="outline"
                  className="py-1 px-3 border border-destructive text-destructive hover:bg-destructive/10 transition"
                  onClick={() => setSelectedLanguage(null)}
                >
                  <Bin className="size-4 mr-1" />
                  Limpiar
                </Button>
              )}

              {languages.map((language) => {
                const isActive = selectedLanguage === language
                return (
                  <Button
                    key={language}
                    className={`py-1 px-3 rounded transition-colors ${
                      isActive
                        ? "bg-muted-foreground text-background"
                        : "bg-foreground hover:bg-muted-foreground"
                    }`}
                    onClick={() =>
                      setSelectedLanguage(isActive ? null : language)
                    }
                  >
                    {language}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 w-full max-w-7xl">
          {filteredRepos.map((repo) => (
            <CardRepo
              html_url={repo.html_url}
              key={repo.id}
              name={repo.name}
              description={repo.description}
              imageUrl={repo.owner.avatar_url}
              language={repo.language}
              updatedAt={repo.updated_at}
            />
          ))}
        </div>
      </motion.section>
    </main>
  )
}

export default MyWork
