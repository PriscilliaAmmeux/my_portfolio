import ProjectCard from "../components/projectCard/projectCard";
import projects from "../../data/projects.json";
import Title from "../ui/title/title";
import { Metadata } from "next";
import Layout from "../ui/layout/layout";

export const metadata: Metadata = {
  title: "Mes projets - Priscillia Ammeux",
  description:
    "Découvrez les projets réalisés par Priscillia Ammeux, développeuse web passionnée.",
  keywords: [
    "projets",
    "développement web",
    "Priscillia Ammeux",
    "portfolio",
    "web",
  ],
};

export default function Project() {
  return (
    <Layout>
      <section className="pt-4 pb-10 sm:px-24">
        <Title text="Mes projets" />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 container mx-auto mx-4 justify-items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
