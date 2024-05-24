import { Metadata } from "next";
import { FaPenFancy } from "react-icons/fa";
import Footer from "../ui/components/footer/footer";
import Title from "../ui/components/title/title";
import Navigation from "../ui/navigation/navigation";
import ArticleBlog from "../ui/articleBlog/articleBlog";
import blog from "../../data/blog.json";
import { Layout } from "../ui/components/layoutPage/layout";

export const metadata: Metadata = {
  title: "Blog - Priscillia Ammeux",
};

export default function Blog() {
  return (
    <Layout>
      <main className="pt-4">
        <Navigation />
        <Title text="Blog" icon={FaPenFancy} />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto mx-4 justify-items-stretch">
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
        </section>
        <Footer />
      </main>
    </Layout>
  );
}
