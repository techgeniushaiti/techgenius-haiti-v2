"use client";

import { Star } from "lucide-react";

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

        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400">
            Témoignages
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Ce que nos clients disent
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>

        </div>


        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.3)]"
            >

              <div className="flex gap-1 text-blue-400">

                {[1,2,3,4,5].map((star)=>(
                  <Star key={star} size={18} fill="currentColor"/>
                ))}

              </div>


              <p className="mt-6 leading-8 text-gray-300">
                "{item.text}"
              </p>


              <h3 className="mt-8 text-xl font-bold text-white">
                {item.name}
              </h3>


              <p className="text-gray-400">
                {item.role}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}