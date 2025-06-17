import Me from "../me/me";
import GradesAndKnows from "../gradesAndKnows/gradesAndKnows";
import Interests from "../interests/interests";
import Layout from "../layout/layout";
import DownloadCV from "../downloadCV/downloadCV";
import Button from "@/app/components/button/button";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Me />
      <Link
        className="flex justify-center items-center mt-4 mb-8"
        href="/contact"
        aria-label="Aller à la page contact">
        <Button type="button" text="Me contacter" ariaLabel="Contact" />
      </Link>
      <GradesAndKnows />
      <Interests />
      <DownloadCV />
    </Layout>
  );
}
