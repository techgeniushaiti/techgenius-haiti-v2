
"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import TopBar from "./TopBar";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Produits", href: "/#products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Techgenius Haiti"
            width={55}
            height={55}
            className="rounded-full shadow-[0_0_25px_#2563eb]"
          />

          <div>
            <span className="block text-xl font-bold text-white">
              Techgenius
            </span>
            <p className="text-xs text-gray-400">Haiti</p>
          </div>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden gap-8 text-gray-300 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/50938813277"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-500"
        >
          <Phone size={18} />
          WhatsApp
        </a>
      </div>

      <TopBar />
    </header>
  );
}
