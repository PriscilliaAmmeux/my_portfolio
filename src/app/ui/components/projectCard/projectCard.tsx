type ProjectCardProps = {
  title: string;
  description: string;
  methodology: string;
  imageUrl: string;
  tools: string;
  demoLink: string;
  githubLink: string;
};

export default function ProjectCard({
  title,
  description,
  methodology,
  imageUrl,
  tools,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{title}</h1>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-600 text-sm mt-2">{methodology}</p>
        <div className="mt-4">
          <p className="text-gray-700 font-semibold">
            Technologies utilisées :
          </p>
          <p className="text-gray-600">{tools}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <a
          href={demoLink}
          className="text-indigo-500 hover:text-indigo-700 mr-4">
          Voir la démo
        </a>
        <a href={githubLink} className="text-indigo-500 hover:text-indigo-700">
          Voir sur GitHub
        </a>
      </div>
    </div>
  );
}
