import About from "../ui/about/about";
import Layout from "../ui/layout/layout";
import Testimonial from "../ui/testimonial/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos – Priscillia Ammeux | Développeuse Web & UX/UI Designer",
  description:
    "Découvrez le parcours de Priscillia Ammeux, développeuse web passionnée par l'accessibilité et le design. Reconversion, valeurs et approche créative du développement.",
  keywords: [
    "à propos",
    "Priscillia Ammeux",
    "développeuse web",
    "UX/UI designer",
    "reconversion professionnelle",
    "accessibilité web",
    "développement frontend",
    "parcours professionnel",
    "freelance",
    "autodidacte",
    "expériences digitales",
    "identité de marque",
    "créativité",
    "design web",
    "approche humaine",
    "création de sites web",
    "expérience utilisateur",
  ],
  openGraph: {
    title: "À propos – Priscillia Ammeux | Développeuse Web Autodidacte",
    description:
      "Autodidacte devenue développeuse web indépendante, je crée des expériences digitales sur mesure avec une approche intuitive et profondément humaine.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <About />
      <Testimonial />
    </Layout>
  );
}
