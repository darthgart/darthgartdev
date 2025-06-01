import MyWork from "@/components/MyWork";

export const metadata = {
  title: "Mis Proyectos | DARTHGART.DEV",
  description: "Explora los proyetos de Edgar Sánchez, Desarrollador Full Stack en Tarragona.",
  alternates: {
    canonical: "https://darthgart.dev/work",
  },
  openGraph: {
    title: "Mis Proyectos | DARTHGART.DEV",
    description: "Explora los proyetos de Edgar Sanchez, Desarrollador Full Stack en Tarragona.",
    url: "https://darthgart.dev/work",
    siteName: "DARTHGART.DEV",
    images: [
      {
        url: "https://darthgart.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mis Proyectos | DARTHGART.DEV",
      },
    ],
    locale: "es_ES",
    type: "website",
  }
}

export default function Work() {
  return <MyWork />
}
