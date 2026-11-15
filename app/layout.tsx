import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Schema from "./schema";
import WhatsAppButton from "@/components/floating/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techgeniushaiti.com"),
  title: {
    default: "Techgenius Haiti | Technologie & Solutions Digitales",
    template: "%s | Techgenius Haiti",
  },

  description:
    "Techgenius Haiti propose des services de réparation d'ordinateurs portables, réparation téléphone, informatique, réseaux, cybersécurité, développement web et vente de matériel électronique.",

  keywords: [
    "Techgenius Haiti",
    "réparation laptop",
    "réparation ordinateur portable",
    "réparation ordinateur",
    "réparation téléphone",
    "informatique Haiti",
    "installation Windows",
    "réseaux",
    "cybersécurité",
    "développement web",
    "Apple",
    "Samsung",
  ],

  verification: {
    google: "8T6NbRBNNcVWMOivU",
    other: {
      "trustpilot-one-time-domain-verification-id":
        "c5c4fb05-6cd2-40ad-a56c-45066888e201",
    },
  },

  openGraph: {
    title: "Techgenius Haiti",
    description: "La nouvelle génération de la technologie en Haïti.",
    url: "https://www.techgeniushaiti.com",
    siteName: "Techgenius Haiti",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Techgenius Haiti",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Techgenius Haiti",
    description: "Solutions technologiques en Haïti.",
    images: ["/og-image.png"],
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
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        <Schema />

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
        <WhatsAppButton />

        {/* Google Analytics */}
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

        {/* Google AdSense */}
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5109352769615824"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}