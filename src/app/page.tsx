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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:p-10 gap-8 mt-16">
          <section className="flex-1">
            <div className="max-w-fit">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Quand la créativité
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold pb-4">
                rencontre <span className="text-pink-700">le code !</span>
              </p>
              <p>Faire dialoguer design</p>
              <p className="pb-10">et code avec exigence et singularité.</p>

              {/* Conteneur limité à la largeur du texte */}
              <div className="flex justify-between w-full">
                <Link href="/contact">
                  <Button
                    type="button"
                    text="Me contacter"
                    ariaLabel="Me contacter"
                    variant="bgPink"
                  />
                </Link>
                <Link href="/project">
                  <Button
                    type="button"
                    text="Voir le portfolio"
                    ariaLabel="Voir le portfolio"
                    variant="bgWhite"
                  />
                </Link>
              </div>
            </div>
          </section>

          <section className="flex-shrink-0">
            <Image
              src="/Nuage-web.webp"
              alt="nuage web: un refresh() de créativité web"
              className="hidden dark:block"
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
