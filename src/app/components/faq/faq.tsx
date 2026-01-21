"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "Combien coûte la création d'un site internet professionnel ?",
    answer:
      "Le tarif d'un site web dépend de l'ampleur du projet. Mes packs commencent à partir de 300 € pour une landing page et de 400 € pour un site vitrine 1 page. Chaque formule inclut la configuration technique, un design soigné et un accompagnement personnalisé.",
  },
  {
    question: "Quel est le délai pour créer un site vitrine ?",
    answer:
      "Selon la formule choisie et votre disponibilité pour fournir les contenus, le délai moyen varie entre 3 et 12 semaines. Un besoin urgent ? Optez pour le Pack Express, ça permet de mettre votre activité en ligne rapidement.",
  },
  {
    question: "Votre prestation inclut-elle le référencement naturel ?",
    answer:
      "Oui : chaque site est optimisé pour le référencement naturel (SEO) : structure, balises, vitesse, responsivité mobile. Pour aller plus loin, je propose également un accompagnement SEO sur-mesure. C'est à dire je vous suis pas à pas pour optimiser votre site afin qu'il soit mieux référencé sur Google : audit, choix des mots-clés, amélioration du contenu, optimisation technique, stratégie sur mesure.",
  },
  {
    question: "Puis-je gérer mon site seul après la création ?",
    answer:
      "Bien sûr. Je vous forme à l'utilisation de votre site et vous serez totalement autonome. Et si vous préférez déléguer, mes offres de maintenance sont là pour vous simplifier la vie.",
  },
  {
    question: "Créez-vous aussi des sites e‑commerce ?",
    answer:
      "Oui ! Je peux réaliser des sites e‑commerce adaptés à vos besoins, ou mobiliser le collectif <a href='https://feelingandcreate.com/' target='_blank' rel='noopener noreferrer' class='text-pink-600 hover:text-pink-700 underline font-semibold'>Feeling & Create</a>, dont je fais partie, pour des projets plus ambitieux. Le collectif réunit des freelances experts en digital (marketing, développement, design, conformité, community management) pour créer des sites performants et sur‑mesure.",
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <section className="py-24 px-4 lg:px-0" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h2
            id="faq-title"
            className="text-3xl lg:text-4xl font-bold text-pink-600 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Vous vous posez des questions sur mes services ? Voici les réponses
            aux interrogations les plus courantes.
          </p>
        </header>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <article
              key={index}
              className="bg-white border border-pink-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 rounded-xl"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}>
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-pink-600 transform transition-transform duration-200 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <div className="px-6 pb-6">
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center  mt-10">
          <p className="mb-4 text-lg">
            Une autre question ? N'hésitez pas à me contacter !
          </p>
          <a
            href="https://calendly.com/priscillia-ammeux-pro/rdv-web-audit-noel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium">
            Me poser une question
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
