import ArticleHeader from "../components/articleHeader/articleHeader";
import ExternalLink from "../components/ExternalLink/ExternalLink";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Layout from "../ui/layout/layout";

export default function NextJSArticle() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/nextjs.webp"}
        imgAlt={"logo next.js"}
        title={"Pourquoi est ce que je travaille avec NextJs ?"}
        subtitle={
          "Maximisez les performances, l'optimisation SEO et l'accessibilité avec Next.js"
        }
        date={"02/09/2024"}>
        <SectionArticle
          title="Pourquoi Nextjs ?"
          content="Car c’est une solution incontournable pour ceux qui cherchent à offrir une expérience web inclusive et de haute qualité."
        />
        <SectionArticle
          title="Comment ça marche ?"
          content={
            <ul className="list-disc list-inside space-y-4">
              <li>
                <span className="font-bold pr-1">
                  Rendu côté serveur (SSR) pour une meilleure indexation SEO :
                </span>
                Next.js offre un rendu côté serveur, garantissant un contenu
                prêt à l'emploi dès le chargement de la page. Cela améliore
                l'indexation des moteurs de recherche, ce qui se traduit par un
                meilleur classement dans les résultats de recherche.
              </li>
              <li>
                <span className="font-bold pr-1">
                  SSG (Static Side Generator) pour des pages ultrarapides :
                </span>
                Next.js propose également une génération statique, qui crée des
                pages HTML statiques à partir de données dynamiques. Cela permet
                des temps de chargement plus rapides et une meilleure expérience
                utilisateur.
              </li>
              <li>
                <span className="font-bold pr-1">
                  Optimisation intelligente des images
                </span>
                Next.js intègre des outils d'optimisation d'images intelligents
                pour des temps de chargement rapides sans compromettre la
                qualité visuelle.
              </li>
              <li>
                <span className="font-bold pr-1">Accessibilité pour tous</span>
                L'accessibilité est une priorité avec Next.js. Grâce à des
                pratiques de développement axées sur l'accessibilité, telles que
                la sémantique HTML appropriée, les balises ARIA et la gestion du
                focus clavier, les applications Next.js sont conçues pour être
                utilisables par tous, y compris les personnes handicapées. Cela
                garantit une expérience web inclusive et respectueuse de tous
                les utilisateurs.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title="Conclusion"
          content={
            <div>
              <p>
                Avec Next.js, vous investissez dans bien plus que des
                performances et une optimisation SEO. Vous optez également pour
                une accessibilité sans compromis, assurant que votre site web
                est utilisable par tous. Next.js offre une plateforme complète
                pour créer des applications web rapides, bien référencées et
                accessibles à tous les utilisateurs.{" "}
              </p>
              <ExternalLink href="https://nextjs.org/docs">
                Pour en savoir plus, n'hésitez pas à consulter la documentation
              </ExternalLink>
            </div>
          }
        />
        <SectionArticle title="" content="" />
        <SectionArticle title="" content="" />
        <SectionArticle title="" content="" />
        <SectionArticle title="" content="" />
      </ArticleHeader>
    </Layout>
  );
}
