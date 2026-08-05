"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import TopBar from "./TopBar";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="Techgenius Haiti"
            width={55}
            height={55}
            className="rounded-full shadow-[0_0_25px_#2563eb]"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              Techgenius
            </h1>

            <p className="text-xs text-gray-400">
              Haiti
            </p>
          </div>

        </Link>


        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-300">

          <Link href="#home" className="hover:text-blue-400 transition">
            Accueil
          </Link>

          <Link href="#services" className="hover:text-blue-400 transition">
            Services
          </Link>

          <Link href="#products" className="hover:text-blue-400 transition">
            Produits
          </Link>

          <Link href="#solutions" className="hover:text-blue-400 transition">
            Solutions
          </Link>

          <Link href="#about" className="hover:text-blue-400 transition">
            À propos
          </Link>

          <Link href="#contact" className="hover:text-blue-400 transition">
            Contact
          </Link>

        </nav>


        {/* WhatsApp */}
        <a
          href="https://wa.me/50939283126"
          target="_blank"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-500"
        >

          <div className="flex items-center gap-2">

            <Phone size={18}/>

            WhatsApp

          </div>

        </a>


      </div>
      <TopBar />

    </header>
  );
}