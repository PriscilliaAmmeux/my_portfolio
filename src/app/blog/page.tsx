import { Metadata } from "next";
import { FaPenFancy } from "react-icons/fa";
import Title from "../ui/title/title";
import ArticleBlog from "../ui/articleBlog/articleBlog";
import blog from "../../data/blog.json";
import Layout from "../ui/layout/layout";

export const metadata: Metadata = {
  title: "Blog - Mes articles - Priscillia Ammeux",
};

export default function Blog() {
  const sortedBlog = blog.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("/").map(Number);
    const [dayB, monthB, yearB] = b.date.split("/").map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <Title text="Blog" icon={FaPenFancy} />
        <div className="w-full container mx-auto px-3">
          <div className="md:grid md:grid-cols-2 gap-4">
            {sortedBlog.map((article) => (
              <ArticleBlog
                id={article.id}
                key={article.id}
                img={article.img}
                alt={article.alt}
                title={article.title}
                subtitle={article.subtitle}
                date={article.date}
                sections={article.sections}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
