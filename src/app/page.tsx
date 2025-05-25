import Hero from "@/components/Hero";

export const metadata = {
  title: "DARTHGART.DEV",
  description: "Explora el portfolio de Edgar Sánchez, Desarrollador Full Stack en Tarragona con experiencia en tecnologías como React, Next.js y Node.js.",
  openGraph: {
    title: "DARTHGART.DEV",
    description: "Explora el portfolio de Edgar Sánchez, Desarrollador Full Stack en Tarragona con experiencia en tecnologías como React, Next.js y Node.js.",
    url: "https://darthgart.dev",
    siteName: "DARTHGART.DEV",
    images: [
      {
        url: "https://darthgart.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "DARTHGART.DEV",
      },
    ],
    locale: "es_ES",
    type: "website",
  }
}

export default function Home() {
  return <Hero /> 
}
