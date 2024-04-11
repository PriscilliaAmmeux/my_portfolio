import { Metadata } from "next";

import Footer from "../ui/footer/footer";
import Header from "../ui/header/header";
import Me from "../ui/me/me";

import Carreer from "../ui/carreer/carreer";
import ValuesAndObjectives from "../ui/valuesAndObjectives/valuesAndObjectives";
import GradesAndKnows from "../ui/gradesAndKnows/gradesAndKnows";
import Interests from "../ui/interests/interests";

export const metadata: Metadata = {
  title: "À propos de moi - Priscillia Ammeux",
};

export default function About() {
  return (
    <main className="bg-gray-800">
      <Header />
      <Me />
      <GradesAndKnows />
      <Carreer />
      <ValuesAndObjectives />
      <Interests />
      <Footer />
    </main>
  );
}
