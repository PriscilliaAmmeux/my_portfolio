import projects from "../../../data/projects.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "../../ui/layout/layout";
import { Metadata } from "next";

type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  demoLink: string;
};

export async function generateStaticParams() {
  return (projects as Project[]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = (projects as Project[]).find((p) => p.slug === params.slug);
  if (!project) return { title: "Projet — Pixelia&Co" };
  return {
    title: `${project.title} — Pixelia&Co`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Pixelia&Co`,
      description: project.description,
      url: `https://www.pixeliaandco.fr/project/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = (projects as Project[]).find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/project"
            className="text-sm text-pink-300 mb-6 inline-block">
            ← Retour aux projets
          </Link>

          <article className="bg-white/5 p-6 rounded-lg shadow-md">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {project!.title}
              </h1>
              <p className="text-sm text-gray-300">{project!.description}</p>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div>
                <Image
                  src={project!.image}
                  alt={`Aperçu du projet ${project!.title}`}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded"
                  priority
                />
              </div>

              <div className="text-gray-200">
                <h2 className="text-lg font-semibold mb-3">Détails</h2>

                <p className="mb-4 leading-relaxed">{project!.description}</p>

                <div className="flex gap-3">
                  <a
                    href={project!.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-pink-700 px-4 py-2 rounded font-medium shadow">
                    Voir le site
                  </a>

                  <Link
                    href="/contact"
                    className="inline-block border border-white/20 text-white px-4 py-2 rounded">
                    Me contacter
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
}
