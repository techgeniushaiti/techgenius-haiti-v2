"use client";

import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  Laptop,
  GraduationCap,
  Unlock,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Réparation iPhone",
    description: "Écran, batterie, Face ID, caméra, charge, logiciel.",
    href: "/reparation-iphone",
  },
  {
    icon: Smartphone,
    title: "Réparation Samsung",
    description: "Écran AMOLED, batterie, software, carte mère.",
    href: "/reparation-samsung",
  },
  {
    icon: Unlock,
    title: "Déblocage iCloud",
    description: "Suppression d'activation et assistance Apple.",
    href: "/unlock-icloud",
  },
  {
    icon: ShieldCheck,
    title: "FRP Bypass",
    description: "Google FRP Samsung, Xiaomi, Motorola et autres.",
    href: "/frp-bypass",
  },
  {
    icon: Laptop,
    title: "Réparation Ordinateur",
    description: "Windows, MacBook, optimisation et maintenance.",
    href: "/reparation-ordinateur",
  },
  {
    icon: GraduationCap,
    title: "Vente de Matériel",
    description: "Cours informatique, réparation mobile et PC.",
    href: "/vente-materiel",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center">
          Nos Services
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Solutions professionnelles pour particuliers et entreprises.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <div className="rounded-3xl border border-blue-600/30 bg-[#0b1228] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.35)]">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <span className="mt-8 inline-block font-semibold text-blue-400 transition group-hover:translate-x-2">
                    En savoir plus →
                  </span>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}