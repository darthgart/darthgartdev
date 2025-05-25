import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contacto | DARTHGART.DEV",
  description: "Conoce más sobre Edgar Sanchez, Desarrollador Full Stack en Tarragona con experiencia en tecnologías como React, Next.js y Node.js.",
  alternates: {
    canonical: "https://darthgart.dev/contact",
  },
  openGraph: {
    title: "Contacto | DARTHGART.DEV",
    description: "Conoce más sobre Edgar Sanchez, Desarrollador Full Stack en Tarragona con experiencia en tecnologías como React, Next.js y Node.js.",
    url: "https://darthgart.dev",
    siteName: "DARTHGART.DEV",
    images: [
      {
        url: "https://darthgart.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contacto | DARTHGART.DEV",
      },
    ],
    locale: "es_ES",
    type: "website",
  }
}

export default function Contact() {
  return <ContactForm />
}
