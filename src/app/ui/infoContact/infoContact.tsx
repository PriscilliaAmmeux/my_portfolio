import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

export default function InfoContact() {
  return (
    <section className="flex flex-col space-y-2 p-4 border border-gray-300 rounded shadow">
      <h1 className="text-xl font-bold">Informations de contact</h1>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <FaUser />
          <p>Priscillia Ammeux</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <p>Quesnoy-sur-Deûle</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <p>priscillia.ammeux.pro@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone />
          <p>06.66.92.41.01</p>
        </div>
      </div>
    </section>
  );
}
