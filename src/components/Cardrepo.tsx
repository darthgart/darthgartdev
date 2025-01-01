import { CircleIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface CardRepoProps {
  html_url: string;
  name: string;
  description: string;
  imageUrl: string;
  language: string;
  updatedAt: string;
}

const getLanguageColorClasses = (language: string | null) => {
  if (!language) return "fill-gray-400 text-gray-400";
  switch (language.toLowerCase()) {
    case "java":
      return "fill-orange-400 text-orange-400";
    case "javascript":
      return "fill-yellow-400 text-yellow-400";
    case "python":
      return "fill-green-400 text-green-400";
    case "typescript":
      return "fill-sky-400 text-sky-400";
    default:
      return "fill-gray-400 text-gray-400";
  }
};

export default function CardRepo({
  html_url,
  name,
  description,
  imageUrl,
  language,
  updatedAt,
}: CardRepoProps) {
  const iconColorClasses = getLanguageColorClasses(language);
  return (
    <a href={html_url}>
      <Card className="hover:border-primary shadow-xl rounded-2xl max-w-96 sm:max-w-80 mx-5 sm:mx-0">
        <CardHeader className="relative">
          <div className="w-full h-32 rounded-lg overflow-hidden relative">
            <Image
              alt={`Screenshot of ${name}`}
              src={imageUrl}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="top-0 left-0 right-0 p-1 space-y-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className={`mr-1 h-3 w-3 ${iconColorClasses}`} />
              {language || ""}
            </div>
            <div>{new Date(updatedAt).toLocaleDateString()}</div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
