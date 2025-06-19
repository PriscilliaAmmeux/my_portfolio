import Link from "next/link";
import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Layout from "../ui/layout/layout";
import Button from "../components/button/button";

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
                <li>
                  <strong>
                    Rendre ses tests concis et évolutifs grâce à JUnit 5 & cie
                  </strong>{" "}
                  par Juliette de Rancourt : une session claire et inspirante
                  pour améliorer la lisibilité et la maintenabilité des tests,
                  un sujet trop souvent négligé mais tellement crucial pour la
                  qualité du code.
                </li>
                <li>
                  <strong>
                    BullShit IT Awards : Les absurdités tech qui sabotent vos
                    équipes… mais dont on peut rire !
                  </strong>{" "}
                  par Romain Rozewicz : un moment hilarant et très juste sur les
                  travers de notre quotidien dans la tech. Entre deux fous
                  rires, de vraies pépites de réflexion à ramener dans nos
                  équipes.
                </li>
                <li>
                  <strong>
                    Rock SOLID: using the SOLID principles to write code that
                    stands the test of time
                  </strong>{" "}
                  par Emma Gaubert : un retour aux fondamentaux du clean code,
                  avec des exemples concrets pour appliquer les principes SOLID
                  au quotidien.
                </li>
                <li>
                  <strong>
                    Comment coder dans un vieux langage que personne ne connaît
                    ?
                  </strong>{" "}
                  par Nirina Rabeson : une conférence originale, drôle et pleine
                  de bon sens pour aborder des technos “exotiques” ou “legacy”
                  sans paniquer.
                </li>
                <li>
                  <strong>
                    Diagnostic continu d'une base de données, évitez l'incident
                    !
                  </strong>{" "}
                  par Loïc Knuchel : un talk technique très pertinent sur la
                  prévention des problèmes de performance et de stabilité côté
                  BDD.
                </li>
                <li>
                  <strong>
                    Déconstruisons les frameworks JS pour mieux réinventer le
                    web !
                  </strong>{" "}
                  par Nirina Rabeson : une remise en question salutaire des
                  frameworks modernes pour mieux comprendre le web “à nu” et
                  renforcer notre esprit critique de développeur·se.
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
                <li>
                  J’ai eu le plaisir d’aider à tenir le stand de{" "}
                  <strong>Chtite Dev</strong>, une communauté inclusive et
                  bienveillante qui promeut la diversité dans la tech. Ce fut
                  l’occasion de rencontrer plein de personnes curieuses,
                  passionnées, ou en reconversion, et d’échanger sur nos
                  parcours respectifs.
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
              <p>
                Parce que rien ne remplace <strong>le contact humain</strong>,
                même dans un monde très numérique. Participer à des conférences
                comme DevLille, c’est :
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
        <p className="mt-6">Vivement l’édition 2026 ! 🚀</p>
      </ArticleHeader>

      <Link
        className="flex justify-center mt-8"
        href="/professionalReconversionArticle">
        <Button
          type="button"
          text="Article suivant"
          ariaLabel="Article suivant"
        />
      </Link>
    </Layout>
  );
}
