import { Metadata } from "next";
import { FaPenFancy } from "react-icons/fa";
import Title from "../ui/title/title";
import Layout from "../ui/layout/layout";
import blogData from "@/data/blog.json";
import ArticleBlog from "../components/articleBlog/articleBlog";

export const metadata: Metadata = {
  title: "Blog Tech et Accessibilite – Articles de Priscillia Ammeux",
  description:
    "Découvrez le blog de Priscillia Ammeux de Pixelia&Co avec des articles sur la tech, l'accessibilité numérique, l'éco-conception et un web plus inclusif.",
  keywords: [
    "blog",
    "articles",
    "tech",
    "accessibilite-numerique",
    "eco-conception",
    "developpement-web",
    "priscillia-ammeux",
    "pixeliaandco",
    "freelance-web",
    "web-inclusif",
    "inclusivite-web",
    "accessibilite",
    "performance-web",
  ],
};

export default function Blog() {
  const sortedBlog = blogData.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("/").map(Number);
    const [dayB, monthB, yearB] = b.date.split("/").map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <div className="ml-4 sm:ml-2">
          <Title text="Blog" />
        </div>
        <div className="w-full container mx-auto px-3">
          <div className="md:grid md:grid-cols-3 gap-4">
            {sortedBlog.map((article) => (
              <ArticleBlog
                key={article.id}
                id={article.id}
                img={article.img}
                alt={article.alt}
                title={article.title}
                subtitle={article.subtitle}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
