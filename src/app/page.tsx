import Hero from "@/components/Hero";

export const metadata = {
  title: "DARTHGART.DEV",
  description: "Descubre el portfolio de Edgar Sánchez, desarrollador Full Stack en Tarragona. Experto en React, Next.js y Node.js. Creatividad, rendimiento y código limpio en cada proyecto web.",
  alternates: {
    canonical: "https://darthgart.dev",
  },
  openGraph: {
    title: "DARTHGART.DEV",
    description: "Descubre el portfolio de Edgar Sánchez, desarrollador Full Stack en Tarragona. Experto en React, Next.js y Node.js. Creatividad, rendimiento y código limpio en cada proyecto web.",
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
