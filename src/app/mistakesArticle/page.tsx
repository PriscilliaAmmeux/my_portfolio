import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import ArticleNavigation from "../components/articleNavigation/articleNagivation";

export const metadata: Metadata = {
  title: "Blog - Les erreurs que j’ai faites pendant ma reconversion",
  description:
    "Découvrez les erreurs et les leçons apprises par Priscillia Ammeux de chez Pixelia&Co lors de sa reconversion professionnelle en tant que développeuse web.",
  keywords: [
    "blog reconversion",
    "Priscillia Ammeux",
    "Pixelia&Co",
    "erreurs de reconversion",
    "reconversion professionnelle",
    "développement web",
    "leçons apprises",
    "confiance en soi",
    "peurs de débutant",
    "conseils de reconversion",
  ],
};

export default function MistakesArticle() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/afraid.webp"}
        imgAlt={
          "illustration d'une femme effrayée devant un écran d'ordinateur "
        }
        title={"Les erreurs que j’ai faites pendant ma reconversion"}
        subtitle={
          "Il ne faut pas se mentir, la reconversion n’est pas un long fleuve tranquille."
        }
        date={"18/06/2024"}>
        <SectionArticle
          title="Ne pas se sentir légitime dans le milieu, surtout en tant que débutant·e."
          content=""
        />
        <SectionArticle
          title="Se comparer aux autres"
          content="Chacun·e a son propre chemin et ses compétences uniques. La comparaison excessive peut être démoralisante."
        />
        <SectionArticle
          title="Ne pas oser postuler à des offres d’emploi"
          content="Car je ne connaissais pas les stacks ou pour d'autres raisons."
        />

        <SectionArticle
          title="Comment ne pas se laisser envahir par ses peurs ?"
          content={
            <ul className="list-disc list-inside space-y-4 pl-4 ">
              <li>
                <strong>Parler autour de soi:</strong> Nous ne sommes pas
                seul(e)s. Si je vis cela, alors peut-être que les autres aussi.
                Discuter avec des collègues, des mentors ou des ami(e)s peut
                vraiment aider à relativiser et à se sentir soutenu.
              </li>
              <li>
                <strong>Oser:</strong> Sortir de sa zone de confort est le
                meilleur moyen de faire face à ses peurs. Ne pas connaître une
                stack ? Et alors, ça s’apprend ! Chaque défi est une opportunité
                de grandir et d'apprendre quelque chose de nouveau.
              </li>
              <li>
                <strong>Accepter l’imperfection:</strong> Personne n’est
                parfait·e. Faire des erreurs fait partie du processus
                d’apprentissage. L'important est d’en tirer des leçons.
              </li>
              <li>
                <strong>Se fixer des objectifs réalistes:</strong> Définir des
                objectifs atteignables et les diviser en petites étapes peut
                aider à rester motivé·e et à mesurer ses progrès.
              </li>
              <li>
                <strong>Rester curieux·se :</strong> Continuer à apprendre et à
                se former est essentiel.
              </li>
            </ul>
          }
        />
      </ArticleHeader>

      <ArticleNavigation
        nextHref="/juniorArticle"
        prevHref="/professionalReconversionArticle"
      />
    </Layout>
  );
}
