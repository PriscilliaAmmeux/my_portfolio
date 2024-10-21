import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import Image from "next/image";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import ExternalLink from "../components/ExternalLink/ExternalLink";


export const metadata: Metadata = {
  title:
    "Blog - Ma reconversion professionnelle - Développeur web - Priscillia Ammeux",
};

export default function ProfessionalReconversion() {
  return (
    <Layout>
      <article className="rounded overflow-hidden shadow-lg bg-white m-6 p-6">
        <section className="flex justify-center">
          <Image
            className="h-auto max-w-full"
            src="/result.webp"
            alt="Résultat"
            width={600}
            height={400}
          />
        </section>

        <h2 className="text-pink-700 font-bold text-xl mt-4 text-center">
          Ma Reconversion Professionnelle
        </h2>
        <h3 className="text-blue-900 font-bold text-center">
          Bilan 2 ans et demi après son début
        </h3>
        <p className="text-gray-700 text-base ml-2 text-center mr-2">
          16/05/2024
        </p>

        <SectionArticle
          title="Introduction"
          content="Ma reconversion professionnelle a débuté à la fin de mon congé parental en novembre 2021. Le fait d'être parent a profondément modifié mes perspectives professionnelles. Non seulement je désirais exercer un métier qui me passionnait, mais également mon poste précédent, occupé en prestation pour la société Général, avait été délocalisé en Inde."
        />

        <SectionArticle
          title="Les débuts"
          content="Au collège, j'ai développé un intérêt pour la technologie et même créé un site internet. Cependant, à cette époque, le domaine de l'informatique était souvent perçu comme réservé aux hommes, ce qui m'a découragée."
        />

        <SectionArticle
          title="Mon Parcours"
          content={
            <>
              J'ai entamé ma reconversion en suivant les cours en ligne de
              Mathieu Nebra sur OpenClassrooms, portant sur le HTML, CSS et
              JavaScript. Par la suite, j'ai découvert Motiv'Her{" "}
              <ExternalLink href="https://www.motivher.fr/">
                https://www.motivher.fr/
              </ExternalLink>
              , fondé par Helvira Goma. C'est sur leur serveur Discord que
              j'avais demandé quelques conseils et l'on m'avait recommandé la
              Wild Code School et O'Clock. Après un échec aux tests de sélection
              d'O'Clock, j'ai réussi ceux de la Wild Code School en avril 2022,
              avec des épreuves plus humaines et un soutien personnalisé. Grâce
              à mon manager chez Akkodis (anciennement Modis), j'ai pu obtenir
              un financement total de ma formation via Transition Pro, tout en
              conservant mon salaire (après étude de mon dossier en juillet
              2022).
            </>
          }
        />

        <SectionArticle
          title="Le Bootcamp"
          content="Le bootcamp de cinq mois peut être résumé en quelques mots : une succession de défis, où nous avons dû affronter des obstacles tels que des murs de briques. J'ai travaillé chaque soir après les cours, sans exception. Cependant, malgré ces défis, l'esprit d'entraide et de bienveillance au sein de l'équipe, ainsi que la qualité des formateurs, ont rendu cette expérience inoubliable. En somme, tout est résumé dans ces mots."
        />

        <SectionArticle
          title="L'Alternance"
          content="Par la suite, j'ai décroché une alternance chez XPEHO en tant que Concepteur Développeur d'Applications, toujours en collaboration avec la Wild Code School. Mon ressenti vis-à-vis des cours dispensés à la Wild Code School est mitigé. Je préfère m'abstenir de donner un avis tranché. Si on me pose la question, je serai honnête. Heureusement, XPEHO a été très formateur. Durant cette période, j'ai travaillé sur l'application YAKI, ce qui m'a permis d'explorer une multitude de technologies et d'outils, élargissant ainsi mes compétences dans le domaine du développement d'applications."
        />

        <SectionArticle
          title="Défis et Réalisations"
          content="Passer du JavaScript au Java a été un défi, mais j'ai énormément appris en travaillant sur diverses piles technologiques. Malgré des moments d'incertitude et le syndrome de l'imposteur, j'ai réussi à surmonter ces obstacles."
        />

        <SectionArticle
          title="Concernant le retour de ces passages de titre"
          content="Pour le titre DWWM, le jury était composé de deux personnes, dont l'une était particulièrement désagréable et agressive. Malgré cette atmosphère tendue, je suis resté professionnel. Par la suite, j'ai appris que ce membre du jury avait eu des comportements similaires avec d'autres candidats et qu'il n'était plus invité en tant que jury. En sortant, je doutais de ma performance, mais deux mois plus tard, j'ai reçu la bonne nouvelle de l'obtention du titre. En revanche, pour le titre CDA, j'ai eu affaire à un jury formidable, composé de deux personnes qui m'ont prodigué de nombreux conseils. En sortant, je me sentais très confiante grâce au travail considérable que j'avais accompli sur ce mémoire pendant un an. L'expérience du passage de titre était si fluide que j'ai presque eu l'impression que c'était une formalité."
        />

        <SectionArticle
          title="Équilibre entre Vie Professionnelle et Personnelle"
          content="Ayant une vie de famille avec des enfants âgés de 6 et 4 ans, j'ai dû trouver un équilibre délicat. Ainsi, je travaillais les lundis, mardis, mercredis, jeudis et dimanches soirs, une fois que mes enfants étaient couchés. Bien sûr, cela n'a pas toujours été facile, mon corps me rappelait parfois à l'ordre, m'incitant à écouter mes besoins et à prendre du repos."
        />

        <SectionArticle
          title="Bien-être Personnel"
          content="Pour maintenir un équilibre sain, je consacrais mes vendredis soirs et dimanches matins à des activités sportives. Cette pause était essentielle pour aérer l'esprit et retrouver de l'énergie, malgré les défis rencontrés dans ma reconversion professionnelle."
        />

        <SectionArticle
          title="Perspectives d'Avenir"
          content="Actuellement, je suis à la recherche d'une entreprise qui saura me faire confiance. Mon objectif est de trouver un poste en CDI. Ce que je recherche avant tout, c'est une entreprise où je pourrai non seulement contribuer dès le départ, mais aussi avoir des opportunités d'évolution à long terme. De plus, je cherche à me former d'avantages sur l'accessibilité web."
        />

        <SectionArticle
          title="Conclusion"
          content="Malgré les défis et les sacrifices, je ne regrette pas ma reconversion. Elle m'a permis de retrouver une passion pour mon travail et m'a ouvert des portes vers de nouvelles opportunités professionnelles et de développement personnel."
        />
      </article>
    </Layout>
  );
}
