"use client";

import Button from "@/app/components/button/button";

export default function () {
  return (
    <section className="flex justify-around">
      <Button
        type={"button"}
        text={"Télécharger mon CV"}
        onClick={() => window.open("/CV_Priscillia_Ammeux.pdf", "_blank")}
        ariaLabel={
          "Cliquez sur ce bouton pour télécharger mon CV pour un CDI, une mission FREELANCE ou un CDD"
        }
        title={
          "Télécharger ici mon CV pour une CDI, une mission FREELANCE ou un CDD"
        }
      />
      <Button
        type={"button"}
        text={"Télécharger mon CV pour alternance"}
        onClick={() =>
          window.open("/CV_Priscillia_Ammeux_Alternance.pdf", "_blank")
        }
        ariaLabel={
          "Cliquez sur ce bouton pour télécharger mon CV pour une alternance"
        }
        title={"Télécharger ici mon CV pour une alternance"}
      />
    </section>
  );
}
