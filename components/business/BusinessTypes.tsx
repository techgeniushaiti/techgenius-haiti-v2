import {
  ShoppingCart,
  UtensilsCrossed,
  Pill,
  Shirt,
  Hotel,
  Hospital,
  Building2,
  Package,
} from "lucide-react";

const businesses = [
  {
    icon: ShoppingCart,
    title: "Supermarchés",
    description: "Solutions POS complètes pour supermarchés et épiceries.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Gestion des commandes, caisse et impression des tickets.",
  },
  {
    icon: Pill,
    title: "Pharmacies",
    description: "Gestion des ventes et des stocks en toute sécurité.",
  },
  {
    icon: Shirt,
    title: "Boutiques",
    description: "Solutions pour magasins de vêtements et commerces.",
  },
  {
    icon: Hotel,
    title: "Hôtels",
    description: "Gestion des paiements et équipements informatiques.",
  },
  {
    icon: Hospital,
    title: "Cliniques",
    description: "Solutions informatiques adaptées au secteur médical.",
  },
  {
    icon: Building2,
    title: "Entreprises",
    description: "Support informatique et logiciels professionnels.",
  },
  {
    icon: Package,
    title: "Grossistes",
    description: "Gestion des stocks, ventes et facturation.",
  },
];

export default function BusinessTypes() {
  return (
    <section className="py-24 bg-[#07111f]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center">
          Pour quels commerces ?
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Nous accompagnons tous types de commerces avec des solutions fiables et professionnelles.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {businesses.map((business) => {
            const Icon = business.icon;

            return (
              <div
                key={business.title}
                className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.25)]"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {business.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {business.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}