import { FaHandsHelping } from "react-icons/fa";
import Bubble from "../bubble/bubble";

export default function HelpNorth() {
  return (
    <section className="mt-5">
      <Bubble
        Icon={FaHandsHelping}
        title={"Aides financières"}
        button={{
          href: "https://www.francenum.gouv.fr/aides-financieres/guides-et-conseils-financiers/quelles-sont-les-aides-financieres-pour-la-6",
          text: "En savoir plus",
          ariaLabel:
            "Cliquez ici afin d'en savoir plus et d'aller sur le site internet du gouvernement Français",
        }}>
        <p>
          Vous pouvez bénéficier d'une aide à la Digitalisation des Entreprises
          dans les Hauts-de-France.
        </p>
      </Bubble>
    </section>
  );
}
