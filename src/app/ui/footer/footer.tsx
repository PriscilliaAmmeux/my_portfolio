import ScrollToTopButton from "@/app/components/scrollToTopButton/scrollToTopButton";
import SocialNetwork from "../socialNetwork/socialNetwork";
import Image from "next/image";
import { ThemeProvider } from "../themeProvider/themeProvider";
import { ToggleButton } from "@/app/components/toggleButton/toggleButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#be185d] text-white w-full px-6 py-10 md:px-16 flex flex-col gap-10 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <Link
          href="/"
          aria-label="Accueil"
          className="inline-block cursor-pointer">
          <div className="w-32 md:w-40">
            <Image
              src="/Logo-blanc.webp"
              alt="logo d'entreprise (Pixelia&Co)"
              aria-label="logo d'entreprise (Pixelia&Co)"
              className="block"
              width={150}
              height={150}
            />
          </div>
        </Link>

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
            <a
              href="/CGV_Priscillia_Ammeux.pdf"
              download
              aria-label="Cliquez ici pour télécharger les conditions générales de ventes"
              className="hover:underline">
              Conditions générales de vente
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
            alt="Avatar pixelisé de Priscillia Ammeux de chez Pixelia&Co"
            className="absolute inset-0 z-10"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className="border-t border-white/30 pt-6 text-center text-xs md:text-sm flex flex-col gap-4 items-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToggleButton />
          </ThemeProvider>
          <ScrollToTopButton />
        </div>

        <div className="flex flex-col gap-2 items-center">
          <p className="font-semibold">
            © {new Date().getFullYear()} Pixelia&Co - Tous droits réservés
          </p>
          <p>Site développé & designé par Pixelia&Co</p>
        </div>
      </div>
    </footer>
  );
}
