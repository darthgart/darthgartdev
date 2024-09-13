"use client";

import CardRepo from "@/components/Cardrepo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bin } from "@/components/icons";

interface Repo {
  html_url: string;
  id: number;
  name: string;
  description: string;
  language: string;
  updated_at: string;
  owner: {
    avatar_url: string;
  };
}

interface WorkPageProps {
  repos: Repo[];
}

const fetchRepos = async (): Promise<Repo[]> => {
  try {
    const res = await fetch(`/api/github`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: Repo[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};

const Work: FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRepos = await fetchRepos();
      setRepos(fetchedRepos);
    };
    fetchData();
  }, []);

  const languages = Array.from(new Set(repos.map((repo) => repo.language)));

  const filteredRepos = selectedLanguage
    ? repos.filter((repo) => repo.language === selectedLanguage)
    : repos;

  return (
    <main className="min-h-screen flex flex-col mt-24 xl:mt-0">
      <section className="flex-grow flex flex-col items-center xl:py-24 xl:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <Card className="border-none shadow-none rounded-2xl max-w-80 ">
            <CardHeader className="relative">
              <div className="space-y-1">
                <CardTitle>MIS REPOSITORIOS</CardTitle>
                <CardDescription>
                  Aquí podrás encontrar algunos de mis trabajos, tanto
                  profesionales como personales.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 text-sm text-muted-foreground max-w-80">
                {languages.map((language) => (
                  <Button
                    key={language}
                    className={`py-1 px-3 rounded`}
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
            </CardContent>
          </Card>

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
      </section>
    </main>
  );
};

export default Work;
