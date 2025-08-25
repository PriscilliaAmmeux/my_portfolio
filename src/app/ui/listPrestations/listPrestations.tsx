import Card from "@/app/components/card/card";
import prestations from "../../../data/prestations.json";
import prestationsSummer2025 from "../../../data/prestationsPromoSummer2025.json";
import { MdOutlineCleaningServices } from "react-icons/md";

function getCurrentPrestations() {
  const today = new Date();
  const start = new Date("2025-07-21");
  const end = new Date("2025-08-31");

  if (today >= start && today <= end) {
    return prestationsSummer2025;
  }
  return prestations;
}

export default function ListPrestations() {
  const currentPrestations = getCurrentPrestations();
  const isPromoSummer = currentPrestations === prestationsSummer2025;

  const inclusions = [
    "Hébergement et nom de domaine inclus 1 an",
    "Formulaire de contact inclus",
    "Site optimisé pour le SEO et l'accessibilité",
    "Design responsive (adapté aux mobiles et tablettes)",
  ];

  const getPresentationContent = (presentation: any) => {
    if (!presentation) return [];

    if (presentation.content && typeof presentation.content === "string") {
      return [presentation.content];
    }

    if (Array.isArray(presentation)) {
      return presentation.map((item) => item.content);
    }

    return [];
  };

  const shouldShowInclusions = (id: number) => {
    return id === 2 || id === 3;
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {currentPrestations.map((prestation) => {
        const presentationContent = getPresentationContent(
          prestation.presentation
        );

        return (
          <Card
            key={prestation.id}
            className="w-full lg:w-1/3 px-2 flex flex-col justify-between h-full"
            title={prestation.title}>
            <div className="flex-grow">
              <ul className="text-white list-disc mt-2 mb-2 list-none text-sm">
                <li className="mt-2 mb-4 font-bold">{prestation.price}</li>
                <li className="mt-2 mb-2">{prestation.description}</li>

                {shouldShowInclusions(prestation.id) && (
                  <>
                    <li className="mt-4 mb-2 font-bold">
                      Inclus dans l'offre :
                    </li>
                    {inclusions.map((inclusion, index) => (
                      <li key={index} className="mt-1 mb-1 ml-4">
                        • {inclusion}
                      </li>
                    ))}
                  </>
                )}
                {presentationContent.length > 0 && (
                  <>
                    {presentationContent.map((content, index) => (
                      <li
                        key={index}
                        className="mt-3 mb-1 font-bold flex items-start">
                        <span className="mr-2 text-pink-300">→</span>
                        <span>{content}</span>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
