import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10" />

      <div className="relative mx-auto max-w-6xl rounded-3xl border border-blue-500/20 bg-[#0d142b] p-12 text-center">

        <h2 className="text-5xl font-bold text-white">
          Besoin d'une réparation informatique ?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Nous réparons les ordinateurs portables, PC de bureau, MacBook,
          installons Windows, récupérons les données et configurons les
          logiciels professionnels.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="https://wa.me/50938813277"
            className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={22} />
            WhatsApp
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowRight size={20} />
            Prendre rendez-vous
          </Link>

          <a
            href="tel:+50939283126 "
            className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
          >
            <Phone size={20} />
            Appeler
          </a>

        </div>

      </div>
    </section>
  );
}