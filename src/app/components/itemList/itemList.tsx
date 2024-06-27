import React from "react";
import { IconType } from "react-icons";

interface ItemListProps {
  text: React.ReactNode;
  Icon?: IconType;
}

export default function ItemList({ text, Icon }: ItemListProps) {
  return (
    <li className="list-disc">
      <span className="inline-flex items-center">
        {Icon && <Icon className="mr-2" />}
        {text}
      </span>
    </li>
  );
}
