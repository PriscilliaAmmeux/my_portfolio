import { GiDirectionSigns } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import Card from "../../components/card/card";
import ItemList from "../../components/itemList/itemList";

const objectives = [
  "Évolution.",
  "Apprentissage.",
  "Épanouissement.",
  "Contribuer à des projets ambitieux et porteurs de sens.",
  "Formation à l'accessibilité web.",
  "Equilibre vie professionnelle et vie personnelle.",
  "Partage de connaissances.",
  "CDI ou CDD longue durée pour plus de stabilité professionnelle.",
];

const values = [
  "Honnêteté, bienveillance, intégrité, transparence et respect.",
  "Inclusivité.",
  "Importance des relations authentiques.",
  "Conviction que la véritable connexion humaine est essentielle dans tout travail.",
  "Forte préoccupation pour l'accessibilité web et la recherche constante de moyens pour l'améliorer (ouverte à tout conseil).",
  "Développement durable respectueux de l'environnement tout en assurant des performances élevées.",
  "Énergique et engagée, je cherche à donner du sens à mes journées, quel que soit mon métier.",
];

export default function ValuesAndObjectives() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card Icon={GoRocket} title="Mes valeurs" color="bg-blue-100">
        <ul className="list-disc ml-5">
          {values.map((value, index) => (
            <ItemList
              key={index}
              text={<p className="leading-relaxed">{value}</p>}
            />
          ))}
        </ul>
      </Card>

      <Card Icon={GiDirectionSigns} title="Mes objectifs" color="bg-blue-100">
        <ul className="list-disc ml-5">
          {objectives.map((objective, index) => (
            <ItemList
              key={index}
              text={<p className="leading-relaxed">{objective}</p>}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
