import { FaHandPointRight } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import Title from "../components/title/title";
import ItemList from "../components/itemList/itemList";

const cardContent = [
  "Ma motivation sans faille, mon dynamisme et ma positivité sont des atouts que je mets au service de chaque projet.",
  "Avec 9 ans d'expérience dans le secteur bancaire et 8 ans au sein d'une ESN, j'ai acquis une expertise solide que je suis prête à mettre à profit.",
  "Réussir à obtenir les titres RNCP Développeur Web et Web Mobile (niveau 5) et Concepteur et Développeur d'Applications (niveau 6) en seulement deux ans, tout en conciliant ma vie de famille avec de jeunes enfants, démontre ma force intérieure et ma détermination inébranlable.",
  "Je suis passionnée par l'écriture et la communication et je suis constamment active sur les réseaux sociaux pour rester à jour sur les dernières tendances du secteur.",
  "Je souhaite intégrer une entreprise où je pourrai non seulement apporter ma contribution dès le départ, mais également avoir une perspective d'évolution de carrière à long terme.",
  "Je suis convaincue que ma passion, mon expérience et ma volonté de toujours aller de l'avant seront des atouts précieux pour votre entreprise. Vous ne le regretterez pas.",
];

export default function WhyMe() {
  return (
    <article className="bg-gray-800 mt-4 text-white p-6">
      <Title text="Pourquoi me choisir ?" icon={FaHandPointRight} />
      <ul className="text-gray-200 flex flex-col space-y-4 font-medium">
        {cardContent.map((content, index) => (
          <ItemList
            key={index}
            Icon={FcOk}
            text={<p className="leading-relaxed">{content}</p>}
          />
        ))}
      </ul>
    </article>
  );
}
