"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center justify-center">
      {/* Version avec icônes et labels */}
      <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400">
          <MdLightMode
            className={`w-4 h-4 ${
              !isDark ? "text-yellow-500" : "text-gray-400"
            }`}
          />
          <span className={!isDark ? "font-semibold text-gray-900" : ""}>
            Clair
          </span>
        </div>

        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="relative w-16 h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-purple-600 dark:to-pink-600 rounded-full shadow-inner transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 hover:scale-105"
          aria-label={`Passer au thème ${isDark ? "clair" : "sombre"}`}>
          {/* Dot/Switch */}
          <div
            className={`absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center ${
              isDark ? "translate-x-8" : "translate-x-0.5"
            }`}>
            {/* Icône dans le dot */}
            {isDark ? (
              <MdDarkMode className="w-4 h-4 text-purple-600" />
            ) : (
              <MdLightMode className="w-4 h-4 text-yellow-500" />
            )}
          </div>

          {/* Effet de glow */}
          <div
            className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
              isDark ? "bg-purple-400/20" : "bg-yellow-400/20"
            } ${isDark ? "opacity-100" : "opacity-0"}`}></div>
        </button>

        <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400">
          <MdDarkMode
            className={`w-4 h-4 ${
              isDark ? "text-purple-500" : "text-gray-400"
            }`}
          />
          <span className={isDark ? "font-semibold text-gray-100" : ""}>
            Sombre
          </span>
        </div>
      </div>
    </div>
  );
};
