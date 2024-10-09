import { BsGearFill } from "react-icons/bs";
import Layout from "../ui/layout/layout";
import Title from "../ui/title/title";
import { Metadata } from "next";
import ListPrestations from "../ui/listPrestations/listPrestations";
import HelpNorth from "../ui/helpNorth/helpNorth";

export const metadata: Metadata = {
  title: "Mes prestations - Priscillia Ammeux",
};

export default function Page() {
  return (
    <Layout>
      <main className="pt-4 lg:pl-2 lg:pr-2">
        <Title text="Prestations" icon={BsGearFill} />
        <ListPrestations />
        <HelpNorth />
      </main>
    </Layout>
  );
}
