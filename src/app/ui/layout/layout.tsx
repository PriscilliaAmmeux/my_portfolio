import { switchThemeDuration } from "@/app/constants/switchThemeDuration";
import Footer from "@/app/ui/footer/footer";
import Navigation from "@/app/ui/navigation/navigation";
import { ppNeueMachina } from "../fonts";
import Logo from "../logo/logo";
import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className={`${ppNeueMachina.variable} flex flex-col min-h-screen bg-slate-50 bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white ${switchThemeDuration}`}>
      <div className="lg:hidden flex justify-center mt-4">
        <Logo width={100} height={60} />
      </div>

      <Navigation />
      {children}
      <Footer />
      <ScrollToTopButton />
    </section>
  );
}
