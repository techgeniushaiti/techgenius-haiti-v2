
import type { Metadata } from "next";

import ServiceHero from "@/components/service/ServiceHero";
import ComputerServices from "@/components/ordinateur/ComputerServices";
import { computerServices } from "@/lib/services/computer";
import ServiceGrid from "@/components/service/ServiceGrid";
import WhyChoose from "@/components/ordinateur/WhyChoose";
import Brands from "@/components/ordinateur/Brands";
import FAQ from "@/components/ordinateur/FAQ";
import CTA from "@/components/ordinateur/CTA";

const pageTitle =
  "Réparation Ordinateur & Laptop en Haïti | Techgenius Haiti";

const pageDescription =
  "Réparation et dépannage de PC, laptop et MacBook en Haïti : installation Windows, suppression de virus, SSD, RAM et maintenance. Contactez Techgenius Haiti.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: "/reparation-ordinateur",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://www.techgeniushaiti.com/reparation-ordinateur",
    siteName: "Techgenius Haiti",
    type: "website",
    locale: "fr_HT",
    images: [
      {
        url: "/images/services/laptop.png",
        alt: "Services de réparation informatique Techgenius Haiti",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/services/laptop.png"],
  },
};

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Réparation Informatique"
        title="Réparation Ordinateur en Haïti"
        subtitle="Réparation de Laptop, PC Desktop et MacBook. Installation Windows, optimisation, récupération de données, remplacement SSD, RAM et maintenance complète."
        image="/images/services/laptop.png"
        buttonText="Prendre rendez-vous"
      />

      <ServiceGrid
        title="Nos Services Informatiques"
        subtitle="Solutions professionnelles pour Laptop, Desktop et MacBook."
        services={computerServices}
      />

      <WhyChoose />
      <Brands />
      <FAQ />
      <CTA />
    </>
  );
}
