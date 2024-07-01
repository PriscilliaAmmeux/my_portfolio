import { ImPencil2 } from "react-icons/im";
import { FaWalking, FaPaintBrush } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import ImageList from "../../components/imageList/imageList";
import InterestSection from "../interestSection/interestSection";

const images = [
  {
    src: "/montains.webp",
    alt: "picture of montains",
    hideOnSmallScreen: true,
  },
  { src: "/writing.webp", alt: "hand writing", hideOnSmallScreen: true },
  {
    src: "/paint.webp",
    alt: "mum with children who are painting",
    hideOnSmallScreen: true,
  },
];

const randomIndex = Math.floor(Math.random() * images.length);
images[randomIndex].hideOnSmallScreen = false;

export default function Interests() {
  return (
    <article className="mt-8 pt-4 bg-blue-100 w-full p-6 shadow-lg">
      <section className="flex items-center justify-center mb-6">
        <FaHeart size={40} color="#be185d" />
        <h1 className="ml-4 text-blue-800 text-2xl font-semibold">
          Centres d'intérêts
        </h1>
      </section>
      <section className="relative flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 pb-6">
        <ImageList images={images} />;
      </section>

      <InterestSection
        Icon={MdOutlineFestival}
        title="Membre du Comité de Sélection - Dev Fest Lille 2024"
        description="Contribution à la sélection des discours pour l'événement en évaluant leur pertinence et leur qualité."
      />

      <InterestSection
        Icon={RiTeamLine}
        title=" Bénévolats et engagements associatifs"
        description=""
      />
      <section className="ml-4 text-gray-700">
        <InterestSection
          Icon={BsArrowRight}
          title="Trésorière bénévole et membre actif du bureau d'une association de quartier"
          description="Organisation d'événements tels que Halloween, concours de la plus jolie maison décorée à Noël, châsse aux œufs de Pâques, fête des voisins."
        />

        <InterestSection
          Icon={BsArrowRight}
          title="Secrétaire bénévole dans un syndicat de copropriété"
          description="Gestion de la copropriété, entretien des espaces verts, comptabilité, assurance, coordination avec la mairie sur divers sujets concernant l'entretien de la voirie et des espaces verts."
        />
      </section>

      <InterestSection
        Icon={FaWalking}
        title="Membre du club de marche “marcher par tous les temps” à Quesnoy Sur Deule"
        description="Participation à des marches de 5 à 6 kms le mardi soir, de 7 à 8 km le vendredi soir et de 10 à 15 km le dimanche matin."
      />

      <InterestSection
        Icon={FaWalking}
        title="Randonnées en famille"
        description="Randonnées en famille le dimanche après-midi, dans la région des Hauts de France et en Belgique."
      />

      <InterestSection
        Icon={FaPaintBrush}
        title="Activités manuelles avec mes enfants"
        description={
          <>
            Page Instagram{" "}
            <span className="hover:font-bold hover:text-pink-700 cursor-pointer">
              “Se salir les doigts”
            </span>{" "}
            depuis mars 2022.
            <a
              href="https://www.instagram.com/se_salir_les_doigts?igsh=MWc2emg1MDZhNzNhbw=="
              target="_blank"
              rel="noopener noreferrer"></a>
          </>
        }
      />

      <InterestSection
        Icon={ImPencil2}
        title="Écriture et communication"
        description="J'apprécie écrire et communiquer, que ce soit dans un contexte professionnel ou personnel."
      />
    </article>
  );
}
