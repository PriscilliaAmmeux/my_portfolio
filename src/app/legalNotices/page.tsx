import { Metadata } from "next";
import Title from "../ui/title/title";
import Layout from "../ui/layout/layout";
import legalNotices from "../../data/legalNotices.json";

export const metadata: Metadata = {
  title: "Mentions légales - Priscillia Ammeux",
  description:
    "Mentions légales de Priscillia Ammeux, incluant les informations légales, la politique de confidentialité et les conditions générales de vente.",
  keywords: [
    "mentions légales",
    "politique de confidentialité",
    "conditions générales de vente",
    "Priscillia Ammeux",
    "informations légales",
    "protection des données",
    "RGPD",
    "droit d'auteur",
    "responsabilité",
    "contact",
  ],
};

export default function LegalNotices() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Title text="Mentions légales" />

        <section className="mt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="space-y-0">
              {legalNotices.map((notice, index) => (
                <div
                  key={notice.id}
                  className={`p-6 ${
                    index !== legalNotices.length - 1
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

        <div className="mt-8 p-6 bg-pink-50 border border-pink-200 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Conditions Générales de Vente
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Pour consulter les conditions générales de vente détaillées
          </p>
          <a
            href="/CGV_Priscillia_Ammeux.pdf"
            download
            aria-label="Cliquez ici pour télécharger les conditions générales de ventes"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Télécharger les CGV
          </a>
        </div>
      </div>
    </Layout>
  );
}
