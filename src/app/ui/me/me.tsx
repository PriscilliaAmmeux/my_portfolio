import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  return (
    <section className="flex flex-col items-center justify-center mb-2 mx-auto px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 mt-8">
        <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] flex-shrink-0 lg:mt-4 mx-auto lg:mx-0">
          <Image
            src="/Grille noire.webp"
            alt="Grille de fond"
            className="absolute inset-0 block dark:hidden"
            width={300}
            height={300}
          />
          <Image
            src="/Grille blanche.webp"
            alt="Grille de fond"
            className="absolute inset-0 hidden dark:block"
            width={300}
            height={300}
          />
          <Image
            src="/Visage logo et fleche.webp"
            alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
            className="absolute inset-0 z-10"
            width={300}
            height={300}
          />
        </div>

        <div className="flex-1">
          <Title text="À propos de moi !" />
          <p className="mb-4">
            Moi, c’est{" "}
            <span className="font-semibold text-pink-700">
              Priscillia Ammeux
            </span>
            ,
            <span className="font-medium text-white">
              {" "}
              développeuse web freelance
            </span>{" "}
            basée à{" "}
            <span className="text-pink-600 font-medium">
              Quesnoy-sur-Deûle, près de Lille
            </span>
            .
          </p>

          <p className="mb-4">
            Avant de me lancer dans le développement web, j’ai travaillé pendant
            <span className="font-semibold text-white">
              {" "}
              plus de 10 ans dans le secteur bancaire
            </span>
            , notamment au sein des équipes{" "}
            <span className="font-semibold text-white">IT</span>. Cette
            expérience m’a appris la rigueur, l’organisation et le sens du
            service client.
          </p>

          <p className="mb-4">
            En <span className="text-pink-600 font-medium">novembre 2021</span>,
            j’ai décidé d’entamer une
            <span className="font-semibold text-white">
              {" "}
              reconversion professionnelle
            </span>{" "}
            vers le métier qui me passionne : la{" "}
            <span className="font-semibold text-pink-700">
              création de sites web
            </span>
            . Depuis, j’accompagne les entreprises, indépendants et associations
            des
            <span className="font-semibold text-white">
              {" "}
              Hauts-de-France
            </span>{" "}
            dans leurs projets digitaux.
          </p>

          <p className="mb-4">
            Guidée par une obsession de l’harmonie entre
            <span className="font-semibold text-pink-600">
              {" "}
              esthétique et performance
            </span>
            , je conçois des{" "}
            <span className="font-semibold text-white">
              sites WordPress et sur mesure{" "}
            </span>
            pensés pour être à la fois beaux, rapides et accessibles.
          </p>

          <p className="mb-4">
            Mon approche est intuitive, exigeante et profondément humaine. Je ne
            me contente pas de construire des sites :
            <span className="font-semibold text-pink-700">
              {" "}
              je donne forme aux idées
            </span>
            , avec précision, style et singularité.
          </p>
        </div>
      </div>
    </section>
  );
}
