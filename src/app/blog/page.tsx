import { Metadata } from "next";
import Footer from "../ui/components/footer/footer";
import Title from "../ui/components/title/title";
import Navbar from "../ui/navbar/navbar";
import { FaPenFancy } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog - Priscillia Ammeux",
};

export default function Blog() {
  return (
    <main className="bg-gray-800 pt-4">
      <div className="flex justify-center">
        <Navbar showParagraph={false} />
      </div>
      <Title text="Blog" icon={FaPenFancy} />
      <section className="flex justify-center mt-40 mb-40">Coming Soon</section>
      <Footer />
    </main>
  );
}
