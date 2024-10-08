import { Metadata } from "next";
import Me from "../ui/me/me";
import Carreer from "../ui/carreer/carreer";
import GradesAndKnows from "../ui/gradesAndKnows/gradesAndKnows";
import Interests from "../ui/interests/interests";
import Layout from "../ui/layout/layout";
import DownloadCV from "../ui/downloadCV/downloadCV";

export const metadata: Metadata = {
  title: "À propos de moi - Priscillia Ammeux",
};

export default function About() {
  return (
    <Layout>
      <Me />
      <DownloadCV />
      <GradesAndKnows />
      <Carreer />
      <Interests />
    </Layout>
  );
}
