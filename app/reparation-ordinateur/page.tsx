import ServiceHero from "@/components/service/ServiceHero";
import ComputerServices from "@/components/ordinateur/ComputerServices";
import { computerServices } from "@/lib/services/computer";
import ServiceGrid from "@/components/service/ServiceGrid";
import WhyChoose from "@/components/ordinateur/WhyChoose";
import Brands from "@/components/ordinateur/Brands";
import FAQ from "@/components/ordinateur/FAQ";
import CTA from "@/components/ordinateur/CTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/reparation-ordinateur",
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