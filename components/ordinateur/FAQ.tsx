"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien de temps prend une réparation ?",
    answer:
      "La plupart des réparations sont terminées en 24 à 48 heures selon la disponibilité des pièces.",
  },
  {
    question: "Réparez-vous les MacBook ?",
    answer:
      "Oui. Nous réparons les MacBook Air, MacBook Pro ainsi que les iMac.",
  },
  {
    question: "Pouvez-vous récupérer mes données ?",
    answer:
      "Oui. Nous proposons un service de récupération de données sur SSD et disque dur.",
  },
  {
    question: "Installez-vous Windows et les pilotes ?",
    answer:
      "Oui. Installation complète de Windows, pilotes, Microsoft Office et logiciels essentiels.",
  },
  {
    question: "Faites-vous un diagnostic ?",
    answer:
      "Oui. Nous réalisons un diagnostic complet avant toute réparation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#08101f] py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Questions Fréquentes
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14">
          Les réponses aux questions les plus posées.
        </p>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-500/20 bg-[#101827]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6"
              >
                <span className="text-white text-xl font-semibold text-left">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-400 leading-8">
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