
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Techgenius Haiti"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="font-bold text-white">
            Techgenius Haiti
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/50938813277"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white lg:flex"
          >
            <Phone size={17} />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-lg border border-white/20 p-2 text-white lg:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navigation mobile"
        className={`border-t border-white/10 bg-[#080f25] px-5 py-4 lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-gray-200 transition hover:bg-blue-500/10 hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.me/50938813277"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white"
          >
            <Phone size={18} />
            Contacter sur WhatsApp
          </a>
        </div>
      </nav>

      <TopBar />
    </header>
  );
}
