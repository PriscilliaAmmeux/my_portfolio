import Button from "../button/button";
import Image from "next/image";

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  image,
  demoLink,
}: ProjectCardProps) {
  const imageClass = [11, 12].includes(id)
    ? "w-full h-[80px] object-contain mx-auto my-6"
    : "w-full hover:scale-105 transition-transform duration-300";
  return (
    <section className="relative overflow-hidden shadow-lg bg-pink-700 mt-4 rounded-lg">
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-pink-300"
        aria-label={`Voir le projet ${title}`}>
        <Image
          className={imageClass}
          src={image}
          width={400}
          height={200}
          alt={`Aperçu du projet ${title}`}
        />
      </a>

      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
        aria-label={`Voir le projet ${title} - ${description}`}>
        <section className="mb-24 px-6 py-6 text-white">
          <h2 className="text-white font-bold text-xl mb-4">{title}</h2>
          <p className="text-base leading-relaxed">{description}</p>
        </section>
      </a>

      <section className="px-6 py-6 flex justify-center absolute bottom-0 w-full">
        {[11, 12].includes(id) ? (
          <p className="text-white font-bold text-lg">Projet en cours</p>
        ) : (
          <Button
            type="button"
            text="Visiter le site web"
            href={demoLink}
            ariaLabel={`Visiter le site web du projet ${title}`}
            className="min-h-[44px] min-w-[44px] px-6 py-3 text-base"
            variant="bgWhite"
          />
        )}
      </section>
    </section>
  );
}
