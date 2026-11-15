
import { CalendarDays, Building2 } from "lucide-react";

export default function FounderHistory() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.techgeniushaiti.com/#organization",
    name: "Techgenius Haiti",
    alternateName: "TECH GENIUS ENTREPRISE",
    url: "https://www.techgeniushaiti.com",
    foundingDate: "2019",
    founder: {
      "@type": "Person",
      "@id": "https://www.techgeniushaiti.com/about#fondateur",
      name: "Camfort G. Billyson",
      jobTitle: "Fondateur et Directeur Général",
      description:
        "Entrepreneur haïtien et fondateur de Techgenius Haiti en 2019, spécialisé dans les services informatiques et les solutions numériques.",
    },
  };

  return (
    <section
      id="notre-histoire"
      className="bg-[#050816] px-6 py-20 text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-6xl">

        {/* TITRE */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            Depuis 2019
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Notre histoire et notre fondateur
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">
            Découvrez l'histoire de Techgenius Haiti,
            son fondateur et la vision qui accompagne
            le développement de notre entreprise.
          </p>
        </div>

        {/* HISTOIRE */}
        <div className="mb-10 grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-blue-500/20 bg-[#101a33] p-8">
            <CalendarDays
              className="mb-4 text-blue-400"
              size={30}
            />

            <p className="text-4xl font-bold text-blue-300">
              2019
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Fondation de Techgenius Haiti
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Techgenius Haiti a été fondée en 2019
              par Camfort G. Billyson, avec l'ambition
              de proposer des solutions technologiques
              fiables et adaptées aux besoins des
              particuliers et des entreprises en Haïti.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-[#101a33] p-8">
            <Building2
              className="mb-4 text-blue-400"
              size={30}
            />

            <p className="text-4xl font-bold text-blue-300">
              2026
            </p>

            <h3 className="mt-3 text-xl font-bold">
              Immatriculation commerciale
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Le 11 mars 2026, le nom commercial
              TECH GENIUS ENTREPRISE a été
              officiellement immatriculé au registre
              du commerce auprès du Ministère
              du Commerce et de l'Industrie d'Haïti.
            </p>
          </div>
        </div>

        {/* BIOGRAPHIE DU FONDATEUR */}
        <div
          id="fondateur"
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111f3e] to-[#070c1d] p-8 md:p-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Le fondateur
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Camfort G. Billyson
          </h2>

          <p className="mt-2 text-lg font-medium text-blue-300">
            Fondateur et Directeur Général
          </p>

          <div className="mt-7 max-w-4xl space-y-5 leading-8 text-gray-300">
            <p>
              Camfort G. Billyson est un entrepreneur
              haïtien évoluant dans les domaines de
              l'informatique, des technologies numériques
              et de la gestion d'entreprise.
            </p>

            <p>
              Fondateur de Techgenius Haiti en 2019,
              il s'appuie sur un parcours technique et
              des compétences multidisciplinaires pour
              développer des solutions adaptées aux
              besoins des particuliers, des professionnels
              et des entreprises.
            </p>

            <p>
              Son expertise couvre notamment les services
              informatiques, les solutions logicielles,
              la gestion commerciale, le marketing digital
              et les infrastructures technologiques.
            </p>

            <p>
              À travers Techgenius Haiti, il poursuit
              une vision axée sur l'innovation,
              la qualité des services et la contribution
              au développement technologique d'Haïti.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
