import { BsGearFill } from "react-icons/bs";
import Footer from "../components/footer/footer";
import Layout from "../components/layout/layout";
import Title from "../components/title/title";
import Navigation from "../ui/navigation/navigation";
import Card from "../components/card/card";
import { Metadata } from "next";
import prestations from "../../data/prestations.json";
import { IoMdGitNetwork } from "react-icons/io";

export const metadata: Metadata = {
  title: "Mes prestations - Priscillia Ammeux",
};

interface PrestationListProps {
  list?: { content: string }[];
  className?: string;
}

const PrestationList: React.FC<PrestationListProps> = ({ list }) => (
  <ul className="list-disc pl-5">
    {list && list.map((item, index) => <li key={index}>{item.content}</li>)}
  </ul>
);

export default function Page() {
  return (
    <Layout>
      <main className="pt-4">
        <Navigation />
        <Title text="Prestations" icon={BsGearFill} />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
          {prestations.map((prestation) => (
            <Card
              key={prestation.id}
              className="w-full lg:w-1/3 px-2 flex flex-col justify-between h-full"
              Icon={IoMdGitNetwork}
              title={prestation.title}
              color="bg-blue-100"
              button={{ href: "/contact", text: "Contactez moi" }}>
              <div className="flex-grow">
                <ul className="text-gray-700 list-disc mt-2 mb-2 list-none text-sm">
                  <li className="mt-2 mb-2 text-pink-500 font-bold">
                    {prestation.price}
                  </li>
                  <li className="mt-2 mb-2">{prestation.description}</li>
                  {prestation.presentation &&
                    prestation.presentation.length > 0 && (
                      <>
                        <li className="mt-2 mb-2 font-bold">Présentation :</li>
                        <PrestationList list={prestation.presentation} />
                      </>
                    )}
                  {prestation.avantages && prestation.avantages.length > 0 && (
                    <>
                      <li className="mt-2 mb-2 font-bold">Avantages :</li>
                      <PrestationList list={prestation.avantages} />
                    </>
                  )}
                </ul>
              </div>
            </Card>
          ))}
        </section>
      </main>

      <Footer />
    </Layout>
  );
}
