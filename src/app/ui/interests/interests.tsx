import { ImPencil2 } from "react-icons/im";
import { FaWalking, FaPaintBrush } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";
import { RiKakaoTalkLine, RiTeamLine } from "react-icons/ri";
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
        <h2 className="ml-4 text-blue-800 text-2xl font-semibold">
          Centres d'intérêts
        </h2>
      </section>
      <section className="relative flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 pb-6">
        <ImageList images={images} />;
      </section>

      <InterestSection
        Icon={RiKakaoTalkLine}
        title="Talk: Comment lutter contre le syndrome de l'imposteur"
        description="J'ai donné ce talk le 20 septembre 2024 à Zenika Lille avec les ChtiteDev. Vous pouvez également retrouver l'article au complet dans l'onglet Blog."
        link="https://www.linkedin.com/feed/update/urn:li:activity:7243861708853641216/"
      />
      <InterestSection
        Icon={MdOutlineFestival}
        title="Membre du Comité de Sélection - Dev Fest Lille 2024"
        description=""
      />

      <InterestSection
        Icon={RiTeamLine}
        title=" Bénévolats et engagements associatifs"
        description=""
      />
      <section className="ml-4 text-gray-700">
        <InterestSection
          Icon={BsArrowRight}
          title="Association de quartier(Bénévole)"
          description=""
        />

        <InterestSection
          Icon={BsArrowRight}
          title="Secrétaire bénévole dans un syndicat de copropriété"
          description=""
        />
      </section>

      <InterestSection
        Icon={FaWalking}
        title="Membre du club de marche “marcher par tous les temps” à Quesnoy Sur Deule"
        description=""
      />

      <InterestSection
        Icon={FaWalking}
        title="Randonnées en famille"
        description=""
      />

      <InterestSection
        Icon={FaPaintBrush}
        title="Activités manuelles avec mes enfants"
        description=""
      />

      <InterestSection
        Icon={ImPencil2}
        title="Écriture et communication"
        description=""
      />
    </article>
  );
}
