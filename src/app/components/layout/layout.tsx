import { switchThemeDuration } from "@/app/constants/switchThemeDuration";
import { inter } from "../../ui/fonts";
import { ThemeProvider } from "../../ui/themeProvider/themeProvider";
import { ToggleButton } from "../toggleButton/toggleButton";

import Footer from "@/app/ui/footer/footer";
import Navigation from "@/app/ui/navigation/navigation";

export const metadata = {
  title: "Priscillia Ammeux - Conceptrice et Développeuse d'Applications",
  description:
    "Découvrez mon portfolio et mes services de développement freelance, alliant expertise technique et créativité pour réaliser vos projets digitaux.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={`${inter.className} flex flex-col min-h-screen bg-slate-50 bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white ${switchThemeDuration}`}>
      <Navigation />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex justify-around">
          <ToggleButton />
        </div>
        {children}
      </ThemeProvider>
      <Footer />
    </section>
  );
}
