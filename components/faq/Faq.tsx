"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quels services propose Techgenius Haiti ?",
    answer:
      "Nous proposons la réparation de téléphones, d'ordinateurs, l'installation de logiciels, les solutions réseau, le marketing digital et l'assistance informatique.",
  },
  {
    question: "Combien coûte une réparation ?",
    answer:
      "Le coût dépend du modèle de l'appareil et de la nature de la panne. Contactez-nous pour obtenir un devis gratuit.",
  },
  {
    question: "Offrez-vous une garantie ?",
    answer:
      "Oui. La garantie varie selon le type de réparation ou le service effectué.",
  },
  {
    question: "Combien de temps prend une réparation ?",
    answer:
      "La plupart des réparations sont terminées le jour même. Les cas plus complexes peuvent nécessiter plus de temps.",
  },
  {
    question: "Acceptez-vous les entreprises ?",
    answer:
      "Oui. Nous proposons également des solutions informatiques et réseaux pour les entreprises.",
  },
  {
    question: "Comment vous contacter ?",
    answer:
      "Vous pouvez nous contacter par WhatsApp, téléphone, email ou via le formulaire de contact sur notre site.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Questions fréquentes
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Trouvez rapidement les réponses aux questions les plus fréquentes.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-blue-500/20 bg-white/5"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t border-blue-500/20 px-8 py-6 text-gray-300 leading-8">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}