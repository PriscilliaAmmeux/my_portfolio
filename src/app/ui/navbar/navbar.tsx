import NavLink from "../components/navlink/navlink";

export default function Navbar({ showParagraph }: { showParagraph: boolean }) {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
      <NavLink href="/" title="Accueil" />
      <NavLink href="/about" title="Moi">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Envie de faire connaissance ? Venez découvrir qui se cache derrière
            l'écran dans ma section "Moi". Je vous invite à plonger dans mon
            univers, mes passions et mes aspirations. Ensemble, créons une
            connexion authentique.
          </p>
        )}
      </NavLink>
      <NavLink href="/project" title="Mes projets">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Curieux de découvrir les projets sur lesquels j'ai mis mon grain de
            sel ? Faites un tour sur mes projets et laissez-vous surprendre par
            mes collaborations créatives !
          </p>
        )}
      </NavLink>
      <NavLink href="/blog" title="Mon blog">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            En cours de construction
          </p>
        )}
      </NavLink>
      <NavLink href="/contact" title="Contact">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            À la recherche d'un contact pour votre prochain projet ? Ne cherchez
            plus, je suis juste un clic de souris away sur mon portFOLIO !
          </p>
        )}
      </NavLink>
    </div>
  );
}
