import { GiLadybug } from "react-icons/gi";
import Image from "next/image";
import Title from "../../components/title/title";

export default function Me() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center mb-4 pt-4 mx-auto px-4 sm:px-8">
      <Title text="Qui suis je ?" icon={GiLadybug} />
      <Image
        className="ml-8 mr-4"
        src="/profil.png"
        alt="picture of me"
        width={150}
        height={150}
        priority
      />
      <div className="ml-5 mt-4 sm:mt-0">
        <p className="mb-2">
          Je m'appelle Priscillia, une exploratrice passionnée du monde du
          développement web.
        </p>
        <p className="mb-2">
          Mariée et maman de deux merveilleux enfants âgés de 6 et 4 ans.
        </p>
        <p className="mb-2">
          J'ai 37 ans et j'habite dans le nord de la France.
        </p>
      </div>
    </section>
  );
}
