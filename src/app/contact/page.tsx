import { Metadata } from "next";
import { CiMail } from "react-icons/ci";
import Title from "../components/title/title";
import Navigation from "../ui/navigation/navigation";
import Layout from "../components/layout/layout";
import InfoContact from "../ui/infoContact/infoContact";
import Footer from "../components/footer/footer";

export const metadata: Metadata = {
  title: "Me Contacter - Priscillia Ammeux",
};

export default function Contact() {
  return (
    <Layout>
      <main className="pt-4">
        <Navigation />
        <Title text="Contact" icon={CiMail} />
        <div className="grid md:grid-cols-5 gap-4 items-center justify-center mx-auto w-full md:w-3/4">
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <img
              src="/illustration-contact.png"
              alt="Illustration contact"
              className="mb-2"
              width={275}
            />
          </div>
          <div className="md:col-span-3 flex justify-center">
            <InfoContact />
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
}
