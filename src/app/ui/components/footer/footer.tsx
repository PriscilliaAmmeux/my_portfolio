import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center pt-10 pb-10">
      <p>
        © {new Date().getFullYear()} Priscillia Ammeux. Tous droits réservés.
      </p>
      <p>Créée avec amour ❤️ par Priscillia Ammeux</p>
    </footer>
  );
};

export default Footer;
