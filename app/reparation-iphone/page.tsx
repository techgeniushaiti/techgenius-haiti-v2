import ServiceHero from "@/components/service/ServiceHero";
import ServiceFeatures from "@/components/service/ServiceFeatures";

export default function Page() {
  return (
    <>
     <ServiceHero
  badge="Réparation Apple"
  title="Réparation iPhone"
  subtitle="Techgenius Haïti répare tous les modèles d'iPhone avec des pièces de qualité et un service rapide."
  image="/images/services/iphone.png"
/>
      <ServiceFeatures />
    </>
  );
}