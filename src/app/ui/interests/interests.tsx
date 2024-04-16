import { ImPencil2 } from "react-icons/im";
import { FaWalking, FaPaintBrush } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

export default function Interests() {
  return (
    <section className="mt-8 pt-6 bg-blue-100 w-full p-6 shadow-lg">
      <div className="flex items-center justify-center mb-12">
        <FaHeart size={40} color="rgba(240, 50, 148, 0.8)" />
        <h1 className="ml-4 text-blue-800 text-2xl font-semibold">
          Centres d'intérêts
        </h1>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
        {" "}
        <Image
          className="pt-4 rotate-6"
          src="/montains.jpeg"
          alt="picture of montains"
          width={200}
          height={37}
          priority
        />
        <Image
          className="transform -rotate-6 pt-4"
          src="/writing.jpeg"
          alt="hand writing "
          width={200}
          height={37}
          priority
        />
        <Image
          className="pt-4 rotate-6"
          src="/paint.jpeg"
          alt="mum with children who are painting"
          width={200}
          height={37}
          priority
        />
      </div>
      <section className="mb-4 text-gray-700 pt-8">
        <div className="flex items-center ">
          <MdOutlineFestival />
          <p className="font-bold ml-2">
            Membre du Comité de Sélection - Dev Fest Lille 2024
          </p>
        </div>
        <p>
          Contribution à la sélection des discours pour l'événement en évaluant
          leur pertinence et leur qualité.
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
              Trésorière bénévole et membre actif du bureau d'une association de
              quartier
            </p>
          </div>
          <p>
            Organisation d'événements tels que Halloween, concours de la plus
            jolie maison décorée à Noël, chasse aux œufs de Pâques, fête des
            voisins
          </p>
        </section>
        <section className="ml-4 mb-4 text-gray-700">
          <div className="flex items-center">
            {" "}
            <BsArrowRight />
            <p className="font-bold ml-2">
              Secrétaire bénévole dans un syndicat de copropriété d'un
              lotissement de 64 lots (Résidence Olympiade à Quesnoy sur Deule)
            </p>
          </div>
          <p>
            Gestion de la copropriété, entretien des espaces verts,
            comptabilité, assurance, coordination avec la mairie sur divers
            sujets concernant l'entretien de la voirie et des espaces verts
          </p>
        </section>
      </section>
      <section className="mb-4 text-gray-700">
        <div className="flex items-center">
          <FaWalking />
          <p className="font-bold ml-2">
            Membre du club de marche “marcher par tous les temps” à Quesnoy Sur
            Deule
          </p>
        </div>
        <p>
          Participation à des marches de 5 à 6 kms le mardi soir, de 7 à 8 km le
          vendredi soir et de 10 à 15 km le dimanche matin
        </p>
      </section>
      <section className="mb-4 text-gray-700">
        <div className="flex items-center">
          <FaWalking />
          <p className="font-bold ml-2">Randonnées en famille</p>
        </div>
        <p>
          Randonnées en famille le dimanche après-midi, de 5 à 10 km, dans la
          région des Hauts de France et en Belgique
        </p>
      </section>
      <section className="mb-4 text-gray-700">
        <div className="flex items-center">
          <FaPaintBrush />
          <p className="font-bold ml-2">
            Activités manuelles avec mes enfants{" "}
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
          professionnel ou personnel
        </p>
      </section>
    </section>
  );
}
