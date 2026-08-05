import {
  Search,
  Download,
  Settings,
  GraduationCap,
  Headset,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analyse",
    description:
      "Nous analysons vos besoins et votre environnement informatique.",
  },
  {
    icon: Download,
    title: "Installation",
    description:
      "Installation du logiciel et des équipements nécessaires.",
  },
  {
    icon: Settings,
    title: "Configuration",
    description:
      "Configuration complète du système POS et des périphériques.",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description:
      "Formation de votre équipe pour une utilisation efficace.",
  },
  {
    icon: Headset,
    title: "Support",
    description:
      "Assistance technique et maintenance après installation.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#07111f]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center">
          Notre Processus d'Installation
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Une méthode simple, rapide et professionnelle.
        </p>

        <div className="grid md:grid-cols-5 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="text-center relative"
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center">
                  <Icon className="w-9 h-9 text-blue-400" />
                </div>

                <div className="mt-6 text-blue-400 font-bold text-lg">
                  Étape {index + 1}
                </div>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}