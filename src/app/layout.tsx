import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const workSans = Work_Sans({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "DARTHGART.DEV",
  description: "My personal portfolio",
  authors: [{ name: "Edgar Sánchez" }],
  keywords: ["desarrollador de software", "proyectos", "portfolio", "estudios"],
  robots: "index, follow",
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Edgar Sánchez',
              jobTitle: 'Full Stack Developer',
              url: 'https://darthgart.dev',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tarragona',
                addressCountry: 'ES',
              },
              sameAs: [
                'https://www.github.com/darthgart',
                'https://www.linkedin.com/in/edgar-sanchez-gimenez-365739234/'
              ]
            }),
          }}
        />
      </Head>
      <body className={workSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 flex justify-center">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
