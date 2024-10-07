"use client";

import Button from "@/app/components/button/button";

export default function downloadCV() {
  return (
    <section className="flex flex-col sm:flex-row justify-around">
      <a
        href="https://cvdesignr.com/p/65957cf24ea70"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cliquez sur ce bouton pour télécharger mon CV pour un poste de développeur web"
        title="Télécharger ici mon CV pour un poste de développeur web"
        className="m-2 sm:m-0">
        <Button
          className="w-full h-full"
          type={"button"}
          text={"Télécharger ici mon CV pour un poste de développeur web"}
          ariaLabel={
            "Cliquez sur ce bouton pour télécharger mon CV pour un poste de développeur web"
          }
        />
      </a>
      <a
        href="https://cvdesignr.com/p/6703a012ac667"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cliquez sur ce bouton pour télécharger mon CV pour un autre poste"
        title="Télécharger ici mon CV pour un autre poste"
        className="m-2 sm:m-0">
        <Button
          className="w-full h-full"
          type={"button"}
          text={"Télécharger ici mon CV pour un autre poste"}
          ariaLabel={
            "Cliquez sur ce bouton pour télécharger mon CV pour un autre poste"
          }
        />
      </a>
    </section>
  );
}
