import Link from "next/link";
import { AlertTriangle, Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] px-6">
      <div className="max-w-2xl text-center">

        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        <h1 className="text-7xl font-extrabold text-white">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page introuvable
        </h2>

        <p className="mt-5 text-lg text-gray-400">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>

          <a
            href="https://wa.me/50938813277"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-500/10 transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>

        </div>
      </div>
    </main>
  );
}