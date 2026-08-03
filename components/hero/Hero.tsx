"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#050816] pt-36 pb-20">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1550px] items-center gap-8 px-8 lg:grid-cols-[1.2fr_0.8fr]">

        {/* LEFT SIDE */}
        <div className="min-w-0">

         <motion.span
  animate={{ scale: [1, 1.05, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-2 text-sm font-medium text-blue-300 backdrop-blur-xl shadow-[0_0_20px_rgba(37,99,235,0.25)]"
>
  🇭🇹 Tech Leader in Haiti
</motion.span>
          <h1 className="mt-8 bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-5xl font-black leading-none text-transparent sm:text-6xl lg:text-[6rem] xl:text-[7rem]">
            TECH
            GENIUS
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-400">
            La nouvelle génération de la technologie
            pour une nouvelle Haïti.
            <br />
            Réparation • Déblocage • Développement • Formation
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button
  className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,0.7)]"
>
  Prendre rendez-vous
</button>
            <button className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500/10">
              Nos services
            </button>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">

            <div>
              <h2 className="text-4xl font-bold text-blue-400">
                2500+
              </h2>
              <p className="mt-2 text-gray-400">
                Téléphones réparés
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-400">
                1800+
              </h2>
              <p className="mt-2 text-gray-400">
                Clients satisfaits
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-400">
                1200+
              </h2>
              <p className="mt-2 text-gray-400">
                Déblocages
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-400">
                24/7
              </h2>
              <p className="mt-2 text-gray-400">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex items-center justify-center">

          <div className="absolute h-[430px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute bottom-8 h-28 w-[420px] rounded-full bg-blue-500/40 blur-[70px]" />
          <div className="relative flex h-[520px] w-full max-w-[620px] items-center justify-center rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl">
          <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/images/hero-tech.png"
    alt="Techgenius Hero"
    width={620}
    height={620}
    priority
    className="w-full max-w-[620px] object-contain"
  />
</motion.div>
  

           

          </div>

        </div>

      </div>

    </section>
  );
}