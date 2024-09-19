"use client";

import Button from "@/app/components/button/button";

const DownloadCV = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-around">
      <Button
        className="m-2 sm:m-0"
        type={"button"}
        text={"Télécharger mon CV"}
        onClick={() => window.open("/CV_Priscillia_Ammeux.pdf")}
        ariaLabel={
          "Cliquez sur ce bouton pour télécharger mon CV pour un CDI, une mission FREELANCE ou un CDD"
        }
        title={
          "Télécharger ici mon CV pour un CDI, une mission FREELANCE ou un CDD"
        }
      />
    </section>
  );
};

DownloadCV.displayName = "DownloadCV";

export default DownloadCV;
