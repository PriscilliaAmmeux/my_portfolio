const collabs = [
  {
    img: "/mots-sur-mesure.webp",
    alt: "Mots sur mesure",
    name: "Christelle & Nesrine",
    role: "Rédactrices web, SEO, copywriting",
    desc: "Christelle & Nesrine subliment les idées et donnent vie à des textes percutants, pensés pour séduire aussi bien vos lecteurs que les moteurs de recherche.",
    link: "https://www.instagram.com/motssurmesure/",
    linkText: "👉 Les contacter",
  },
  {
    img: "/1111studio.webp",
    alt: "11.11 Studio",
    name: "Béatrice – 11.11 Studio",
    role: "Graphiste, Directrice Artistique, branding & identités visuelles.",
    desc: "Béatrice façonne des univers graphiques uniques, à l’image de chaque marque, pour une communication cohérente et mémorable.",
    link: "https://www.instagram.com/11.11_std/",
    linkText: "👉 La contacter",
  },
];

export default function ListCollab() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center tracking-wide mb-8 text-pink-700">
        Mes collaboratrices
      </h2>
      <div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 rounded-2xl shadow-xl p-8 mb-10">
        <p className="text-lg text-pink-900 font-medium leading-relaxed">
          Chez <span className="font-bold text-pink-700">Pixelia&Co</span>, le
          “&Co” prend tout son sens.
          <br />
          Je collabore avec des freelances passionnés et complémentaires pour
          offrir à mes clients un accompagnement global, du design au
          développement, en passant par la rédaction et la stratégie digitale.
          <br />
          <span className="font-semibold text-pink-700">
            Ensemble, nous partageons les mêmes valeurs : écoute, qualité et
            bienveillance.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collabs.map((collab, idx) => (
          <div
            key={collab.name}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-2 border-pink-200 hover:scale-105 transition-transform duration-300">
            <img
              src={collab.img}
              alt={collab.alt}
              className="w-20 h-20 rounded-full mb-4 border-4 object-cover"
            />
            <h3 className="text-xl font-bold text-pink-700 mb-2">
              {collab.name}
            </h3>
            <p className="text-pink-900 font-medium mb-2">{collab.role}</p>
            <p className="text-sm text-pink-700 mb-4">{collab.desc}</p>
            <a
              href={collab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-700 text-white px-4 py-2 rounded-full font-bold shadow hover:bg-pink-400 transition-colors">
              {collab.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
