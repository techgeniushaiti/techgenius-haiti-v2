"use client";

import {
  Laptop,
  Network,
  Smartphone,
  Code2,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    icon: Laptop,
    title: "Maintenance Informatique",
    description:
      "Réparation, optimisation et configuration des ordinateurs professionnels.",
  },
  {
    icon: Network,
    title: "Installation Réseaux",
    description:
      "Déploiement de réseaux WiFi et infrastructures informatiques.",
  },
  {
    icon: Smartphone,
    title: "Solutions Mobiles",
    description:
      "Réparation smartphones, déblocage et services logiciels.",
  },
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Création de sites web modernes et solutions digitales.",
  },
];

export default function Portfolio() {
  return (
    <section className="relative bg-[#050816] py-28">

      <div className="absolute inset-0">
        <div className="absolute left-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-blue-400">
            Nos Réalisations
          </span>


          <h2 className="mt-6 text-5xl font-black text-white">
            Nos Projets
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Découvrez quelques exemples de nos interventions et solutions
            technologiques.
          </p>

        </div>



        <div className="mt-20 grid gap-8 md:grid-cols-2">


          {projects.map((project, index) => {

            const Icon = project.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl border border-blue-500/20 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,.3)]"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">

                    <Icon size={34}/>

                  </div>


                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                </div>


                <p className="mt-6 leading-8 text-gray-400">
                  {project.description}
                </p>


                <button className="mt-8 flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-4">

                  Voir détails

                  <ArrowRight size={18}/>

                </button>


              </div>

            );

          })}


        </div>


      </div>


    </section>
  );
}