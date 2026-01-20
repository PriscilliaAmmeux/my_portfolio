import YoutubeVideo from "../components/youtubeVideo/youtubeVideo";
import About from "../ui/about/about";
import ContactMe from "../ui/contactMe/contactMe";
import Layout from "../ui/layout/layout";
import { Metadata } from "next";
import Logo from "../ui/logo/logo";
import Stickers from "../ui/stickers/stickers";

export const metadata: Metadata = {
  title: "pixeliaandco",
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
    "wordpress",
    "woocommerce",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr/about",
  },
};

export default function AboutPage() {
  return (
    <Layout>
      <About />
      <YoutubeVideo
        videoId="t6xY4uxQoLw"
        title="Pixelia&Co en images"
        description="Découvrez l'univers visuel de Pixelia&Co"
      />
      <Stickers />
      <section className="ml-2 mr-2">
        <ContactMe />
      </section>
    </Layout>
  );
}
