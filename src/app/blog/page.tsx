import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Blog | DARTHGART.DEV",
  description: "Conoce más sobre Edgar Sanchez, Desarrollador Full Stack en Tarragona con experiencia en tecnologías como React, Next.js y Node.js.",
  alternates: {
    canonical: "https://darthgart.dev/blog",
  },
  openGraph: {
    title: "Blog | DARTHGART.DEV",
    description: "Conoce más sobre Edgar Sanchez, Desarrollador Full Stack en Tarragona con experiencia en tecnologías como React, Next.js y Node.js.",
    url: "https://darthgart.dev/blog",
    siteName: "DARTHGART.DEV",
    images: [
      {
        url: "https://darthgart.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog | DARTHGART.DEV",
      },
    ],
    locale: "es_ES",
    type: "website",
  }
}

export default function Blog() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-1 items-center justify-center">
        <h2>This is Blog page</h2>
      </div>
    </main>
  );
}
