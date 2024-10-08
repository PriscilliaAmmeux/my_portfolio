import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";
import Card from "../../components/card/card";
import { MdContactPhone } from "react-icons/md";

export default function InfoContact() {
  return (
    <Card
      className="w-full sm:w-1/2"
      Icon={MdContactPhone}
      title="Informations de contact"
      color="bg-blue-100">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <FaUser />
          <p>Priscillia Ammeux</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <p>Hauts-de-France</p>
        </div>
        <div className="flex items-center space-x-2 cursor hover:text-pink-600">
          <FaEnvelope />
          <a href="mailto:priscillia.ammeux.pro@gmail.com">
            priscillia.ammeux.pro@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone />
          <p>06.66.92.41.01</p>
        </div>
      </div>
    </Card>
  );
}
