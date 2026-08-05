"use client";

import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Jean Pierre",
    role: "Client Informatique",
    text:
      "Service rapide et professionnel. Mon ordinateur fonctionne parfaitement maintenant.",
  },
  {
    name: "Marie L.",
    role: "Client Téléphonie",
    text:
      "Très bon service de réparation téléphone. Équipe sérieuse et efficace.",
  },
  {
    name: "David Joseph",
    role: "Entreprise",
    text:
      "Techgenius nous accompagne pour nos solutions informatiques et réseaux.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400 font-medium">
            Témoignages
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Ce que nos clients disent
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2">

            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map((star)=>(
                <Star
                  key={star}
                  size={22}
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-white font-semibold">
              5.0
            </span>

            <span className="text-gray-400">
              • Plus de 100 clients satisfaits
            </span>

          </div>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.3)]"
            >

              <div>

                <div className="flex justify-between items-center">

                  <div className="flex gap-1 text-yellow-400">

                    {[1,2,3,4,5].map((star)=>(

                      <Star
                        key={star}
                        size={18}
                        fill="currentColor"
                      />

                    ))}

                  </div>

                  <Quote
                    size={38}
                    className="text-blue-500/20"
                  />

                </div>

                <p className="mt-8 leading-8 text-gray-300">
                  "{item.text}"
                </p>

              </div>

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-24 text-center">

          <h3 className="text-4xl font-bold text-white">
            Vous souhaitez être notre prochain client satisfait ?
          </h3>

          <p className="mt-4 text-gray-400">
            Contactez notre équipe dès aujourd'hui pour obtenir une assistance rapide et professionnelle.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Contactez-nous
            </Link>

            <a
              href="https://wa.me/50938813277"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-500/10"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}