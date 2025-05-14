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

const Work: FC = () => {
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

  const languages = Array.from(new Set(repos.map((repo) => repo.language)))

  const filteredRepos = selectedLanguage
    ? repos.filter((repo) => repo.language === selectedLanguage)
    : repos

  return (
    <main className="min-h-screen flex flex-col mt-24 xl:mt-0">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow flex flex-col items-center xl:py-24 xl:pt-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          
          <div className="rounded-2xl max-w-96 sm:max-w-80 border-none shadow-none p-4 space-y-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">DESCUBRE MIS PROYECTOS</h2>
              <p className="text-muted-foreground text-sm">
                Aquí encontrarás mi colección de proyectos, tanto
                profesionales como personales.
              </p>
            </div>

            <div className="flex space-x-4 text-sm max-w-80">
              {languages.map((language) => (
                <Button
                  key={language}
                  className="py-1 px-3 bg-foreground rounded transition-colors 
                    hover:bg-muted-foreground/20 
                    hover:text-foreground"
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

export default Work
