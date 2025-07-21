import Button from "../button/button";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demoLink: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
}: ProjectCardProps) {
  return (
    <section className="relative overflow-hidden shadow-lg bg-pink-700 mt-4 ">
      <Image
        className="w-full"
        src={image}
        width={400}
        height={200}
        alt={"screen ou icon de l'application"}
      />
      <section className="mb-20 px-5 py-4 text-white">
        <h2 className="text-white font-bold text-xl mb-4 ">{title}</h2>
        <p className="text-base text-justify">{description}</p>
      </section>
      <section className="px-6 py-4 flex justify-center absolute bottom-0 w-full">
        <Button
          type="button"
          text="Visiter le site web"
          href={demoLink}
          ariaLabel="Cliquez sur le bouton pour visiter le site web"
          className="mr-2 "
          variant="bgWhite"
        />
      </section>
    </section>
  );
}
