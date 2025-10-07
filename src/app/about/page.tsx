import About from "../ui/about/about";
import Layout from "../ui/layout/layout";
import Testimonial from "../ui/testimonial/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "priscillia-ammeux-pixeliaandco-a-propos-developpeuse-web-ux-ui-designer-quesnoy-sur-deule",
  description:
    "Découvrez le parcours de Priscillia Ammeux de Pixelia&Co, développeuse web et UX/UI designer autodidacte, créatrice de sites web sur mesure à Quesnoy-sur-Deule.",
  keywords: [
    "priscillia-ammeux",
    "pixeliaandco",
    "a-propos",
    "developpeuse-web",
    "ux-ui-designer",
    "reconversion-web",
    "autodidacte-web",
    "creation-sites-web-sur-mesure",
    "experience-utilisateur-web",
    "design-web-creatif",
    "identite-de-marque-digitale",
    "approche-humaine",
    "approche-intuitive",
    "design-responsable",
    "eco-conception-web",
    "ergonomie-web",
    "optimisation-performance-web",
    "freelance-web-quesnoy-sur-deule",
    "creation-site-quesnoy-sur-deule",
    "metropole-lilloise-web",
    "nord-web",
  ],
  openGraph: {
    title:
      "priscillia-ammeux-pixeliaandco-a-propos-developpeuse-web-ux-ui-designer-quesnoy-sur-deule",
    description:
      "priscillia-ammeux-pixeliaandco-autodidacte-developpeuse-web-creation-sites-web-sur-mesure-approche-intuitive-humaine-quesnoy-sur-deule",
    type: "website",
    locale: "fr_FR",
    url: "https://www.pixeliaandco.fr/about",
    siteName: "priscillia-ammeux-pixeliaandco-developpeuse-web",
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
