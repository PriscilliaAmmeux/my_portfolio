import Layout from "../ui/layout/layout";
import confidentialite from "../../data/confidentialite.json";
import Title from "../ui/title/title";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Pixelia&Co",
  description:
    "Découvrez la politique de confidentialité complète de Pixelia&Co, incluant la collecte, le traitement et la protection de vos données personnelles conformément au RGPD, afin de garantir votre sécurité et votre confiance lors de l'utilisation de nos services web.",
  keywords: [
    "confidentialite",
    "donnees-personnelles",
    "rgpd",
    "politique",
    "protection",
    "securite",
    "pixelia-and-co",
    "priscillia-ammeux",
    "politique-de-confidentialite",
    "respect-de-la-vie-privee",
    "gestion-des-donnees",
  ],
  authors: [{ name: "Priscillia Ammeux" }],
};

export default function Privacy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Title text="Politique de confidentialité" />

        <section className="mt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="space-y-0">
              {confidentialite.map((notice, index) => (
                <div
                  key={notice.id}
                  className={`p-6 ${
                    index !== confidentialite.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-200">
                    {notice.title}
                  </h2>

                  <div className="prose prose-gray max-w-none">
                    {Array.isArray(notice.content) ? (
                      <div className="space-y-4">
                        {notice.content.map((item, itemIndex) => (
                          <p
                            key={itemIndex}
                            className="text-gray-700 leading-relaxed">
                            {item.text}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {notice.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 p-4 bg-pink-50 border border-pink-200 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Dernière mise à jour :</strong> Cette politique de
            confidentialité peut être mise à jour. Nous vous encourageons à la
            consulter régulièrement.
          </p>
        </div>
      </div>
    </Layout>
  );
}
