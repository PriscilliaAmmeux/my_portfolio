import NavLink from "../../components/navlink/navlink";
import Logo from "../logo/logo";

export default function NavbarHome() {
  return (
    <section className="bg-pink-100 dark:bg-gray-700 w-full grid lg:max-w-none lg:w-full lg:mb-0 lg:grid-cols-7 lg:text-center items-center">
      <Logo width={100} />
      <NavLink href="/" title="Accueil" />
      <NavLink href="/about" title="Moi"></NavLink>
      <NavLink href="/project" title="Mes projets"></NavLink>
      <NavLink href="/prestations" title="Prestations"></NavLink>
      <NavLink href="/blog" title="Mon blog"></NavLink>
      <NavLink href="/contact" title="Contact"></NavLink>
    </section>
  );
}
