import Footer from "../ui/components/footer/footer";
import Navbar from "../ui/navbar/navbar";

export default function Project() {
  return (
    <main className="bg-gray-800 pt-4">
      <div className="flex justify-center">
        <Navbar showParagraph={false} />
      </div>

      <Footer />
    </main>
  );
}
