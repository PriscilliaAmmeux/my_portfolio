import React from "react";

interface ItemListProps {
  text: React.ReactNode;
}

export default function ItemList({ text }: ItemListProps) {
  return <li className="list-disc">{text}</li>;
}
