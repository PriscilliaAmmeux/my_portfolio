import Footer from "../ui/components/footer/footer";
import ProjectCard from "../ui/components/projectCard/projectCard";
import projects from "../../data/projects.json";
import Title from "../ui/components/title/title";
import { MdComputer } from "react-icons/md";
import { Metadata } from "next";
import Navigation from "../ui/navigation/navigation";

export const metadata: Metadata = {
  title: "Mes projets - Priscillia Ammeux",
};

export default function Project() {
  return (
    <main className="bg-gray-800 pt-4">
      <Navigation />
      <Title text="Mes projets" icon={MdComputer} />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto mx-4 justify-items-stretch">
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
      </section>

      <Footer />
    </main>
  );
}
