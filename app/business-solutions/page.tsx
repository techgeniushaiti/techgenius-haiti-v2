import ServiceHero from "@/components/service/ServiceHero";
import ServiceGrid from "@/components/service/ServiceGrid";
import { businessServices } from "../../lib/services/business";
import BusinessTypes from "@/components/business/BusinessTypes";
import Equipment from "@/components/business/Equipment";
import Process from "@/components/business/Process";
import Brands from "@/components/business/Brands";


export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Business Solutions"
        title="Solutions POS & Logiciels d'Entreprise"
        subtitle="Installation, configuration et support de QuickBooks POS, Cash Register Express, imprimantes de tickets, scanners et solutions pour commerces en Haïti."
        image="/images/services/business-pos.png"
        buttonText="Planifier une installation"
        badges={[
        "QuickBooks POS",
        "Cash Register Express",
        "POS Configuration",
  "Support Professionnel",
]}
      />

      <ServiceGrid
        title="Nos Solutions Business"
        subtitle="Des solutions fiables pour les commerces, restaurants, pharmacies et entreprises."
        services={businessServices}
      />
      <BusinessTypes />
      <Equipment />
      <Process />
      <Brands />

    </>
  );
}