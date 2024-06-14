import ProjectCard from "../components/projectCard/projectCard";
import projects from "../../data/projects.json";
import Title from "../ui/title/title";
import { MdComputer } from "react-icons/md";
import { Metadata } from "next";
import Layout from "../ui/layout/layout";

export const metadata: Metadata = {
  title: "Mes projets - Priscillia Ammeux",
};

export default function Project() {
  return (
    <Layout>
      <section className="pt-4 sm:px-24">
        <Title text="Mes projets" icon={MdComputer} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto mx-4 justify-items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              methodology={project.methodology}
              image={project.image}
              tools={project.tools}
              technology={project.technology}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
