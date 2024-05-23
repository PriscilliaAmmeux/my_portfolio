import { useRouter } from "next/router";
import blogData from "../../data/blog.json";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  const article = blogData.find((blog) => blog.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <button onClick={() => router.push(`/article/${Number(id) - 1}`)}>
        Previous
      </button>
      <button onClick={() => router.push(`/article/${Number(id) + 1}`)}>
        Next
      </button>
    </div>
  );
}
