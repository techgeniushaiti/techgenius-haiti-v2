export default function GoogleMap() {
  return (
    <section className="py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold text-white">
            Notre localisation
          </h2>

          <p className="mt-4 text-xl text-gray-400">
            Retrouvez Techgenius Haiti à Pétion-Ville.
          </p>

        </div>

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

        <div className="flex justify-center mt-8">

          <a
            href="https://maps.google.com/?q=Petion-Ville,Haiti"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 hover:bg-blue-500 transition px-8 py-4 text-white font-semibold"
          >
            Ouvrir dans Google Maps
          </a>

        </div>

      </div>
    </section>
  );
}