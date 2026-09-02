"use client";

import { useState } from "react";

export default function ChristmasBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const scrollingContent = (
    <>
      <span className="text-lg sm:text-xl font-bold mx-2">
        💗 Une page se tourne fin octobre
      </span>

      <span className="text-base sm:text-lg mx-2">
        Après une belle aventure avec Pixelia&Co, j’ai décidé de fermer mon
        entreprise fin octobre 2026.
      </span>

      <span className="text-base sm:text-lg mx-2">
        J’ai aujourd’hui un poste qui me plaît, et je n’ai malheureusement plus
        le temps de consacrer à mes projets freelance l’attention qu’ils
        méritent.
      </span>

      <span className="text-base sm:text-lg italic mx-2">
        Merci à toutes les personnes qui m’ont fait confiance et ont participé à
        cette aventure 💗
      </span>
    </>
  );

  return (
    <section className="relative text-white py-3 shadow-lg z-50 overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      <div className="flex items-center whitespace-nowrap animate-scroll">
        <div className="flex items-center">{scrollingContent}</div>
        <div className="flex items-center">{scrollingContent}</div>
        <div className="flex items-center">{scrollingContent}</div>
        <div className="flex items-center">{scrollingContent}</div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 transition-colors bg-red-800 bg-opacity-50 rounded-full p-1 z-10"
        aria-label="Fermer le bandeau">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </section>
  );
}
