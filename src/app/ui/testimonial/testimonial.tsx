import ShareOpinionGoogle from "../shareOpinionGoogle/shareOpinionGoogle";
import Title from "../title/title";

export default function Testimonial() {
  const testimonials = [
    {
      id: 5,
      text: "Travailler avec Priscillia est un vrai bonheur. Développeuse full stack agile, elle allie une expertise technique solide à une soif d’apprendre constante – une combinaison rare et précieuse. Ce qui la rend exceptionnelle ? Sa capacité à s’adapter, son approche proactive et son esprit toujours positif. Peu importe les défis, elle les relève avec bonne humeur et détermination, ce qui rend chaque collaboration agréable et stimulante. Pour moi, Priscilla est le summum : compétente, polyvalente et ultra motivée. Une vraie pépite que je suis ravie d’avoir dans mon équipe. Si vous cherchez une développeuse talentueuse, réactive et rayonnante, ne cherchez plus !",
      author: "Céline Gana",
      role: "Cheffe de projet chez Feeling and Create",
      stars: 5,
    },
    {
      id: 4,
      text: "J’ai eu le plaisir de collaborer avec Priscillia,une développeuse web aussi compétente que réactive. Ce que j’ai particulièrement apprécié chez elle, c’est sa capacité à comprendre rapidement les besoins et à proposer des solutions simples, efficaces et bien pensées. Elle ne se contente pas de “faire le site” — elle pense expérience utilisateur, performance et évolutivité. Le résultat : un travail propre, fluide et livré dans les temps. Si vous cherchez une développeuse fiable, pédagogue et impliquée, je ne peux que la recommander les yeux fermés.",
      author: "Alexandra Payet",
      role: "Fondatrice de Formeazy.fr & Digital-study.fr",
      stars: 5,
    },
    {
      id: 3,
      text: "Un énorme merci à Priscillia qui a su écouter, comprendre et donner forme à ce que je voulais. Je ne peux que recommander sa qualité de travail et son perfectionnisme. Encore merci Priscillia !",
      author: "Barbara B.",
      role: "Présidente de l'association Hyperacousie Solidarité",
      stars: 5,
    },
    {
      id: 2,
      text: "Priscillia a réalisé le site internet pour faire connaitre mes ouvrages de science-fiction, deux trilogies écrites entre les années 2000 et 2025. Elle a imaginé et réalisé l'ensemble du site, ainsi que la présentation des ouvrages, faisant preuve d'initiative et de force de proposition, proposant idées et solutions. Très disponible et réactive, notre collaboration a été fructueuse et continuera je l'espère dans le temps pour accueillir mes nouveaux livres et les réactions des futurs lecteurs !",
      author: "Frédéric DEPAPRIS",
      role: "Auteur de livres",
      stars: 5,
    },
    {
      id: 1,
      text: "Je suis arrivée à notre premier RDV avec ma propre idée en tête. Priscillia m'a orientée pour remodeler le site avec plus de simplicité, plus adapté afin de répondre plus justement aux attentes de chacun. Ma pratique et la manière dont je vois les choses par rapport aux prestations proposées évoluent, il m'a suffi d'envoyer un message à Priscillia et nous retravaillons déjà dessus !",
      author: "Stéphanie HEUDRE",
      role: "Praticienne bien-être",
      stars: 5,
    },
  ];

  return (
    <section className="mt-4 ml-2 mr-2">
      <div className="flex justify-center mb-8">
        <Title text="Témoignages" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="bg-pink-700 p-6 shadow-lg text-center rounded-lg flex flex-col h-full">
            <div className="text-4xl text-pink-100 font-serif leading-none mb-3">
              "
            </div>

            <p className="text-white text-base leading-relaxed italic mb-4">
              {testimonial.text}
            </p>

            <div className="flex-grow" />
            <section className="flex justify-center mb-3 mt-auto">
              {[...Array(testimonial.stars)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ⭐
                </span>
              ))}
            </section>

            <footer className="border-t border-pink-500 pt-3 mt-auto">
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
      <ShareOpinionGoogle />
    </section>
  );
}
