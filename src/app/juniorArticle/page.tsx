import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Layout from "../ui/layout/layout";

export default function JuniorArticle() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/junior.webp"}
        imgAlt={
          "femme développeuse habillée en super-héroïne avec une cape et un masque devant un écran d'ordinateur"
        }
        title={"Les Développeurs Juniors : Un Atout Sous-Estimé"}
        subtitle={""}
        date={"21/06/2024"}>
        <SectionArticle
          title={"On pense à tort que :"}
          content={
            <ul className="list-disc list-inside">
              <li>
                Les développeurs juniors ne peuvent pas être productifs sans
                supervision constante.
              </li>
              <li>
                La qualité du code des juniors est toujours inférieure à celle
                des développeurs seniors.
              </li>
              <li>
                Investir dans la formation des développeurs juniors est une
                perte de temps et d'argent.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title={"Mais en réalité :"}
          content={
            <ul className="list-disc list-inside">
              <li>
                Les développeurs juniors apportent souvent de nouvelles
                perspectives et des idées innovantes. Lorsqu'ils sont bien
                encadrés, ils peuvent rapidement devenir autonomes et très
                productifs.
              </li>
              <li>
                La qualité du code d'un développeur junior peut être excellente
                avec les bonnes pratiques de revue de code et de mentorat. De
                plus, ils sont souvent plus à jour sur les technologies modernes
                et les meilleures pratiques.
              </li>
              <li>
                Investir dans la formation des juniors est un investissement
                dans l'avenir de l'entreprise. Ils peuvent rapidement acquérir
                des compétences essentielles et contribuer de manière
                significative à long terme.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title={
            "En tant que profil reconverti, nous apportons également l'expérience et les compétences de nos anciens métiers."
          }
          content={undefined}
        />
        <SectionArticle
          title={"C’est problématique car :"}
          content={
            <ul className="list-disc list-inside">
              <li>
                Sous-estimer les juniors limite leur potentiel et celui de
                l'entreprise.
              </li>
              <li>
                Cela crée une culture de méfiance et de stagnation au lieu de
                l'innovation.
              </li>
              <li>
                Ignorer la formation des juniors mène à une pénurie de talents
                qualifiés à long terme.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title={"Alors quoi faire ?"}
          content={
            <ul className="list-disc list-inside">
              <li>
                Mettre en place des programmes de mentorat où les seniors
                encadrent les juniors.
              </li>
              <li>
                Encourager une culture d'apprentissage continu pour tous les
                niveaux d'expérience.
              </li>
              <li>
                Valoriser et célébrer les contributions des développeurs juniors
                pour renforcer leur confiance et leur motivation.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title={"Conclusion"}
          content={
            "Les développeurs juniors sont le futur de la tech. Investissons en eux aujourd'hui pour construire un avenir plus innovant et dynamique."
          }
        />
      </ArticleHeader>
    </Layout>
  );
}
