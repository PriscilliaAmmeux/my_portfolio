import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";
import SocialNetwork from "../socialNetwork/socialNetwork";
import Logo from "../logo/logo";
import Image from "next/image";
import { ThemeProvider } from "../themeProvider/themeProvider";
import { ToggleButton } from "@/app/components/toggleButton/toggleButton";

export default function Footer() {
  return (
    <footer className="bg-[#be185d] text-white w-full px-6 py-10 md:px-16 flex flex-col gap-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-32 md:w-40">
          <Image
            src="/Logo-blanc.webp"
            alt="logo d'entreprise (Priscillia AMMEUX)"
            aria-label="logo d'entreprise (Priscillia AMMEUX)"
            className="block"
            width={150}
            height={150}
          />
        </div>

        <nav className="flex flex-col md:flex-row text-left gap-6 md:gap-20 text-sm md:text-base">
          <div className="flex flex-col gap-2">
            <a href="/about" className="hover:underline">
              À Propos
            </a>
            <a href="/project" className="hover:underline">
              Portfolio
            </a>
            <a href="/prestations" className="hover:underline">
              Services
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/legalNotices" className="hover:underline">
              Mentions légales
            </a>
            <a href="/privacy" className="hover:underline">
              Politiques de confidentialité
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
          <SocialNetwork />
        </nav>

        <div className="w-32 md:w-40 h-32 md:h-40 relative">
          <Image
            src="/Grille blanche.webp"
            alt="Grille de fond"
            className="absolute inset-0"
            width={150}
            height={150}
          />
          <Image
            src="/icon-footer.webp"
            alt="Avatar pixelisé de Priscillia Ammeux"
            className="absolute inset-0 z-10"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="border-t border-white/30 pt-6 text-center text-xs md:text-sm flex flex-col gap-2 items-center">
        <p className="font-semibold">
          © {new Date().getFullYear()} Priscillia Ammeux. Tous droits réservés.
        </p>
        <p>Site développé & designé par moi-même</p>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToggleButton />
        </ThemeProvider>
        <ScrollToTopButton />
      </div>
    </footer>
  );
}
