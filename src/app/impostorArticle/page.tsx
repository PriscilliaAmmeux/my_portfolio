import { Metadata } from "next";
import ArticleHeader from "../components/articleHeader/articleHeader";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import Layout from "../ui/layout/layout";
import ExternalLink from "../components/ExternalLink/ExternalLink";
import { Ultra } from "next/font/google";
import Link from "next/link";
import Button from "../components/button/button";

export const metadata: Metadata = {
  title:
    "Blog - Comment lutter contre le syndrome de l'imposteur - Priscillia Ammeux",
  description:
    "Découvrez les stratégies de Priscillia Ammeux pour lutter contre le syndrome de l'imposteur et renforcer la confiance en soi.",
};

export default function ImpostorArticle() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc={"/impostor.webp"}
        imgAlt={
          "femme avec un sweat à capuche et un masque sur le visage, représentant le syndrome de l'imposteur"
        }
        title={"Comment lutter contre le syndrôme de l’imposteur ?"}
        subtitle={""}
        date={"22/09/2024"}>
        <SectionArticle
          title="Introduction"
          content={
            <ul>
              <li>
                As-tu déjà eu l'impression qu'on allait te « démasquer » ? Que
                tes réussites sont dues à la chance ou à d'autres personnes
                plutôt qu'à tes compétences ? Si oui, tu n'es pas seul(e) !
              </li>
              <li>
                En septembre, j'ai eu l'opportunité de donner mon tout premier
                talk sur le syndrome de l'imposteur chez Zenika à Lille. Est ce
                que j'ai aimé donner ce talk ? Un grand
                OUIIIIIIIIIIIIIIIIIIIIIIIIIIIIII 😊 (visage trèèèèèèssssss
                souriant).
              </li>
            </ul>
          }
        />

        <SectionArticle
          title="Historique et définition"
          content={
            <ul className="list-decimal list-inside space-y-4">
              <li>
                <span className="font-bold "> </span>
                Introduit en 1978 par 2 psychologues suite à une étude qu’elles
                avaient mené sur 150 femmes diplômées, exerçant des métiers
                prestigieux et jouissant d’une excellente réputation: Pauline
                ROSE CLANCE et Suzanne IMES.
              </li>
              <li>
                <span className="font-bold ">
                  Le syndrome de l'imposteur, Qu’est ce que c’est ?
                </span>
                <ul className="space-y-2 pl-6 pt-2">
                  <li>
                    - Le syndrome de l’imposteur c’est quand tu ressens un doute
                    persistant quant à ta propre valeur et à tes capacités​.
                  </li>
                  <li>- Cette impression de ne pas mériter les compliments.</li>
                  <li>
                    - Cette croyance que si tu réussis, c’est un coup de chance
                    ou c’est grâce à Pierre, Paul, Jacques
                  </li>
                  <li>
                    - Ce sentiment de ne jamais être assez doué(e), assez
                    compétent(e), assez formé(e), assez …
                  </li>
                  <li>
                    - Bref, tous ces doutes qui font que:​ tu te trouves
                    illégitime, ​tu rejettes tes réalisations personnelles.
                  </li>
                  <li>
                    - Ce doute est nourri par la peur !​ La peur constante de
                    mal faire et de ne pas être à la hauteur !​ La peur d’être
                    démasqué(e)
                  </li>
                </ul>
              </li>
            </ul>
          }
        />
        <SectionArticle
          title="Pourquoi il perdure ?"
          content={
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li>
                <span className="font-bold pr-1">
                  Pression de la perfection dans notre société :
                </span>
                Dans notre société qui valorise l'excellence, beaucoup se
                sentent obligés d'être parfaits. Cette pression peut conduire à
                un sentiment d'inadéquation lorsqu'on se compare aux autres ou à
                des idéaux inatteignables.
              </li>
              <li>
                <span className="font-bold pr-1">Comparaison Sociale :</span>
                Avec les réseaux sociaux et le monde numérique, il est facile de
                se comparer constamment aux autres, souvent sans voir les défis
                ou les échecs qu'ils ont pu surmonter. Cela renforce l'idée que
                l'on est moins compétent que ses pairs."
              </li>
              <li>
                <span className="font-bold pr-1">Culture de la Réussite :</span>
                Dans certains milieux, la réussite est mise sur un piédestal, et
                toute erreur est perçue comme un échec. Cela peut exacerber le
                sentiment de ne pas être à la hauteur.
              </li>
              <li>
                <span className="font-bold pr-1">Cycle d'Auto-Doute :</span>
                Ceux qui souffrent du syndrome de l'imposteur ont tendance à
                minimiser leurs succès et à se concentrer sur leurs erreurs, ce
                qui crée un cycle de doute de soi qui est difficile à briser.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title="Quelques chiffres marquants "
          content={
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li>
                48% des femmes interrogées ont déclaré se sentir parfois comme
                des imposteurs, contre 34% des hommes.
              </li>
              <li>
                55% des victimes de ce complexe l’attribuent à un manque de
                confiance en soi.
              </li>
              <li>
                35% estiment que ce complexe nuit à leur carrière, parce qu’il
                les empêche de se mettre en avant autant qu’ils le devraient.
              </li>
              <li>34% ont l’impression de ne pas être à leur place.</li>
            </ul>
          }
        />
        <SectionArticle
          title="Des techniques pour lutter "
          content={
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li>
                <span className="font-bold pr-2">Faire des listes :</span>
                Connaissances, compétences, projets réussis, reconnaissances.
              </li>
              <li>
                <span className="font-bold pr-2">
                  Apprendre de ses erreurs :
                </span>
                Valoriser les échecs comme des opportunités d'apprentissage."
              </li>

              <li>
                <span className="font-bold pr-2">Partager et contribuer :</span>
                Parler en public, écrire des articles, contribuer à l’open
                source.
              </li>
              <li>
                <span className="font-bold pr-2">
                  S’entourer des Bonnes Personnes :
                </span>
                <ul className="list-disc list-inside space-y-2 pl-6">
                  <li>
                    <span className="underline pr-2">
                      Faire partie du comité de sélection de la DevFest Lille
                      2024
                    </span>
                    :
                    <ul className="pl-10">
                      <li>- 441 relecture de CFP</li>
                      <li>
                        - rencontre des personnes extraordinaires qui m’inspire
                        à continuer ce travail qui me donne des paillettes dans
                        les yeux
                      </li>
                      <li>
                        - équipe formidable de femmes (speakeuses et reviewers)
                        qui m’ont poussé à donner ce talk
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="underline pr-2">
                      La communauté des ChtiteDev
                    </span>
                    : qui m’a encouragé à faire ce talk
                  </li>
                  <li className="underline pr-2">Oser</li>
                  <li className="underline pr-2">La force du collectif.</li>
                </ul>
              </li>
            </ul>
          }
        />

        <SectionArticle
          title="Mais aussi..."
          content={
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li>
                <span className="font-bold pr-2">
                  Accepter ses Limites et Éviter le Perfectionnisme :
                </span>
                On ne peut pas tout savoir, n’ayez pas peur de l’échec.
              </li>
              <li>
                <span className="font-bold pr-2">
                  Les Refus ne sont pas des Échecs :
                </span>
                les refus d'emplois ou d'opportunités ne sont pas des échecs,
                mais des expériences qui renforcent.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title="Conclusion"
          content={
            <div>
              <p className="text-pink-700 font-bold pb-2">
                Vous êtes Légitime !
              </p>
              <ExternalLink href="https://www.linkedin.com/feed/update/urn:li:activity:7243861708853641216/">
                Pour retrouver le post LinkedIn de mon talk, c'est par ici !
              </ExternalLink>
            </div>
          }
        />
      </ArticleHeader>
      <Link className="flex justify-center" href="/nextJSArticle">
        <Button
          type={"button"}
          text={"Article suivant"}
          ariaLabel={"Article suivant"}></Button>
      </Link>
    </Layout>
  );
}
