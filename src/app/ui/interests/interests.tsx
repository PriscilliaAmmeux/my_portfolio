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
        title="Meet-up : Les Femmes dans la Tech – S’inspirer, se soutenir, réussir !"
        description="Je suis ravie de vous retrouver pour mon deuxième talk et cette fois-ci, entourée de plusieurs femmes incroyables dans la tech ! Quand ? Le 21 novembre 2024. En collaboration avec Polarity Association et Chtitedev, organisé par CBTW ! Rejoignez-nous pour une soirée d’échanges inspirants et de partage d’expériences, où nous aborderons ensemble les défis et réussites des femmes dans ce secteur !"
        link="https://www.linkedin.com/feed/update/urn:li:activity:7260230099902296066/"
      />

      <InterestSection
        Icon={RiKakaoTalkLine}
        title="Talk: Comment lutter contre le syndrome de l'imposteur"
        description="J'ai donné ce talk le 20 septembre 2024 à Zenika Lille avec les ChtiteDev. Vous pouvez également retrouver l'article au complet dans l'onglet Blog:"
        link="/blog"
      />

      <InterestSection
        Icon={MdOutlineFestival}
        title="Membre du Comité de Sélection - Dev Fest Lille 2024"
      />

      <InterestSection
        Icon={RiTeamLine}
        title=" Bénévolats et engagements associatifs"
      />
      <section className="ml-4 text-gray-700">
        <InterestSection
          Icon={BsArrowRight}
          title="Association de quartier(Bénévole)"
        />

        <InterestSection
          Icon={BsArrowRight}
          title="Secrétaire bénévole dans un syndicat de copropriété"
        />
      </section>

      <InterestSection
        Icon={FaWalking}
        title="Membre du club de marche “marcher par tous les temps” à Quesnoy Sur Deule"
      />

      <InterestSection Icon={FaWalking} title="Randonnées en famille" />

      <InterestSection
        Icon={FaPaintBrush}
        title="Activités manuelles avec mes enfants"
      />

      <InterestSection Icon={ImPencil2} title="Écriture et communication" />
    </article>
  );
}
