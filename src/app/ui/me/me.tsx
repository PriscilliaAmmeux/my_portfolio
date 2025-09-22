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
            Autodidacte devenue développeuse web indépendante, j'ai rapidement
            compris qu'un bon site ne se limite pas à sa technique, il doit
            incarner une vision.
          </p>
          <p className="mb-4">
            Guidée par une obsession de l'harmonie entre esthétique et
            performance, je crée des expériences digitales sur mesure, où chaque
            ligne de code entre en résonance avec l'identité de la marque.
          </p>
          <p className="mb-4">
            Mon approche est intuitive, exigeante et profondément humaine. Je ne
            me contente pas de construire des sites: je donne forme aux idées,
            avec précision, style et singularité.
          </p>
        </div>
      </div>
    </section>
  );
}
