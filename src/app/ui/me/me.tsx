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
            src="/Logo-et-visage-rose-noir.webp"
            alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 block dark:hidden"
            width={300}
            height={300}
          />
          <Image
            src="/Logo-et-visage-blanc-noir.webp"
            alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden dark:block"
            width={300}
            height={300}
          />
        </div>

        <div className="flex-1">
          <Title text="À propos de moi !" />
          <p className="mb-4">
            Moi, c’est{" "}
            <span className="font-semibold text-pink-600">
              Priscillia Ammeux{" "}
            </span>
            ,
            <span className="font-medium">
              {" "}
              développeuse web freelance et fondatrice de Pixelia&Co,{" "}
            </span>{" "}
            un studio créatif basé à Quesnoy-sur-Deûle, près de Lille.
          </p>

          <p className="mb-4">
            Avant de me lancer dans le développement web, j’ai travaillé pendant
            plus de 10 ans dans le secteur bancaire, au sein d’équipes IT. Cette
            expérience m’a appris la rigueur, l’organisation et le sens du
            service client.
          </p>

          <p className="mb-4">
            En novembre 2021, j’ai choisi de me reconvertir vers un métier qui
            fait profondément sens pour moi :{" "}
            <span className="font-semibold text-pink-600">
              la création de sites web
            </span>
            . Depuis, avec Pixelia&Co, j’accompagne des entreprises,
            indépendants et associations dans leurs projets digitaux, en alliant
            esthétique, performance et humanité. En novembre 2021, j’ai décidé
            d’entamer une
            <span className="font-semibold text-pink-600">
              {" "}
              reconversion professionnelle
            </span>{" "}
            vers le métier qui me passionne : la{" "}
            <span className="font-semibold text-pink-600">
              création de sites web
            </span>
            . Depuis, j’accompagne les entreprises, indépendants et associations
            des
            <span className="font-semibold"> Hauts-de-France</span> dans leurs
            projets digitaux.
          </p>

          <p className="mb-4">
            Guidée par une recherche d’équilibre entre{" "}
            <span className="font-semibold text-pink-600">
              design, accessibilité et fonctionnalité
            </span>
            , je conçois des sites WordPress ou sur mesure, pensés pour être
            beaux, rapides et durables. Mon approche est à la fois{" "}
            <span className="font-semibold text-pink-600">
              artisanale et professionnelle
            </span>{" "}
            : je ne me contente pas de construire des sites, je façonne des
            expériences digitales qui révèlent l’identité de mes clients.
          </p>

          <p className="mb-4">
            Au fil des projets, j’ai compris qu’un site web ne pouvait pas être
            un simple produit technique. Pour moi, il doit{" "}
            <span className="font-semibold text-pink-600">
              refléter une identité
            </span>
            , porter une énergie, créer un lien naturel entre toi et ton public.
            C’est de cette conviction qu’est né le manifeste de{" "}
            <span className="font-semibold text-pink-600"> Pixelia&Co</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
