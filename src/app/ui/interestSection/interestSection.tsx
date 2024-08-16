import React from "react";
import { IconType } from "react-icons";

interface InterestSectionProps {
  Icon: IconType;
  title: string;
  description: React.ReactNode;
  link?: string;
}

export default function InterestSection({
  Icon,
  title,
  description,
  link,
}: InterestSectionProps) {
  return (
    <section className="mb-4 text-gray-700">
      <div className="flex items-center">
        <Icon />
        <p className="font-bold ml-2">{title}</p>
      </div>
      <p>{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-pink-700 hover:font-bold">
          En savoir plus
        </a>
      )}
    </section>
  );
}
