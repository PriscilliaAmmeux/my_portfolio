"use client";

import Button from "@/app/components/button/button";

export default function downloadCV() {
  return (
    <section className="flex flex-col sm:flex-row justify-around">
      <a
        href="https://cvdesignr.com/p/65957cf24ea70"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cliquez sur ce bouton pour télécharger mon CV"
        title="Télécharger ici mon CV pour un poste de développeur web"
        className="m-2 sm:m-0">
        <Button
          className="w-full h-full"
          type={"button"}
          text={"Télécharger ici mon CV"}
          ariaLabel={
            "Cliquez sur ce bouton pour télécharger mon CV"
          }
        />
      </a>
    </section>
  );
}
