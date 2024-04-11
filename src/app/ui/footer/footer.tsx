import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 ">
      <p>
        © {new Date().getFullYear()} Priscillia Ammeux. All rights reserved.
      </p>
      <p>Créée avec amour ❤️ par Priscillia Ammeux</p>
    </footer>
  );
};

export default Footer;
