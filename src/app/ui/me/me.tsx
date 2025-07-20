import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  return (
    <section className="flex flex-col items-center justify-center mb-2 pt-4 mx-auto px-4 sm:px-8">
      <Title text="Qui suis-je ?" icon={GiLadybug} />
      <Image
        src="/Visage-noir-blanc.webp"
        alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
        className="block dark:hidden"
        width={150}
        height={150}
      />
      <Image
        src="/Visage-rose-blanc.webp"
        alt="logo d'entreprise (Priscillia AMMEUX - Créatrice Développeuse)"
        className="hidden dark:block"
        width={150}
        height={150}
      />
      <div className="lg:ml-4 mt-4 lg:mt-0 text-justify">
        <h1 className="text-xl font-semibold mb-2">
          Enchantée, moi c’est Priscillia 👋
        </h1>
        <p>
          Après plusieurs années en banque, j’ai décidé de mettre mes
          compétences au service des indépendants, artisans, commerçants et
          petites entreprises qui veulent se rendre visibles en ligne et attirer
          plus de clients.
        </p>
        <p>
          Je crée des{" "}
          <span className="font-semibold text-pink-700">
            sites internet sur mesure
          </span>
          , pensés pour
          <span className="font-semibold text-pink-700">
            {" "}
            mettre en valeur votre activité
          </span>
          , faciliter la prise de contact et
          <span className="font-semibold text-pink-700">
            {" "}
            vous aider à développer votre chiffre d’affaires
          </span>
          .
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-semibold text-pink-700">
              Des sites rapides et bien référencés (SEO)
            </span>{" "}
            pour apparaître sur Google au bon moment,
          </li>
          <li>
            <span className="font-semibold text-pink-700">
              Une attention particulière à l’accessibilité
            </span>{" "}
            pour que chacun puisse naviguer facilement,
          </li>
          <li>
            <span className="font-semibold text-pink-700">
              Une conception éthique et responsable
            </span>{" "}
            (éco-conception, respect du RGPD) pour un web plus sain, qui inspire
            confiance,
          </li>
          <li>
            <span className="font-semibold text-pink-700">
              Et surtout, une écoute attentive
            </span>{" "}
            pour vous proposer une solution vraiment adaptée à vos besoins, pas
            une usine à gaz.
          </li>
        </ul>
        <p className="mt-4">
          🎯 Vous avez un projet ? Parlons-en, je suis là pour vous accompagner
          💬
        </p>
      </div>
    </section>
  );
}
