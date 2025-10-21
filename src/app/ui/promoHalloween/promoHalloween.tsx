export default function PromoHalloween() {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-br from-orange-900 via-orange-500 to-purple-900 rounded-2xl shadow-xl p-6 md:p-10 text-gray-900 text-center border-4 border-orange-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 m-4 mb-8 md:mb-0 text-5xl md:text-8xl animate-bounce select-none pointer-events-none">
          🎃
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-3 mt-10 md:mt-0 tracking-wide drop-shadow-lg">
          Offre spéciale Halloween&nbsp;: -5% sur les packs vitrines&nbsp;!
        </h3>
        <div className="absolute top-0 right-0 m-4 text-5xl md:text-8xl animate-bounce select-none pointer-events-none">
          🎃
        </div>
        <p className="mb-3 text-lg font-semibold">
          Du 9 au 31 octobre 2025, profitez d’une offre ensorcelante&nbsp;:
        </p>
        <ul className="mb-4 text-base md:text-lg space-y-1">
          <li>
            <span className="font-bold">-5 %</span> sur mes deux packs
            vitrines&nbsp;:
          </li>
          <li>
            Pack Starter – Site Vitrine (1 page)&nbsp;
            <span className="ml-2 t font-bold block sm:inline">
              → 380&nbsp;€ TTC
            </span>{" "}
            <span className="ml-2 line-through font-semibold">
              (au lieu de 400&nbsp;€)
            </span>
          </li>
          <li>
            Pack Sur-Mesure – Site Vitrine&nbsp;
            <span className="ml-2 font-bold block sm:inline">
              → 1140&nbsp;€ TTC
            </span>
            <span className="ml-2 line-through font-semibold">
              (au lieu de 1200&nbsp;€)
            </span>
          </li>
        </ul>
        <p className="mb-2 text-base md:text-lg">
          Et ce n’est pas tout...{" "}
          <span role="img" aria-label="sorcière">
            🧙‍♀️
          </span>
        </p>
        <p className="mb-2 text-base md:text-lg">
          Pour tout achat d’un{" "}
          <span className="font-bold">Pack Sur-Mesure – Site Vitrine</span>,
          <br className="hidden md:block" />
          <span className="font-bold">
            je vous offre 3 mois de maintenance !
          </span>{" "}
        </p>
        <p className="mb-2 text-base md:text-lg">
          Gardez votre site rapide, sécurisé et toujours à jour.
          <br />
          Je m’occupe de la technique pendant que vous vous concentrez sur votre
          activité.
          <br />
          <span className="font-semibold">
            Les optimisations, modifications et petits ajouts sont inclus !
          </span>
        </p>
        <p className="mt-4 font-bold text-lg">
          Offre valable jusqu’au 31 octobre 2025 – après, la magie s’évapore
          dans la brume…
        </p>
      </div>
    </section>
  );
}
