"use client";

import Button from "@/app/components/button/button";
import CardPinkBorder from "@/app/components/cardPinkBorder/cardPinkBorder";

const collabs = [
  {
    img: "/mots-sur-mesure.webp",
    alt: "Mots sur mesure",
    name: "Christelle & Nesrine",
    role: "Rédactrices web, SEO, copywriting",
    desc: [
      {
        intro:
          'Qui se cache derrière "Mots Sur Mesure" ? Deux plumes fusionnées !',
        presentation:
          "Christelle et Nesrine, toutes deux spécialisées en rédaction web. Elles proposent aussi des services de copywriting, community management, correction et traduction de textes.",
        contain:
          "Ensemble, elles ont mis leurs talents côte à côte pour donner vie à vos contenus :",
        list: [
          'Pages d\'accueil & pages "À propos"',
          "Articles de blog",
          "Pages de vente",
          "Newsletters",
          "Fiches produits",
          "Séquences e-mailing",
        ],
        conclusion:
          "Besoin d'un contenu commercial ou informatif, ou un peu des deux ? Elles vous écrivent des Mots Sur Mesure !",
      },
    ],
    link: "https://linktr.ee/motssurmesure?fbclid=PAZXh0bgNhZW0CMTEAAafWoXm46fiXuAOIk6NB_SeRjebumAxhMYhubu7mpEORxHCukkaQhQCkky0Adw_aem_jpC3xJvl-yXSY_DIsPoTQg",
    linkText: "👉 Les contacter",
  },
  {
    img: "/1111studio.webp",
    alt: "11.11 Studio",
    name: "Béatrice – 11.11 Studio",
    role: "Graphiste, Directrice Artistique, branding & identités visuelles",
    desc: [
      {
        intro:
          "Béatrice est la Fondatrice de 11.11 Studio, un atelier de design graphique qui secoue (gentiment, mais sûrement) les marques !",
        presentation:
          "Son credo ? Transformer les identités visuelles en véritables déclarations d'amour à l'audace. Parce qu'une marque qui assume son style, c'est une marque qu'on n'oublie pas.",
        contain:
          "Avec 8 ans en comm' et 3 ans en tant que DA, elle a apprit une chose: le design, c'est fait pour impressionner, pas pour passer inaperçu !",
        list: [
          "Branding & Identités visuelles (logos, chartes graphiques, univers visuels)",
          "Design Systems & Direction artistique (cohérence digitale et print)",
          "Contenus impactants (print, digital, réseaux sociaux)",
          "Stratégie visuelle (mettre en scène l'histoire de la marque pour séduire son audience)",
        ],
        conclusion:
          "Béatrice façonne des univers graphiques uniques, à l'image de chaque marque, pour une communication cohérente et mémorable.",
      },
    ],
    link: "https://linktr.ee/11.11_std?fbclid=PAZXh0bgNhZW0CMTEAAacZHYlrNOXWlv9MuomaJFT_quSCvmfI1QugLBfumeQvl5pL116YbkcyjsmYyQ_aem_lNEB_tRc0RK4S6i1zXJReA ",
    linkText: "👉 La contacter",
  },
  {
    img: "/haw.webp",
    alt: "Haw's fait ta com'",
    name: "Haw's fait ta com'",
    role: "Community Manager & Formatrice | Stratégie Réseaux Sociaux",
    desc: [
      {
        intro:
          "Hawa est la fondatrice de Haw's fait ta com', une experte passionnée de communication digitale.",
        presentation:
          "Community Manager & Créatrice de contenu, elle accompagne les entrepreneurs dans la gestion et le développement de leur visibilité sur les réseaux sociaux grâce à une stratégie claire, authentique et adaptée à leurs besoins.",
        contain:
          "Son accompagnement repose sur l'écoute, la pédagogie et des conseils concrets pour vous aider à prendre confiance et à maîtriser votre communication.",
        list: [
          "Stratégie et gestion des réseaux sociaux",
          "Coaching & mentorat individuel",
          "Formations sur mesure (Instagram, Canva, etc.)",
          "Audits & optimisation de comptes",
        ],
        conclusion:
          "Avec Hawa, vous apprenez à communiquer efficacement tout en restant fidèle à votre identité.",
      },
    ],
    link: "https://hawsfaitacom.com/",
    linkText: "👉 La contacter",
  },
];

export default function ListCollab() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center tracking-wide mb-8">
        Mes collaboratrices
      </h2>
      <div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 rounded-2xl shadow-xl p-8 mb-10">
        <div className="space-y-5">
          <p className="text-lg text-pink-900 font-medium leading-relaxed">
            Chez <span className="font-bold text-pink-700">Pixelia&Co</span>, le
            "&Co" prend tout son sens.
          </p>
          <p className="text-lg text-pink-900 font-medium leading-relaxed">
            Je collabore avec des professionnels passionnés et complémentaires
            pour offrir à mes clients un accompagnement global, du design au
            développement, en passant par la rédaction et la communication
            digitale.
          </p>
          <p className="text-lg text-pink-900 font-medium leading-relaxed">
            Avec Béatrice, Christelle & Nesrine, et Hawa, nous unissons nos
            expertises pour créer des projets cohérents, percutants et alignés
            avec les valeurs de chaque marque.
          </p>
          <p className="text-lg font-semibold text-pink-700 leading-relaxed">
            Ensemble, nous partageons les mêmes valeurs : écoute, qualité et
            bienveillance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collabs.map((collab) => (
          <CardPinkBorder
            key={collab.name}
            title={collab.name}
            subtitle={collab.role}
            image={{ src: collab.img, alt: collab.alt }}
            className="max-w-2xl mx-auto"
            footer={
              <a
                href={collab.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center">
                <Button
                  text={collab.linkText}
                  className="w-full bg-pink-100 text-pink-700 hover:bg-pink-200"
                  type="button"
                  ariaLabel={"Contacter " + collab.name}
                />
              </a>
            }>
            {collab.desc.map((block, i) => (
              <div key={i} className="text-lg text-left w-full">
                <p className="font-semibold mb-2">{block.intro}</p>
                <p className="mb-2">{block.presentation}</p>
                <p className="mb-2">{block.contain}</p>
                <ul className="mb-2 ml-4 list-disc text-pink-900">
                  {block.list.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-semibold">{block.conclusion}</p>
              </div>
            ))}
          </CardPinkBorder>
        ))}
      </div>
    </section>
  );
}
