"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCogs,
  FaRegNewspaper,
  FaEnvelope,
} from "react-icons/fa";

const navigationItems = [
  { href: "/", label: "Accueil", icon: FaHome },
  { href: "/about", label: "À propos", icon: FaUser },
  { href: "/project", label: "Portfolio", icon: FaBriefcase },
  { href: "/prestations", label: "Services", icon: FaCogs },
  { href: "/blog", label: "Actus", icon: FaRegNewspaper },
  { href: "/contact", label: "Contact", icon: FaEnvelope },
];

export default function NavMobile() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 lg:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navigationItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center py-2 px-3 transition-colors duration-200 ${
                isActive
                  ? "text-pink-600 dark:text-pink-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
              }`}>
              <Icon className="text-lg mb-1" />
              <span className="text-xs font-medium text-center">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
