"use client";

import {
  Award,
  ShieldCheck,
  Clock3,
  Headphones,
  Cpu,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expérience",
    description:
      "Des années d'expérience dans la réparation et les solutions technologiques.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité Garantie",
    description:
      "Chaque intervention est réalisée avec soin et professionnalisme.",
  },
  {
    icon: Clock3,
    title: "Intervention Rapide",
    description:
      "Nous réduisons les délais pour remettre vos appareils en service.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description:
      "Une assistance disponible lorsque vous en avez besoin.",
  },
  {
    icon: Cpu,
    title: "Technologie Moderne",
    description:
      "Nous utilisons les outils et méthodes les plus récents.",
  },
  {
    icon: BadgeCheck,
    title: "Clients Satisfaits",
    description:
      "La satisfaction de nos clients reste notre priorité.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-[#050816] py-28">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400">
            Pourquoi Nous ?
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Pourquoi choisir Techgenius ?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Nous combinons expertise, innovation et service client pour offrir
            des solutions fiables à chaque projet.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,.30)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600">

                  <Icon size={34} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
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