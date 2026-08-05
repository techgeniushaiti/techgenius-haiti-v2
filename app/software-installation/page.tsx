import ServiceHero from "@/components/service/ServiceHero";
import ServiceGrid from "@/components/service/ServiceGrid";
import { softwareServices } from "../../lib/services/software";
import OperatingSystems from "@/components/software/OperatingSystems";

export default function Page() {
  return (
    <>
      <ServiceHero
        badge="Installation Logiciels"
        title="Installation de Logiciels Professionnels"
        subtitle="Installation, activation, configuration et optimisation de logiciels professionnels pour particuliers et entreprises."
        image="/images/services/software.png"
        buttonText="Demander une installation"
      />

      <ServiceGrid
        title="Nos Logiciels"
        subtitle="Nous installons et configurons les logiciels les plus utilisés."
        services={softwareServices}
      />
      <OperatingSystems />
    </>
  );
}