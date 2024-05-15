"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "../components/navlink/navlink";
import styles from "../../styles/burger.module.css";
import { useState } from "react";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-end items-center">
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="mr-2" /> : <FaBars className="mr-2" />}
        </button>
      </div>

      <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
        <NavLink
          className={`${isOpen ? "ml-8" : ""}`}
          href="/"
          title="Accueil"
        />
        <NavLink
          className={`${isOpen ? "ml-4" : ""}`}
          href="/about"
          title="Moi"
        />
        <NavLink
          className={`${isOpen ? "ml-4" : ""}`}
          href="/project"
          title="Mes projets"
        />
        <NavLink
          className={`${isOpen ? "ml-4" : ""}`}
          href="/blog"
          title="Mon blog"
        />
        <NavLink
          className={`${isOpen ? "ml-4" : ""}`}
          href="/contact"
          title="Contact"
        />
      </div>
    </div>
  );
}
