import AboutMe from "@/components/AboutMe"

export const metadata = {
  title: "Sobre mi | DARTHGART.DEV",
  description: "Conoce más sobre Edgar Sanchez, Desarrollador Full Stack en Tarragona.",
  alternates: {
      canonical: "https://darthgart.dev/about",
  },
  openGraph: {
    title: "Sobre mi | DARTHGART.DEV",
    description: "Conoce más sobre Edgar Sanchez, Desarrollador Full Stack en Tarragona.",
    url: "https://darthgart.dev/about",
    siteName: "DARTHGART.DEV",
    images: [
      {
        url: "https://darthgart.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sobre mi | DARTHGART.DEV",
      },
    ],
    locale: "es_ES",
    type: "website",
  }
}

export default function About() {
  return <AboutMe />
}
