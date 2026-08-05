import Link from "next/link";
import {
  Laptop,
  Smartphone,
  Store,
  Network,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

const categories = [
  {
    icon: Laptop,
    title: "Informatique",
    description:
      "Réparation Laptop, Desktop, MacBook, Windows et logiciels.",
    href: "/reparation-ordinateur",
  },
  {
    icon: Smartphone,
    title: "Téléphones",
    description:
      "Réparation iPhone, Samsung, FRP, iCloud et logiciels.",
    href: "/reparation-iphone",
  },
  {
    icon: Store,
    title: "Business Solutions",
    description:
      "QuickBooks POS, Cash Register Express, POS et logiciels d'entreprise.",
    href: "/quickbooks-pos",
  },
  {
    icon: Network,
    title: "Réseaux",
    description:
      "Configuration réseau, Wi-Fi, serveurs et caméras.",
    href: "/configuration-reseau",
  },
  {
    icon: ShoppingCart,
    title: "Vente",
    description:
      "Laptops, téléphones, SSD, RAM et accessoires.",
    href: "/vente-materiel",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description:
      "Formation informatique, réparation PC et mobile.",
    href: "/formation",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#050816] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-center text-6xl font-extrabold text-white">
          Tous Nos Services
        </h1>

        <p className="mx-auto mt-6 mb-16 max-w-3xl text-center text-xl text-gray-400">
          Des solutions technologiques complètes pour les particuliers,
          les entreprises et les commerces en Haïti.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group"
              >
                <div className="rounded-3xl border border-blue-500/20 bg-[#101827] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.35)]">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <h2 className="text-3xl font-bold text-white">
                    {category.title}
                  </h2>

                  <p className="mt-5 leading-8 text-gray-400">
                    {category.description}
                  </p>

                  <span className="mt-8 inline-block font-semibold text-blue-400 transition group-hover:translate-x-2">
                    Découvrir →
                  </span>

                </div>
              </Link>
            );
          })}

        </div>

      </div>
    </main>
  );
}