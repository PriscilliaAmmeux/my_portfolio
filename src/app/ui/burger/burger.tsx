"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "../../components/navlink/navlink";
import styles from "../../styles/burger.module.css";
import { useState } from "react";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <section>
      <div className="flex items-center pt-4 pb-4">
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="ml-6" /> : <FaBars className="ml-6" />}
        </button>
      </div>

      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
        <NavLink
          href="/"
          title="Accueil"
          onClick={handleCloseMenu}
          isActive={true}
        />
        <NavLink
          href="/about"
          title="Moi"
          onClick={handleCloseMenu}
          isActive={true}
        />
        <NavLink
          href="/project"
          title="Mes projets"
          onClick={handleCloseMenu}
          isActive={true}
        />
        <NavLink
          href="/prestations"
          title="Prestations"
          onClick={handleCloseMenu}
          isActive={true}
        />
        <NavLink
          href="/blog"
          title="Mon blog"
          onClick={handleCloseMenu}
          isActive={true}
        />
        <NavLink
          href="/contact"
          title="Contact"
          onClick={handleCloseMenu}
          isActive={true}
        />
        <NavLink
          href="/CV_Priscillia_Ammeux.pdf"
          title="Télécharger mon CV"
          onClick={handleCloseMenu}
          isActive={true}
        />
      </div>
    </section>
  );
}
