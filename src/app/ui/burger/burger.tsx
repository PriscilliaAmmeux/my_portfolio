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
  return (
    <section>
      <div className="flex justify-end items-center">
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
        <NavLink href="/" title="Accueil" />
        <NavLink href="/about" title="Moi" />
        <NavLink href="/project" title="Mes projets" />
        <NavLink href="/prestations" title="Prestations" />
        <NavLink href="/blog" title="Mon blog" />
        <NavLink href="/contact" title="Contact" />
        <NavLink href="/CV_Priscillia_Ammeux.pdf" title="Télécharger mon CV" />
        <NavLink
          href="/CV_Priscillia_Ammeux_Alternance.pdf"
          title="Télécharger mon CV alternance"
        />
      </div>
    </section>
  );
}
