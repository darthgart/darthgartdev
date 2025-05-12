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
    if (!language) return "hover:ring-gray-300"
    switch (language.toLowerCase()) {
      case "java":
        return "hover:ring-red-300"
      case "javascript":
        return "hover:ring-amber-300"
      case "python":
        return "hover:ring-green-300"
      case "typescript":
        return "hover:ring-sky-300"
      case "astro":
        return "hover:ring-pink-300"  
      default:
        return "hover:ring-gray-300"
    }
  }