import { Metadata } from "next";
import { FaPenFancy } from "react-icons/fa";
import Title from "../ui/title/title";
import Layout from "../ui/layout/layout";

import { LuConstruction } from "react-icons/lu";
import ArticleBlog from "../components/articleBlog/articleBlog";

export const metadata: Metadata = {
  title: "Blog - Mes articles - Priscillia Ammeux",
};

export default function Blog() {
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
      <ArticleBlog />
    </Layout>
  );
}
