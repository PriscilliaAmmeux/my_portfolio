"use client";

import { useState } from "react";
import Button from "../button/button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
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
    <section className="w-full max-w-2xl mx-auto my-8 bg-pink-100 rounded-xl shadow p-6 text-center">
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
          type="text"
          placeholder="Votre prénom"
          className="px-4 py-2 rounded border border-pink-300 focus:outline-none w-full sm:w-auto"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          aria-label="Votre prénom"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="px-4 py-2 rounded border border-pink-300 focus:outline-none w-full sm:w-auto"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Votre email"
        />
        <Button
          type="submit"
          text={status === "loading" ? "Envoi..." : "Je m’inscris"}
          ariaLabel="Je m’inscris à la newsletter"
          className="px-4 py-2 bg-pink-700 text-white rounded font-bold hover:bg-pink-800 w-full sm:w-auto whitespace-nowrap"
          disabled={status === "loading"}
        />
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
    </section>
  );
}
