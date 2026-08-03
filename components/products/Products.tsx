"use client";

import {
  Laptop,
  Smartphone,
  Network,
  Printer,
  Camera,
  Cable,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: Laptop,
    title: "Informatique",
    description:
      "Ordinateurs, laptops, SSD, RAM, écrans et équipements professionnels.",
  },
  {
    icon: Smartphone,
    title: "Téléphonie",
    description:
      "Smartphones, tablettes, accessoires mobiles et solutions connectées.",
  },
  {
    icon: Cable,
    title: "Accessoires Électroniques",
    description:
      "Chargeurs, câbles, écouteurs, power banks et accessoires.",
  },
  {
    icon: Network,
    title: "Réseaux",
    description:
      "Routeurs, switches, WiFi, câblage et équipements réseau.",
  },
  {
    icon: Printer,
    title: "Bureautique",
    description:
      "Imprimantes, scanners et matériels pour entreprises.",
  },
  {
    icon: Camera,
    title: "Sécurité",
    description:
      "Caméras surveillance, contrôle d'accès et solutions de protection.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-[#050816] py-28">

      <div className="absolute inset-0">
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400">
            Nos Produits
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Matériel Technologique
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400 text-lg">
            Découvrez nos produits électroniques et informatiques
            adaptés aux particuliers et entreprises.
          </p>

        </div>


        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product, index) => {

            const Icon = product.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,.3)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={34}/>

                </div>


                <h3 className="mt-8 text-2xl font-bold text-white">
                  {product.title}
                </h3>


                <p className="mt-4 leading-8 text-gray-400">
                  {product.description}
                </p>


                <button className="mt-8 flex items-center gap-2 text-blue-400 font-semibold transition group-hover:gap-4">

                  Explorer

                  <ArrowRight size={18}/>

                </button>


              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}