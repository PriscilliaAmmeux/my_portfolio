"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <article className="rounded overflow-hidden shadow-lg bg-white mt-4 ">
      <div className="cursor-pointer">
        <img className="w-full" src={img} alt={"image de l'article"} />
        <h1 className="text-blue-800 font-bold text-xl mt-4 text-center">
          {title}
        </h1>
        <h2 className="text-blue-700 text-base text-center">{subtitle}</h2>
        <p className="text-gray-700 text-base ml-2 text-center mr-2">{date}</p>
        <Button
          className="text-gray-700 italic mt-2 text-center mb-2"
          onPress={onOpen}>
          Cliquez pour lire l'article en entier
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                {sections.map((section, index) => (
                  <section key={index}>
                    <h2 className="text-pink-500 font-bold mb-2 mt-4 ml-2">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 ml-2">{section.content}</p>
                  </section>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </article>
  );
}
