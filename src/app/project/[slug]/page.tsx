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
  client?: string;
  location?: string;
  intro?: string;
  description?: string;
  context?: string;
  objectives?: string[];
  solutions?: string[];
  technologies?: string[];
  result?: string;
  accompagnement?: string;
  testimonial?: { author?: string; content?: string };
  image?: string;
  demoLink?: string;
  seoDescription?: string;
  keywords?: string[];
  services?: string[];
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
    description: project.seoDescription ?? project.description,
    keywords: project.keywords ?? undefined,
    openGraph: {
      title: `${project.title} — Pixelia&Co`,
      description: project.seoDescription ?? project.description,
      url: `https://www.pixeliaandco.fr/project/${project.slug}`,
      images: project.image
        ? [{ url: `https://www.pixeliaandco.fr${project.image}` }]
        : undefined,
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
      <main className="py-12 px-6 mt-8 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/project"
            className="text-sm mb-6 inline-block text-pink-700 hover:underline">
            ← Retour aux projets
          </Link>

          <article className="bg-white rounded-xl shadow-lg p-8 text-gray-800">
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-700 mb-3">
                {project!.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                {project!.client && (
                  <span className="font-medium">{project!.client}</span>
                )}
                {project!.location && <span>• {project!.location}</span>}
              </div>

              {project!.intro && (
                <p className="text-lg mb-4">{project!.intro}</p>
              )}
              {project!.description && (
                <p className="text-sm text-gray-600">{project!.description}</p>
              )}
            </header>

            <section className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 space-y-6">
                {project!.image && (
                  <Image
                    src={project!.image}
                    alt={`Aperçu du projet ${project!.title}`}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    priority
                  />
                )}

                <div className="flex flex-col gap-3">
                  {project!.demoLink && (
                    <a
                      href={project!.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-pink-800 hover:scale-105 transition">
                      Voir le site
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="block w-full text-center border border-pink-700 text-pink-700 px-4 py-2 rounded-lg hover:bg-pink-700 hover:text-white hover:scale-105 transition">
                    Me contacter
                  </Link>
                </div>

                {project!.technologies && project!.technologies.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-pink-700 mb-2">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project!.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-2 space-y-6">
                {project!.context && (
                  <section>
                    <h3 className="text-lg font-semibold text-pink-700 mb-2">
                      Contexte
                    </h3>
                    <p className="leading-relaxed">{project!.context}</p>
                  </section>
                )}

                {project!.objectives?.length && (
                  <section>
                    <h3 className="text-lg font-semibold text-pink-700 mb-2">
                      Objectifs
                    </h3>
                    <ul className="list-disc list-inside">
                      {project!.objectives.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project!.solutions?.length && (
                  <section>
                    <h3 className="text-lg font-semibold text-pink-700 mb-2">
                      Solutions apportées
                    </h3>
                    <ul className="list-disc list-inside">
                      {project!.solutions.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project!.result && (
                  <section>
                    <h3 className="text-lg font-semibold text-pink-700 mb-2">
                      Résultats
                    </h3>
                    <p>{project!.result}</p>
                  </section>
                )}

                {project!.testimonial && (
                  <section>
                    <div className="bg-pink-50 border-l-4 border-pink-200 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-pink-700 mb-2">
                        Témoignage
                      </h3>
                      <blockquote className="italic text-gray-700">
                        “{project!.testimonial.content}”
                      </blockquote>
                      {project!.testimonial.author && (
                        <p className="mt-2 text-sm text-gray-500">
                          — {project!.testimonial.author}
                        </p>
                      )}
                    </div>
                  </section>
                )}

                {project!.accompagnement && (
                  <section>
                    <h3 className="text-sm font-semibold text-pink-700 mb-2">
                      Accompagnement
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {project!.accompagnement}
                    </p>
                  </section>
                )}

                {project!.services?.length && (
                  <section>
                    <h3 className="text-sm font-semibold text-pink-700 mb-2">
                      Services
                    </h3>
                    <ul className="list-disc list-inside text-sm">
                      {project!.services.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
}
