import {
  Smartphone,
  BatteryCharging,
  Camera,
  Cpu,
  Speaker,
  Droplets,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Remplacement d'écran",
    description: "Écran OLED et LCD avec une finition professionnelle.",
  },
  {
    icon: BatteryCharging,
    title: "Batterie",
    description: "Remplacement de batterie pour une autonomie optimale.",
  },
  {
    icon: Camera,
    title: "Caméra",
    description: "Réparation caméra avant et arrière.",
  },
  {
    icon: Cpu,
    title: "Logiciel",
    description: "Mise à jour iOS, restauration et dépannage logiciel.",
  },
  {
    icon: Speaker,
    title: "Haut-parleur",
    description: "Réparation audio, micro et écouteur.",
  },
  {
    icon: Droplets,
    title: "Dégâts d'eau",
    description: "Nettoyage et réparation après contact avec l'eau.",
  },
];

export default function ServiceFeatures() {
  return (
    <section className="bg-[#07142b] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Nos Services
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Nous réparons tous les composants essentiels de votre iPhone.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-blue-600/20 bg-[#0b1228] p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.35)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
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