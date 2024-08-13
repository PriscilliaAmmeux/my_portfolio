import { FaLinkedin } from "react-icons/fa";
import ProfileLink from "../profileLink/profileLink";
import { SiMalt } from "react-icons/si";

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
        <div className="flex justify-center mt-2 md:mt-0 ">
          <a href="/ecoIndex.webp" download>
            <img
              className="cursor-pointer"
              src="/ecoIndex2.webp"
              alt="note"
              width="80"
              height="auto"
            />
          </a>
        </div>
      </section>

      <section className="text-center">
        <h3 className="underline font-semibold text-xs md:text-sm lg:text-base p-1">
          Mentions légales:{" "}
        </h3>
        <p className="text-xs md:text-sm lg:text-base">
          Siret de l'établissement: 92901000700011
        </p>
        <a
          href="/CGV_Priscillia_Ammeux.pdf"
          download
          aria-label="Cliquez ici pour télécharger les conditions générales de ventes"
          className="text-xs md:text-sm lg:text-base underline hover:text-pink-700 hover:font-bold p-1">
          Télécharger les CGV
        </a>
      </section>

      <section>
        <ProfileLink
          href="https://www.linkedin.com/in/priscillia-ammeux/"
          ariaLabel="Link to LinkedIn profile"
          Icon={FaLinkedin}
          size={20}>
          Mon profil LinkedIn
        </ProfileLink>
        <ProfileLink
          href="https://www.malt.fr/profile/priscilliaammeux1"
          ariaLabel="Link to malt profile"
          Icon={SiMalt}
          size={50}>
          Mon Profil Malt
        </ProfileLink>
      </section>
    </footer>
  );
}
