import React from "react";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

export default function SectionArticle({ title, content }: SectionProps) {
  return (
    <section className="">
      <h4 className="text-blue-900 font-bold">{title}</h4>
      <div className="text-black mt-2 mb-4">{content}</div>
    </section>
  );
}
