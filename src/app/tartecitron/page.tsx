import Link from "next/link";
import ArticleHeader from "../components/articleHeader/articleHeader";
import Layout from "../ui/layout/layout";
import Button from "../components/button/button";
import SectionArticle from "../components/sectionArticle/sectionArticle";
import ArticleNavigation from "../components/articleNavigation/articleNagivation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarte Citron - Solution RGPD simplifiée",
  description:
    "Présentation de TarteAuCitron.js, la librairie open source pour gérer facilement le consentement RGPD sur ton site web.",
  keywords: [
    "TarteAuCitron",
    "RGPD",
    "consentement-cookies",
    "protection-des-donnees",
    "librairie-JavaScript",
    "open-source",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr/tartecitron",
  },
};

export default function Tartecitron() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc="/citron.webp"
        imgAlt="logo de Tarte Citron"
        title="Tarte Citron"
        subtitle="L'allié RGPD incontournable pour ton site web"
        date="24/06/2025">
        <SectionArticle
          title="❓ KESAKO ?"
          content={
            <p>
              TarteAuCitron.js, c’est une librairie JavaScript open source,
              créée par Amauri Cleuziou, un développeur français, qui simplifie
              la vie des développeurs, des freelances et des entreprises
              souhaitant respecter le RGPD sans sacrifier l'expérience
              utilisateur.
            </p>
          }
        />

        <SectionArticle
          title="✅ Pourquoi c’est LA solution idéale ?"
          content={
            <ul className="list-disc list-inside space-y-2">
              <li>Conforme au RGPD et à la CNIL</li>
              <li>
                TarteAuCitron bloque automatiquement les scripts tiers (YouTube,
                Google Analytics, Facebook Pixel, etc.) tant que l'utilisateur
                n’a pas donné son consentement explicite.
              </li>
              <li>
                <span className="font-bold">Facile à intégrer</span> : il suffit
                de quelques lignes de code (ou une balise via Google Tag
                Manager) pour l’ajouter à n’importe quel site (WordPress,
                Next.js, HTML pur, etc.).
              </li>
              <li>
                <span className="font-bold">100 % personnalisable</span> :
                couleurs, position de la bannière, textes, services à
                intégrer... tu gardes le contrôle total sur le design et le
                comportement.
              </li>
              <li>
                <span className="font-bold">Multilingue et intelligent</span> :
                la bannière est automatiquement traduite selon la langue du
                navigateur. Elle gère plus de 100 services tiers.
              </li>
              <li>
                <span className="font-bold">
                  Respect de la vie privée by design
                </span>{" "}
                : aucun cookie n’est activé sans action claire de l’utilisateur.
                C’est la base du Privacy by Design.
              </li>
            </ul>
          }
        />
        <SectionArticle
          title="En résumé, TarteAuCitron.js, c’est gratuit, opensource, léger, fiable et RGPD compliant."
          content={
            <p>
              C’est LA solution que j’utilise et recommande à tous mes clients.
            </p>
          }
        />

        <SectionArticle
          title="➡️ Tu veux le voir en action ?"
          content={
            <div className="flex flex-col items-start gap-4">
              <p>
                Rends-toi sur le site de mon client pour tester la bannière :{" "}
                <a
                  href="https://www.adrien-demarle-osteopathe.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-bold underline hover:text-pink-800">
                  adrien-demarle-osteopathe.fr
                </a>
                .
              </p>
              <p>
                📃 Tu peux aussi consulter la documentation :{" "}
                <a
                  href="https://www.npmjs.com/package/tarteaucitronjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-bold underline hover:text-pink-800">
                  tarteaucitron.io
                </a>
              </p>
              <p>Et si tu veux que je l’implémente sur ton projet :</p>
              <Link
                href="https://calendly.com/priscillia-ammeux-pro/rdv-web-audit-noel"
                className="self-center">
                <Button
                  type="button"
                  text="Contacte-moi"
                  ariaLabel="Contacte-moi pour implémenter TarteAuCitron.js"
                />
              </Link>
            </div>
          }
        />
      </ArticleHeader>

      <ArticleNavigation nextHref="/devWebVsSeo" prevHref="/devLille" />
    </Layout>
  );
}
