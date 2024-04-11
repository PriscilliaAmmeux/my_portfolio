import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import styles from "../../styles/variables.module.css";

export default function Me() {
  return (
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
          du développement web. Mariée et maman de deux merveilleux enfants âgés
          de 6 et 4 ans. J'ai 36 ans et habite dans le nord de la France.
        </p>
      </div>
    </article>
  );
}
