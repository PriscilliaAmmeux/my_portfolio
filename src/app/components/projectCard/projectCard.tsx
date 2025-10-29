import Button from "../button/button";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../lib/slugify";

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  slug?: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  image,
  slug,
}: ProjectCardProps) {
  const imageClass = [11].includes(id)
    ? "w-full h-[80px] object-contain mx-auto my-6"
    : "w-full hover:scale-105 transition-transform duration-300";

  const projectSlug = slug ?? slugify(title);

  return (
    <section className="relative overflow-hidden shadow-lg bg-pink-700 mt-4 rounded-lg">
      <Link
        href={`/project/${projectSlug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-pink-300"
        aria-label={`Voir la page du projet ${title}`}>
        <Image
          className={imageClass}
          src={image}
          width={400}
          height={200}
          alt={`Aperçu du projet ${title}`}
        />
      </Link>

      <Link
        href={`/project/${projectSlug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
        aria-label={`Voir le projet ${title} - ${description}`}>
        <section className="mb-24 px-6 py-6 text-white">
          <h2 className="text-white font-bold text-xl mb-4">{title}</h2>
          <p className="text-base leading-relaxed">{description}</p>
        </section>
      </Link>

      <section className="px-6 py-6 flex justify-center absolute bottom-0 w-full">
          <div className="flex gap-3">
            <Link href={`/project/${projectSlug}`}>
              <Button
                type="button"
                text="Voir la fiche"
                ariaLabel={`Voir la fiche du projet ${title}`}
                className="min-h-[44px] px-5 py-2 text-sm"
                variant="bgWhite"
              />
            </Link>
          </div>
      
      </section>
    </section>
  );
}
