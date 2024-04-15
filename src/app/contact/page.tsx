import { Metadata } from "next";
import Footer from "../ui/components/footer/footer";
import Title from "../ui/components/title/title";
import Form from "../ui/form/form";
import Navbar from "../ui/navbar/navbar";
import { CiMail } from "react-icons/ci";

export const metadata: Metadata = {
  title: "Contact - Priscillia Ammeux",
};

export default function Contact() {
  return (
    <main className="bg-gray-800 pt-4">
      <div className="flex justify-center">
        <Navbar showParagraph={false} />
      </div>
      <Title text="Contact" icon={CiMail} />
      <Form />
      <Footer />
    </main>
  );
}
