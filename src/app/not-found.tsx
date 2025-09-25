import Image from "next/image";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-700 via-pink-400 to-pink-200 text-white px-4 relative overflow-hidden">
      {/* Glow & animated background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-pulse opacity-30 w-[600px] h-[600px] rounded-full bg-pink-400 blur-3xl absolute top-[-200px] left-[-200px]" />
        <div className="animate-pulse opacity-20 w-[400px] h-[400px] rounded-full bg-pink-700 blur-2xl absolute bottom-[-100px] right-[-100px]" />
      </div>
      {/* 404 image */}
      <div className="z-10">
        <Image
          src="/404.webp"
          alt="404 - Page non trouvée"
          width={320}
          height={220}
          className="mb-8 rounded-xl shadow-2xl border-4 border-white"
          priority
        />
      </div>
      {/* Big neon 404 */}
      <h2 className="z-10 text-7xl font-extrabold mb-2 text-white  tracking-widest animate-pulse">
        404
      </h2>
      {/* Subtitle */}
      <p className="z-10 text-pink-900 text-2xl mb-8 text-center font-semibold">
        Oups, cette page n'existe pas ou a été déplacée.
        <br />
        <span className="text-pink-900">
          Mais tu peux toujours explorer le site !
        </span>
      </p>
      {/* Home button */}
      <a
        href="/"
        className="z-10 bg-white text-pink-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-300 hover:text-white transition-all duration-200 text-xl border-2 border-pink-700 animate-bounce">
        Retour à l’accueil
      </a>
    </section>
  );
}
