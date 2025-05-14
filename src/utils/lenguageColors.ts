export function getLanguageColorClasses(language: string | null): string {
    if (!language) return "fill-gray-400 text-gray-400"
    switch (language.toLowerCase()) {
      case "java":
        return "fill-red-400 text-red-400"
      case "javascript":
        return "fill-amber-400 text-amber-400"
      case "python":
        return "fill-green-400 text-green-400"
      case "typescript":
        return "fill-sky-400 text-sky-400"
      case "astro":
        return "fill-pink-400 text-pink-400"
      default:
        return "fill-gray-400 text-gray-400"
    }
  }
  
  export function getLanguageHoverShadow(language: string | null): string {
    if (!language) return "hover:bg-gray-300/15"
    switch (language.toLowerCase()) {
      case "java":
        return "hover:bg-red-300/15"
      case "javascript":
        return "hover:bg-amber-300/15"
      case "python":
        return "hover:bg-green-300/15"
      case "typescript":
        return "hover:bg-sky-300/15"
      case "astro":
        return "hover:bg-pink-300/15"  
      default:
        return "hover:bg-gray-300/15"
    }
  }