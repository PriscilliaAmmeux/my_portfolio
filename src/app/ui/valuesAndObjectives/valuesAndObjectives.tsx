import { GiDirectionSigns } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../../styles/variables.module.css";
import Article from "../components/card/card";

export default function ValuesAndObjectives() {
  return (
    <section className=" grid grid-cols-2 gap-4">
      <Article Icon={GoRocket} title="Mes valeurs">
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
      </Article>

      <Article Icon={GiDirectionSigns} title="Mes objectifs">
        <ul className="text-gray-700 flex flex-col space-y-2 font-medium">
          <li className="flex items-center">
            <AiOutlinePlus className="mr-2" /> Évolution
          </li>
          <li className="flex items-center">
            <AiOutlinePlus className="mr-2" /> Apprentissage
          </li>
          <li className="flex items-center">
            <AiOutlinePlus className="mr-2" /> Épanouissement
          </li>
          <li className="flex items-center">
            <AiOutlinePlus className="mr-2" />
            Contribuer à des projets ambitieux et porteurs de sens
          </li>
        </ul>
      </Article>
    </section>
  );
}
