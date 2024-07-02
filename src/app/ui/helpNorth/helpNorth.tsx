import { TfiHelpAlt } from "react-icons/tfi";
import Button from "@/app/components/button/button";
import Card from "@/app/components/card/card";

export default function HelpNorth() {
  return (
    <section className="mt-5">
      <Card
        Icon={TfiHelpAlt}
        title={"Aides financières"}
        color="bg-blue-100"
        button={{
          href: "https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/quelles-sont-les-aides-financieres-pour-la-6",
          text: "En savoir plus",
          ariaLabel:
            "Cliquez ici afin d'en savoir plus et d'aller sur le site internet du gouvernement Français",
        }}>
        <p className="italic text-2xl mb-4">
          Savez vous que vous pouvez bénéficier d'aides financières pour la
          numérisation de votre entreprise en région Hauts-de-France ?
        </p>
        <h2 className="text-pink-700 font-bold mb-2">
          Il s'agit de l'aide à la Digitalisation des Entreprises:
        </h2>
        <ul className="list-disc ml-10">
          <li className="mb-2">
            La subvention à l'investissement soutient financièrement les TPE qui
            souhaitent investir dans un projet de transformation numérique de
            leur activité.
          </li>
          <li>
            Elle prend en charge 40 % des investissements éligibles HT avec un
            minimum d'investissement fixé à 3 000 € et un maximum à 30 000 €,
            soit une aide régionale comprise entre 1 200 € et 12 000 € ou 20 %
            des investissements éligibles HT lorsque les dépenses
            d'investissements présentées seront supérieures à 30 000 € et un
            maximum à 50 000 €.
          </li>
        </ul>
      </Card>
    </section>
  );
}
