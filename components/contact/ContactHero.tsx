import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-36 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.18),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400 font-medium">
          Contact Techgenius Haiti
        </span>

        <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold text-white">
          Contactez notre équipe
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400 leading-9">
          Une question ? Un devis ? Besoin d'une assistance technique ?
          Notre équipe est disponible pour vous accompagner.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link
            href="https://wa.me/50938813277"
            target="_blank"
            className="rounded-xl bg-green-600 hover:bg-green-500 transition px-8 py-4 text-white font-semibold flex items-center gap-3"
          >
            <MessageCircle size={22} />
            WhatsApp
          </Link>

          <Link
            href="tel:+50938813277"
            className="rounded-xl border border-blue-500 px-8 py-4 text-white hover:bg-blue-500/10 transition flex items-center gap-3"
          >
            <Phone size={22} />
            Appeler
          </Link>

        </div>

      </div>
    </section>
  );
}