"use client";

import Button from "@/app/components/button/button";

export default function downloadCV() {
  return (
    <section className="flex flex-col sm:flex-row justify-around">
      <a
        href="/CV_Priscillia_Ammeux.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cliquez sur ce bouton pour télécharger mon CV pour un CDI, une mission FREELANCE ou un CDD"
        title="Télécharger ici mon CV pour un CDI, une mission FREELANCE ou un CDD"
        className="m-2 sm:m-0">
        <Button
          className="w-full h-full"
          type={"button"}
          text={"Télécharger mon CV"}
          ariaLabel={
            "Cliquez sur ce bouton pour télécharger mon CV pour un CDI, une mission FREELANCE ou un CDD"
          }
        />
      </a>
    </section>
  );
}
