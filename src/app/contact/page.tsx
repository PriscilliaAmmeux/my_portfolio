import { Metadata } from "next";
import { CiMail } from "react-icons/ci";
import Footer from "../ui/components/footer/footer";
import Title from "../ui/components/title/title";
import Form from "../ui/form/form";
import Navigation from "../ui/navigation/navigation";

export const metadata: Metadata = {
  title: "Contact - Priscillia Ammeux",
};

export default function Contact() {
  return (
    <main className="bg-gray-800 pt-4">
      <Navigation />
      <Title text="Contact" icon={CiMail} />
      <Form />
      <Footer />
    </main>
  );
}
