"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

type ServiceHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
};

export default function ServiceHero({
  badge,
  title,
  subtitle,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Texte */}
        <div>

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            {badge}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            {subtitle}
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-blue-400" size={22} />
              Diagnostic rapide
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-blue-400" size={22} />
              Pièces de qualité
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-blue-400" size={22} />
              Garantie sur les réparations
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="https://wa.me/50939283126"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              WhatsApp
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-white transition hover:border-blue-500"
            >
              Prendre rendez-vous
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        {/* Image */}
        <div className="relative flex justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />

          <Image
            src={image}
            alt={title}
            width={520}
            height={520}
            priority
            className="relative z-10 drop-shadow-[0_0_40px_rgba(37,99,235,.45)]"
          />

        </div>

      </div>
    </section>
  );
}