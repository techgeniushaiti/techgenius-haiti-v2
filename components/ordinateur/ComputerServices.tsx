import {
  HardDrive,
  Cpu,
  Monitor,
  ShieldCheck,
  Wrench,
  Database,
} from "lucide-react";

const services = [
  {
    icon: HardDrive,
    title: "Remplacement SSD",
    text: "Installation SSD SATA et NVMe pour accélérer votre ordinateur.",
  },
  {
    icon: Cpu,
    title: "Upgrade RAM",
    text: "Ajout ou remplacement de mémoire RAM pour plus de performances.",
  },
  {
    icon: Monitor,
    title: "Écran & Clavier",
    text: "Remplacement d'écran cassé, clavier, charnières et coque.",
  },
  {
    icon: ShieldCheck,
    title: "Installation Windows",
    text: "Windows 10, Windows 11, pilotes et logiciels professionnels.",
  },
  {
    icon: Database,
    title: "Récupération de données",
    text: "Sauvegarde et récupération de fichiers supprimés ou perdus.",
  },
  {
    icon: Wrench,
    title: "Maintenance complète",
    text: "Nettoyage interne, pâte thermique et optimisation du système.",
  },
];

export default function ComputerServices() {
  return (
    <section className="py-24 bg-[#070b1d]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Nos Services Informatiques
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Solutions professionnelles pour Laptop, PC Desktop et MacBook.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl bg-[#0d142b] border border-blue-500/20 p-8 hover:border-blue-500 transition hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-blue-400" />

                </div>

                <h3 className="text-2xl text-white font-bold">

                  {service.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-8">

                  {service.text}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}