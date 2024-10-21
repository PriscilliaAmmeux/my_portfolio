import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center mb-2 pt-4 mx-auto px-4 sm:px-8">
      <Title text="Qui suis-je ?" icon={GiLadybug} />
      <Image
        src="/profil.webp"
        alt="photo de moi"
        width={150}
        height={150}
        priority
        className="mt-4 lg:mt-0"
      />
      <div className="lg:ml-4 mt-4 lg:mt-0 text-justify">
        <h1 className="text-xl font-semibold mb-2">
          Bonjour, je suis Priscillia Ammeux !
        </h1>
        <p>
          Développeuse web fullstack, motivée par la création de sites web et
          d'applications mobiles. Diplômée en Développement Web et Web Mobile,
          ainsi qu'en Conception et Développement d'Applications, j'ai eu
          l'occasion de travailler sur divers projets, tant en freelance qu'au
          sein d'équipes.
        </p>
        <p>
          J'aime explorer des technologies comme Next.js, React.js , Flutter,
          Node.js et Typescript. Actuellement, je suis à la recherche d'un CDI
          où je pourrais mettre à profit mes compétences, contribuer à des
          projets innovants et continuer à apprendre dans un environnement
          dynamique.
        </p>
      </div>
    </section>
  );
}
