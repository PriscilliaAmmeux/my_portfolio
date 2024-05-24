import { switchThemeDuration } from "@/app/constants/switchThemeDuration";
import { inter } from "../../fonts";
import { ThemeProvider } from "../../themeProvider/themeProvider";
import { ThemeSwitcher } from "../toggleButton/toggleButton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} bg-slate-50 bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white ${switchThemeDuration}`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeSwitcher />
        {children}
      </ThemeProvider>
    </div>
  );
}
