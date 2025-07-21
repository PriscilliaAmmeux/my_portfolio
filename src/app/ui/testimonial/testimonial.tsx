import Title from "../title/title";

export default function Testimonial() {
  return (
    <section className="py-12 px-4">
      <div className="flex justify-center">
        <Title text="Témoignages" />
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <blockquote className="bg-pink-700 p-8 shadow-lg text-center">
          <div className="text-6xl text-pink-300 font-serif leading-none mb-4">
            "
          </div>

          <p className="text-white text-lg leading-relaxed italic mb-6">
            Je suis arrivée à notre premier RDV avec ma propre idée en tête.
            Priscillia m'a orientée pour remodeler le site avec plus de
            simplicité, plus adapté afin de répondre plus justement aux attentes
            de chacun. Ma pratique et la manière dont je vois les choses par
            rapport aux prestations proposées évoluent, il m'a suffi d'envoyer
            un message à Priscillia et nous retravaillons déjà dessus !
          </p>

          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ⭐
              </span>
            ))}
          </div>

          <footer className="border-t border-pink-500 pt-4">
            <cite className="not-italic">
              <span className="block text-white font-semibold text-lg">
                Stéphanie HEUDRE
              </span>
              <span className="text-pink-200 text-sm">
                Praticienne bien-être
              </span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
