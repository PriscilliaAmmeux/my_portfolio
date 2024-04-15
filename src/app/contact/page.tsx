import Footer from "../ui/components/footer/footer";
import Form from "../ui/form/form";
import Navbar from "../ui/navbar/navbar";

export default function Contact() {
  return (
    <main className="bg-gray-800 pt-4">
      <div className="flex justify-center">
        <Navbar showParagraph={false} />
      </div>
      <Form />
      <Footer />
    </main>
  );
}
