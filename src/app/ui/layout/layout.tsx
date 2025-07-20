import { switchThemeDuration } from "@/app/constants/switchThemeDuration";
import Footer from "@/app/ui/footer/footer";
import Navigation from "@/app/ui/navigation/navigation";
import { ppNeueMachina } from "../fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={`${ppNeueMachina.variable} flex flex-col min-h-screen bg-slate-50 bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white ${switchThemeDuration}`}>
      <Navigation />
      {children}
      <Footer />
    </section>
  );
}
