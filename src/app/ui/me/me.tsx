import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import styles from "../../styles/variables.module.css";

export default function Me() {
  return (
    <section className="flex items-center mb-4 bg-gray-800 text-white pt-4 mx-auto mx-8">
      <div className="flex items-center">
        <GiLadybug size={60} className={styles.iconColor} />{" "}
        <h1 className=" flex items-center justify center text-white text-4xl font-semibold mb-4 ml-4 whitespace-nowrap">
          Qui suis je ?
        </h1>
      </div>
      <Image
        className="rounded-lg ml-8 mr-4"
        src="/me2.jpg"
        alt="picture of me"
        width={150}
        height={150}
        priority
      />
      <div className="text-white ml-5">
        <p className="mb-2">
          Je m'appelle Priscillia, une exploratrice passionnée du monde du
          développement web.
        </p>
        <p className="mb-2">
          Mariée et maman de deux merveilleux enfants âgés de 6 et 4 ans.
        </p>
        <p className="mb-2">
          J'ai 36 ans et j'habite dans le nord de la France.
        </p>
      </div>
    </section>
  );
}
