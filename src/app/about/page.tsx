import { Metadata } from "next";
import { ImPencil2 } from "react-icons/im";
import { FaWalking, FaPaintBrush, FaReact, FaGithub } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { GiLadybug, GiDirectionSigns } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { GrCertificate } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaHeadSideVirus,
  FaHeart,
  FaJava,
  FaNodeJs,
  FaVuejs,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillCaretRight } from "react-icons/ai";

import Navbar from "../ui/navbar/navbar";
import Image from "next/image";
import styles from "../styles/variables.module.css";
import { SiFlutter, SiMysql, SiPostgresql } from "react-icons/si";

export const metadata: Metadata = {
  title: "À propos de moi - Priscillia Ammeux",
};

export default function About() {
  return (
    <main className="p-6">
      <Navbar showParagraph={false} />

      <h1 className="text-3xl font-bold mb-4 ml-4">
        Un petit peu, beaucoup de moi !
      </h1>

      <article className="mb-4 bg-blue-100 p-6 rounded-md shadow-lg max-w-md mx-auto">
        <div className="flex items-center justify-center mb-4">
          <GiLadybug size={40} className={styles.iconColor} />{" "}
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold ">
            Qui suis je ?
          </h2>
        </div>
        <div className="flex items-center">
          <Image
            className="rounded-full"
            src="/picture2.jpg"
            alt="Next.js Logo"
            width={150}
            height={37}
            priority
          />
          <p className="text-gray-700 ml-5">
            Je m'appelle Priscillia Ammeux, une exploratrice passionnée du monde
            du développement web. Mariée et maman de deux merveilleux enfants
            âgés de 6 et 4 ans. J'ai 36 ans et habite dans le nord de la France.
          </p>
        </div>
      </article>

      <article className="mb-4 bg-blue-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center mb-4">
          <FaHeadSideVirus size={40} className={styles.iconColor} />
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
            Mes compétences
          </h2>
        </div>

        <ul className="text-gray-700 list-disc ml-5">
          <li className="flex items-center pt-2">
            {" "}
            <AiOutlineArrowRight />
            Spécifier, concevoir et développer des logiciels ou applications web
          </li>
          <li className="flex items-center ml-10">
            Backend: <FaJava className="ml-2" /> Java,{" "}
            <BiLogoSpringBoot className="ml-2" />
            SpringBoot, <FaNodeJs className="ml-2" /> Nodejs
          </li>
          <li className="flex items-center ml-10">
            Frontend: <FaReact className="ml-2" /> React,{" "}
            <TbBrandNextjs className="ml-2" /> Nextjs,{" "}
            <FaVuejs className="ml-2" />
            Vue3, <SiFlutter className="ml-2" /> Flutter
          </li>
          <li className="flex items-center pt-2">
            {" "}
            <AiOutlineArrowRight />
            Concevoir, gérer et interroger des bases de données:{" "}
            <SiPostgresql className="ml-2" /> PostgreSQL,{" "}
            <SiMysql className="ml-2" /> MySQL
          </li>
          <li className="flex items-center pt-2">
            <AiOutlineArrowRight />
            Organiser et gérer des projets informatiques en équipe:{" "}
            <FaGithub className="ml-2" /> Git
          </li>

          <li className="flex items-center pt-2">
            <AiOutlineArrowRight />
            Conseiller et orienter le client dans son choix
          </li>
        </ul>
      </article>

      <article className="mb-4 bg-blue-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center mb-4">
          <MdWork size={40} className={styles.iconColor} />{" "}
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
            Mon parcours professionnel
          </h2>
        </div>
      </article>

      <article className="mb-4 bg-blue-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center mb-4">
          <GrCertificate size={40} className={styles.iconColor} />{" "}
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
            Mes diplômes
          </h2>
        </div>
      </article>

      <article className="mt-8 border-t border-gray-300 pt-6 bg-blue-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center mb-4">
          <GoRocket size={40} className={styles.iconColor} />{" "}
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Mes valeurs !
          </h2>
        </div>
        <p className="text-gray-700">
          Au-delà de ma passion pour le développement web, je suis avant tout
          une personne honnête et bienveillante. J'accorde une grande importance
          aux valeurs de l'intégrité, de la transparence et du respect dans
          toutes mes interactions professionnelles et personnelles.
        </p>
        <p className="text-gray-700">
          En tant que développeuse, je crois fermement à l'importance de créer
          des relations authentiques et de travailler dans un environnement où
          chacun se sent valorisé et respecté. Ma porte est toujours ouverte
          pour écouter, soutenir et collaborer avec mes collègues et partenaires
          de projet.
        </p>
        <p className="text-gray-700">
          En dehors du travail, je suis une personne engagée et curieuse qui
          aime explorer de nouveaux horizons. Dans ma section blog, je
          partagerai non seulement mes réflexions sur le développement web, mais
          aussi des anecdotes de ma vie quotidienne en tant que développeuse,
          des défis rencontrés et des leçons apprises.
        </p>
        <p className="text-gray-700">
          Je crois fermement que la véritable connexion humaine est au cœur de
          tout ce que nous faisons, et je m'efforce de refléter cette conviction
          dans chacune de mes interactions.
        </p>
        <p className="text-gray-700">
          L'accessibilité web est un sujet qui me tient particulièrement à cœur.
          Je suis toujours à la recherche de nouvelles façons d'améliorer
          l'accessibilité de mes projets et je suis preneuse de tous conseils à
          ce sujet.
        </p>
      </article>

      <article className="mt-8 border-t border-gray-300 pt-6 bg-blue-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center mb-4">
          <FaHeart size={40} color="rgba(240, 50, 148, 0.8)" />
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
            Centres d'intérêts
          </h2>
        </div>
        <section className="mb-4 text-gray-700">
          <div className="flex items-center ">
            <MdOutlineFestival />
            <p className="font-bold ml-2">
              Membre du Comité de Sélection - Dev Fest Lille 2024
            </p>
          </div>
          <p>
            Contribution à la sélection des discours pour l'événement en
            évaluant leur pertinence et leur qualité.
          </p>
        </section>
        <section className="mb-4 text-gray-700">
          <div className="flex items-center">
            <RiTeamLine />
            <p className="font-bold ml-2">
              Bénévolats et engagements associatifs
            </p>
          </div>
          <section className="ml-4 mb-4 text-gray-700">
            <div className="flex items-center">
              {" "}
              <BsArrowRight />
              <p className="font-bold ml-2">
                Trésorière bénévole et membre actif du bureau d'une association
                de quartier.
              </p>
            </div>
            <p>
              Organisation d'événements tels que Halloween, concours de la plus
              jolie maison décorée à Noël, chasse aux œufs de Pâques, fête des
              voisins.
            </p>
          </section>
          <section className="ml-4 mb-4 text-gray-700">
            <div className="flex items-center">
              {" "}
              <BsArrowRight />
              <p className="font-bold ml-2">
                Secrétaire bénévole dans un syndicat de copropriété d'un
                lotissement de 64 lots (Résidence Olympiade à Quesnoy sur
                Deule).
              </p>
            </div>
            <p>
              Gestion de la copropriété, entretien des espaces verts,
              comptabilité, assurance, coordination avec la mairie sur divers
              sujets concernant l'entretien de la voirie et des espaces verts.
            </p>
          </section>
        </section>
        <section className="mb-4 text-gray-700">
          <div className="flex items-center">
            <FaWalking />
            <p className="font-bold ml-2">
              Membre du club de marche “marcher par tous les temps” à Quesnoy
              Sur Deule.
            </p>
          </div>
          <p>
            Participation à des marches de 5 à 6 kms le mardi soir, de 7 à 8 km
            le vendredi soir et de 10 à 15 km le dimanche matin.
          </p>
        </section>
        <section className="mb-4 text-gray-700">
          <div className="flex items-center">
            <FaPaintBrush />
            <p className="font-bold ml-2">
              Activités manuelles avec mes enfants.{" "}
            </p>{" "}
          </div>
          <p>
            Page Instagram{" "}
            <a
              href="https://www.instagram.com/se_salir_les_doigts?igsh=MWc2emg1MDZhNzNhbw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline">
              "Se salir les doigts"
            </a>{" "}
            depuis mars 2022
          </p>
        </section>
        <section className="mb-4 text-gray-700">
          <div className="flex items-center">
            <ImPencil2 />
            <p className="font-bold ml-2">Écriture et communication</p>
          </div>
          <p>
            J'apprécie écrire et communiquer, que ce soit dans un contexte
            professionnel ou personnel.
          </p>
        </section>
      </article>

      <article className="mt-8 border-t border-gray-300 pt-6 bg-blue-100 p-6 rounded-md shadow-lg">
        <div className="flex items-center mb-4">
          <GiDirectionSigns size={40} className={styles.iconColor} />
          <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
            Mes objectifs
          </h2>
        </div>
        <ul className="flex justify-between text-gray-700">
          <li>Évolution</li>
          <li>Apprentissage</li>
          <li>Épanouissement</li>
          <li>Contribuer à des projets ambitieux et porteurs de sens</li>
        </ul>
      </article>
    </main>
  );
}
