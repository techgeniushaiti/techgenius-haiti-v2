"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/50938813277?text=Bonjour%20Techgenius%20Haiti,%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp"
    >
      <div className="flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-green-600">

        <FaWhatsapp className="text-3xl text-white" />

        <span className="hidden md:block font-semibold text-white">
          WhatsApp
        </span>

      </div>

      <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-20"></span>
    </Link>
  );
}