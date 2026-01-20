import CardPinkBorder from "@/app/components/cardPinkBorder/cardPinkBorder";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SERVICES_LIST = [
  "Landing page wordpress simple (sans barre de navigation ni formulaire de contact): ici peu de personnalisation, j'utilise un template moderne.",
  "Site vitrine wordpress (1 page) mais avec header + barre de navigation avec ancrage, design, personnalisation légère, ajouts de 2 sections au choix, formulaire de contact",
  "Site vitrine wordpress (4 pages) - page personnalisable",
  "Site sur mesure (avec next-vercel + ovh)",
  "Refonte de site web",
];

const SECTIONS_CONTENT = {
  intro: {
    title: "Création de sites web professionnels",
    description:
      "Je vous propose des pages de site internet claires, efficaces et orientées conversion, en vous accompagnant sur tous types de projets :",
    icon: "💻",
  },
  management: {
    title: "Avoir un site internet facile à gérer avec Pixelia&Co",
    paragraphs: [
      "Grâce à WordPress, un CMS moderne et facile à prendre en main, vous pouvez mettre à jour votre site, ajouter vos contenus, les modifier, ou encore gérer toutes les pages de votre site.",
      "Vous recevez un site clé en main, personnalisable, responsive sur mobiles & tablettes, incluant votre nom de domaine & hébergement web, la sécurité (SSL), une structure SEO optimisée ainsi qu'une ergonomie & expérience utilisateur soignées (UX / UI)",
      "Vous êtes votre propre webmaster : vous publiez, modifiez, ajoutez des pages, articles, sections, éléments (pas uniquement des pages) en quelques clics.",
      "Pas besoin de connaissances techniques ou de notions de code : interface intuitive, éditeur de texte moderne et construction par glisser-déposer.",
      "Et sachez que je suis toujours là après la mise en ligne, en cas de besoin.",
    ],
    icon: "⚙️",
  },
  seo: {
    title: "Référencement & performance",
    content:
      "Un bon site internet est inutile s'il n'est pas visible. Grâce au référencement naturel (SEO / intégration de mots-clés) et à la structure technique (CSS, HTML propres, extensions utiles, performance), tout est fait pour aider votre site à apparaître sur les premières pages des moteurs de recherche.",
    icon: "🚀",
  },
  why: {
    title: "Pourquoi choisir Pixelia&Co ?",
    paragraphs: [
      "Parce que vous aurez droit à une conception sur mesure, des explications claires, de la pédagogie, et une autonomie garantie. Je vous accompagne sur votre projet de la conception à la mise en ligne, et même après.",
      "Avec Pixelia&Co, créer un site n'est pas si compliqué. Mon rôle est de faire de ce projet, un jeu d'enfant pour vous.",
    ],
    icon: "✨",
  },
};

// Styles unifiés pour tous les textes
const TEXT_STYLE = "leading-relaxed text-pink-900 text-lg";
const LIST_STYLE = "list-disc list-inside text-pink-900 space-y-2 text-lg";
const PARAGRAPH_STYLE = "leading-relaxed text-pink-900 mb-3 text-lg";

// Fonction utilitaire pour styliser "Pixelia&Co" dans les paragraphes uniquement
const highlightPixelia = (text: string) => {
  const parts = text.split(/(Pixelia&Co)/g);
  return parts.map((part, index) =>
    part === "Pixelia&Co" ? (
      <span key={index} className="text-pink-600 font-semibold">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

// Composant bouton vers prestations
const PrestationsButton = () => (
  <div className="flex justify-center">
    <Link
      href="/prestations"
      className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-pink-700 bg-pink-100 border border-pink-200 rounded-lg hover:bg-pink-200 hover:text-pink-800 transition-colors duration-200">
      Voir mes prestations détaillées →
    </Link>
  </div>
);

export default function IntroTextHome() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card Création de sites */}
        <CardPinkBorder
          title={SECTIONS_CONTENT.intro.title}
          icon={SECTIONS_CONTENT.intro.icon}
          footer={<PrestationsButton />}>
          <p className={PARAGRAPH_STYLE}>
            {highlightPixelia(SECTIONS_CONTENT.intro.description)}
          </p>
          <ul className={LIST_STYLE}>
            {SERVICES_LIST.map((service, index) => (
              <li key={index} className={TEXT_STYLE}>
                {highlightPixelia(service)}
              </li>
            ))}
          </ul>
        </CardPinkBorder>

        {/* Card Gestion facile */}
        <CardPinkBorder
          title={SECTIONS_CONTENT.management.title}
          icon={SECTIONS_CONTENT.management.icon}
          footer={<PrestationsButton />}>
          <div className="space-y-3">
            {SECTIONS_CONTENT.management.paragraphs.map((paragraph, index) => (
              <p key={index} className={PARAGRAPH_STYLE}>
                {highlightPixelia(paragraph)}
              </p>
            ))}
          </div>
        </CardPinkBorder>

        {/* Card SEO & Performance */}
        <CardPinkBorder
          title={SECTIONS_CONTENT.seo.title}
          icon={SECTIONS_CONTENT.seo.icon}>
          <p className={PARAGRAPH_STYLE}>
            {highlightPixelia(SECTIONS_CONTENT.seo.content)}
          </p>
        </CardPinkBorder>

        {/* Card Pourquoi choisir */}
        <CardPinkBorder
          title={SECTIONS_CONTENT.why.title}
          icon={SECTIONS_CONTENT.why.icon}>
          <div className="space-y-3">
            {SECTIONS_CONTENT.why.paragraphs.map((paragraph, index) => (
              <p key={index} className={PARAGRAPH_STYLE}>
                {highlightPixelia(paragraph)}
              </p>
            ))}
            <p className={PARAGRAPH_STYLE}>
              Venez découvrir{" "}
              <Link
                href="/project"
                className="inline-flex items-center gap-1 text-pink-600 font-semibold hover:text-pink-700 hover:underline transition-colors duration-200">
                {" "}
                <FaArrowAltCircleRight />
                mes réalisations
              </Link>{" "}
              pour vous faire une idée !
            </p>
          </div>
        </CardPinkBorder>
      </div>
    </section>
  );
}
