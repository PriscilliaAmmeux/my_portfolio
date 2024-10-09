import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center mb-2 pt-4 mx-auto px-4 sm:px-8">
      <div className="flex flex-col items-center sm:items-start sm:flex-row">
        <Title text="Qui suis-je ?" icon={GiLadybug} />
        <Image
          src="/profil.webp"
          alt="photo de moi"
          width={150}
          height={150}
          priority
          className="mt-4 sm:mt-0 sm:ml-4"
        />
      </div>
      <p className="mt-4 sm:mt-0 sm:ml-4 text-justify">
        Développeuse web fullstack, je possède une expertise dans la création de
        sites web et d'applications. Diplômée en Développement Web et Web Mobile
        ainsi qu'en Conception et Développement d'Applications, j'ai travaillé
        sur divers projets en freelance et au sein d'entreprises. Maîtrisant des
        outils tels que Next.js, je suis à la recherche d'un CDI pour contribuer
        à des projets innovants et mettre à profit mes compétences techniques.
      </p>
    </section>
  );
}
