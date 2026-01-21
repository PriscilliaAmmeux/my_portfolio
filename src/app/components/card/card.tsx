import { ReactNode } from "react";

interface ArticleProps {
  title: string;
  children: ReactNode;
  className?: string;
  color?: string;
  button?: { href: string; text: string; ariaLabel: string };
}

export default function Card({ title, children }: ArticleProps) {
  return (
    <section
      style={{ position: "relative", maxHeight: "60rem" }}
      className={`mb-4 bg-pink-700 text-white p-6 shadow-lg mr-4 ml-4`}>
      <div className="mb-10">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-white text-2xl font-semibold">{title}</h2>
        </div>
        <div className="text-white">{children}</div>
      </div>
    </section>
  );
}
