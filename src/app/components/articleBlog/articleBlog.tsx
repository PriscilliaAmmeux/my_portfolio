"use client";

import NavLink from "../navlink/navlink";

interface ArticleProps {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  date: string;
}

export default function ArticleBlog({
  id,
  img,
  alt,
  title,
  subtitle,
  date,
}: ArticleProps) {
  const getHref = (id: number) => {
    if (id === 1) {
      return "/professionalReconversionArticle";
    } else if (id === 2) {
      return "/mistakesArticle";
    } else if (id === 3) {
      return "/juniorArticle";
    } else if (id === 4) {
      return "/accessibilityArticle";
    } else if (id === 5) {
      return "/nextJSArticle";
    } else if (id === 6) {
      return "/impostorArticle";
    } else {
      return "/blog";
    }
  };

  return (
    <article className="relative rounded overflow-hidden shadow-lg bg-white mt-4 pb-16">
      <img className="w-full" src={img} alt={alt} />
      <h2 className="text-blue-800 font-bold text-xl mt-4 text-center">
        {title}
      </h2>
      <h3 className="text-blue-700 text-base text-center">{subtitle}</h3>
      <p className="text-gray-700 text-base ml-2 text-center mr-2">{date}</p>
      <span className="flex justify-center absolute bottom-0 w-full py-2">
        <NavLink
          href={getHref(id)}
          title="Lire l'article"
          isActive={true}></NavLink>
      </span>
    </article>
  );
}
