type ProjectCardProps = {
  title: string;
  description: string;
  methodology: string;
  image: string;
  tools: string;
  technology: string;
  demoLink: string;
  githubLink: string;
};

export default function ProjectCard({
  title,
  description,
  methodology,
  image,
  tools,
  technology,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <section className="rounded overflow-hidden shadow-lg bg-white mt-4">
      <img
        className="w-full"
        src={image}
        alt={"screen ou icon de l'application"}
      />
      <section className="px-5 py-4">
        <h1 className="text-gray-800 font-bold text-xl mb-2">{title}</h1>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-600 text-sm mt-2">{methodology}</p>
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">Outils utilisées :</p>
          <p className="text-gray-600">{tools}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">
            Technologies utilisées :
          </p>
          <p className="text-gray-600">{technology}</p>
        </div>
      </section>
      <section className="px-6 py-4">
        <a
          href={demoLink}
          className="text-indigo-500 hover:text-indigo-700 mr-4">
          Voir la démo
        </a>
        <a href={githubLink} className="text-indigo-500 hover:text-indigo-700">
          Voir sur GitHub
        </a>
      </section>
    </section>
  );
}
