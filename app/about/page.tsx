import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { UserRound } from "lucide-react";

const values = [
  "Professionnalisme",
  "Innovation",
  "Service Client",
  "Qualité",
  "Transparence",
  "Fiabilité",
];


export const metadata: Metadata = {
  title: "À propos",

  description:
    "Découvrez Techgenius Haiti, votre partenaire en réparation, informatique, cybersécurité et solutions digitales.",

  alternates: {
    canonical: "/about",
  },
};


export default function AboutPage() {
  return (
    <main className="bg-[#050816] text-white">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 font-medium text-blue-400">
            À propos de nous
          </span>

          <h1 className="mt-8 text-5xl font-extrabold lg:text-6xl">
            Techgenius Haiti
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-400">
            Nous accompagnons particuliers et entreprises avec des solutions
            technologiques modernes, fiables et adaptées à leurs besoins.
          </p>
        </div>
      </section>

      {/* Notre histoire / Mission / Vision */}
      <section className="bg-[#07111f] py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">Notre histoire</h2>

            <p className="mt-6 leading-8 text-gray-400">
              Techgenius Haiti est née avec une mission simple : offrir des
              services technologiques professionnels en Haïti, accessibles
              aussi bien aux particuliers qu&apos;aux entreprises.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Nous proposons la réparation de téléphones et d&apos;ordinateurs,
              l&apos;installation de logiciels, les solutions pour entreprises,
              les réseaux, la cybersécurité et l&apos;accompagnement numérique.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-10">
            <h3 className="text-3xl font-bold">Notre Mission</h3>

            <p className="mt-6 leading-8 text-gray-400">
              Fournir des solutions technologiques innovantes, rapides et
              fiables afin d&apos;aider nos clients à développer leurs activités.
            </p>

            <h3 className="mt-12 text-3xl font-bold">Notre Vision</h3>

            <p className="mt-6 leading-8 text-gray-400">
              Devenir une référence technologique en Haïti et dans la région
              grâce à la qualité de nos services.
            </p>
          </div>
        </div>
      </section>
      {/* Pourquoi choisir */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-5 py-2 font-semibold text-blue-400">
              Pourquoi nous choisir ?
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Pourquoi choisir Techgenius Haiti
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
              Nous accompagnons nos clients avec des solutions informatiques
              fiables, des équipements de qualité et un support technique
              professionnel en Haïti et à l&apos;international.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">
              <h3 className="text-2xl font-bold">Expertise</h3>
              <p className="mt-4 text-gray-400">
                Une équipe qualifiée en informatique, réseaux et
                cybersécurité.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">
              <h3 className="text-2xl font-bold">Qualité</h3>
              <p className="mt-4 text-gray-400">
                Des services fiables et du matériel informatique de qualité.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">
              <h3 className="text-2xl font-bold">Support</h3>
              <p className="mt-4 text-gray-400">
                Assistance rapide avant, pendant et après chaque intervention.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">
              <h3 className="text-2xl font-bold">International</h3>
              <p className="mt-4 text-gray-400">
                Nos services sont disponibles en Haïti et à l&apos;international.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="bg-[#07111f] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-5 py-2 font-semibold text-blue-400">
              Notre équipe
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Les experts derrière Techgenius Haiti
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
              Une équipe passionnée spécialisée dans la vente, la réparation
              d&apos;ordinateurs portables, les solutions informatiques, les
              réseaux, la cybersécurité et le développement numérique.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 text-center">
              <Image
                src="/images/team/camfort-billyson.png"
                alt="Camfort G. Billyson"
                width={160}
                height={160}
                className="mx-auto h-40 w-40 rounded-full border-4 border-blue-500 object-cover object-[center_20%]"
              />

              <h3 className="mt-6 text-2xl font-bold">Camfort G. Billyson</h3>

              <p className="mt-2 font-semibold text-blue-400">
                Fondateur &amp; Directeur Général
              </p>

              <ul className="mt-6 space-y-2 text-left text-gray-400">
                <li>✔ Direction stratégique</li>
                <li>✔ Développement commercial</li>
                <li>✔ Gestion des opérations</li>
                <li>✔ Innovation &amp; Leadership</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 text-center">

<div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 border-blue-500 bg-blue-500/10">
  <UserRound
    size={72}
    strokeWidth={1.5}
    className="text-blue-400"
    aria-label="Portrait de Camfort Jacques Robeds à venir"
  />
</div>


              <h3 className="mt-6 text-2xl font-bold">
                Camfort Jacques Robeds
              </h3>

              <p className="mt-2 font-semibold text-blue-400">
                Spécialiste Informatique, Smartphones &amp; Déblocage
              </p>

              <ul className="mt-6 space-y-2 text-left text-gray-400">
                <li>✔ Réparation d&apos;ordinateurs portables</li>
                <li>✔ Smartphones &amp; Déblocage Android</li>
                <li>✔ Installation Windows &amp; Linux</li>
                <li>✔ Réseaux informatiques</li>
                <li>✔ Cybersécurité</li>
                <li>✔ Développement Web</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 text-center">
              <Image
               src="/images/team/sabina-philogene.png"
                alt="Philogene Sabina"
                width={160}
                height={160}
               className="mx-auto h-40 w-40 rounded-full border-4 border-blue-500 object-cover object-[center_20%]"
              />

              <h3 className="mt-6 text-2xl font-bold">Philogene Sabina</h3>

              <p className="mt-2 font-semibold text-blue-400">
                Administratrice
              </p>

              <ul className="mt-6 space-y-2 text-left text-gray-400">
                <li>✔ Gestion administrative</li>
                <li>✔ Relation clientèle</li>
                <li>✔ Suivi des dossiers</li>
                <li>✔ Coordination des opérations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">Nos Valeurs</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-7 w-7 text-blue-500" />
                  <h3 className="text-2xl font-bold">{value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos certifications */}
      <section className="bg-[#07111f] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-5 py-2 font-semibold text-blue-400">
              Certifications
            </span>

            <h2 className="mt-6 text-5xl font-bold">Nos certifications</h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
              Nous travaillons avec des outils professionnels, des logiciels
              reconnus et des méthodes conformes aux meilleures pratiques du
              secteur informatique.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">
              Maintenance informatique professionnelle
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">
              Réparation d&apos;ordinateurs portables
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">
              Réseaux &amp; Cybersécurité
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07111f] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Prêt à travailler avec nous ?
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Contactez Techgenius Haiti dès aujourd&apos;hui pour bénéficier de
            solutions technologiques professionnelles.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >
              Nous contacter
            </Link>

            <Link
              href="https://wa.me/50938813277"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-blue-500 px-8 py-4 transition hover:bg-blue-500/10"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}