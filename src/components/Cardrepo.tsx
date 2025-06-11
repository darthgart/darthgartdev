import { getLanguageColorClasses, getLanguageHoverShadow } from "@/utils/lenguageColors"
import { CircleIcon } from "@radix-ui/react-icons"

interface CardRepoProps {
  html_url: string
  name: string
  description: string
  imageUrl: string
  language: string
  updatedAt: string
}

export default function CardRepo({
  html_url,
  name,
  description,
  language,
  updatedAt,
}: CardRepoProps) {
  const iconColor = getLanguageColorClasses(language)
  const hoverShadow = getLanguageHoverShadow(language)

  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(updatedAt))

  return (
    <article
      className={`
        border-2 shadow-md rounded-2xl h-52 max-w-96 mx-5 sm:mx-0 
        transition-all duration-300 ease-in-out
        hover:scale-[1.02] ${hoverShadow}
        hover:shadow-[0px_4px_12px_rgba(0,0,0,0.1)]
        bg-background
      `}
    >
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <header className="p-4 space-y-1">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-4">{description}</p>
        </header>

        <footer className="px-4 pt-2 flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className={`mr-1 h-3 w-3 ${iconColor}`} />
            {language || "Otro"}
          </div>
          <time dateTime={updatedAt}>{formattedDate}</time>
        </footer>
      </a>
    </article>
  )
}