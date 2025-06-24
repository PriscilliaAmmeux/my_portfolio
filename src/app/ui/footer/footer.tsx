import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";
import SocialNetwork from "../socialNetwork/socialNetwork";

export default function Footer() {
  return (
    <footer className="bg-pink-100 dark:bg-gray-700 mt-10 w-full p-4 md:p-10 gap-5 md:gap-20 bottom-0 flex flex-col  justify-around items-center">
      <section className="text-center mb-10 md:mb-0">
        <p className="text-xs md:text-sm lg:text-base font-semibold">
          © {new Date().getFullYear()} Priscillia Ammeux. Tous droits réservés.
        </p>
        <p className="text-xs md:text-sm lg:text-base p-1">
          Créée avec amour ❤️ par Priscillia Ammeux
        </p>
        <div className="flex justify-around">
          <a
            href="/legalNotices"
            className="hover:text-pink-700 hover:font-bold cursor-pointer ">
            Mentions légales
          </a>
          <a
            href="/privacy"
            className="hover:text-pink-700 hover:font-bold cursor-pointer">
            Politiques de confidentialité
          </a>
        </div>

        <SocialNetwork />
      </section>

      <ScrollToTopButton />
    </footer>
  );
}
