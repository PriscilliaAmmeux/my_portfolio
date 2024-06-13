"use client";

import Button from "@/app/components/button/button";

const DownloadCV = () => {
  return (
    <section className="flex flex-col sm- flew-row justify-around">
      <Button
        className="m-2 sm:m-0"
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
        className="m-2 sm:m-0"
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
};

DownloadCV.displayName = "DownloadCV";

export default DownloadCV;
