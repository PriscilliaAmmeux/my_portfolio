import { Metadata } from "next";
import Title from "../ui/title/title";
import { GiInjustice } from "react-icons/gi";
import Layout from "../ui/layout/layout";
import legalNotices from "../../data/legalNotices.json";

export const metadata: Metadata = {
  title: "Mentions légales - Priscillia Ammeux",
};

export default function LegalNotices() {
  return (
    <Layout>
      <Title icon={GiInjustice} text="Mentions légales" />
      <section className="p-4">
        <div className="space-y-8">
          {legalNotices.map((notice) => (
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

        <a
          href="/CGV_Priscillia_Ammeux.pdf"
          download
          aria-label="Cliquez ici pour télécharger les conditions générales de ventes"
          className="text-xs md:text-sm lg:text-base underline hover:text-pink-700 hover:font-bold p-1">
          Télécharger les CGV
        </a>
      </section>
    </Layout>
  );
}
