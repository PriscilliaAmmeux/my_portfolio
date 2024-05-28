"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "../../styles/toggleButton.module.css";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex items-center justify-start pt-2 pl-2">
      <span className="mr-2">Light</span>
      <label
        htmlFor="theme-switch"
        className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933] cursor-pointer`}
        title="Switch between light and dark mode">
        <div className="relative">
          <input
            id="theme-switch"
            type="checkbox"
            className="sr-only"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

          <div
            className={`${styles.dot} absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition`}></div>
        </div>
      </label>
      <span className="ml-2">Dark</span>
    </div>
  );
};
