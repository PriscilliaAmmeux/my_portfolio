import Layout from "../ui/layout/layout";
import confidentialite from "../../data/confidentialite.json";
import Title from "../ui/title/title";
import { GiPadlock } from "react-icons/gi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Priscillia Ammeux",
  description:
    "Découvrez la politique de confidentialité de Priscillia Ammeux et comment vos données sont protégées.",
  keywords:
    "confidentialité, données personnelles, RGPD, politique, protection",
  authors: [{ name: "Priscillia Ammeux" }],
};

export default function Privacy() {
  return (
    <Layout>
      <Title icon={GiPadlock} text="Politique de confidentialité" />
      <section className="p-4">
        <div className="space-y-8">
          {confidentialite.map((notice) => (
            <div key={notice.id} className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">{notice.title}</h3>
              {Array.isArray(notice.content) ? (
                notice.content.map((item, index) => (
                  <p key={index} className="mb-2">
                    {item.text}
                  </p>
                ))
              ) : (
                <p className="mb-2">{notice.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
