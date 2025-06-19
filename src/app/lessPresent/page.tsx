import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Link from "next/link";
import Button from "../components/button/button";

export const metadata: Metadata = {
  title: "Blog - Moins présente, mais toujours passionnée",
  description:
    "Pourquoi je suis moins présente sur les réseaux et comment ma reconversion a influencé mon choix professionnel.",
};

export default function LessPresent() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/last.webp"}
        imgAlt={"illustration d'une femme avec double activité"}
        title={"Moins présente, mais toujours passionnée"}
        subtitle={
          "Pourquoi je privilégie désormais les projets qui ont du sens"
        }
        date={"07/03/2025"}>
        <SectionArticle
          title="Hello tout le monde"
          content="Vous l’avez peut-être remarqué, je suis moins active ces derniers temps sur les réseaux. La raison est simple : j’ai un travail à plein temps à côté, ce qui me laisse moins de temps pour mes projets web."
        />
        <SectionArticle
          title="Reconversion : le récit d’un parcours semé d’embûches"
          content="En 2021, à la fin de mon congé parental, j’ai pris une décision courageuse : me reconvertir. Mon ancien service avait été relocalisé en Inde, et je voulais m’assurer un avenir dans un métier d’avenir. J’ai plongé dans le développement web, enchaînant un bootcamp, une alternance, et deux diplômes RNCP. Ces mois ont été intenses, riches d’apprentissages et de rencontres. Mais en 2024, le marché s’est effondré. Mon alternance n’a pas pu se prolonger, et les recrutements dans le secteur se sont taris. Malgré tout, je ne regrette rien : j’ai appris, j’ai codé jusqu’à pas d’heure, j’ai débuggé, persévéré, progressé. C’est ça qui m’anime."
        />
        <SectionArticle
          title="Une résilience à toute épreuve"
          content="J’ai persévéré. Freelance, candidatures, entretiens… Rien n’a suffi. Alors, j’ai élargi mes recherches : administration, relation client, mise en rayon… Parce que ce que je veux, c’est travailler. Certains y verraient un abandon, mais pour moi, c’est une preuve de résilience. Ma santé mentale et ma famille passent avant tout. Travailler, quel que soit le poste, c’est ce dont j’ai besoin."
        />
        <SectionArticle
          title="Un regard neuf sur mes projets et mon avenir"
          content="Désormais, je choisis mes projets web avec soin : ils doivent avoir du sens et être portés par des clients avec qui j’ai plaisir à travailler. Le développement restera un loisir, une passion, et non plus une contrainte."
        />
        <SectionArticle
          title="Merci pour votre soutien"
          content="En partageant mon histoire, je veux rappeler ceci : avoir de l’ambition ou vouloir se reconvertir n’est pas un gros mot. C’est un pari risqué, parfois cruel, mais toujours courageux. Merci à ceux qui me suivent et me soutiennent depuis le début. Je reste disponible pour des collaborations inspirantes, mais à mon rythme. À bientôt pour de nouveaux projets passionnants ! 🚀"
        />
      </ArticleHeader>
      <Link className="flex justify-center" href="/devLille">
        <Button
          type={"button"}
          text={"Article suivant"}
          ariaLabel={"Article suivant"}></Button>
      </Link>
    </Layout>
  );
}
