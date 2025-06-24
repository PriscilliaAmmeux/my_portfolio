import Link from "next/link";
import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Layout from "../ui/layout/layout";
import Button from "../components/button/button";
import ArticleNavigation from "../components/articleNavigation/articleNagivation";

export default function DevLille() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/devlille.svg"}
        imgAlt={"logo de DevLille"}
        title={
          "DevLille 2025 : une troisième édition riche en apprentissages et en rencontres"
        }
        subtitle={""}
        date={"19/06/2025"}>
        <p className="mb-6 text-justify">
          Jeudi et vendredi dernier, j’ai eu la chance de participer pour la
          troisième fois à l’événement tech incontournable de la région :
          DevLille (anciennement DevFest Lille). Et comme chaque année, je
          repars avec la tête pleine d’idées, le cœur gonflé d’enthousiasme, et
          l’envie renouvelée de continuer à progresser dans ce métier
          passionnant.
        </p>
        <SectionArticle
          title={
            "Un programme varié, entre expertise technique et réflexions humaines"
          }
          content={
            <>
              <p>
                J’ai pu assister à plusieurs conférences toutes aussi
                enrichissantes les unes que les autres :
              </p>
              <ul className="list-disc list-inside">
                <li className="mt-4 mb-4">
                  <span className="font-bold">
                    Rendre ses tests concis et évolutifs grâce à JUnit 5 & cie
                  </span>{" "}
                  par Juliette de Rancourt : une session claire et inspirante
                  pour améliorer la lisibilité et la maintenabilité des tests,
                  un sujet trop souvent négligé mais tellement crucial pour la
                  qualité du code.
                </li>
                <li className="mt-4 mb-4">
                  <span className="font-bold">
                    BullShit IT Awards : Les absurdités tech qui sabotent vos
                    équipes… mais dont on peut rire !
                  </span>{" "}
                  par Romain Rozewicz : un moment hilarant et très juste sur les
                  travers de notre quotidien dans la tech. Entre deux fous
                  rires, de vraies pépites de réflexion à ramener dans nos
                  équipes.
                </li>
                <li className="mt-4 mb-4">
                  <span className="font-bold">
                    Rock SOLID: using the SOLID principles to write code that
                    stands the test of time
                  </span>{" "}
                  par Emma Gaubert : un retour aux fondamentaux du clean code,
                  avec des exemples concrets pour appliquer les principes SOLID
                  au quotidien.
                </li>
                <li className="mt-4 mb-4">
                  <span className="font-bold">
                    Comment coder dans un vieux langage que personne ne connaît
                    ?
                  </span>{" "}
                  par Nirina Rabeson : une conférence originale et éclairante
                  sur l’importance stratégique des langages legacy comme le
                  COBOL, encore omniprésents dans notre quotidien (banques,
                  assurances, énergie…). Nirina propose une approche moderne et
                  accessible, basée sur la transpilation et le JavaScript, pour
                  comprendre, modifier et faire évoluer ces applications
                  vieillissantes sans tout casser. Une vraie passerelle entre le
                  passé et le futur du code !
                </li>
                <li className="mt-4 mb-4">
                  <span className="font-bold">
                    Diagnostic continu d'une base de données, évitez l'incident
                    !
                  </span>{" "}
                  par Loïc Knuchel : un talk éclairant sur l’importance
                  d’anticiper les incidents en base de données grâce à des
                  signaux faibles souvent ignorés (verrous, requêtes bloquantes,
                  dead rows…). Loïc partage des retours terrain et des solutions
                  concrètes pour intervenir avant qu’il ne soit trop tard.
                  Indispensable pour toute app critique.
                </li>
                <li className="mt-4 mb-6">
                  <span className="font-bold">
                    Déconstruisons les frameworks JS pour mieux réinventer le
                    web !
                  </span>{" "}
                  par Nirina Rabeson : un talk ludique et pédagogique pour mieux
                  comprendre ce que cachent nos frameworks préférés (React, Vue,
                  Svelte…). En partant de zéro, Nirina déconstruit les concepts
                  clés comme le DOM virtuel ou la réactivité fine, et nous
                  montre comment reconstruire un framework simple et
                  compréhensible. Une plongée éclairante dans les coulisses du
                  web moderne.
                </li>
              </ul>
            </>
          }
        />
        <SectionArticle
          title={"Une communauté qui fait du bien"}
          content={
            <>
              <ul className="list-disc list-inside">
                <li className="mb-4">
                  J’ai eu le plaisir d’aider à tenir le stand de{" "}
                  <span className="font-bold">Chtite Dev</span>, un collectif
                  régional qui organise des rencontres en{" "}
                  <span className="font-bold">non-mixité choisie</span>, dédiées
                  aux personnes minorisées travaillant dans le secteur des
                  technologies. Un espace bienveillant pour se soutenir,
                  partager et avancer ensemble dans la tech.
                </li>
                <li>
                  Que l’on soit junior, senior, freelance ou salarié·e, ces
                  événements sont une véritable bouffée d’air frais : on y
                  partage des galères, des réussites, on apprend des autres, on
                  se remet en question, on s’inspire. Le tout dans une ambiance
                  conviviale, avec des stands, des goodies, des jeux, des rires,
                  et du café ☕ (beaucoup de café !).
                </li>
              </ul>
            </>
          }
        />
        <SectionArticle
          title={"Pourquoi participer à ce genre d’événement ?"}
          content={
            <>
              <p className="mb-2">
                Parce que rien ne remplace{" "}
                <span className="font-bold">le contact humain</span>, même dans
                un monde très numérique. Participer à des conférences comme
                DevLille, c’est :
              </p>
              <ul className="list-disc list-inside">
                <li>Sortir de sa bulle et voir ce qui se fait ailleurs</li>
                <li>
                  Se former, gratuitement ou à prix abordable, à des pratiques
                  modernes
                </li>
                <li>
                  Rencontrer des gens avec qui échanger, collaborer, créer
                </li>
                <li>Prendre du recul sur son métier, et retrouver du sens</li>
                <li>
                  Et parfois, avoir le déclic qui change la façon de coder… ou
                  de penser
                </li>
              </ul>
            </>
          }
        />
        <p className="mt-6">
          Bref, merci à DevLille, ainsi qu’aux organisateurs, aux bénévoles, aux
          conférencier·es et à toutes les personnes croisées ce jour-là.
        </p>
        <p className="mt-6 font-bold">Vivement l’édition 2026 ! 🚀</p>
      </ArticleHeader>

      <ArticleNavigation nextHref="/tartecitron" prevHref="/lessPresent" />
    </Layout>
  );
}
