import { Metadata } from "next";
import Title from "../ui/title/title";
import Layout from "../ui/layout/layout";
import InfoContact from "../ui/infoContact/infoContact";
import Form from "../components/form/form";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Contact – Priscillia Ammeux de Pixelia&Co | Développeuse Web et Accessibilité",
  description:
    "Contactez Pixelia&Co avec Priscillia Ammeux pour un site web accessible, éthique et performant. Formulaire en ligne ou rendez-vous gratuit.",
  keywords: [
    "contact",
    "formulaire-de-contact",
    "reservation-appel",
    "site-web-accessible",
    "developpeuse-web",
    "accessibilite-numerique",
    "priscillia-ammeux",
    "pixeliaandco",
    "contact-professionnel",
    "services-web",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr/contact",
  },
};

export default function Contact() {
  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <div className="flex sm:justify-center ml-4 sm:ml-0">
          <Title text="Contact" />
        </div>
        <div className="mb-8 max-w-3xl mx-auto px-4 text-base text-gray-700">
          <p className="mb-2 text-gray-900 dark:text-white">
            ✉️ Vous pouvez me contacter directement via le formulaire ci-dessous
            en précisant votre besoin (type de site, délai, budget...).
          </p>
          <p className="mb-2 text-gray-900 dark:text-white">
            📅 Ou réservez un créneau gratuit pour discuter de votre projet de
            vive voix.
          </p>
        </div>

        <div className="grid md:grid-cols-9 items-center justify-center mx-auto w-full md:w-3/4">
          <Form className="md:col-span-5" />
          <div className="md:col-span-1"></div>
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <Image
              src="/Logo-bulle-rose.webp"
              alt="Logo bulle rose pixelia&co"
              aria-label="Logo bulle rose pixelia&co"
              className="mb-4"
              width={300}
              height={300}
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
