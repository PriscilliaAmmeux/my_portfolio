import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { LiaHandPaper } from "react-icons/lia";
import Footer from "../footer/footer";
import NavbarHome from "../navBarHome/navBarHome";
import { ThemeProvider } from "../themeProvider/themeProvider";
import { ToggleButton } from "@/app/components/toggleButton/toggleButton";
import { SiMalt } from "react-icons/si";
import ProfileLink from "../profileLink/profileLink";

export default function HomePage() {
  return (
    <main className="bg-pink-100 dark:bg-gray-700 text-gray-700 dark:text-white">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex justify-around">
          <ToggleButton />
        </div>
      </ThemeProvider>
      <section className="flex flex-col mt-10 mb-10 justify-between items-center z-10 max-w-5xl mx-auto w-full font-mono text-sm lg:flex-row">
        <p className="flex items-center justify-center gap-2 mt-10 lg:mt-0 lg:static lg:h-auto lg:w-auto">
          <LiaHandPaper className="text-pink-700 hover:text-pink-700 transition-colors duration-300" />
          Bienvenue !
        </p>

        <ProfileLink
          href="https://www.linkedin.com/in/priscillia-ammeux/"
          ariaLabel="Link to LinkedIn profile"
          Icon={FaLinkedin}>
          Mon profil LinkedIn
        </ProfileLink>
        <ProfileLink
          href="https://www.malt.fr/profile/priscilliaammeux1"
          ariaLabel="Link to malt profile"
          Icon={SiMalt}>
          Mon Profil Malt
        </ProfileLink>
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
