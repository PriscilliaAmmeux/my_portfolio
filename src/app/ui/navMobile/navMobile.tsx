"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCogs,
  FaRegNewspaper,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navigationItems = [
  { href: "/", label: "Accueil", icon: FaHome },
  { href: "/about", label: "À propos", icon: FaUser },
  { href: "/project", label: "Portfolio", icon: FaBriefcase },
  { href: "/prestations", label: "Mes offres", icon: FaCogs },
  { href: "/blog", label: "Actus", icon: FaRegNewspaper },
];

export default function NavMobile() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Bouton burger fixe */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 lg:hidden z-50 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors"
        aria-label="Toggle menu">
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* Menu coulissant */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl lg:hidden z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col pt-20 px-4">
          {navigationItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`flex items-center gap-4 py-4 px-4 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 hover:text-pink-600 dark:hover:text-pink-400"
                }`}>
                <Icon className="text-xl" />
                <span className="text-lg font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
