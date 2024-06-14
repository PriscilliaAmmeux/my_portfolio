import Image from "next/image";
import { switchThemeDuration } from "@/app/constants/switchThemeDuration";
import { FaLinkedin } from "react-icons/fa";
import { LiaHandPaper } from "react-icons/lia";
import Footer from "../footer/footer";
import NavbarHome from "../navBarHome/navBarHome";
import { ThemeProvider } from "../themeProvider/themeProvider";
import { ToggleButton } from "@/app/components/toggleButton/toggleButton";

export default function HomePage() {
  return (
    <main className="bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex justify-around">
          <ToggleButton />
        </div>
      </ThemeProvider>
      <section className="flex flex-col mt-10 mb-10 justify-between items-center z-10 max-w-5xl mx-auto w-full font-mono text-sm lg:flex-row">
        <p className="flex items-center justify-center gap-2 mt-10 lg:mt-0 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <LiaHandPaper className="text-pink-700 hover:text-pink-700 transition-colors duration-300" />
          Bienvenue !
        </p>

        <div className="flex items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex items-center gap-2 p-8 lg:p-0 lg:pointer-events-auto"
            href="https://www.linkedin.com/in/priscillia-ammeux/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to LinkedIn profile">
            <FaLinkedin className="text-pink-700 hover:text-pink-700 transition-colors duration-300" />
            Par Priscillia Ammeux
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center ">
        <h1 className="text-2xl sm:text-4xl mb-10 text-center">
          Conceptrice et Développeuse d'Applications
        </h1>
        <Image
          className="rounded-full mb-10"
          src="/me.webp"
          alt="picture of me"
          width={90}
          height={18}
          priority
        />
      </section>
      <section className="flex justify-center">
        <NavbarHome showParagraph={true} />
      </section>
      <Footer />
    </main>
  );
}
