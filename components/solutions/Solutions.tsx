"use client";

import {
  MonitorCog,
  Network,
  ShieldCheck,
  Cloud,
  Code2,
  Headphones,
} from "lucide-react";

const solutions = [
  {
    icon: MonitorCog,
    title: "Maintenance Informatique",
    description:
      "Gestion, réparation et optimisation des systèmes informatiques.",
  },
  {
    icon: Network,
    title: "Réseaux & Infrastructure",
    description:
      "Installation WiFi, routeurs, câblage et réseaux professionnels.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    description:
      "Protection des données et solutions de sécurité informatique.",
  },
  {
    icon: Cloud,
    title: "Cloud & Sauvegarde",
    description:
      "Stockage, sauvegarde et gestion moderne des données.",
  },
  {
    icon: Code2,
    title: "Développement Digital",
    description:
      "Création de sites web, applications et solutions personnalisées.",
  },
  {
    icon: Headphones,
    title: "Support Technique",
    description:
      "Assistance professionnelle à distance ou sur site.",
  },
];

export default function Solutions() {
  return (
    <section id="about" className="bg-[#050816] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400">
            Nos Solutions
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Solutions Technologiques
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Des solutions adaptées aux particuliers, entreprises et
            organisations modernes.
          </p>

        </div>


        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,.3)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={34}/>

                </div>


                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>


                <p className="mt-4 leading-8 text-gray-400">
                  {item.description}
                </p>


              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}