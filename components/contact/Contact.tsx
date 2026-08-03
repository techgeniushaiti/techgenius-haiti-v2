"use client";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    text: "+509 3928 3126 / 38813277 ",
  },
  {
    icon: Mail,
    title: "Email",
    text: "techgeniushaiti@gmail.com",
  },
  {
    icon: MapPin,
    title: "Adresse",
    text: "Delmas, Port-au-prince , Haïti",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#050816] py-28">

      <div className="absolute inset-0">
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400">
            Contact
          </span>


          <h2 className="mt-6 text-5xl font-black text-white">
            Parlons de votre projet
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Besoin d'un service, d'un produit ou d'une solution
            technologique ? Notre équipe est disponible.
          </p>

        </div>



        <div className="mt-20 grid gap-8 lg:grid-cols-2">


          <div className="space-y-6">

            {contactInfo.map((item,index)=>{

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="flex items-center gap-5 rounded-3xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400">

                    <Icon size={28}/>

                  </div>


                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">
                      {item.text}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>



          <div className="rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl">


            <h3 className="text-2xl font-bold text-white">
              Envoyez-nous un message
            </h3>


            <div className="mt-6 space-y-4">

              <input
                placeholder="Votre nom"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <input
                placeholder="Votre email"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <textarea
                placeholder="Votre message"
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-blue-500"
              />

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500">

                <MessageCircle size={20}/>

                Envoyer

              </button>


            </div>


          </div>


        </div>


      </div>

    </section>
  );
}