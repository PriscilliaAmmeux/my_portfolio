import {
  ConditionalAnalytics,
  ConditionalSpeedInsights,
  ConditionalMetricool,
} from "./components/ConditionalTracking/ConditionalTracking";
import Layout from "../app/ui/layout/layout";
import Button from "./components/button/button";
import Link from "next/link";
import Image from "next/image";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import { Metadata } from "next";
import Hero from "./ui/hero/hero";
import IntroTextHome from "./ui/introTextHome/introTextHome";

export const metadata: Metadata = {
  title:
    "priscillia-ammeux-pixeliaandco-developpeuse-web-freelance-quesnoy-sur-deule",
  description:
    "priscillia-ammeux-pixeliaandco-creation-site-internet-sur-mesure-eco-concu-design-creatif-quesnoy-sur-deule-nord",
  keywords: [
    "developpeuse-web-freelance",
    "creation-site-internet-quesnoy-sur-deule",
    "site-internet-sur-mesure-quesnoy-sur-deule",
    "site-internet-sur-mesure-quesnoy-sur-deule",
    "site-vitrine-web-hauts-de-france",
    "eco-conception-web-nord",
    "web-design-creatif",
    "responsive-design-web",
    "experience-utilisateur-web",
    "identite-de-marque-digitale",
    "optimisation-performance-web",
    "freelance-web-nord",
    "metropole-lilloise-web",
    "site-internet-professionnel",
    "accessibilite-web",
    "seo-site-internet",
    "maintenance-site-web",
    "experience-utilisateur-web",
    "strategie-digitale-pme",
    "transformation-numerique",
    "integration-html-css",
    "javascript-web",
    "react-js",
    "next-js",
    "wordpress-freelance",
    "prestashop-ecommerce",
    "site-ecommerce-nord",
    "refonte-site-internet",
    "optimisation-seo-site-web",
    "audit-seo-site-internet",
    "marketing-digital-pme",
    "gestion-projet-web-agile",
    "developpement-web-sur-mesure",
    "creation-blog-professionnel",
    "strategie-contenu-web",
    "redaction-web-seo",
    "developpement-front-end",
    "developpement-back-end",
    "design-interface-utilisateur",
    "e-commerce-nord",
    "creation-boutique-en-ligne",
    "branding-numerique",
    "charte-graphique-web",
    "site-web-rapide",
    "freelance-web-hauts-de-france",
    "developpeuse-web-lille",
    "creation-site-internet-professionnel",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr",
  },
};

export default function Home() {
  return (
    <main>
      <Layout>
        <h1 className="sr-only">
          Pixelia&Co – Création de site internet à Lille – Studio web &
          freelance WordPress
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 lg:p-10 gap-6 lg:gap-8 mt-8 lg:mt-16">
          <section className="flex-1 text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0 ">
              <Hero />

              <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 sm:gap-4 w-full">
                <Link href="/contact">
                  <Button
                    type="button"
                    text="Me contacter"
                    ariaLabel="Me contacter"
                    variant="bgPink"
                    className="w-full sm:w-auto"
                  />
                </Link>
                <Link href="/project">
                  <Button
                    type="button"
                    text="Voir le portfolio"
                    ariaLabel="Voir le portfolio"
                    variant="bgWhite"
                    className="w-full sm:w-auto"
                  />
                </Link>
              </div>
            </div>
          </section>

          <section className="flex-shrink-0 flex justify-center lg:justify-end">
            <Image
              src="/Nuage-web.webp"
              alt="nuage web: un refresh() de créativité web"
              className="block w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
              width={500}
              height={500}
            />
          </section>
        </div>
        <section>
          {" "}
          <IntroTextHome />
        </section>
      </Layout>

      <CookieBanner />
      <ConditionalAnalytics />
      <ConditionalSpeedInsights />
      <ConditionalMetricool />
    </main>
  );
}
