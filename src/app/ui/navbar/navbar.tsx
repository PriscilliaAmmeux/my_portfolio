import NavLink from "../../components/navlink/navlink";

export default function Navbar({ showParagraph }: { showParagraph: boolean }) {
  return (
    <section className="mb-32 grid lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-6 lg:text-left">
      <NavLink href="/" title="Accueil" />
      <NavLink href="/about" title="Moi">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm`}>
            Envie de faire connaissance ? Venez découvrir qui se cache derrière
            l'écran dans ma section "Moi". Je vous invite à plonger dans mon
            univers, mes passions et mes aspirations. Ensemble, créons une
            connexion authentique.
          </p>
        )}
      </NavLink>
      <NavLink href="/project" title="Mes projets">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm`}>
            Curieux de découvrir les projets sur lesquels j'ai mis mon grain de
            sel ? Faites un tour sur mes projets et laissez-vous surprendre par
            mes collaborations créatives !
          </p>
        )}
      </NavLink>
      <NavLink href="/prestations" title="Prestations">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm`}>
            Besoin d'un coup de main pour votre prochain projet ? Découvrez mes
            prestations et mes services de développement freelance. Ensemble,
            réalisons vos projets digitaux !
          </p>
        )}
      </NavLink>
      <NavLink href="/blog" title="Mon blog">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm`}>
            Mes articles vous attendent dans ma section "Blog". Ici, je partage
            mon histoire au sujet de ma reconversion, d'autres articles sont à
            venir. Restez connecté pour ne rien manquer !
          </p>
        )}
      </NavLink>
      <NavLink href="/contact" title="Contact">
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm`}>
            À la recherche d'un contact pour votre prochain projet ? Ne cherchez
            plus, je suis juste un clic de souris away sur mon portFOLIO !
          </p>
        )}
      </NavLink>
    </section>
  );
}
