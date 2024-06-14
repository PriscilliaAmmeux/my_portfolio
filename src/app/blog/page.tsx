import { Metadata } from "next";
import { FaPenFancy } from "react-icons/fa";
import Title from "../components/title/title";
import ArticleBlog from "../ui/articleBlog/articleBlog";
import blog from "../../data/blog.json";
import Layout from "../components/layout/layout";

export const metadata: Metadata = {
  title: "Blog - Mes articles - Priscillia Ammeux",
};

export default function Blog() {
  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <Title text="Blog" icon={FaPenFancy} />
        <div className="w-full md:w-1/2 gap-4 container mx-auto mx-3">
          {blog.map((article) => (
            <ArticleBlog
              id={article.id}
              key={article.id}
              img={article.img}
              title={article.title}
              subtitle={article.subtitle}
              date={article.date}
              sections={article.sections}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
