import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Schema from "./schema";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase:  new URL("https://techgeniushaiti.com"),
  
  title: "Techgenius Haiti | Technologie & Solutions Digitales",
  
  description:
    "Techgenius Haiti propose des services de réparation téléphone, informatique, réseaux, cybersécurité et vente de matériel électronique.",

  keywords: [
    "Techgenius Haiti",
    "réparation téléphone Haiti",
    "informatique Haiti",
    "vente matériel électronique",
    "solutions technologiques Haiti",
  ],

  openGraph: {
    title: "Techgenius Haiti",
    description:
      "La nouvelle génération de la technologie en Haïti.",
    url: "https://techgeniushaiti.com",
    siteName: "Techgenius Haiti",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Techgenius Haiti",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Techgenius Haiti",
    description:
      "Solutions technologiques, réparation et matériel électronique en Haïti.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
    <Schema />
  {children}


  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-F4S507RC8Z"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-F4S507RC8Z');
    `}
  </Script>

</body>
      
    </html>
  );
}
