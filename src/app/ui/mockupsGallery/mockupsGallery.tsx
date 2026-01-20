import mockups from "../../../data/mockups.json";
import MockupCard from "../mockupCard/mockupCard";
import Title from "../title/title";

export default function MockupsGallery() {
  return (
    <section className="mt-16 mb-10">
      <div className="ml-4 sm:ml-0">
        <Title text="Maquettes & Créations" />
        <p className="mb-8 text-lg leading-relaxed">
          Explorez mes créations graphiques, maquettes de sites web et designs
          réalisés pour divers projets. Chaque création reflète mon approche
          centrée sur l'expérience utilisateur et le design moderne.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
        {mockups.map((mockup) => (
          <MockupCard
            key={mockup.id}
            id={mockup.id}
            title={mockup.title}
            description={mockup.description}
            image={mockup.image}
            category={mockup.category}
            tags={mockup.tags}
          />
        ))}
      </div>
    </section>
  );
}
