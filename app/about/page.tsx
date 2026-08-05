import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Professionnalisme",
  "Innovation",
  "Service Client",
  "Qualité",
  "Transparence",
  "Fiabilité",
];

export const metadata = {
  title: "À propos | Techgenius Haiti",
  description:
    "Découvrez Techgenius Haiti, votre partenaire en réparation, informatique, cybersécurité et solutions digitales.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-400 font-medium">
            À propos de nous
          </span>

          <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold">
            Techgenius Haiti
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400 leading-9">
            Nous accompagnons particuliers et entreprises avec des solutions
            technologiques modernes, fiables et adaptées à leurs besoins.
          </p>

        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-[#07111f]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold">
              Notre histoire
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Techgenius Haiti est née avec une mission simple : offrir des
              services technologiques professionnels en Haïti, accessibles
              aussi bien aux particuliers qu'aux entreprises.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Nous proposons la réparation de téléphones et d'ordinateurs,
              l'installation de logiciels, les solutions pour entreprises,
              les réseaux, la cybersécurité et l'accompagnement numérique.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-10">

            <h3 className="text-3xl font-bold">
              Notre Mission
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              Fournir des solutions technologiques innovantes,
              rapides et fiables afin d'aider nos clients à
              développer leurs activités.
            </p>

            <h3 className="text-3xl font-bold mt-12">
              Notre Vision
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              Devenir une référence technologique en Haïti et dans
              la région grâce à la qualité de nos services.
            </p>

          </div>

        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-bold">
            Nos Valeurs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8"
              >
                <div className="flex items-center gap-4">

                  <CheckCircle2 className="text-blue-500 w-7 h-7" />

                  <h3 className="text-2xl font-bold">
                    {value}
                  </h3>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#07111f]">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Prêt à travailler avec nous ?
          </h2>

          <p className="mt-6 text-gray-400 text-xl">
            Contactez Techgenius Haiti dès aujourd'hui pour bénéficier de
            solutions technologiques professionnelles.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 hover:bg-blue-500 transition px-8 py-4 font-semibold"
            >
              Nous contacter
            </Link>

            <Link
              href="https://wa.me/50938813277"
              target="_blank"
              className="rounded-xl border border-blue-500 px-8 py-4 hover:bg-blue-500/10 transition"
            >
              WhatsApp
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}