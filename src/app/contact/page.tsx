import { Metadata } from "next";
import { CiMail } from "react-icons/ci";
import Footer from "../ui/components/footer/footer";
import Title from "../ui/components/title/title";
import Navigation from "../ui/navigation/navigation";
import Layout from "../ui/components/layout/layout";
import Form from "../ui/form/form";
import InfoContact from "../ui/infoContact/infoContact";

export const metadata: Metadata = {
  title: "Me Contacter - Priscillia Ammeux",
};

export default function Contact() {
  return (
    <Layout>
      <main className="pt-4">
        <Navigation />
        <Title text="Contact" icon={CiMail} />
        <div className="grid md:grid-cols-3 gap-4 mx-auto w-full md:w-3/4">
          <div className="md:col-span-1">
            <InfoContact />
          </div>
          <div className="md:col-span-2">
            <Form />
          </div>
        </div>
        <Footer />
      </main>
    </Layout>
  );
}
