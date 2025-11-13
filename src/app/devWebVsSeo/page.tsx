import Link from "next/link";
import ArticleHeader from "../components/articleHeader/articleHeader";
import ArticleNavigation from "../components/articleNavigation/articleNagivation";
import Layout from "../ui/layout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développeuse web ≠ rédactrice SEO",
  description:
    "Découvrez pourquoi le développement web et la rédaction SEO sont deux métiers distincts mais complémentaires pour la création de sites performants et bien référencés.",
  keywords: [
    "developpement-web",
    "redaction-seo",
    "referencement-naturel",
    "complementarite-metiers",
    "pixeliaandco",
    "priscillia-ammeux",
    "creation-site-internet",
    "performance-web",
    "experience-utilisateur",
    "strategie-contenu",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr/devWebVsSeo",
  },
};

export default function DevWebVsSeo() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc="/dev-web-vs-seo.webp"
        imgAlt="illustration d'un ordinateur portable, un bloc note et un crayon représentant le développement web et le SEO"
        title="Développeuse web ≠ rédactrice SEO"
        subtitle="Beaucoup pensent que créer un site inclut automatiquement la rédaction des textes et le SEO… mais non !"
        date="13/11/2025">
        <p className="mb-6">
          Lorsqu’on parle de <strong>création de site internet</strong>, une
          confusion revient souvent : on imagine que le ou la{" "}
          <strong>développeuse web</strong> s’occupe de tout — du code jusqu’aux
          textes et au <strong>référencement naturel</strong>. Pourtant, ce sont
          deux métiers bien distincts, avec des compétences complémentaires, qui
          contribuent ensemble à la <strong>visibilité</strong> et au{" "}
          <strong>positionnement</strong> d’un site sur les{" "}
          <strong>moteurs de recherche</strong>.
        </p>

        <h3 className="font-semibold mb-2">Voici la différence :</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>
            <strong>💻 Développeuse web :</strong> structure le site, assure sa
            performance, son accessibilité et une{" "}
            <strong>expérience utilisateur</strong> fluide (UX/UI). Elle gère le
            code, le <strong>CMS</strong> (comme <strong>WordPress</strong>), et
            veille à ce que le site soit rapide, responsive et optimisé pour le
            <strong> référencement</strong> technique.
          </li>
          <li>
            <strong>✍️ Rédactrice SEO :</strong> conçoit et{" "}
            <strong>rédige du contenu éditorial</strong> pertinent, pensé pour
            ton audience et les moteurs de recherche. Elle choisit les{" "}
            <strong>mots-clés</strong> pertinents, structure les{" "}
            <strong>balises</strong>, et met en place une{" "}
            <strong>stratégie de contenu</strong> cohérente et durable.
          </li>
        </ul>

        <section className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          <img
            src="/dev web.webp"
            alt="illustration représentant le développement web"
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-xl shadow-md"
          />
          <div className="flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-pink-600 bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg border-2 border-pink-200">
              VS
            </span>
          </div>
          <img
            src="/seo copywriter.webp"
            alt="illustration représentant la rédaction SEO"
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-xl shadow-md"
          />
        </section>

        <p className="mb-6">
          L’une ne remplace pas l’autre : un site peut être magnifique et
          rapide, mais invisible sur Google sans{" "}
          <strong>contenu optimisé</strong>. À l’inverse, un excellent{" "}
          <strong>contenu web</strong> ne donnera aucun résultat sans une base
          technique solide. Pour obtenir un bon <strong>référencement</strong>{" "}
          et de vrais <strong>résultats de recherche</strong>, il faut une
          approche complémentaire entre la <strong>rédaction web</strong> et le{" "}
          <strong>développement web</strong>.
        </p>

        <p className="mb-6">
          C’est pourquoi, chez <strong>Pixelia&Co</strong>, je conçois des{" "}
          <strong>sites internet</strong> performants, durables et pensés pour
          l’humain. Mon rôle : la structure, la performance et l’
          <strong>optimisation</strong> de <strong>votre site internet</strong>.
          Pour la partie <strong>rédactionnelle</strong> et le{" "}
          <strong>content marketing</strong>, je collabore avec{" "}
          <strong>Mots sur mesure</strong>, expertes en{" "}
          <strong>rédaction SEO</strong> et en{" "}
          <strong>marketing de contenu</strong>. Ensemble, on allie le fond et
          la forme : un site clair, vivant, bien référencé et crédible.
        </p>

        <h3 className="font-semibold mb-2">💡 Le bon réflexe :</h3>
        <p className="mb-6">
          Ne mélange pas les rôles : mise sur la{" "}
          <strong>
            complémentarité entre développeuse web et rédactrice SEO
          </strong>
          . Ce duo est essentiel pour toute entreprise, association ou{" "}
          <strong>site e-commerce</strong> qui souhaite améliorer sa{" "}
          <strong>visibilité digitale</strong>. Ensemble, on crée un{" "}
          <strong>contenu de qualité</strong> qui attire, engage et fidélise tes
          visiteurs.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="/complementarity dev web and seo.webp"
            alt="illustration représentant la complémentarité entre développeuse web et rédactrice SEO"
            className="w-48 h-48 object-cover rounded-xl shadow-md"
          />
        </div>

        <p className="italic mb-6">
          En résumé : ton site est la maison, ton{" "}
          <strong>contenu éditorial</strong> en est la voix. Ensemble, ils
          racontent ton histoire et t’aident à <strong>référencer</strong> ton
          activité sur le web, à travers un <strong>contenu pertinent</strong>{" "}
          et une <strong>expérience utilisateur</strong> soignée.
        </p>

        <p className="mt-4 font-semibold">
          📩 Envie de lancer ton projet web ?{" "}
          <Link
            href="/contact"
            className="text-pink-600 hover:text-pink-700 hover:underline transition-colors duration-200">
            Parlons-en autour d’un café virtuel ☕
          </Link>
        </p>

        <ArticleNavigation nextHref="/blog" prevHref="/tartecitron" />
      </ArticleHeader>
    </Layout>
  );
}
