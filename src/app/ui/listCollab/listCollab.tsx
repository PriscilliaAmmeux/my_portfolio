"use client";

import Button from "@/app/components/button/button";

const collabs = [
  {
    img: "/mots-sur-mesure.webp",
    alt: "Mots sur mesure",
    name: "Christelle & Nesrine",
    role: "Rédactrices web, SEO, copywriting",
    desc: [
      {
        intro:
          "Qui se cache derrière “Mots Sur Mesure” ? Deux plumes fusionnées !",
        presentation:
          "Christelle et Nesrine, toutes deux spécialisées en rédaction web. Elle propose aussi des services de copywriting, community management, correction et traduction de textes.",
        contain:
          "Ensemble, elle ont mis leurs talents côte à côte pour donner vie à vos contenus :",
        list: [
          "Pages d’accueil & pages “À propos”",
          "Articles de blog",
          "Pages de vente",
          "Newsletters",
          "Fiches produits",
          "Séquences e-mailing",
        ],
        conclusion:
          "Besoin d’un contenu commercial ou informatif, ou un peu des deux ? Elles vous écrivent des Mots Sur Mesure !",
      },
    ],
    link: "https://www.instagram.com/motssurmesure/",
    linkText: "👉 Les contacter",
  },
  {
    img: "/1111studio.webp",
    alt: "11.11 Studio",
    name: "Béatrice – 11.11 Studio",
    role: "Graphiste, Directrice Artistique, branding & identités visuelles.",
    desc: [
      {
        intro:
          "Béatrice est la Fondatrice de 11.11 Studio, un atelier de design graphique qui secoue (gentiment, mais sûrement) les marques !",
        presentation:
          "Son credo ? Transformer les identités visuelles en véritables déclarations d’amour à l’audace. Parce qu’une marque qui assume son style, c’est une marque qu’on n’oublie pas.",
        contain:
          "Avec 8 ans en comm’ et 3 ans en tant que DA, elle a apprit une chose: le design, c’est fait pour impressionner, pas pour passer inaperçu !",
        list: [
          "Branding & Identités visuelles (logos, chartes graphiques, univers visuels)",
          "Design Systems & Direction artistique (cohérence digitale et print)",
          "Contenus impactants (print, digital, réseaux sociaux)",
          "Stratégie visuelle (mettre en scène l’histoire de la marque pour séduire son audience)",
        ],
        conclusion:
          "Béatrice façonne des univers graphiques uniques, à l’image de chaque marque, pour une communication cohérente et mémorable.",
      },
    ],
    link: "https://linktr.ee/11.11_std?fbclid=PAZXh0bgNhZW0CMTEAAacZHYlrNOXWlv9MuomaJFT_quSCvmfI1QugLBfumeQvl5pL116YbkcyjsmYyQ_aem_lNEB_tRc0RK4S6i1zXJReA ",
    linkText: "👉 La contacter",
  },
];

export default function ListCollab() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center tracking-wide mb-8">
        Mes collaboratrices
      </h2>
      <div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 rounded-2xl shadow-xl p-8 mb-10">
        <p className="text-lg text-pink-900 font-medium leading-relaxed">
          Chez <span className="font-bold text-pink-700">Pixelia&Co</span>, le
          “&Co” prend tout son sens.
          <br />
          Je collabore avec des freelances passionnés et complémentaires pour
          offrir à mes clients un accompagnement global, du design au
          développement, en passant par la rédaction et la stratégie digitale.
          <br />
          <span className="font-semibold text-pink-700">
            Ensemble, nous partageons les mêmes valeurs : écoute, qualité et
            bienveillance.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collabs.map((collab, idx) => (
          <div
            key={collab.name}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-pink-200 hover:scale-105 transition-transform duration-300 h-full w-full max-w-2xl mx-auto">
            <img
              src={collab.img}
              alt={collab.alt}
              className="w-24 h-24 rounded-full mb-4 border-4 object-cover"
            />
            <h3 className="text-xl font-bold text-pink-700 mb-2">
              {collab.name}
            </h3>
            <p className="text-pink-900 font-medium mb-4">{collab.role}</p>
            {collab.desc.map((block, i) => (
              <div
                key={i}
                className="text-sm text-pink-700 mb-4 text-left w-full">
                <p className="font-semibold mb-2">{block.intro}</p>
                <p className="mb-2">{block.presentation}</p>
                <p className="mb-2">{block.contain}</p>
                <ul className="mb-2 ml-4 list-disc text-pink-700">
                  {block.list.map((item, idx) => (
                    <li key={idx} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-semibold">{block.conclusion}</p>
              </div>
            ))}
            <div className="flex-grow" />
            <a
              href={collab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center mt-3">
              <Button
                text={collab.linkText}
                className="w-full bg-pink-100 text-pink-700 hover:bg-pink-200"
                type="button"
                ariaLabel={"Contacter " + collab.name}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
