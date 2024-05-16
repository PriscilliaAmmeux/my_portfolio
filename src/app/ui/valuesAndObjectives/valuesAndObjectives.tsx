import { GiDirectionSigns } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../components/card/card";
import ItemList from "../components/itemList/itemList";

const objectives = [
  "Évolution",
  "Apprentissage",
  "Épanouissement",
  "Contribuer à des projets ambitieux et porteurs de sens",
];

export default function ValuesAndObjectives() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card Icon={GoRocket} title="Mes valeurs" color="bg-blue-100">
        <ul className="text-gray-700 flex flex-col space-y-2 font-medium">
          <li>
            <span className="font-bold">
              - Honnêteté, bienveillance, intégrité, transparence et respect
            </span>{" "}
            sont des valeurs primordiales dans toutes les interactions,
            personnelles et professionnelles.
          </li>
          <li>
            <span className="font-bold">
              {" "}
              - Importance des relations authentiques{" "}
            </span>
            et d'un environnement où chacun se sent valorisé et respecté.
          </li>
          <li>
            - Conviction que la véritable connexion
            <span className="font-bold"> humaine </span>
            est essentielle dans tout travail.
          </li>
          <li>
            - Forte préoccupation pour
            <span className="font-bold"> l'accessibilité web </span>
            et la recherche constante de moyens pour l'améliorer (ouverte à tout
            conseil).
          </li>
        </ul>
      </Card>

      <Card Icon={GiDirectionSigns} title="Mes objectifs" color="bg-blue-100">
        <ul className="text-gray-700 flex flex-col space-y-2 font-medium">
          {objectives.map((objective) => (
            <ItemList
              Icon={AiOutlinePlus}
              text={<p className="leading-relaxed">{objective}</p>}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
