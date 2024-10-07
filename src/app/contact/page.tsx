import { Metadata } from "next";
import { CiMail } from "react-icons/ci";
import Title from "../ui/title/title";
import Layout from "../ui/layout/layout";
import InfoContact from "../ui/infoContact/infoContact";
import Form from "../components/form/form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Me Contacter - Priscillia Ammeux",
};

export default function Contact() {
  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <Title text="Contact" icon={CiMail} />
        <div className="grid md:grid-cols-9 items-center justify-center mx-auto w-full md:w-3/4">
          <Form className="md:col-span-5" />
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <Image
              src="/illustration-contact.webp"
              alt="Illustration contact"
              className="mb-2"
              width={275}
              height={275}
            />
            <InfoContact />
          </div>
        </div>
      </section>
    </Layout>
  );
}
