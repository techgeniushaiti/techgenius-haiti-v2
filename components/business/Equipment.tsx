import {
  Printer,
  ScanLine,
  Monitor,
  Receipt,
  CreditCard,
  HardDrive,
} from "lucide-react";

const equipments = [
  {
    icon: Printer,
    title: "Imprimantes Thermiques",
  },
  {
    icon: ScanLine,
    title: "Scanners Codes-barres",
  },
  {
    icon: Receipt,
    title: "Tiroirs-caisses",
  },
  {
    icon: Monitor,
    title: "Écrans POS",
  },
  {
    icon: CreditCard,
    title: "Terminaux de Paiement",
  },
  {
    icon: HardDrive,
    title: "Serveurs & Sauvegarde",
  },
];

export default function Equipment() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center">
          Équipements Compatibles
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Nous installons et configurons les équipements indispensables à votre système POS.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {equipments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 text-center hover:border-blue-500 transition"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}