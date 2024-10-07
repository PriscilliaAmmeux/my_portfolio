import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  const paragraphs = [
    "Bonjour ! Je suis Priscillia, une professionnelle dynamique qui allie mes compétences en développement fullstack et en gestion administrative. Passionnée par l'accessibilité numérique et le développement durable, je crée des solutions innovantes tout en garantissant une organisation efficace des tâches administratives.",

    "À 37 ans, mariée et maman de deux enfants, j’ai su concilier vie de famille et carrière en m’appuyant sur des valeurs telles que l’honnêteté, l’inclusivité et le respect de l’environnement. Basée dans le nord de la France, je valorise l'organisation et la rigueur, ce qui me permet de mener à bien des projets complexes et ambitieux.",

    "Mon métier est une véritable passion qui me procure des paillettes dans les yeux. J’adore partager mes connaissances ; en septembre 2024, j’ai eu l'opportunité de donner mon premier talk, une expérience que j'ai adorée et que je souhaite renouveler avec d'autres interventions à venir.",

    "Mon expertise en développement web fullstack, acquise à travers des expériences en freelance et en entreprise, s’accompagne d’un fort engagement pour l'accessibilité et la durabilité des applications. Actuellement en Mastère 'Architecte Web' (Titre RNCP niveau 7), je cherche à approfondir mes compétences en stratégie digitale et transformation numérique.",

    "Mon dynamisme, ma motivation sans faille et ma capacité à communiquer efficacement font de moi une collaboratrice précieuse, prête à relever tous les défis.",
    "Après plusieurs mois en tant que freelance, je suis à la recherche d'une opportunité professionnelle. En raison de la complexité du marché pour les développeurs juniors, je suis ouverte à plusieurs options :",

    "- Une alternance dans le développement, qui me permettrait de mettre en pratique mes compétences tout en continuant ma formation.",
    "- Un CDD ou CDI dans le développement, pour consolider mon expérience dans ce domaine.",
    "- Un CDD ou CDI en assistance administrative, où mes compétences organisationnelles et mon sens du service client pourraient être pleinement exploités.",

    "Je recherche de préférence un CDD longue durée ou un CDI pour plus de stabilité professionnelle.",
    "Énergique et engagée, je cherche à donner du sens à mes journées, quel que soit le travail qui m'est confié. De nature dynamique, j’ai besoin d'évoluer dans un environnement stimulant, tout en recherchant un cadre qui valorise l'équilibre entre vie privée et vie professionnelle et qui permet mon épanouissement personnel et professionnel.",

    "N'hésitez pas à me contacter, promis, je suis sympa !",
  ];

  return (
    <section className="flex flex-col items-center justify-center mb-2 pt-4 mx-auto px-4 sm:px-8">
      <Title text="Qui suis-je ?" icon={GiLadybug} />
      <Image
        src="/profil.webp"
        alt="photo de moi"
        width={150}
        height={150}
        priority
      />
      <div className="ml-5 mt-5">
        {paragraphs.map((text, index) => (
          <p key={index} className="mb-2">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
