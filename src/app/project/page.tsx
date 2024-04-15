import Footer from "../ui/components/footer/footer";
import ProjectCard from "../ui/components/projectCard/projectCard";
import Navbar from "../ui/navbar/navbar";
import projects from "../../data/projects.json";

export default function Project() {
  return (
    <main className="bg-gray-800 pt-4">
      <section className="flex justify-center">
        <Navbar showParagraph={false} />
      </section>
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
