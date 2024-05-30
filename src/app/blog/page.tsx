import { Metadata } from "next";
import { FaPenFancy } from "react-icons/fa";
import Footer from "../components/footer/footer";
import Title from "../components/title/title";
import Navigation from "../ui/navigation/navigation";
import ArticleBlog from "../ui/articleBlog/articleBlog";
import blog from "../../data/blog.json";
import Layout from "../components/layout/layout";

export const metadata: Metadata = {
  title: "Blog - Mes articles - Priscillia Ammeux",
};

export default function Blog() {
  return (
    <Layout>
      <main className="pt-4">
        <Navigation />
        <Title text="Blog" icon={FaPenFancy} />
        <section className="w-full md:w-1/2 gap-4 container mx-auto mx-4">
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
      </main>
      <Footer />
    </Layout>
  );
}
