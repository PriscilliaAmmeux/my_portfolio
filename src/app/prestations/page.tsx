import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import { Metadata } from "next";
import ListPrestations from "../ui/listPrestations/listPrestations";

export const metadata: Metadata = {
  title: "Mes prestations - Priscillia Ammeux",
  description:
    "Découvrez les prestations web proposées par Priscillia Ammeux : développement web, accessibilité, éco-conception et bien plus.",
  keywords: [
    "prestations web",
    "développement web",
    "accessibilité web",
    "éco-conception",
    "Priscillia Ammeux",
    "services web",
    "SEO",
    "référencement naturel",
    "maintenance web",
    "conception de sites web",
    "RGPD",
    "conformité RGPD",
    "formation web",
    "formation développement web",
    "formation accessibilité web",
    "formation éco-conception web",
    "formation SEO",
    "formation RGPD",
    "formation professionnelle",
    "conseil web",
    "audit web",
    "stratégie digitale",
    "création de contenu web",
    "optimisation de site web",
    "responsive design",
    "performance web",
    "intégration web",
    "développement front-end",
    "développement back-end",
    "CMS",
    "WordPress",
    "e-commerce",
    "création de boutique en ligne",
    "web design",
    "UI/UX design",
    "accessibilité numérique",
    "conformité accessibilité",
    "web marketing",
    "réseaux sociaux",
  ],
};

export default function Page() {
  return (
    <Layout>
      <section className="pt-4 lg:pl-2 lg:pr-2">
        <div className="ml-4">
          <Title text="Mes services" />
        </div>
        <ListPrestations />
      </section>
    </Layout>
  );
}
