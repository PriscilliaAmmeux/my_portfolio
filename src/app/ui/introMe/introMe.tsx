import Image from "next/image";
import Title from "../title/title";

const INTRO_TEXT = {
  greeting: "Moi, c'est",
  name: "Priscillia Ammeux",
  role: "Créatrice de site web et fondatrice de Pixelia&Co,",
  location: "un studio créatif basé à Quesnoy-sur-Deûle, près de Lille.",
  passion:
    "Passionnée par l'alliance entre créativité et technologie, je transforme vos idées en sites web sur mesure.",
  mission:
    "Ma mission ? Vous accompagner dans la création d'un site internet qui vous ressemble vraiment, alliant esthétique moderne, performance technique et facilité d'utilisation.",
  approach:
    "Que vous soyez entrepreneur, artisan, consultant ou porteur de projet, je mets mon expertise au service de votre réussite digitale.",
};

const IMAGES = {
  grilleDark: {
    src: "/Grille noire.webp",
    alt: "Grille de fond",
    className: "absolute inset-0 block dark:hidden",
  },
  grilleLight: {
    src: "/Grille blanche.webp",
    alt: "Grille de fond",
    className: "absolute inset-0 hidden dark:block",
  },
  logoDark: {
    src: "/Logo-et-visage-rose-noir.webp",
    alt: "logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)",
    className:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 block dark:hidden",
  },
  logoLight: {
    src: "/Logo-et-visage-blanc-noir.webp",
    alt: "logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)",
    className:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden dark:block",
  },
};

export default function IntroMe() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-start gap-8 mt-8">
      {/* Images Section */}
      <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] flex-shrink-0 lg:mt-4 mx-auto lg:mx-0">
        {Object.entries(IMAGES).map(([key, image]) => (
          <Image
            key={key}
            src={image.src}
            alt={image.alt}
            className={image.className}
            width={300}
            height={300}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="flex-1 min-w-0 max-w-full">
        <Title text="Créatrice de site web à Lille - créer un site qui vous ressemble" />

        {/* Introduction */}
        <div className="mb-8 space-y-4">
          <p className="text-lg leading-relaxed break-words">
            {INTRO_TEXT.greeting}{" "}
            <span className="font-semibold text-pink-600">
              {INTRO_TEXT.name}
            </span>
            , <span className="font-medium">{INTRO_TEXT.role}</span>{" "}
            {INTRO_TEXT.location}
          </p>

          <p className="text-lg  leading-relaxed break-words text-pink-600 font-medium">
            {INTRO_TEXT.passion}
          </p>

          <p className="text-lg  leading-relaxed break-words">
            {INTRO_TEXT.mission}
          </p>

          <p className="text-lg  leading-relaxed break-words text-gray-700">
            {INTRO_TEXT.approach}
          </p>
        </div>
      </div>
    </div>
  );
}
