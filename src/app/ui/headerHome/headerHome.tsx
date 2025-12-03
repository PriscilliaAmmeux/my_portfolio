import Link from "next/link";
import Button from "../../components/button/button";
import Image from "next/image";
import Navigation from "../navigation/navigation";
import Logo from "../logo/logo";

export default function HeaderHome() {
  return (
    <header className="relative w-full min-h-screen lg:h-[700px] overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-home-page.webp"
          alt="Arrière-plan Pixelia&Co"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      {/* Navigation en haut */}
      <nav className="relative z-20" aria-label="Navigation principale">
        <div className="flex justify-center mt-10 lg:hidden">
          <Logo width={200} height={60} />
        </div>
        <div className="hidden lg:block">
          <Navigation forceWhiteText={true} />
        </div>
      </nav>

      {/* Contenu centré du header */}
      <section
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] lg:h-full px-4 py-8 lg:-mt-32"
        aria-labelledby="hero-title">
        <h1
          id="hero-title"
          className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 animate-fade-in-up">
          Pixelia&Co - Création de site internet à Lille
        </h1>
        <p
          className="text-white text-center text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mb-8 px-4 animate-fade-in-up"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}>
          Studio web & freelance WordPress spécialisé dans la création de sites
          accessibles et performants
        </p>
        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto max-w-md sm:max-w-none px-4 animate-fade-in-up"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}>
          <Link href="/prestations" className="w-full sm:w-auto">
            <Button
              type="button"
              text="Découvrir mes services"
              ariaLabel="Découvrir mes services"
              variant="bgPink"
              className="w-full sm:w-auto px-8 py-4 text-lg sm:text-xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              type="button"
              text="Me contacter"
              ariaLabel="Me contacter"
              variant="bgWhite"
              className="w-full sm:w-auto px-8 py-4 text-lg sm:text-xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link>
        </div>
      </section>
    </header>
  );
}
