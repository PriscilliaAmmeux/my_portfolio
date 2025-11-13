import Link from "next/link";
import ArticleHeader from "../components/articleHeader/articleHeader";
import ArticleNavigation from "../components/articleNavigation/articleNagivation";
import Layout from "../ui/layout/layout";

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
          Lorsqu’on parle de création de site web, une confusion revient souvent
          : on imagine que le ou la développeuse s’occupe de tout — du code
          jusqu’aux textes et au référencement. Pourtant, ce sont deux métiers
          bien distincts, avec des compétences complémentaires.
        </p>

        <h3 className="font-semibold mb-2">Voici la différence :</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>
            <strong>💻 Développeuse web :</strong> structure le site, assure sa
            performance, son accessibilité et une expérience fluide (UX/UI).
          </li>
          <li>
            <strong>✍️ Rédactrice SEO :</strong> écrit un contenu pensé pour ton
            audience et les moteurs de recherche : mots-clés, balises, stratégie
            éditoriale.
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
          rapide, mais invisible sur Google sans contenu optimisé. À l’inverse,
          un texte excellent ne donnera rien sans un site bien construit
          techniquement.
        </p>

        <p className="mb-6">
          C’est pourquoi, chez <strong>Pixelia&Co</strong>, je conçois des sites
          performants et durables, tout en m’entourant de professionnelles du
          contenu. Pour les textes, je collabore avec{" "}
          <strong>Mots sur mesure</strong>, expertes en stratégie éditoriale et
          rédaction SEO sur-mesure. Ensemble, on allie le fond et la forme : un
          site clair, vivant et bien positionné.
        </p>

        <h3 className="font-semibold mb-2">💡 Le bon réflexe :</h3>
        <p className="mb-6">
          Ne mélange pas les rôles : mise sur la complémentarité. Le duo{" "}
          <strong>développeuse web + rédactrice SEO</strong>, c’est la garantie
          d’un site performant, accessible et réellement visible.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="/complementarity dev web and seo.webp"
            alt="illustration représentant la complémentarité entre développeuse web et rédactrice SEO"
            className="w-48 h-48 object-cover rounded-xl shadow-md"
          />
        </div>

        <p className="italic mb-6">
          En résumé : ton site est la maison, tes textes en sont la voix.
          Ensemble, ils racontent ton histoire et attirent les bons visiteurs.
        </p>

        <p className="mt-4 font-semibold">
          📩 Envie de lancer ton projet web ?{" "}
          <Link
            href="/contact"
            className="text-pink-600 hover:text-pink-700 hover:underline transition-colors duration-200">
            Parlons-en autour d'un café virtuel ☕
          </Link>
        </p>
        <ArticleNavigation nextHref="/blog" prevHref="/tartecitron" />
      </ArticleHeader>
    </Layout>
  );
}
