import { Metadata } from "next";
import Me from "../me/me";
import Carreer from "../carreer/carreer";
import GradesAndKnows from "../gradesAndKnows/gradesAndKnows";
import Interests from "../interests/interests";
import Layout from "../layout/layout";
import DownloadCV from "../downloadCV/downloadCV";

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
