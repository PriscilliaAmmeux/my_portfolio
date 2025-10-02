import { FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Card from "../../components/card/card";

export default function InfoContact() {
  return (
    <Card className="w-full sm:w-2/3 lg:w-1/2" title="Informations de contact">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <FaUser />
          <p>Priscillia Ammeux</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <p>Hauts-de-France</p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:underline flex-nowrap">
          <FaEnvelope />
          <a
            href="mailto:contact@pixelia-and-co.fr"
            className="whitespace-nowrap">
            contact@pixelia-and-co.fr
          </a>
        </div>
      </div>
    </Card>
  );
}
