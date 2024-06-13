"use client";

import { useState } from "react";
import Button from "../../components/button/button";
import { Modal } from "../../components/modal/modal";

interface ArticleProps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  date: string;
  sections: { title: string; content: string }[];
}

export default function ArticleBlog({
  id,
  img,
  title,
  subtitle,
  date,
  sections,
}: ArticleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <article className="rounded overflow-hidden shadow-lg bg-white mt-4 ">
      <img className="w-full" src={img} alt={"image de l'article"} />
      <h1 className="text-blue-800 font-bold text-xl mt-4 text-center">
        {title}
      </h1>
      <h2 className="text-blue-700 text-base text-center">{subtitle}</h2>
      <p className="text-gray-700 text-base ml-2 text-center mr-2">{date}</p>
      <span className="flex justify-center mb-4 mt-2">
        <Button
          type="button"
          text="Cliquez pour lire en entier"
          onClick={() => {
            setIsModalOpen(true);
          }}
          ariaLabel="Cliquez qur le bouton pour lire en entier l'article"
        />
      </span>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}>
        <div>
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-pink-500 font-bold mb-2 mt-4 ml-2">
                {section.title}
              </h2>
              <p className="text-gray-600 ml-2">{section.content}</p>
            </section>
          ))}
        </div>
      </Modal>
    </article>
  );
}
