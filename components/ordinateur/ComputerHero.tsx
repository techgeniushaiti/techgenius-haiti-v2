import Image from "next/image";
import Link from "next/link";

export default function ComputerHero() {
  return (
  <section className="bg-[#050816] pt-36 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-400 font-medium">
              💻 Réparation Informatique
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Réparation
              <span className="text-blue-500"> Ordinateur </span>
              en Haïti
            </h1>

            <p className="mt-6 text-gray-400 text-xl leading-9">
              Réparation de Laptop, PC Desktop et MacBook.
              Installation Windows, optimisation, récupération de données,
              remplacement SSD, RAM et maintenance complète.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 hover:bg-blue-500 transition px-8 py-4 text-white font-semibold"
              >
                Prendre rendez-vous
              </Link>

              <a
                href="https://wa.me/50900000000"
                className="rounded-xl border border-blue-500 px-8 py-4 text-white hover:bg-blue-500/10 transition"
              >
                WhatsApp
              </a>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>
                <h3 className="text-4xl font-bold text-blue-500">
                  2500+
                </h3>

                <p className="text-gray-400">
                  Ordinateurs réparés
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-500">
                  1800+
                </h3>

                <p className="text-gray-400">
                  Clients satisfaits
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-500">
                  24/7
                </h3>

                <p className="text-gray-400">
                  Support
                </p>
              </div>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />

            <Image
              src="/images/services/laptop.png"
              alt="Réparation ordinateur"
              width={700}
              height={700}
              priority
              className="relative rounded-3xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}