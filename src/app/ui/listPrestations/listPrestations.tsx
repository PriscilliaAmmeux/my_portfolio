import Card from "@/app/components/card/card";
import prestations from "../../../data/prestations.json";
import prestationsSummer2025 from "../../../data/prestationsPromoSummer2025.json";
import { MdOutlineCleaningServices } from "react-icons/md";

interface PrestationListProps {
  list: { content: string }[];
}

const PrestationList: React.FC<PrestationListProps> = ({ list }) => (
  <ul className="list-disc pl-5">
    {list.map((item, index) => (
      <li key={index}>{item.content}</li>
    ))}
  </ul>
);

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
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {currentPrestations.map((prestation) => (
        <Card
          key={prestation.id}
          className="w-full lg:w-1/3 px-2 flex flex-col justify-between h-full"
          Icon={MdOutlineCleaningServices}
          title={prestation.title}
          color="bg-blue-100"
          button={{
            href: "/contact",
            text: "Contactez moi",
            ariaLabel:
              "Cliquez sur le bouton contactez moi afin d'aller sur la page contact",
          }}>
          <div className="flex-grow">
            <ul className="text-gray-700 list-disc mt-2 mb-2 list-none text-sm">
              <li className="mt-2 mb-2 text-pink-700 font-bold">
                {prestation.price}
              </li>
              <li className="mt-2 mb-2">{prestation.description}</li>
              {prestation.presentation &&
                prestation.presentation.length > 0 && (
                  <>
                    <li className="mt-2 mb-2 font-bold">Présentation :</li>
                    <PrestationList list={prestation.presentation} />
                  </>
                )}
              {prestation.url && (
                <li className="mt-2 mb-2">
                  <a href={prestation.url} className="text-blue-500 underline">
                    En savoir plus ici
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Card>
      ))}
    </section>
  );
}
