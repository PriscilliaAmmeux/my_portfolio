import NavLink from "../../components/navlink/navlink";
import Logo from "../logo/logo";

export default function Navbar() {
  return (
    <section className="bg-pink-100 dark:bg-gray-700 w-full grid lg:max-w-none lg:w-full lg:mb-0 lg:grid-cols-7 lg:text-center items-center">
      <Logo width={100} height={100} />
      <NavLink href="/" title="Accueil" isActive={true} />
      <NavLink href="/about" title="Moi" isActive={true} />
      <NavLink href="/project" title="Mes projets" isActive={true} />
      <NavLink href="/prestations" title="Prestations" isActive={true} />
      <NavLink href="/blog" title="Mon blog" isActive={true} />
      <NavLink href="/contact" title="Contact" isActive={true} />
    </section>
  );
}
