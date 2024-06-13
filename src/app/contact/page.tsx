import { Metadata } from "next";
import { CiMail } from "react-icons/ci";
import Title from "../components/title/title";
import Navigation from "../ui/navigation/navigation";
import Layout from "../components/layout/layout";
import InfoContact from "../ui/infoContact/infoContact";
import Footer from "../components/footer/footer";
import Form from "../components/form/form";

export const metadata: Metadata = {
  title: "Me Contacter - Priscillia Ammeux",
};

export default function Contact() {
  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <Navigation />
        <Title text="Contact" icon={CiMail} />
        <div className="grid md:grid-cols-9 items-center justify-center mx-auto w-full md:w-3/4">
          <Form className="md:col-span-5" />

          <div className="md:col-span-1"></div>

          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <img
              src="/illustration-contact.webp"
              alt="Illustration contact"
              className="mb-2"
              width={275}
            />
            <InfoContact />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
