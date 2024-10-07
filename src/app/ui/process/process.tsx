import ItemList from "@/app/components/itemList/itemList";
import Title from "@/app/ui/title/title";
import { IoIosSearch } from "react-icons/io";

const processContent = [
  {
    title: "Analyse des besoins: ",
    content:
      "Lors d'un premier rendez-vous gratuit, nous discutons de vos objectifs, déterminons vos besoins et précisons vos attentes.",
  },
  {
    title: "Devis gratuit: ",
    content:
      "Après cette analyse initiale, je fournis un devis gratuit et sans engagement.",
  },
  {
    title: "Approche agile: ",
    content:
      "Je travaille en méthode agile pour proposer des livrables réguliers et permettre de suivre l'avancement du projet. Cela permet également de s'adapter rapidement aux changements.",
  },
  {
    title: "Sites écoresponsables: ",
    content:
      "Je m'engage à optimiser l'efficacité énergétique de chaque site, en minimisant l'empreinte carbone grâce à des techniques de développement durable et des hébergements verts.",
  },
  {
    title: "Accessibilité: ",
    content:
      "Je veille à ce que chaque site soit accessible aux personnes en situation de handicap, en suivant les meilleures pratiques en matière d'accessibilité web. Mon objectif est de fournir une expérience utilisateur inclusive pour tous.",
  },
];

export default function Process() {
  return (
    <article className="p-6 md:ml-20 md:mr-20">
      <Title text="Comment je procède pour votre projet web ?" icon={IoIosSearch} />
      <ul className="flex flex-col space-y-4 font-medium">
        {processContent.map((item, index) => (
          <ItemList
            key={index}
            text={
              <section>
                <h3 className="font-bold">{item.title}</h3>
                <p className="leading-relaxed">{item.content}</p>
              </section>
            }
          />
        ))}
      </ul>
    </article>
  );
}
