import Footer from "../ui/components/footer/footer";
import Navbar from "../ui/navbar/navbar";

export default function Blog() {
  return (
    <main className="bg-gray-800 pt-4">
      <div className="flex justify-center">
        <Navbar showParagraph={false} />
      </div>
      <section>
        <p>Coming soon</p>
      </section>
      <Footer />
    </main>
  );
}
