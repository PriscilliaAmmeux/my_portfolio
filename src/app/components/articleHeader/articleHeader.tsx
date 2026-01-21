import Image from "next/image";

interface ArticleHeaderProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  date: string;
  children: React.ReactNode;
}

export default function ArticleHeader({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  date,
  children,
}: ArticleHeaderProps) {
  return (
    <article className="rounded overflow-hidden shadow-lg bg-white m-6 p-6">
      <section className="flex justify-center">
        <Image
          className="h-auto max-w-full"
          src={imgSrc}
          alt={imgAlt}
          width={400}
          height={200}
        />
      </section>

      <h2 className="text-pink-600 font-bold text-2xl mt-4 text-center mb-4">
        {title}
      </h2>
      <h3 className="text-blue-900 font-bold text-xl text-center">
        {subtitle}
      </h3>
      <p className="text-gray-600 italic text-lg ml-2 text-center mb-4">
        Du : {date}
      </p>
      {children}
    </article>
  );
}
