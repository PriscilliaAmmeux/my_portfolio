import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../title/title";

export default function Me() {
  const paragraphs = [
    "Bonjour ! Je suis Priscillia, une professionnelle dynamique qui allie mes compétences en développement fullstack et en gestion administrative. Passionnée par l'accessibilité numérique et le développement durable, je crée des solutions innovantes tout en garantissant une organisation efficace des tâches administratives.",
    "Basée dans le nord de la France, je valorise l'organisation et la rigueur, ce qui me permet de mener à bien des projets complexes et ambitieux.",
    "Mon métier est une véritable passion qui me procure des paillettes dans les yeux. J’adore partager mes connaissances ; en septembre 2024, j’ai eu l'opportunité de donner mon premier talk, une expérience que j'ai adorée et que je souhaite renouveler avec d'autres interventions à venir.",
    "Mon expertise en développement web fullstack, acquise à travers des expériences en freelance et en entreprise, s’accompagne d’un fort engagement pour l'accessibilité et la durabilité des applications. Actuellement en Mastère 'Architecte Web' (Titre RNCP niveau 7), je cherche à approfondir mes compétences en stratégie digitale et transformation numérique.",
    "Mon dynamisme, ma motivation sans faille et ma capacité à communiquer efficacement font de moi une collaboratrice précieuse, prête à relever tous les défis.",
    "Je recherche de préférence un CDD longue durée ou un CDI pour plus de stabilité professionnelle.",
    "De nature dynamique, j’ai besoin d'évoluer dans un environnement stimulant, tout en recherchant un cadre qui valorise l'équilibre entre vie privée et vie professionnelle et qui permet mon épanouissement personnel et professionnel.",
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
