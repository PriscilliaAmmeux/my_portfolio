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

export const metadata: Metadata = {
  title: "Priscillia Ammeux - Développeuse Web Créative & Engagée",
  description:
    "Quand la créativité rencontre le code ! Priscillia Ammeux conçoit des expériences web sur mesure, entre exigence technique, éco-conception et design singulier.",
  keywords: [
    "développeuse web",
    "freelance",
    "création site web sur mesure",
    "Priscillia Ammeux",
    "design web",
    "développement frontend",
    "expérience utilisateur",
    "accessibilité numérique",
    "éco-conception",
    "créativité digitale",
    "développeuse indépendante",
  ],
  openGraph: {
    title: "Priscillia Ammeux - Développeuse Web Créative & Engagée",
    description:
      "Autodidacte devenue freelance, Priscillia Ammeux crée des sites web alliant esthétique, performance et identité de marque. Une vision singulière du développement web.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.priscillia-ammeux-portfolio.fr/",
    siteName: "Priscillia Ammeux - Développeuse Web",
    images: [
      {
        url: "/Sticker-visage.webp",
        width: 1200,
        height: 630,
        alt: "Priscillia Ammeux - Développeuse Web Créative & Engagée",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <Layout>
        <h1 className="sr-only">Priscillia Ammeux</h1>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 lg:p-10 gap-6 lg:gap-8 mt-8 lg:mt-16">
          <section className="flex-1 text-center lg:text-left">
            <div className="max-w-fit mx-auto lg:mx-0">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Quand la créativité
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-4">
                rencontre <span className="text-pink-700">le code !</span>
              </p>

              <p className="text-sm sm:text-base lg:text-lg">
                Faire dialoguer design
              </p>
              <p className="text-sm sm:text-base lg:text-lg pb-6 lg:pb-10">
                et code avec exigence et singularité.
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-2 w-full">
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
      </Layout>

      <CookieBanner />
      <ConditionalAnalytics />
      <ConditionalSpeedInsights />
      <ConditionalMetricool />
    </main>
  );
}
