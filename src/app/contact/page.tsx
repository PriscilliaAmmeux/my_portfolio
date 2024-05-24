import { Metadata } from "next";
import { CiMail } from "react-icons/ci";
import Footer from "../ui/components/footer/footer";
import Title from "../ui/components/title/title";
import Form from "../ui/form/form";
import Navigation from "../ui/navigation/navigation";
import { Layout } from "../ui/components/layoutPage/layout";

export const metadata: Metadata = {
  title: "Contact - Priscillia Ammeux",
};

export default function Contact() {
  return (
    <Layout>
      <main className="pt-4">
        <Navigation />
        <Title text="Contact" icon={CiMail} />
        <Form />
        <Footer />
      </main>
    </Layout>
  );
}
