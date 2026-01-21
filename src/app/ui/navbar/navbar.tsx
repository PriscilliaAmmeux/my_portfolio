import NavLink from "../../components/navlink/navlink";
import Logo from "../logo/logo";
import CalendlyWidget from "../calendlyWidget/calendlyWidget";

interface NavbarProps {
  forceWhiteText?: boolean;
}

export default function Navbar({ forceWhiteText = false }: NavbarProps) {
  return (
    <section className="flex justify-between items-start w-full pt-6 pl-6">
      <Logo width={125} height={125} />

      <div className="relative transform -rotate-2 border-l border-t border-b rounded-tl-[0rem] rounded-bl-[2.5rem] pl-4 pt-4 pb-4">
        <div className="absolute inset-0 pointer-events-none z-0"></div>

        {/* Navigation */}
        <nav className="relative z-10 flex flex-row items-center text-white font-medium text-lg tracking-wide gap-x-4">
          <NavLink
            href="/"
            title="Accueil"
            isActive={true}
            forceWhiteText={forceWhiteText}
          />
          <NavLink
            href="/about"
            title="À propos"
            isActive={true}
            forceWhiteText={forceWhiteText}
          />
          <NavLink
            href="/project"
            title="Portfolio"
            isActive={true}
            forceWhiteText={forceWhiteText}
          />
          <NavLink
            href="/prestations"
            title="Mes offres"
            isActive={true}
            forceWhiteText={forceWhiteText}
          />
          <NavLink
            href="/blog"
            title="Inspiration & Actus Web"
            isActive={true}
            forceWhiteText={forceWhiteText}
          />
          <CalendlyWidget />
        </nav>
      </div>
    </section>
  );
}
