import ProjectCard from "../components/projectCard/projectCard";
import projects from "../../data/projects.json";
import Title from "../ui/title/title";
import { Metadata } from "next";
import Layout from "../ui/layout/layout";
import { slugify } from "../../lib/slugify";
import MockupsGallery from "../ui/mockupsGallery/mockupsGallery";

export const metadata: Metadata = {
  title: "Mes projets - Pixelia&Co",
  description:
    "Découvrez les projets réalisés par Priscillia Ammeux de chez Pixelia&Co, développeuse web passionnée, mettant en avant ses compétences en développement front-end et back-end, accessibilité et web design.",
  keywords: [
    "projets-web",
    "developpement-web",
    "priscillia-ammeux",
    "portfolio",
    "web-design",
    "pixelia&co",
    "accessibilite-web",
    "creation-site-internet",
    "creation-site-web-sur-mesure",
    "creation-site-vitrine",
    "creation-e-commerce",
    "site-web-responsive",
    "frontend",
    "backend",
    "ui-ux",
  ],
  alternates: {
    canonical: "https://www.pixelia-and-co.fr/project",
  },
};

export default function Project() {
  return (
    <Layout>
      <section className="pt-4 pb-10 sm:px-24">
        <div className="ml-4 sm:ml-0">
          <Title text="Mon portfolio" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto mx-4 justify-items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug ?? slugify(project.title)}
            />
          ))}
        </div>

        <MockupsGallery />
      </section>
    </Layout>
  );
}
