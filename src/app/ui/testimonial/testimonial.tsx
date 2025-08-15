import Title from "../title/title";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Je suis arrivée à notre premier RDV avec ma propre idée en tête. Priscillia m'a orientée pour remodeler le site avec plus de simplicité, plus adapté afin de répondre plus justement aux attentes de chacun. Ma pratique et la manière dont je vois les choses par rapport aux prestations proposées évoluent, il m'a suffi d'envoyer un message à Priscillia et nous retravaillons déjà dessus !",
      author: "Stéphanie HEUDRE",
      role: "Praticienne bien-être",
      stars: 5,
    },
    {
      id: 2,
      text: "Priscillia a réalisé le site internet pour faire connaitre mes ouvrages de science-fiction, deux trilogies écrites entre les années 2000 et 2025. Elle a imaginé et réalisé l'ensemble du site, ainsi que la présentation des ouvrages, faisant preuve d'initiative et de force de proposition, proposant idées et solutions. Très disponible et réactive, notre collaboration a été fructueuse et continuera je l'espère dans le temps pour accueillir mes nouveaux livres et les réactions des futurs lecteurs !",
      author: "Frédéric DEPAPRIS",
      role: "Auteur de livres",
      stars: 5,
    },
  ];

  return (
    <section className="mt-4 max-w-6xl mx-auto px-4">
      <div className="flex justify-center mb-8">
        <Title text="Témoignages" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="bg-pink-700 p-6 shadow-lg text-center rounded-lg">
            <div className="text-4xl text-pink-300 font-serif leading-none mb-3">
              "
            </div>

            <p className="text-white text-base leading-relaxed italic mb-4">
              {testimonial.text}
            </p>

            <section className="flex justify-center mb-3">
              {[...Array(testimonial.stars)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ⭐
                </span>
              ))}
            </section>

            <footer className="border-t border-pink-500 pt-3">
              <cite className="not-italic">
                <span className="block text-white font-semibold text-base">
                  {testimonial.author}
                </span>
                <span className="text-pink-200 text-xs">
                  {testimonial.role}
                </span>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
