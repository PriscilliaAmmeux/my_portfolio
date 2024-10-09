import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

type Article = {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle?: string;
  date: string;
  sections: Section[];
};

type Section = {
  title: string;
  content: string | string[];
  part: Part[];
  link: string;
};

type Part = {
  subtitle: string;
  content: string | List;
};

type List = {
    list: string;
}

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<Article | null>(null);
  const [nextArticleId, setNextArticleId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch("/data/blog.json");
          const data: Article[] = await response.json();
          const articleId = Array.isArray(id) ? id[0] : id;
          const foundArticle = data.find(
            (article) => article.id === parseInt(articleId ?? "")
          );
          setArticle(foundArticle || null);
          setNextArticleId((parseInt(articleId ?? "") % data.length) + 1);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [id]);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <img
        src={article.img}
        alt={article.alt}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-bold mt-4">{article.title}</h2>
      {article.subtitle && (
        <h3 className="text-2xl mt-2">{article.subtitle}</h3>
      )}
      <p className="text-gray-600 mt-2">{article.date}</p>
      {article.sections.map((section, index) => (
        <div key={index} className="mt-4">
          <h4 className="text-xl font-semibold">{section.title}</h4>
          {typeof section.content === "string" && (
            <p className="mt-2">{section.content}</p>
          )}
          {Array.isArray(section.content) &&
            section.content.map((item, idx) => (
              <p key={idx} className="mt-2">
                {item}
              </p>
            ))}
          {typeof section.content === "object" && section.content !== null && (
            <div className="mt-2">
              <p></p>
            </div>
          )}
        </div>
      ))}
      {nextArticleId && (
        <Link href={`/article/${nextArticleId}`}>
          <a className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
            Next Article
          </a>
        </Link>
      )}
    </div>
  );
}
