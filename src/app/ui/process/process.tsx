import ItemList from "@/app/components/itemList/itemList";
import Title from "@/app/components/title/title";
import { IoIosSearch } from "react-icons/io";
import { FcOk } from "react-icons/fc";

const processContent = [
  "Analyse du besoins: Lors d'un premier rendez-vous gratuit, nous discuterons de vos objectifs, de vos besoins et de vos attentes.",
  "Devis gratuit: Après cette analyse initiale, je vous fournis un devis gratuit et sans engagement.",
  "Approche agile: Je travaille en méthode agile pour vous proposer des livrables réguliers et vous permettre de suivre l'avancement du projet. Cela permet également de s'adapter rapidement aux changements.",
];

export default function Process() {
  return (
    <article className="p-6 md:ml-20 md:mr-20">
      <Title text="Comment je procède ?" icon={IoIosSearch} />
      <ul className="flex flex-col space-y-4 font-medium">
        {processContent.map((content, index) => (
          <ItemList
            key={index}
            Icon={FcOk}
            text={<p className="leading-relaxed">{content}</p>}
          />
        ))}
      </ul>
    </article>
  );
}
