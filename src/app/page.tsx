import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "../app/ui/layout/layout";
import Button from "./components/button/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Priscillia Ammeux - Conceptrice et Développeuse d'Applications",
  description:
    "Priscillia Ammeux, freelance, développeuse web, création et conception de site web. Expertise technique et créativité.",
};

export default function Home() {
  return (
    <main>
      <Layout>
        <h1 className="sr-only">Priscillia Ammeux</h1>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 lg:p-10 gap-6 lg:gap-8 mt-8 lg:mt-16">
          <section className="flex-1 text-center lg:text-left">
            <div className="max-w-fit mx-auto lg:mx-0">
              {/* Titre responsive */}
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Quand la créativité
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-4">
                rencontre <span className="text-pink-700">le code !</span>
              </p>

              {/* Sous-titre responsive */}
              <p className="text-sm sm:text-base lg:text-lg">
                Faire dialoguer design
              </p>
              <p className="text-sm sm:text-base lg:text-lg pb-6 lg:pb-10">
                et code avec exigence et singularité.
              </p>

              {/* Boutons responsive */}
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

          {/* Image responsive */}
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

      <Analytics />
      <SpeedInsights />
    </main>
  );
}
