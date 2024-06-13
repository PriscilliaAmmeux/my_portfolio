import { Metadata } from "next";
import Footer from "../components/footer/footer";
import Me from "../ui/me/me";
import WhyMe from "../ui/whyMe/whyMe";
import Carreer from "../ui/carreer/carreer";
import ValuesAndObjectives from "../ui/valuesAndObjectives/valuesAndObjectives";
import GradesAndKnows from "../ui/gradesAndKnows/gradesAndKnows";
import Interests from "../ui/interests/interests";
import Navigation from "../ui/navigation/navigation";
import Layout from "../components/layout/layout";
import DownloadCV from "../ui/downloadCV/downloadCV";

export const metadata: Metadata = {
  title: "À propos de moi - Priscillia Ammeux",
};

export default function About() {
  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <Navigation />
        <Me />
        <DownloadCV />
        <GradesAndKnows />
        <Carreer />
        <ValuesAndObjectives />
        <WhyMe />
        <Interests />
        <Footer />
      </section>
    </Layout>
  );
}
