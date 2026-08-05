export default function GoogleMap() {
  return (
    <section className="bg-[#050816] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-12 text-center">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400">
            📍 Localisation
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Notre siège et notre zone d'intervention
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Notre siège est situé à Pétion-Ville, mais Techgenius Haiti
            intervient dans toutes les régions d'Haïti et propose également
            des services à distance pour les clients internationaux.
          </p>

        </div>

        {/* Google Map */}

        <div className="overflow-hidden rounded-3xl border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,.15)]">

          <iframe
            src="https://www.google.com/maps?q=Petion-Ville,Haiti&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </div>

        {/* Button */}

        <div className="mt-8 flex justify-center">

          <a
            href="https://maps.google.com/?q=Petion-Ville,Haiti"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            📍 Voir notre siège sur Google Maps
          </a>

        </div>

        {/* Availability */}

        <div className="mt-12 rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 text-center">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400">
            🌍 Disponibilité
          </span>

          <h3 className="mt-6 text-3xl font-bold text-white">
            Nous intervenons partout
          </h3>

          <p className="mx-auto mt-5 max-w-4xl leading-8 text-gray-400">
            Techgenius Haiti accompagne les particuliers, les entreprises et les
            institutions dans toutes les régions d'Haïti. Nous proposons
            également des services à distance pour nos clients internationaux
            selon le type de prestation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <span className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400">
              🇭🇹 Toute Haïti
            </span>

            <span className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400">
              🌎 Services internationaux
            </span>

            <span className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400">
              💻 Assistance à distance
            </span>

            <span className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400">
              🏢 Entreprises
            </span>

            <span className="rounded-full bg-blue-600/10 px-4 py-2 text-blue-400">
              👤 Particuliers
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}