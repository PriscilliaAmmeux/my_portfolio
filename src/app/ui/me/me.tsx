import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center mb-4 pt-4 mx-auto px-4 sm:px-8">
      <Title text="Qui suis-je ?" icon={GiLadybug} />
      <Image
        className="ml-8 mr-4"
        src="/profil.webp"
        alt="photo de moi"
        width={150}
        height={150}
        priority
      />
      <div className="ml-5 mt-4 sm:mt-0">
        <p className="mb-2">
          Bonjour ! Je suis Priscillia, conceptrice et développeuse
          d'applications passionnée par l'accessibilité et le développement
          écologique de vos applications.
        </p>
        <p className="mb-2">
          À la recherche de nouvelles opportunités : contrats à durée
          déterminée, indéterminée, missions ponctuelles ou une alternance avec{" "}
          <a
            href="https://www.foreach-academy.fr/le-mastere-foreach/"
            className="hover:text-pink-700 transition-colors duration-300 hover:underline hover:font-semibold"
            target="_blank"
            rel="noopener noreferrer">
            l'école ForEach Academy
          </a>{" "}
          pour continuer à me perfectionner (RNCP Niveau 7 - Architecte Web).
        </p>
        <p className="mb-2">
          À 37 ans, mariée et maman de deux enfants, je suis basée dans le nord
          de la France. L'organisation et la rigueur sont mes atouts.
        </p>
      </div>
    </section>
  );
}
