"use client";

import Link from "next/link";
import Button from "../button/button";

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
    switch (id) {
      case 1:
        return "/accessibilityArticle";
      case 2:
        return "/nextJSArticle";
      case 3:
        return "/trainingImportance";
      case 4:
        return "/devLille";
      case 5:
        return "/tartecitron";
      default:
        return "/blog";
    }
  };

  return (
    <article className="relative overflow-hidden shadow-lg bg-white mt-4 pb-16 mb-5">
      <img className="w-full" src={img} alt={alt} />
      <h2 className="text-pink-700 font-bold text-xl mt-4 text-center">
        {title}
      </h2>
      <h3 className="text-pink-700 text-base text-center">{subtitle}</h3>
      <p className="text-pink-700 text-base ml-2 text-center mr-2">{date}</p>
      <span className="flex justify-center absolute bottom-0 w-full py-2 ">
        <Link className="flex justify-center" href={getHref(id)}>
          <Button
            type={"button"}
            text={"Lire l'article"}
            ariaLabel={"Lire l'article"}></Button>
        </Link>
      </span>
    </article>
  );
}
