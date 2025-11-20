import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import { Metadata } from "next";
import ListPrestations from "../ui/listPrestations/listPrestations";
import ListCollab from "../ui/listCollab/listCollab";
import Link from "next/link";
import Button from "../components/button/button";
import Image from "next/image";
import IntroPrestations from "../ui/introPrestations/introPrestations";
import Faq from "../components/faq/faq";
import CtaFinal from "../ui/ctaFinal/ctaFinal";

export const metadata: Metadata = {
  title: "Mes prestations - Pixelia&Co",
  description:
    "Découvrez l'ensemble des prestations web proposées par Pixelia&Co, incluant le développement web, l'accessibilité, l'éco-conception, le SEO, la maintenance et la création de sites ou boutiques en ligne, afin de vous offrir des services complets, performants et adaptés à vos besoins.",
  keywords: [
    "prestations-web",
    "developpement-web",
    "accessibilite-web",
    "eco-conception",
    "priscillia-ammeux",
    "pixelia-and-co",
    "creation-de-site-web",
    "creation-de-sites-web",
    "services-web",
    "seo",
    "referencement-naturel",
    "maintenance-web",
    "conception-de-sites-web",
    "rgpd",
    "conformite-rgpd",
    "formation-web",
    "formation-developpement-web",
    "formation-accessibilite-web",
    "formation-eco-conception-web",
    "formation-seo",
    "formation-rgpd",
    "formation-professionnelle",
    "conseil-web",
    "audit-web",
    "strategie-digitale",
    "creation-de-contenu-web",
    "optimisation-de-site-web",
    "responsive-design",
    "performance-web",
    "integration-web",
    "developpement-front-end",
    "developpement-back-end",
    "cms",
    "wordpress",
    "e-commerce",
    "creation-de-boutique-en-ligne",
    "web-design",
    "ui-ux-design",
    "accessibilite-numerique",
    "conformite-accessibilite",
    "web-marketing",
    "reseaux-sociaux",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr/prestations",
  },
};

export default function Page() {
  return (
    <Layout>
      <section className="pt-4 px-4 sm:px-6 lg:px-20">
        <Title text="Mes services" />
        <IntroPrestations />
        <ListPrestations />
        <Image
          src="/Stickers.webp"
          alt="Ensemble de stickers Pixelia&Co"
          className="mx-auto mt-10 animate-wave-gentle"
          width={500}
          height={500}
        />
        <ListCollab />
        <Faq />
        <CtaFinal />
      </section>
    </Layout>
  );
}
