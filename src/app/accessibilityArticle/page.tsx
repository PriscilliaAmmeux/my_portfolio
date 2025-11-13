import { Metadata } from "next";
import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Layout from "../ui/layout/layout";
import ArticleNavigation from "../components/articleNavigation/articleNagivation";

export const metadata: Metadata = {
  title: "accessibilite-web-2025-guide-pratiques-legislation-pixeliaandco",
  description:
    "Découvrez pourquoi l'accessibilité web est indispensable en 2025 et comment Pixelia&Co crée des sites inclusifs et accessibles à tous.",
  keywords: [
    "accessibilite-web",
    "accessibilite-numerique",
    "normes-wcag",
    "rgaa-france",
    "raam",
    "conception-accessible",
    "inclusivite-web",
    "bonnes-pratiques-accessibilite",
    "obligation-legale-2025",
    "pixeliaandco",
    "priscillia-ammeux-pixeliaandco",
    "developpeuse-web-pixeliaandco",
    "blog-tech-pixeliaandco",
    "article-accessibilite-pixeliaandco",
    "site-web-inclusif-pixeliaandco",
    "ergonomie-web-pixeliaandco",
    "design-accessible-pixeliaandco",
    "experience-utilisateur-accessible-pixeliaandco",
    "freelance-web-france-pixeliaandco",
    "creation-site-web-accessible-pixeliaandco",
    "accessibilite-numerique-france-pixeliaandco",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr/accessibilityArticle",
  },
};

export default function AccessibilityArticle() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/accessibility.webp"}
        imgAlt={
          "illustration de plusieurs individus porteurs de handicap ou non, de toutes origines, âges et genres, utilisant des technologies d'assistance pour naviguer sur internet"
        }
        title={"L'accessibilité Web : Une Nécessité Incontournable"}
        subtitle={""}
        date={"02/07/2024"}>
        <SectionArticle
          title={"Quelques chiffres clés"}
          content={
            <ul className="list-disc list-inside">
              <li>
                15% de la population mondiale : représente environ un milliard
                de personnes vivant avec un handicap.
              </li>
              <li>
                57% des sites web : ne sont pas accessibles aux personnes
                aveugles ou malvoyantes, selon une étude de WebAIM en 2023.
              </li>
              <li>
                2025 : une année charnière avec l'entrée en vigueur de nouvelles
                réglementations européennes sur l'accessibilité numérique.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title={"Les émoticônes et l'accessibilité"}
          content={
            "Les émoticônes permettent d'exprimer des émotions de manière visuelle, mais posent un problème majeur pour l'accessibilité. Les lecteurs d'écrans ne les décrivent pas toujours correctement, compliquant la compréhension pour les personnes aveugles ou malvoyantes. Pour remédier à cela, je limite l'utilisation des émoticônes dans mes publications LinkedIn et les accompagne d'une description entre parenthèses. Par exemple, 😊 (visage souriant)."
          }
        />
        <SectionArticle
          title={"Le faux gras et l'accessibilité"}
          content={
            "Le faux gras, souvent utilisé pour mettre en évidence certaines parties de texte, pose également des problèmes d'accessibilité. Il est créé avec des caractères Unicode ressemblant à des lettres en gras, mais les lecteurs d'écrans ne les interprètent pas comme du texte standard. Cela peut entraîner une confusion et une perte d’information pour les utilisateurs malvoyants."
          }
        />
        <SectionArticle
          title={"Prendre des mesures dès la phase de conception"}
          content={
            <div>
              <p>
                Pour garantir l'accessibilité dès la phase de conception, il est
                crucial de suivre les normes et les guides des bonnes pratiques,
                tels que :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  WCAG (Web Content Accessibility Guidelines) : Fournit une
                  série de recommandations pour rendre le contenu web plus
                  accessible.
                </li>
                <li>
                  RGAA (Référentiel Général d'Amélioration de l'Accessibilité) :
                  Spécifique à la France, il offre des critères d’accessibilité
                  pour les sites web publics.
                </li>
                <li>
                  RAAM (Référentiel d'Accessibilité des Administrations
                  Modernes): Couvre les administrations modernes en offrant des
                  directives spécifiques pour l’accessibilité.
                </li>
              </ul>
            </div>
          }
        />

        <SectionArticle
          title={"Ressources et références"}
          content={
            "Pour approfondir vos connaissances sur l'accessibilité et adopter les meilleures pratiques, je recommande le livre gratuit « Giving a damn about accessibility. A candid and practical handbook for designers » de Sheri Byrne-Haber. Ce guide offre des conseils pratiques et des perspectives précieuses pour les designers qui souhaitent améliorer l'accessibilité de leurs produits numériques."
          }
        />
        <SectionArticle
          title={"Vers une obligation légale"}
          content={
            "En 2025, de nouvelles lois entreront en vigueur en Europe pour renforcer l'accessibilité numérique. Ces lois obligeront les entreprises et les institutions à rendre leurs sites web et applications accessibles à tous. L'obligation rime ici avec devoir, car il est de notre responsabilité morale et éthique de garantir que tout le monde puisse accéder à l’information de manière égale."
          }
        />
      </ArticleHeader>
      <ArticleNavigation nextHref="/nextJSArticle" prevHref="/blog" />
    </Layout>
  );
}
