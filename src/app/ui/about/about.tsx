import Me from "../me/me";
import GradesAndKnows from "../gradesAndKnows/gradesAndKnows";
import Interests from "../interests/interests";
import Layout from "../layout/layout";
import DownloadCV from "../downloadCV/downloadCV";

export default function About() {
  return (
    <Layout>
      <Me />
      <GradesAndKnows />
      <Interests />
      <DownloadCV />
    </Layout>
  );
}
