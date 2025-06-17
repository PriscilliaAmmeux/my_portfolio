import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  return (
    <section className="flex flex-col items-center justify-center mb-2 pt-4 mx-auto px-4 sm:px-8">
      <Title text="Qui suis-je ?" icon={GiLadybug} />
      <Image
        src="/profil.webp"
        alt="photo de moi"
        width={150}
        height={150}
        priority
        className="mt-4 lg:mt-0"
      />
      <div className="lg:ml-4 mt-4 lg:mt-0 text-justify">
        <h1 className="text-xl font-semibold mb-2">
          Enchantée, moi c’est Priscillia Ammeux 👋
        </h1>
        <p className="mb-2">
          Je crée des sites internet sur mesure pour les indépendants, artisans,
          commerçants et petites entreprises qui veulent{" "}
          <span className="font-semibold text-pink-700">
            développer leur présence en ligne
          </span>{" "}
          et{" "}
          <span className="font-semibold text-pink-700">
            gagner en visibilité
          </span>
          .
        </p>
        <p className="mb-2">
          Site vitrine ou boutique en ligne : je conçois des sites modernes,
          efficaces, pensés pour{" "}
          <span className="font-semibold text-pink-700">
            attirer vos clients
          </span>
          ,{" "}
          <span className="font-semibold text-pink-700">
            valoriser votre image
          </span>{" "}
          et{" "}
          <span className="font-semibold text-pink-700">
            faciliter les prises de contact
          </span>
          .
        </p>
        <p className="mb-2">
          Je mets un point d’honneur à proposer des solutions{" "}
          <span className="font-semibold text-pink-700">
            rapides, accessibles et bien référencées
          </span>
          (SEO) pour que votre site travaille pour vous, même quand vous dormez.
        </p>
        <p className="mb-4">Vous avez un projet ? Je suis à votre écoute 💬</p>
        <hr className="my-6" />
        <p className="italic font-semibold text-pink-700">
          🎯 Je crée des sites web sur mesure pour les indépendants et petites
          entreprises qui veulent se démarquer, gagner en visibilité et
          convertir plus.
          <br />
          💡 Sites vitrine, e-commerce, SEO, accessibilité, performance… je
          construis des solutions qui travaillent pour vous, 24h/24.
        </p>
      </div>
    </section>
  );
}
