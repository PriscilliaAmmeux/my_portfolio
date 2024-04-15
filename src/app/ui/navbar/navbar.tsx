import Link from "next/link";

export default function Navbar({ showParagraph }: { showParagraph: boolean }) {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
      <Link
        href="/"
        className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-xl font-semibold`}>
          Accueil{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
      <Link
        href="/about"
        className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-xl font-semibold`}>
          Moi{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Envie de faire connaissance ? Venez découvrir qui se cache derrière
            l'écran dans ma section "Moi". Je vous invite à plonger dans mon
            univers, mes passions et mes aspirations. Ensemble, créons une
            connexion authentique.
          </p>
        )}
      </Link>

      <Link
        href="/project"
        className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-xl font-semibold`}>
          Mes projets{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Curieux de découvrir les projets sur lesquels j'ai mis mon grain de
            sel ? Faites un tour sur mes projets et laissez-vous surprendre par
            mes collaborations créatives !
          </p>
        )}
      </Link>

      <Link
        href="/blog"
        className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-xl font-semibold`}>
          Mon blog{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            En cours de construction
          </p>
        )}
      </Link>

      <Link
        href="/contact"
        className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer">
        <h2 className={`mb-3 text-xl font-semibold`}>
          Contact{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        {showParagraph && (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            À la recherche d'un contact pour votre prochain projet ? Ne cherchez
            plus, je suis juste un clic de souris away sur mon portFOLIO !
          </p>
        )}
      </Link>
    </div>
  );
}
