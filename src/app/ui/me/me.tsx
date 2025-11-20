import CardPinkBorder from "../../components/cardPinkBorder/cardPinkBorder";
import IntroMe from "../introMe/introMe";

const SECTIONS = [
  {
    title: "De la banque à la création de sites web",
    icon: "🏦",
    paragraphs: [
      "Avant de me lancer dans le développement web, j'ai travaillé plus de dix ans dans le secteur bancaire, au sein d'équipes IT exigeantes et rigoureuses. Cette expérience m'a appris la précision, l'organisation, la méthode, mais surtout, le service client.",
      "En 2021, j'ai choisi de me reconvertir pour exercer un métier plus créatif, à la croisée du code, du design et de la communication digitale. Aujourd'hui, je mets cette double compétence (technique et humaine) au service de mes clients pour concevoir des sites internet clairs, efficaces et durables.",
    ],
  },
  {
    title: "Mon métier, créer et développer des sites WordPress sur mesure",
    icon: "💻",
    paragraphs: [
      "Je crée des sites 100% codés et des sites WordPress personnalisés :",
    ],
    list: [
      "Sites vitrines, blogs, portfolios, ou landing pages orientées conversion,",
      "Refontes de sites existants, pour améliorer le design, le référencement naturel (SEO) ou la performance,",
      "Intégration d'outils essentiels : hébergement web, nom de domaine, sécurité SSL, Google Analytics, système de gestion de contenu (CMS), responsive design pour mobiles et tablettes, etc.",
    ],
    additionalParagraphs: [
      "Je fais de votre projet une solution clé en main, adaptée à votre activité, à votre secteur et à votre image de marque.",
      "Je vous accompagne à chaque étape : de la structure du contenu, en passant par la personnalisation graphique, l'optimisation SEO, jusqu'à la mise en ligne.",
      "Je me forme aussi régulièrement sur d'autres outils, comme WooCommerce par exemple, pour vous accompagner dans la création de votre boutique en ligne.",
    ],
  },
  {
    title: "Ma philosophie de travail",
    icon: "✨",
    paragraphs: [
      "On pourrait croire que créer un site internet, c'est juste écrire du code HTML ou installer un thème WordPress.",
      "Eh bien non ! C'est avant tout concevoir un outil vivant, fidèle à votre identité, qui soutient votre stratégie et facile à gérer pour votre communication en ligne au quotidien.",
      "Mon approche est :",
    ],
    list: [
      "Humaine : écoute, accompagnement et pédagogie tout au long du projet.",
      "Structurée : un process clair, des étapes définies et des échanges réguliers.",
      "Créative : un webdesign sur mesure, sans templates génériques.",
      "Orientée résultats : performance, accessibilité et référencement naturel durable.",
    ],
    additionalParagraphs: [
      "Je construis des sites au joli design, responsifs, et simples à administrer. Mon but est que vous puissiez gérer votre contenu en toute autonomie, même sans connaissances techniques, même après sa mise en ligne.",
      "De plus, pour moi, chaque projet est une collaboration, pas une simple commande. Je prends le temps d'écouter, de comprendre, de traduire votre énergie en pixels.",
    ],
  },
  {
    title: "Une créatrice digitale avec le sens du détail",
    icon: "🎨",
    paragraphs: [
      "Je transforme vos idées en un site web unique, moderne et performant, imaginé et créé pour vos utilisateurs comme pour les moteurs de recherche. Une ligne de code, une couleur, un espace, j'organise tout pour mettre en valeur votre activité et renforcer votre notoriété en ligne.",
      "Vous méritez un site internet professionnel à votre image : clair et intuitif. On le construit ensemble ?",
    ],
  },
];

export default function Me() {
  return (
    <section className="w-full max-w-7xl flex flex-col items-center justify-center mb-2 mx-auto px-4 sm:px-8">
      <IntroMe />
      {/* Dynamic Sections using CardPinkBorder */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {SECTIONS.map((section, index) => (
          <CardPinkBorder
            key={index}
            title={section.title}
            icon={section.icon}
            className="h-full">
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-sm leading-relaxed break-words">
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="list-disc list-inside space-y-2 pl-2">
                  {section.list.map((item, lIndex) => (
                    <li
                      key={lIndex}
                      className="text-sm leading-relaxed break-words">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.additionalParagraphs &&
                section.additionalParagraphs.map((paragraph, apIndex) => (
                  <p
                    key={apIndex}
                    className="text-sm leading-relaxed break-words">
                    {paragraph}
                  </p>
                ))}
            </div>
          </CardPinkBorder>
        ))}
      </div>
    </section>
  );
}
