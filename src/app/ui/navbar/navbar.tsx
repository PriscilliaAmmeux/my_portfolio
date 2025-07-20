import NavLink from "../../components/navlink/navlink";
import Logo from "../logo/logo";

export default function Navbar() {
  return (
    <section className="flex justify-between items-start w-full pt-6 pl-6">
      <Logo width={125} height={125} />

      <div className="relative transform -rotate-2 border-l border-t border-b border-white rounded-tl-[0rem] rounded-bl-[2.5rem] pl-4 pt-4 pb-4">
        <div className="absolute inset-0 pointer-events-none z-0"></div>

        {/* Navigation */}
        <nav className="relative z-10 grid grid-cols-6 gap-6 text-white font-medium text-lg tracking-wide">
          <NavLink href="/" title="Accueil" isActive={true} />
          <NavLink href="/about" title="À propos" isActive={true} />
          <NavLink href="/project" title="Portfolio" isActive={true} />
          <NavLink href="/prestations" title="Services" isActive={true} />
          <NavLink href="/blog" title="Blog" isActive={true} />
          <NavLink href="/contact" title="Contact" isActive={true} />
        </nav>
      </div>
    </section>
  );
}
