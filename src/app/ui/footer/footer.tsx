import Logo from "../logo/logo";

export default function Footer() {
  return (
    <footer className="bg-pink-100 dark:bg-gray-700 mt-10 ddark:bg-gray-700 w-full gap-20 bottom-0 flex flex-col md:flex-row justify-around items-center">
      <section>
        <Logo width={200} />
      </section>
      <section className="text-center">
        <p className="text-sm md:text-base font-semibold">
          © {new Date().getFullYear()} Priscillia Ammeux. Tous droits réservés.
        </p>
        <p className="text-sm md:text-base">
          Créée avec amour ❤️ par Priscillia Ammeux
        </p>
        <div className="flex justify-center">
          <a href="/ecoIndex.webp" download>
            <img
              className="pt-1 cursor-pointer"
              src="/ecoIndex2.webp"
              alt="note"
              width="100"
            />
          </a>
        </div>
      </section>

      <section>
        <h1 className="underline font-semibold">Mentions légales: </h1>
        <p className="text-sm md:text-base">
          Siret de l'établissement: 92901000700011
        </p>
        <a
          href="/CGV_Priscillia_Ammeux.pdf"
          download
          aria-label="Cliquez ici pour télécharger les conditions générales de ventes"
          className="text-sm md:text-base underline hover:text-pink-700 hover:font-bold">
          Télécharger les CGV
        </a>
      </section>
    </footer>
  );
}
