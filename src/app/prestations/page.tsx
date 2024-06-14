import { BsGearFill } from "react-icons/bs";
import Layout from "../components/layout/layout";
import Title from "../components/title/title";
import { Metadata } from "next";
import Process from "../ui/process/process";
import ListPrestations from "../ui/listPrestations/listPrestations";

export const metadata: Metadata = {
  title: "Mes prestations - Priscillia Ammeux",
};

export default function Page() {
  return (
    <Layout>
      <main className="pt-4 lg:pl-2 lg:pr-2">
        <Title text="Prestations" icon={BsGearFill} />
        <ListPrestations />
        <Process />
      </main>
    </Layout>
  );
}
