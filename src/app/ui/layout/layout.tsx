import { switchThemeDuration } from "@/app/constants/switchThemeDuration";
import { inter } from "../fonts";
import { ThemeProvider } from "../themeProvider/themeProvider";
import { ToggleButton } from "../../components/toggleButton/toggleButton";
import Footer from "@/app/ui/footer/footer";
import Navigation from "@/app/ui/navigation/navigation";

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
