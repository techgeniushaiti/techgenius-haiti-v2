"use client";

import {
  Smartphone,
  Laptop,
  Unlock,
  Globe,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Réparation Smartphones",
    description:
      "Réparation d'écran, batterie, carte mère, Face ID et composants.",
  },
  {
    icon: Laptop,
    title: "Réparation PC & Mac",
    description:
      "Maintenance, optimisation, installation Windows, macOS et Linux.",
  },
  {
    icon: Unlock,
    title: "Déblocage & FRP",
    description:
      "Déblocage réseau, FRP, comptes Google, Samsung et iCloud.",
  },
  {
    icon: Globe,
    title: "Développement Web",
    description:
      "Sites web modernes, applications et solutions Cloud.",
  },
  {
    icon: GraduationCap,
    title: "Formations",
    description:
      "Cours professionnels en informatique et nouvelles technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Support Technique",
    description:
      "Assistance rapide, sécurisée et disponible pour particuliers et entreprises.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#050816] py-28">

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400">
            Nos Services
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Ce que nous faisons
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Techgenius Haiti accompagne particuliers, entreprises et étudiants
            avec des solutions technologiques modernes.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,.30)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600">

                  <Icon size={34} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-400 transition group-hover:gap-4">

                  En savoir plus

                  <ArrowRight size={18} />

                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}