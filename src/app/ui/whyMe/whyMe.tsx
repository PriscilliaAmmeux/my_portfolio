import Article from "../components/card/card";
import { GiNinjaHeroicStance } from "react-icons/gi";

export default function WhyMe() {
  return (
    <>
      <Article Icon={GiNinjaHeroicStance} title="Pourquoi me choisir ?">
        <ul className="text-gray-700 flex flex-col space-y-2 font-medium">
          <li className="flex items-center">
            Ma motivation sans faille, mon dynamisme et ma positivité sont des
            atouts que je mets au service de chaque projet.
          </li>
          <li className="flex items-center">
            Avec 9 ans d'expérience dans le secteur bancaire et 8 ans au sein
            d'une ESN, j'ai acquis une expertise solide que je suis prête à
            mettre à profit.
          </li>
          <li className="flex items-center">
            Réussir à obtenir les titres RNCP Développeur Web et Web Mobile
            (niveau 5) et Concepteur et Développeur d'Applications (niveau 6) en
            seulement deux ans, tout en conciliant ma vie de famille avec de
            jeunes enfants, démontre ma force intérieure et ma détermination
            inébranlable.
          </li>
          <li className="flex items-center">
            J'apprécie particulièrement la communication et le partage, et je
            suis active sur les réseaux sociaux pour rester constamment à jour
            sur les dernières tendances du secteur. 💬🌐
          </li>
          <li className="flex items-center">
            Je souhaite intégrer une entreprise où je pourrai non seulement
            apporter ma contribution dès le départ, mais également avoir une
            perspective d'évolution de carrière à long terme. 🚀
          </li>
          <li className="flex items-center">
            Je suis convaincue que ma passion, mon expérience et ma volonté de
            toujours aller de l'avant seront des atouts précieux pour votre
            entreprise. Vous ne le regretterez pas.
          </li>
        </ul>
      </Article>
    </>
  );
}
