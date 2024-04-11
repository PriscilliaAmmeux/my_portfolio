import { GiDirectionSigns } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import styles from "../../styles/variables.module.css";

export default function ValuesAndObjectives() {
  return (
    <section className=" grid grid-cols-2 gap-4">
      <article className="mt-8 border-t border-gray-300 pt-6 bg-blue-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <GoRocket size={40} className={styles.iconColor} />{" "}
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
            Mes valeurs !
          </h2>
        </div>
        <p className="text-gray-700">
          Honnêteté, bienveillance, intégrité, transparence et respect sont des
          valeurs primordiales dans toutes les interactions, personnelles et
          professionnelles.
        </p>
        <p className="text-gray-700">
          Importance des relations authentiques et d'un environnement où chacun
          se sent valorisé et respecté.
        </p>
        <p className="text-gray-700">
          Conviction que la véritable connexion humaine est essentielle dans
          tout travail.
        </p>
        <p className="text-gray-700">
          Forte préoccupation pour l'accessibilité web et la recherche constante
          de moyens pour l'améliorer (ouverte à tout conseil).
        </p>
      </article>

      <article className="mt-8 border-t border-gray-300 pt-6 bg-blue-100 p-6 rounded-lg shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <GiDirectionSigns size={40} className={styles.iconColor} />
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
            Mes objectifs
          </h2>
        </div>
        <ul className="text-gray-700 flex flex-col space-y-2">
          <li className="font-medium">Évolution</li>
          <li className="font-medium">Apprentissage</li>
          <li className="font-medium">Épanouissement</li>
          <li className="font-medium">
            Contribuer à des projets ambitieux et porteurs de sens
          </li>
        </ul>
      </article>
    </section>
  );
}
