"use client";

import { useState } from "react";
import Button from "../../components/button/button";
import { Modal } from "../../components/modal/modal";
import Image from "next/image";

interface ArticleProps {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  date: string;
  sections: {
    title: string;
    part?: {
      subtitle: string;
      content: string | { list: string }[];
    }[];
    content?: string | string[] | { description: string; details: string[] };
    link?: string;
  }[];
}

export default function ArticleBlog({
  id,
  img,
  alt,
  title,
  subtitle,
  date,
  sections,
}: ArticleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = (
    content:
      | string
      | string[]
      | { description: string; details: string[] }
      | { list: string }[]
  ) => {
    if (typeof content === "string") {
      return <p className="text-gray-600 ml-2">{content}</p>;
    } else if (Array.isArray(content)) {
      if (content.length > 0 && typeof content[0] === "string") {
        return (
          <ul className="list-disc ml-4">
            {content.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-600 ml-2">
                {typeof item === "string" ? item : item.list}
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <ul className="list-disc ml-4">
            {(content as { list: string }[]).map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-600 ml-2">
                {item.list}
              </li>
            ))}
          </ul>
        );
      }
    } else {
      return (
        <div>
          <p className="text-gray-600 ml-2">{content.description}</p>
          <ul className="list-disc ml-4">
            {content.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="text-gray-600 ml-2">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <article className="rounded overflow-hidden shadow-lg bg-white mt-4 max-w-lg mx-auto">
      <Image className="w-full" src={img} alt={alt} height={275} width={275} />
      <h2 className="text-blue-800 font-bold text-xl mt-4 text-center">
        {title}
      </h2>
      <h2 className="text-blue-700 text-base text-center">{subtitle}</h2>
      <p className="text-gray-700 text-base ml-2 text-center mr-2">{date}</p>
      <span className="flex justify-center mb-4 mt-2">
        <Button
          type="button"
          text="Cliquez pour lire en entier"
          onClick={() => {
            setIsModalOpen(true);
          }}
          ariaLabel="Cliquez sur le bouton pour lire en entier l'article"
        />
      </span>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-pink-700 font-bold mb-2 mt-4 ml-2">
                {section.title}
              </h2>
              {section.content && renderContent(section.content)}
              {section.part && (
                <div>
                  {section.part.map((part, partIndex) => (
                    <div key={partIndex}>
                      <h3 className="text-blue-700 font-semibold ml-2">
                        {part.subtitle}
                      </h3>
                      <div className="text-gray-600 ml-2 mb-4">
                        {renderContent(part.content)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {section.link && (
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline ml-2 mb-5">
                  En savoir plus
                </a>
              )}
            </section>
          ))}
        </div>
      </Modal>
    </article>
  );
}
