"use client"

import CardRepo from "@/components/Cardrepo"
import { FC, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bin } from "@/components/icons"
import CardSkeleton from "@/components/CardSkeleton"
import { motion } from "framer-motion"

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

const fetchRepos = async (): Promise<Repo[]> => {
  try {
    const res = await fetch(`/api/github`)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: Repo[] = await res.json()
    return data
  } catch (error) {
    console.error("Error fetching repos:", error)
    return []
  }
};

const MyWork: FC = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRepos = await fetchRepos()
      setRepos(fetchedRepos)
      setLoading(false)
    };
    fetchData()
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

            {/* Scroll horizontal para filtros */}
            <div
              className="flex gap-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {languages.map((language) => (
                <Button
                  key={language}
                  className="py-1 px-3 bg-foreground rounded transition-colors hover:bg-muted-foreground/20 hover:text-foreground"
                  onClick={() =>
                    setSelectedLanguage(
                      selectedLanguage === language ? null : language
                    )
                  }
                >
                  {language ? language : <Bin className="size-5" />}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 w-full max-w-7xl">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => <CardSkeleton key={i} />)
          ) : (
            filteredRepos.map((repo) => (
              <CardRepo
                html_url={repo.html_url}
                key={repo.id}
                name={repo.name}
                description={repo.description}
                imageUrl={repo.owner.avatar_url}
                language={repo.language}
                updatedAt={repo.updated_at}
              />
            ))
          )}
        </div>
      </motion.section>
    </main>
  )
}

export default MyWork
