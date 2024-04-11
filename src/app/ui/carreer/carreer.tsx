import { MdWork } from "react-icons/md";
import Image from "next/image";
import styles from "../../styles/variables.module.css";

export default function Carreer() {
  return (
    <section className="mt-8 pt-6 bg-gray-800 text-white  w-full p-6 shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <MdWork size={40} className={styles.iconColor} />{" "}
        <h1 className="ml-4 text-white text-2xl font-semibold ">
          Mon parcours professionnel
        </h1>
      </div>
      <div className="relative flex items-center justify-center space-x-2 mb-10">
        <Image
          className="transform -rotate-6 pt-4"
          src="/work.jpeg"
          alt="picture of a woman in front of a computer "
          width={200}
          height={37}
          priority
        />
        <Image
          className="pt-4 rotate-6"
          src="/work2.jpeg"
          alt="picture of montains"
          width={200}
          height={37}
          priority
        />
        <Image
          className="transform -rotate-6 pt-4"
          src="/writing.jpeg"
          alt="hand writing "
          width={200}
          height={37}
          priority
        />
        <Image
          className="pt-4 rotate-6"
          src="/paint.jpeg"
          alt="mum with children who are painting"
          width={200}
          height={37}
          priority
        />
      </div>
      <ul className="list-disc ml-6">
        <li className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Développeuse fullstack en alternance - XPEHO - Villeneuve d'Ascq -
            Hybride - Mars 2022 à Février 2024
          </h2>
          <ul className="list-disc ml-6">
            <li>Projet Yaki (voir onglet "Mes Projets")</li>
          </ul>
        </li>
        <li className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Formation Développeuse Web Fullstack - Akkodis Lille- Novembre 2021
            à février 2023{" "}
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Bootcamp de 5 mois avec la Wild Code School de Lille (présentiel)
              - Septembre 2022 à février 2023
            </li>
            <li>
              E-learning avec Open Class Room - Novembre 2021 à septembre 2022
            </li>
          </ul>
        </li>
        <li className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Période consacrée volontairement à l'éducation de mes enfants -
            Novembre 2019 à novembre 2021
          </h2>
        </li>
        <li className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            {" "}
            Gestionnaire Cash Management - en prestation pour la Société
            Générale – AKKODIS Lille - Avril 2015 à novembre 2019
          </h2>
          <ul className="list-disc ml-6">
            <li>Gestion des flux financiers internationaux,</li>
            <li>Cash Management, </li>
            <li>Gestion des incidents et analyse niveau 2</li>
          </ul>
        </li>
        <li className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Gestionnaire Back Office Financement Réseaux - Mobilize Financial
            Services (anciennement RCI Banque) Noisy le grand(93) - Septembre
            2010 à avril 2015
          </h2>

          <ul className="list-disc ml-6">
            <li>Gestion et mise en place de financements.</li>
            <li>Portefeuille de 185 concessions et 20 agents,</li>
            <li>Affacturage Renault, RRG (Renault Retail Group).</li>
            <li>
              Traitement et versement des primes constructeurs au réseau
              (Bonification Diac),
            </li>
            <li>Ajustement de facturation Nissan, Renault, In niti.</li>
          </ul>
        </li>

        <li className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Assistante Administrative – Automobiles Gil Garage Neuilly sur Marne
            - Mai 2009 à Août 2010
          </h2>
          <ul className="list-disc ml-6">
            <li>Accueil client,</li>
            <li>Réception et livraisons véhicules,</li>
            <li>Devis, factures.</li>
          </ul>
        </li>
        <li className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Employé Administrative – Garage du centre Pithiviers - Mara 2009 à
            Avril 2009
          </h2>
          <ul className="list-disc ml-6">
            <li>Accueil client,</li>
            <li>Devis, factures.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
