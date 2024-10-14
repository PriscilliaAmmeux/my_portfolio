import ModalArticleBlog from "@/app/ui/modalArticleBlog/modalArticleBlog";
import blogData from "@/data/blog.json";
import { useState } from "react";

interface Article {
  date: string;
  img: string;
  alt: string;
  title: string;
  subtitle?: string;
  content: string;
}

export default function ArticleBlog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const sortedBlog = blogData.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("/").map(Number);
    const [dayB, monthB, yearB] = b.date.split("/").map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB.getTime() - dateA.getTime();
  });

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedBlog.map((article) => (
          <div key={article.id} className="border p-4 rounded-lg shadow-lg">
            <div onClick={() => openModal(article)}>
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
          </div>
        ))}
      </article>

      {isModalOpen && selectedArticle && (
        <ModalArticleBlog onClose={closeModal}>
          <div className="p-4">
            <img
              src={selectedArticle.img}
              alt={selectedArticle.alt}
              className="w-full h-100 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-2">{selectedArticle.title}</h2>
            {selectedArticle.subtitle && (
              <h3 className="text-lg mt-4">{selectedArticle.subtitle}</h3>
            )}
            <p className="text-gray-100 mt-10">{selectedArticle.date}</p>
            <p className="mt-4">{selectedArticle.content}</p>
          </div>
        </ModalArticleBlog>
      )}
    </>
  );
}
