import { Metadata } from "next";

import Footer from "../ui/components/footer/footer";
import Me from "../ui/me/me";

import Carreer from "../ui/carreer/carreer";
import ValuesAndObjectives from "../ui/valuesAndObjectives/valuesAndObjectives";
import GradesAndKnows from "../ui/gradesAndKnows/gradesAndKnows";
import Interests from "../ui/interests/interests";
import Navbar from "../ui/navbar/navbar";

export const metadata: Metadata = {
  title: "À propos de moi - Priscillia Ammeux",
};

export default function About() {
  return (
    <main className="bg-gray-800 pt-4">
      <div className="flex justify-center">
        <Navbar showParagraph={false} />
      </div>
      <Me />
      <GradesAndKnows />
      <Carreer />
      <ValuesAndObjectives />
      <Interests />
      <Footer />
    </main>
  );
}
