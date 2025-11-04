import React from "react";

interface ManifestProps {
  className?: string;
  title?: string;
  emoji?: string;
}

const PARAGRAPHS = [
  "Chez Pixelia&Co, je crois qu’un site web, ce n’est pas juste du code. C’est une rencontre entre ton univers et le monde en ligne. Une manière de montrer qui tu es, simplement, sans artifice.",
  "Je construis des sites clairs, vivants et honnêtes, parce que la confiance se gagne par la transparence. Je préfère un site juste à un site bruyant. Un site vrai à un site “tendance”.",
  "Chaque projet est une collaboration, pas une commande. Je prends le temps d’écouter, de comprendre, de traduire ton énergie en pixels. Parce que la technique seule ne suffit pas — il faut une intention derrière.",
  "Je crois en la sobriété numérique, en des outils modernes mais maîtrisés. Je choisis mes solutions (Next.js, Vercel, OVH ou WordPress/Hostinger) pour leur fiabilité, pas pour suivre la mode. Ce que je veux, c’est que ton site dure, qu’il soit lisible, et qu’il te ressemble.",
  "Créer un site, c’est semer une graine : un espace qui vit, évolue, grandit avec toi. Mon rôle est de t’aider à faire pousser ce lien entre toi et ton public, avec sincérité et clarté.",
];

export default function Manifest({
  className = "",
  title = "Le Manifeste Pixelia&Co",
  emoji = "🌿",
}: ManifestProps) {
  return (
    <section className={`flex justify-center py-10 px-4 lg:px-0 ${className}`}>
      <article
        className="max-w-3xl bg-[#F5EBDD] border border-[#E1D4B7] rounded-xl shadow-lg p-8 lg:p-12"
        aria-labelledby="manifest-title">
        <header className="mb-6 flex items-start gap-3">
          <div
            aria-hidden
            className="flex text-xl shrink-0"
            title="icône manifeste">
            {emoji}
          </div>
          <h3
            id="manifest-title"
            className="text-2xl lg:text-3xl font-serif text-green-800">
            {title}
          </h3>
        </header>

        <div className="prose prose-neutral max-w-none text-gray-800">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}
