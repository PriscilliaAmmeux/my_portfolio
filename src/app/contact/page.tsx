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
        <div className="mb-8 text-justify max-w-3xl mx-auto px-4 text-base text-gray-700">
          <p className="mb-2">
            ✉️ Vous pouvez me contacter directement via le formulaire ci-dessous
            en précisant votre besoin (type de site, délai, budget...).
          </p>
          <p>
            📅 Ou réservez un créneau gratuit de 30 minutes pour discuter de
            votre projet de vive voix.
          </p>
        </div>

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

      <section className="flex justify-center items-center mt-10">
        <a
          href="https://calendly.com/priscillia-ammeux-pro/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-64 justify-center items-center px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition">
          📅 Prendre un RDV gratuit
        </a>
      </section>
    </Layout>
  );
}
