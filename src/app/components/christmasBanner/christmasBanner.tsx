"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChristmasBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const scrollingContent = (
    <>
      <span className="text-lg sm:text-xl font-bold mx-2">
        🎄 Offre de Noël 🎅
      </span>
      <span className="text-base sm:text-lg mx-2">
        <span className="font-extrabold text-yellow-300">-10%</span> sur la
        création de site
      </span>
      <span className="text-lg sm:text-base italic mx-2">
        (réservations avant le 31/01)
      </span>
      <Link
        href="https://calendly.com/priscillia-ammeux-pro/rdv-web-audit-noel"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-red-600 font-bold px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-red-700 transition-all duration-300 shadow-md text-lg sm:text-base mx-4">
        En profiter ! 🎁
      </Link>
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
