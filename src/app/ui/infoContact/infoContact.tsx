import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import Card from "../../components/card/card";
import { MdContactPhone } from "react-icons/md";

export default function InfoContact() {
  return (
    <Card className="w-full sm:w-1/2" title="Informations de contact">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <FaUser />
          <p>Priscillia Ammeux</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <p>Hauts-de-France</p>
        </div>
        <div className="flex items-center space-x-2 cursor hover:underline">
          <FaEnvelope />
          <a href="mailto:pixelia.and.co@gmail.com">pixelia.and.co@gmail.com</a>
        </div>
      </div>
    </Card>
  );
}
