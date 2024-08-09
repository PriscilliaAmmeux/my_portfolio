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
          d'applications, passionnée par l'accessibilité numérique et le
          développement durable. Après une première carrière dans le secteur
          bancaire, j'ai opéré une reconversion réussie vers le développement
          web, portée par ma curiosité et mon envie de créer des solutions
          numériques innovantes.
        </p>
        <p className="mb-2">
          À 37 ans, mariée et maman de deux enfants, j'ai su allier ma vie de
          famille à une carrière en pleine expansion, en m'appuyant sur des
          valeurs fortes comme l'honnêteté, l'inclusivité, et le respect de
          l'environnement. Basée dans le nord de la France, j'accorde une grande
          importance à l'organisation et à la rigueur, ce qui me permet de mener
          à bien des projets complexes et de m'investir pleinement dans des
          missions ambitieuses.
        </p>
        <p className="mb-2">
          Mon expertise en développement web fullstack, acquise à travers des
          expériences variées, tant en freelance qu'en entreprise, se double
          d'un engagement fort pour l'accessibilité et l'optimisation écologique
          des applications. Que ce soit pour des projets personnels ou
          professionnels, je mets un point d'honneur à créer des solutions qui
          allient performance, accessibilité, et durabilité.
        </p>
        <p className="mb-2">
          Je suis actuellement à la recherche de nouvelles opportunités où je
          pourrai continuer à évoluer, apprendre, et contribuer à des projets
          porteurs de sens. Mon dynamisme, ma motivation sans faille, et ma
          capacité à communiquer efficacement font de moi une collaboratrice
          précieuse, prête à relever tous les défis.
        </p>
      </div>
    </section>
  );
}
