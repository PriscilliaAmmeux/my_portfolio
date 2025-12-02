import Link from "next/link";
import Button from "../../components/button/button";
import Image from "next/image";
import Navigation from "../navigation/navigation";
import Logo from "../logo/logo";

export default function HeaderHome() {
  return (
    <header className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
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
        <div className="lg:hidden flex justify-center mt-4">
          <Logo width={100} height={60} />
        </div>
        <Navigation />
      </nav>

      {/* Contenu centré du header */}
      <section
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 -mt-32 lg:-mt-40"
        aria-labelledby="hero-title">
        <h1
          id="hero-title"
          className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 animate-fade-in-up">
          Pixelia&Co - Création de site internet à Lille
        </h1>
        <p
          className="text-white text-center text-lg lg:text-xl xl:text-2xl max-w-3xl mb-8 animate-fade-in-up"
          style={{
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}>
          Studio web & freelance WordPress spécialisé dans la création de sites
          accessibles et performants
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
          }}>
          <Link href="/prestations">
            <Button
              type="button"
              text="Découvrir mes services"
              ariaLabel="Découvrir mes services"
              variant="bgPink"
              className="px-8 py-4 text-xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link>
          <Link href="/contact">
            <Button
              type="button"
              text="Me contacter"
              ariaLabel="Me contacter"
              variant="bgWhite"
              className="px-8 py-4 text-xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </Link>
        </div>
      </section>
    </header>
  );
}
