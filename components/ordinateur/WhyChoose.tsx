import {
  ShieldCheck,
  Clock3,
  Cpu,
  Wrench,
  Headphones,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Travail Garanti",
    text: "Toutes nos réparations sont réalisées avec soin et garanties.",
  },
  {
    icon: Clock3,
    title: "Service Rapide",
    text: "La majorité des réparations sont terminées en moins de 24 heures.",
  },
  {
    icon: Cpu,
    title: "Techniciens Qualifiés",
    text: "Experts en Laptop, Desktop, MacBook et serveurs.",
  },
  {
    icon: Wrench,
    title: "Pièces de Qualité",
    text: "SSD, RAM, écrans et composants de qualité supérieure.",
  },
  {
    icon: Headphones,
    title: "Support Technique",
    text: "Assistance avant et après la réparation.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Client",
    text: "Des centaines de clients satisfaits à travers Haïti.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#08101f] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          Pourquoi choisir Techgenius Haiti ?
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Une équipe expérimentée pour tous vos besoins informatiques.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-[#101827] border border-blue-500/20 p-8 hover:border-blue-500 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}