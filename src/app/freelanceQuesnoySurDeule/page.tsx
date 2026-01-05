import Link from "next/link";
import ArticleHeader from "../components/articleHeader/articleHeader";
import ArticleNavigation from "../components/articleNavigation/articleNagivation";
import Layout from "../ui/layout/layout";
import { Metadata } from "next";
import SectionArticle from "../components/sectionArticle/sectionArticle";

export const metadata: Metadata = {
  title: "Création de site internet à Quesnoy-sur-Deûle, près de Lille",
  description:
    "Développeuse web freelance à Quesnoy-sur-Deûle près de Lille. Création de sites internet professionnels, vitrines et e-commerce. Accompagnement personnalisé, SEO optimisé, design moderne et responsive. Transformez votre présence en ligne en opportunités commerciales.",
  keywords: [
    "creation-site-internet-lille",
    "developpeur-web-quesnoy-sur-deule",
    "freelance-web-lille",
    "site-vitrine-professionnel",
    "creation-site-e-commerce",
    "developpement-web-lille",
    "referencement-seo-lille",
    "site-internet-responsive",
    "developpeur-wordpress-lille",
    "agence-web-lille",
    "creation-landing-page",
    "site-web-sur-mesure",
    "optimisation-seo",
    "developpeur-freelance-nord",
    "creation-site-artisan",
  ],
};

const SECTIONS = [
  {
    title: "Avoir un site internet n'est plus un prestige mais une nécessité",
    content: (
      <>
        <p>
          Les habitudes des consommateurs ont changé. Vous allez comprendre et
          même vous reconnaître dans les exemples suivants. Aujourd'hui, on fait
          une petite recherche internet avant de faire un pas dehors, que ce
          soit pour trouver :
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Un resto où manger entre amis,</li>
          <li>Une coiffeuse pour refaire un balayage,</li>
          <li>Une boutique de chaussures pour s'offrir une nouvelle paire,</li>
          <li>
            Un pâtissier pour commander un délicieux gâteau d'anniversaire, etc.
          </li>
        </ul>
        <p>
          On ne sort plus à l'improviste comme avant, que ce soit pour faire du
          shopping, ou prendre un verre. On planifie en amont où on va. C'est le
          cas pour tout le monde, moi, vous et vos clients potentiels.
        </p>
        <p>
          Raison pour laquelle, il est primordial pour vous et vital pour votre
          business d'avoir une présence en ligne sur tous les leviers possibles.
        </p>
      </>
    ),
  },
  {
    title: "Pourquoi les réseaux sociaux ne suffisent plus ?",
    content: (
      <>
        <p>
          Être présent sur Facebook, Instagram ou Snapchat, c'est vraiment top.
          Les réseaux sociaux vous permettent de créer une communauté et de vous
          rapprocher d'elle. Créer du lien vous fait gagner la confiance de vos
          clients potentiels. Et une cible en confiance, c'est une personne
          capable d'acheter vos produits à la première occasion, ou qui peut
          même se déplacer jusqu'à votre{" "}
          <span className="text-bold">
            boutique physique à Quesnoy-sur-Deûle, Lille ou sa périphérie
          </span>
          , spécialement pour vous !
        </p>
        <p>
          C'est pourquoi je vous encourage à continuer d'être présent sur les
          réseaux, publiez des stories, des posts, des réels. Et petite
          précision, être présent en ligne n'exige pas de vous d'être h24
          connecté. La régularité est la clé ! Si vous publiez un contenu par
          semaine, c'est génial, rassurez-vous.
        </p>
        <p>Maintenant pourquoi les réseaux ne suffisent plus ?</p>
        <p>
          Tout simplement parce que n'importe qui peut créer un compte
          Instagram, Facebook ou Snapchat et peut l'alimenter de contenus copiés
          ou volés… Les arnaqueurs existent dans tous les domaines.
        </p>
        <p>
          Arnaquer sur les réseaux, c'est facile parce que c'est gratuit. Par
          contre, arnaquer sur un site web, c'est peu probable pour ne pas dire
          impossible. Qui voudrait acheter un nom de domaine, payer
          l'hébergement web annuellement pour arnaquer des clients ? Personne
          (ou des arnaqueurs de haut niveau).
        </p>
        <p>
          Donc, vous voyez où je veux en venir. Si les réseaux sociaux vous font
          gagner la confiance de vos cibles, un site internet vous fait gagner
          en crédibilité. L'abonné intéressé par vos produits, en voyant que
          vous avez investi sur un site, sera encore plus en confiance.
        </p>
        <p>
          Morale de l'histoire, le combo parfait pour réussir en ligne : avoir
          un site internet + être présent sur les réseaux = crédibilité accrue.
          Et en plus, l'un accentue la visibilité de l'autre ! N'est-ce pas
          génial ?
        </p>
      </>
    ),
  },
  {
    title: "Un site internet est une vitrine",
    content: (
      <>
        <p>
          Il existe plusieurs types de sites web, selon votre budget et votre
          secteur d'activité :
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Des sites e-commerce pour vendre vos produits en ligne,</li>
          <li>
            Des sites vitrines, souvent en one-page, l'idéal pour les
            entrepreneurs souhaitant une carte de visite digitale,
          </li>
          <li>
            Des blogs pour partager du contenu et renforcer votre visibilité,
          </li>
          <li>
            Et des landing pages, particulièrement adaptées au lancement d'un
            produit ou d'une offre.
          </li>
        </ul>
        <p>
          Imaginez qu'internet est un centre commercial et que tous les sites
          web présents sont des boutiques. Pour attirer un acheteur vers votre
          boutique en ligne, il faudrait manier l'optimisation SEO et le ciblage
          local. Une fois le client hameçonné, il faudra le séduire.
        </p>
        <p>
          Hé oui, il ne suffit pas de lancer un site, se reposer sur ses
          lauriers et attendre que la magie opère. C'est comme une boutique
          physique avec des étagères et des penderies. Plus c'est rangé,
          organisé et bien présenté, plus le client est susceptible d'acheter.
        </p>
        <p>
          Ne vous en faites surtout pas. Si vous me choisissez pour créer votre
          site internet, je ne vous laisserai pas galérer. Je vous formerai dès
          le début à bien utiliser votre plateforme, et si vous n'avez pas le
          temps ou l'envie de vous en occuper, je le ferai volontiers à votre
          place. Avec Pixelia & Co, vous bénéficiez d'une prise en charge
          totale.
        </p>
      </>
    ),
  },
  {
    title: "Comment repérer les arnaques ?",
    content: (
      <>
        <p>
          D'abord, si un développeur web vous propose de créer votre site
          internet et qu'il n'a pas lui-même un site web, fuyez. Il n'y a pas de
          "cordonnier mal chaussé" qui tienne ici.
        </p>
        <p>
          Et comme dit plus haut, c'est peu probable mais ce n'est pas
          impossible qu'un arnaqueur investisse dans un site internet pour en
          faire un guet-apens. On peut s'attendre à tout de nos jours !
        </p>
        <p>
          Pour confirmer que le développeur web qui vous a proposé de créer
          votre site est quelqu'un de fiable, guettez tout ce qui passe sous vos
          yeux sur son site, notamment :
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Une page À propos claire et détaillée</li>
          <li>Des mentions légales complètes</li>
          <li>Une politique de confidentialité conforme (RGPD)</li>
          <li>
            Des coordonnées visibles (email professionnel, téléphone,
            formulaire)
          </li>
          <li>Un site sécurisé (HTTPS)</li>
          <li>Des réalisations / portfolio vérifiables</li>
          <li>Des témoignages clients réels</li>
          <li>Une offre claire avec prestations expliquées</li>
          <li>
            Des tarifs transparents ou au moins une méthode de facturation
            annoncée
          </li>
          <li>Une orthographe et une rédaction soignées</li>
          <li>Un design cohérent et professionnel</li>
          <li>Des délais et un processus de travail expliqués</li>
          <li>
            Une présence légale (statut, entreprise, numéro si applicable)
          </li>
        </ul>
        <p>
          Aussi, remarquez comment il vous parle d'optimisation SEO. Le
          référencement naturel est vraiment obligatoire, on est d'accord. Mais
          certains misent tellement là-dessus qu'ils en oublient la qualité
          d'écriture.
        </p>
        <p>
          Un texte sur-optimisé ne convertit pas de clients humains et les
          moteurs de recherche comme Google le considèrent comme obsolète.
          Inversement, un texte peu optimisé n'atteindra ni les robots de
          Google, ni les clients humains.
        </p>
        <p>
          Confiez la création de votre site internet à un créateur de sites
          capable de trouver un juste équilibre entre optimisation SEO et
          rédaction qualitative. Le but étant d'être repérés par les algorithmes
          qui vous emmènent jusqu'à vos cibles.
        </p>
      </>
    ),
  },
  {
    title: "Pourquoi confier votre site à une développeuse web ?",
    content: (
      <>
        <p>
          Parce que je suis la meilleure ? Hum, plus sérieusement : parce que
          vous êtes à la recherche d'une prestataire locale, et moi, je suis
          basée à Quesnoy-sur-Deûle près de Lille. Je peux venir jusqu'à vous
          pour parler de votre projet web.
        </p>
        <p>
          Bien évidemment, je travaille aussi avec des clients habitant loin.
          Internet est magique, grâce aux visioconférences, c'est comme si on
          était au même endroit ! C'est toute la beauté d'internet, on peut
          cibler les clients locaux et lointains.
        </p>
        <p>
          Parce que, aussi, je vous propose de créer votre site internet, soit
          avec du 100 % code ou sur du WordPress ou Shopify (ou le CMS que vous
          voulez), et de l'optimiser pour le SEO de manière qualitative. Site
          internet et référencement = un duo indispensable !
        </p>
        <p>
          Par ailleurs, pourquoi me choisir moi plutôt qu'un développeur web ?
          Parce qu'en tant que femme, j'ai le sens du détail multiplié par 1
          000. Je suis pointilleuse et perfectionniste, aucune ligne de code ne
          m'échappe.
        </p>
        <p>
          Je vous garantis de créer un site internet stylé, à votre image, à la
          fois esthétique et responsive (adapté à tous les écrans), et bien
          pensé pour renforcer votre identité visuelle et augmenter votre
          chiffre d'affaires.
        </p>
      </>
    ),
  },
];

export default function FreelanceQuesnoySurDeule() {
  return (
    <Layout>
      <ArticleHeader
        imgSrc="/moi-à-mon-bureau-version-dessin-animé.webp"
        imgAlt="illustration d'une femme travaillant sur son ordinateur portable dans un café"
        title="Création de site internet à Quesnoy-sur-Deûle, près de Lille"
        subtitle="Entrepreneur, artisan, consultant ou porteur de projet établi à Lille ? Vous peinez à décrocher des clients ? Alors vous songez à créer votre propre site web ? Sage décision ! À l'ère du digital et des intelligences artificielles, avoir un site est devenu un must. Mais comme dans tous les domaines, il y a beaucoup d'arnaques dans le développement web. Comment choisir donc un prestataire local et fiable à Lille et alentours ? Réponse dans cet article."
        date="05/01/2026">
        {SECTIONS.map((section, index) => (
          <SectionArticle
            key={index}
            title={section.title}
            content={<div className="space-y-4 pb-4">{section.content}</div>}
          />
        ))}

        <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Prêt à lancer votre projet web à Lille ?
          </h3>
          <p className="text-gray-700 mb-4">
            Discutons ensemble de vos besoins et transformons vos idées en
            réalité digitale.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
            Contactez-moi pour un devis gratuit
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <ArticleNavigation nextHref="/blog" prevHref="/devWebVsSeo" />
      </ArticleHeader>
    </Layout>
  );
}
