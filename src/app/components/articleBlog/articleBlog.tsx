"use client";

import Button from "../../components/button/button";
import NavLink from "../navlink/navlink";

interface ArticleProps {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  date: string;
  sections: [];
}

export default function ArticleBlog({
  id,
  img,
  alt,
  title,
  subtitle,
  date,
}: ArticleProps) {
  return (
    <article className="rounded overflow-hidden shadow-lg bg-white mt-4 ">
      <img className="w-full" src={img} alt={alt} />
      <h2 className="text-blue-800 font-bold text-xl mt-4 text-center">
        {title}
      </h2>
      <h3 className="text-blue-700 text-base text-center">{subtitle}</h3>
      <p className="text-gray-700 text-base ml-2 text-center mr-2">{date}</p>
      <span className="flex justify-center mb-4 mt-2">
        <NavLink
          href={id === 1 ? "/professionalReconversion" : "#"}
          title="Lire l'article"
          isActive={true}></NavLink>
        <Button
          type="button"
          text="Lire l'article"
          onClick={() => {}}
          ariaLabel="Cliquez sur le bouton pour lire l'article"
        />
      </span>
    </article>
  );
}
