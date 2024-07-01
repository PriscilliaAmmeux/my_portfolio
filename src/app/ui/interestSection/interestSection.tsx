import React from "react";
import { IconType } from "react-icons";

interface InterestSectionProps {
  Icon: IconType;
  title: string;
  description: React.ReactNode;
}

export default function InterestSection({
  Icon,
  title,
  description,
}: InterestSectionProps) {
  return (
    <section className="mb-4 text-gray-700">
      <div className="flex items-center">
        <Icon />
        <p className="font-bold ml-2">{title}</p>
      </div>
      <p>{description}</p>
    </section>
  );
}
