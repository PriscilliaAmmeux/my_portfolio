import { switchThemeDuration } from "@/app/constants/switchThemeDuration";
import { inter } from "../../ui/fonts";
import { ThemeProvider } from "../../ui/themeProvider/themeProvider";
import { ThemeSwitcher } from "../toggleButton/toggleButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} flex flex-col min-h-screen bg-slate-50 bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white ${switchThemeDuration}`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeSwitcher />
        {children}
      </ThemeProvider>
    </div>
  );
}
