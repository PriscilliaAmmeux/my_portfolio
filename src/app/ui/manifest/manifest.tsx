import React from "react";
import CardPinkBorder from "../../components/cardPinkBorder/cardPinkBorder";

interface ManifestProps {
  className?: string;
  title?: string;
  emoji?: string;
}

const PARAGRAPHS = [
  "Chez Pixelia&Co, je crois qu'un site web, ce n'est pas juste du code. C'est une rencontre entre ton univers et le monde en ligne. Une manière de montrer qui tu es, simplement, sans artifice.",
  'Je construis des sites clairs, vivants et honnêtes, parce que la confiance se gagne par la transparence. Je préfère un site juste à un site bruyant. Un site vrai à un site "tendance".',
  "Chaque projet est une collaboration, pas une commande. Je prends le temps d'écouter, de comprendre, de traduire ton énergie en pixels. Parce que la technique seule ne suffit pas — il faut une intention derrière.",
  "Je crois en la sobriété numérique, en des outils modernes mais maîtrisés. Je choisis mes solutions (Next.js, Vercel, OVH ou WordPress/Hostinger) pour leur fiabilité, pas pour suivre la mode. Ce que je veux, c'est que ton site dure, qu'il soit lisible, et qu'il te ressemble.",
  "Créer un site, c'est semer une graine : un espace qui vit, évolue, grandit avec toi. Mon rôle est de t'aider à faire pousser ce lien entre toi et ton public, avec sincérité et clarté.",
];

export default function Manifest({
  className = "",
  title = "Le Manifeste Pixelia&Co",
  emoji = "🌿",
}: ManifestProps) {
  return (
    <section className={`flex justify-center py-10 px-4 lg:px-0 ${className}`}>
      <div className="max-w-3xl w-full">
        <CardPinkBorder title={title} icon={emoji}>
          <div className="prose prose-neutral max-w-none space-y-4">
            {PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-lg  break-words">
                {paragraph}
              </p>
            ))}
          </div>
        </CardPinkBorder>
      </div>
    </section>
  );
}
