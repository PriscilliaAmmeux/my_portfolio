"use client";

import { FaBars, FaFacebook, FaLinkedin, FaTimes } from "react-icons/fa";
import NavLink from "../../components/navlink/navlink";
import styles from "../../styles/burger.module.css";
import { useState, useEffect } from "react";
import Logo from "../logo/logo";
import ProfileLink from "../profileLink/profileLink";
import { BsInstagram } from "react-icons/bs";
import { SiMalt } from "react-icons/si";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleCloseMenu);
    } else {
      document.removeEventListener("click", handleCloseMenu);
    }

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [isOpen]);

  return (
    <section
      style={{
        height: isOpen ? "100vh" : "auto",
      }}
      onClick={(e) => e.stopPropagation()}
      // Prevent closing when clicking inside the menu
    >
      <div className="flex justify-between items-center mt-2">
        <span className="ml-2">
          <Logo width={50} height={50} />
        </span>
        <div className="flex flex-col items-center ">
          <h2 className="text-2xl font-bold">Priscillia AMMEUX</h2>
        </div>

        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isOpen ? <FaTimes className="mr-6" /> : <FaBars className="mr-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          className={`${styles.burgerMenu} ${
            isOpen ? styles.open : ""
          } flex flex-col items-center justify-start `}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <NavLink
            href="/"
            title="Accueil"
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

          <span className="flex items-center mt-5 mb-5">
            <ProfileLink
              href="https://www.linkedin.com/in/priscillia-ammeux/"
              ariaLabel="Link to LinkedIn profile"
              Icon={FaLinkedin}
              size={20}
            />
            <ProfileLink
              href="https://www.malt.fr/profile/priscilliaammeux1"
              ariaLabel="Link to malt profile"
              Icon={SiMalt}
              size={50}
            />
            <ProfileLink
              href="https://www.facebook.com/priscillia.selva/?locale=fr_FR"
              ariaLabel="Link to Facebook profile"
              Icon={FaFacebook}
              size={20}
            />
            <ProfileLink
              href="https://www.instagram.com/priscillia_ammeux/"
              ariaLabel="Link to Facebook profile"
              Icon={BsInstagram}
              size={20}
            />
          </span>

          <NavLink
            href="https://cvdesignr.com/p/65957cf24ea70"
            title="Télécharger mon CV"
            onClick={handleCloseMenu}
            isActive={true}
          />
        </nav>
      )}
    </section>
  );
}
