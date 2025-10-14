"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000); // reset after 5 seconds
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto my-8 bg-pink-100 rounded-xl shadow p-6 text-center">
      <h2 className="text-xl font-bold mb-2 text-pink-700">
        1 email par mois. Zéro spam. 100 % web & humain. 💻❤️
      </h2>
      <p className="mb-4 text-pink-900">
        Entre coulisses de Pixelia&Co, conseils pratiques et réflexions sur le
        web d’aujourd’hui, ma newsletter te plonge chaque mois dans l’envers du
        décor d’une créatrice de sites passionnée. ✨
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 justify-center items-center">
        <input
          type="email"
          placeholder="Votre email"
          className="px-4 py-2 rounded-l border border-pink-300 focus:outline-none"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Votre email"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-pink-700 text-white rounded-r font-bold hover:bg-pink-800 w-full sm:w-auto"
          disabled={status === "loading"}>
          {status === "loading" ? "Envoi..." : "Je m’inscris"}
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-700 mt-2" role="status" aria-live="polite">
          Merci, vous êtes inscrit·e à la newsletter !
        </p>
      )}
      {status === "error" && (
        <p className="text-red-700 mt-2" role="status" aria-live="polite">
          Erreur lors de l’inscription. Veuillez réessayer.
        </p>
      )}
      <p className="text-xs text-pink-700 mt-2">
        Désinscription possible à tout moment.
      </p>
    </div>
  );
}
