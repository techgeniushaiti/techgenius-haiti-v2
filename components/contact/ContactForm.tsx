"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Votre message a été envoyé avec succès.");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setError("Impossible d'envoyer le message.");
      }
    } catch (err) {
      setError("Une erreur est survenue.");
    }

    setLoading(false);
  }

  return (
    <div className="rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8">

      <h2 className="text-3xl font-bold text-white">
        Envoyez-nous un message
      </h2>

      <p className="mt-4 text-gray-400">
        Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">

        <input
          type="text"
          required
          placeholder="Nom complet"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full rounded-xl border border-blue-500/20 bg-[#07111f] px-5 py-4 text-white"
        />

        <input
          type="email"
          required
          placeholder="Adresse e-mail"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full rounded-xl border border-blue-500/20 bg-[#07111f] px-5 py-4 text-white"
        />

        <input
          type="tel"
          placeholder="+509..."
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          className="w-full rounded-xl border border-blue-500/20 bg-[#07111f] px-5 py-4 text-white"
        />

        <input
          type="text"
          required
          placeholder="Sujet"
          value={form.subject}
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
          className="w-full rounded-xl border border-blue-500/20 bg-[#07111f] px-5 py-4 text-white"
        />

        <textarea
          rows={6}
          required
          placeholder="Votre message..."
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full rounded-xl border border-blue-500/20 bg-[#07111f] px-5 py-4 text-white"
        />

        {success && (
          <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-green-400">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-4 text-white font-semibold disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer le message"}
        </button>

      </form>
    </div>
  );
}