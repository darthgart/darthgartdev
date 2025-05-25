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
  return (
    <a
      href={html_url}
      className={` border-2 shadow-md rounded-2xl h-44 max-w-96 mx-5 sm:mx-0 
              transition-all duration-300 ease-in-out
              hover:scale-[1.02] ${hoverShadow}
              hover:shadow-[0px_4px_12px_rgba(0,0,0,0.1)]  
                  `}
    >
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="px-4 pt-2 flex space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <CircleIcon className={`mr-1 h-3 w-3 ${iconColor}`} />
          {language || ""}
        </div>
        <div>{new Date(updatedAt).toLocaleDateString()}</div>
      </div>
    </a>
  );
}
