import { FaFacebook, FaLinkedin } from "react-icons/fa";
import ProfileLink from "../profileLink/profileLink";
import { SiMalt } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";

export default function Footer() {
  return (
    <footer className="bg-pink-100 dark:bg-gray-700 mt-10 w-full p-4 md:p-10 gap-5 md:gap-20 bottom-0 flex flex-col md:flex-row justify-around items-center">
      <section className="text-center">
        <p className="text-xs md:text-sm lg:text-base font-semibold">
          © {new Date().getFullYear()} Priscillia Ammeux. Tous droits réservés.
        </p>
        <p className="text-xs md:text-sm lg:text-base p-1">
          Créée avec amour ❤️ par Priscillia Ammeux
        </p>
        <a
          href="/legalNotices"
          className="hover:text-pink-700 hover:font-bold cursor-pointer">
          Mentions légales
        </a>
      </section>

      <section className="flex justify-between space-x-2">
        <ProfileLink
          href="https://www.linkedin.com/in/priscillia-ammeux/"
          ariaLabel="Link to LinkedIn profile"
          Icon={FaLinkedin}
          size={20}
        />
        <ProfileLink
          href="https://www.malt.fr/profile/priscilliaammeux1"
          ariaLabel="Link to malt profile"
          Icon={SiMalt}
          size={50}
        />
        <ProfileLink
          href="https://www.facebook.com/priscillia.selva/?locale=fr_FR"
          ariaLabel="Link to Facebook profile"
          Icon={FaFacebook}
          size={20}
        />
        <ProfileLink
          href="https://www.instagram.com/priscillia_ammeux/"
          ariaLabel="Link to Facebook profile"
          Icon={BsInstagram}
          size={20}
        />
      </section>
      <ScrollToTopButton />
    </footer>
  );
}
