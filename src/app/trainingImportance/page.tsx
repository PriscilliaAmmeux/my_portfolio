import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Link from "next/link";
import Button from "../components/button/button";

export const metadata: Metadata = {
  title: "Blog - L'importance de se former",
  description:
    "Découvrez pourquoi la formation continue est essentielle dans le domaine du développement et du numérique, et explorez différentes méthodes pour rester à jour.",
};

export default function TrainingImportance() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/training.webp"}
        imgAlt={"Un groupe de personnes en formation"}
        title={"L'importance de se former"}
        subtitle={""}
        date={"22/11/2024"}>
        <SectionArticle
          title="Pourquoi je continue de me former chaque jour ?"
          content="Dans le monde du développement et du numérique, tout évolue rapidement. Pour rester compétente et progresser, je fais de la formation continue une priorité."
        />
        <SectionArticle
          title="Mes Méthodes de Formation"
          content={
            <ul>
              <li className="list-disc list-inside pl-2">
                <span className="font-bold">YouTube : </span>Une mine d’or de
                tutoriels gratuits pour apprendre de nouvelles techniques ou
                revoir les bases.
              </li>
              <li className="list-disc list-inside pl-2">
                <span className="font-bold">Articles sur Medium : </span>
                Parfait pour approfondir des sujets techniques ou découvrir les
                tendances.
              </li>
              <li className="list-disc list-inside pl-2">
                <span className="font-bold">L’entourage : </span> Rien de mieux
                que les échanges avec d’autres développeurs pour des astuces ou
                des retours d’expérience précieux (communauté, meetups,
                conférences, etc.).
              </li>
              <li className="list-disc list-inside pl-2">
                <span className="font-bold">La documentation : </span>Un
                incontournable pour comprendre en détail le fonctionnement d’une
                technologie et s’assurer de suivre les bonnes pratiques.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title="Mes Prochaines Étapes de Formation"
          content={
            <section>
              <ul>
                <li className="list-disc list-inside pl-2">
                  <span className="font-bold">
                    Accessibilité avec Emmanuel Demey :
                  </span>
                  Un domaine essentiel pour rendre le web accessible à tous
                  (formation prévue le 4 décembre)
                </li>
                <li className="list-disc list-inside pl-2">
                  <span className="font-bold">SEO grâce à des experts : </span>
                  Découvrir des stratégies pour mieux référencer mes projets
                  web.
                </li>
                <li className="list-disc list-inside pl-2">
                  <span className="font-bold">Astuce : </span> Apprendre de
                  spécialistes, c’est se nourrir de leur expertise et gagner du
                  temps.
                </li>
              </ul>
              <p className="text-pink-700 italic pt-4 pb-2">
                Toujours un objectif en tête !
              </p>
            </section>
          }
        />
        <SectionArticle
          title="Toujours à l’affût de tips"
          content={
            <section>
              <p className="font-bold pb-2">
                Le secret ? Être curieux.se et proactif.ve.
              </p>
              <ul>
                <li className="list-disc list-inside pl-2">
                  J’échange régulièrement avec d'autres développeurs
                </li>
                <li className="list-disc list-inside pl-2">
                  Je reste attentive à chaque conseil ou outil partagé
                </li>
                <li className="list-disc list-inside pl-2">
                  Chaque jour est une opportunité d’apprendre quelque chose de
                  nouveau
                </li>
              </ul>
              <p className="text-pink-700 italic pt-4 pb-2">
                "L’apprentissage ne s’arrête jamais. Même un petit tip peut
                faire toute la différence."
              </p>
            </section>
          }
        />
        <SectionArticle
          title="Et vous, comment vous formez-vous ?"
          content="Envie d’échanger sur ces sujets ? Je suis toujours ouverte à de nouvelles idées !"
        />
      </ArticleHeader>
      <Link className="flex justify-center" href="/impostorArticle">
        <Button
          type={"button"}
          text={"Article suivant"}
          ariaLabel={"Article suivant"}></Button>
      </Link>
    </Layout>
  );
}
