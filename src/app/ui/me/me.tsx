import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  const paragraphs = [
    "Bonjour ! Je suis Priscillia, conceptrice et développeuse d'applications, passionnée par l'accessibilité numérique et le développement durable. Après une première carrière dans le secteur bancaire, j'ai opéré une reconversion réussie vers le développement web, portée par ma curiosité et mon envie de créer des solutions numériques innovantes.",
    "À 37 ans, mariée et maman de deux enfants, j’ai su concilier vie de famille et carrière, en m’appuyant sur des valeurs telles que l’honnêteté, l’inclusivité et le respect de l’environnement. Basée dans le nord de la France, je valorise l'organisation et la rigueur, ce qui me permet de mener à bien des projets complexes et ambitieux.",
    "Mon métier est une véritable passion qui me donne des paillettes dans les yeux. J’adore partager mes connaissances et en septembre 2024, j’ai donné mon premier talk, une expérience que j'ai adorée et que je compte renouveler avec d'autres talks à venir.",
    'Mon expertise en développement web fullstack, acquise à travers des expériences en freelance et en entreprise, s’accompagne d’un fort engagement pour l\'accessibilité et la durabilité des applications. Actuellement en Mastère "Architecte Web" (Titre RNCP niveau 7), je cherche à approfondir mes compétences en stratégie digitale et transformation numérique.',
    "Je suis à la recherche soit d’un CDI, soit d’une entreprise qui pourra m’accompagner dans cette formation, ou encore de missions freelance.",
    "Mon dynamisme, ma motivation sans faille et ma capacité à communiquer efficacement font de moi une collaboratrice précieuse, prête à relever tous les défis.",
    "N'hésitez pas à me contacter, promis, je suis sympa.",
  ];

  return (
    <section className="flex flex-col sm:flex-row items-center justify-center mb-4 pt-4 mx-auto px-4 sm:px-8">
      <Title text="Qui suis-je ?" icon={GiLadybug} />
      <Image
        className="ml-8 mr-4"
        src="/profil.webp"
        alt="photo de moi"
        width={150}
        height={150}
        priority
      />
      <div className="ml-5 mt-4 sm:mt-0">
        {paragraphs.map((text, index) => (
          <p key={index} className="mb-2">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
