import { Metadata } from "next";
import { FaPenFancy } from "react-icons/fa";
import Title from "../ui/title/title";
import Layout from "../ui/layout/layout";
import blogData from "@/data/blog.json";
import Link from "next/link";
import { LuConstruction } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Blog - Mes articles - Priscillia Ammeux",
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
        <Title text="Blog" icon={FaPenFancy} />
        <div className="w-full container mx-auto px-3"></div>
      </section>
      <section className="flex row gap-2 justify-center items-center mb-5 text-2xl">
        <LuConstruction />
        <p>Page en construction</p>
        <LuConstruction />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedBlog.map((article) => (
          <div key={article.id} className="border p-4 rounded-lg shadow-lg">
            <Link href={`/article/${article.id}`}>
              <div>
                <img
                  src={article.img}
                  alt={article.alt}
                  className="w-full h-100 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-bold mt-2">{article.title}</h2>
                {article.subtitle && (
                  <h3 className="text-lg mt-4">{article.subtitle}</h3>
                )}
                <p className="text-gray-100 mt-10">{article.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
}
