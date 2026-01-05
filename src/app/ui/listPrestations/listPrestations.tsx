import Card from "@/app/components/card/card";
import prestationsData from "../../../data/prestations.json";

function getPresentationContent(
  presentation: { content: string } | { content: string }[] | undefined
) {
  if (!presentation) return [];
  if (Array.isArray(presentation)) {
    return presentation.map((item) => item.content);
  }
  if (typeof presentation === "object" && "content" in presentation) {
    return [presentation.content];
  }
  return [];
}

export default function ListPrestations() {
  const prestations = [...prestationsData.offres_principales];

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {prestations.map((prestation: any) => {
          const presentationContent = getPresentationContent(
            prestation.presentation
          );

          const hasExamples =
            "examples" in prestation && Array.isArray(prestation.examples);
          const hasInclus =
            "inclus" in prestation && Array.isArray(prestation.inclus);

          return (
            <Card
              key={prestation.id ?? Math.random()}
              className="w-full lg:w-1/3 flex flex-col justify-between h-full"
              title={prestation.title}>
              <div className="flex-grow">
                <ul className="text-white list-none mt-2 mb-2 text-sm">
                  {prestation.price && (
                    <li className="mt-2 mb-4 font-bold">{prestation.price}</li>
                  )}
                  {prestation.description && (
                    <li className="mt-2 mb-2">{prestation.description}</li>
                  )}

                  {hasExamples && (
                    <>
                      <li className="mt-4 mb-2 font-bold">Exemples :</li>
                      {prestation.examples.map(
                        (exemple: string, index: number) => (
                          <li key={index} className="mt-1 mb-1 ml-4">
                            • {exemple}
                          </li>
                        )
                      )}
                    </>
                  )}

                  {hasInclus && (
                    <>
                      <li className="mt-4 mb-2 font-bold">
                        Inclus dans l'offre :
                      </li>
                      {prestation.inclus.map((inc: string, index: number) => (
                        <li key={index} className="mt-1 mb-1 ml-4">
                          • {inc}
                        </li>
                      ))}
                    </>
                  )}

                  {presentationContent.length > 0 && (
                    <>
                      {presentationContent.map((content, index) => (
                        <li
                          key={index}
                          className="mt-3 mb-1 font-bold flex items-start">
                          <span className="mr-2 ">→</span>
                          <span>{content}</span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </div>
            </Card>
          );
        })}
      </section>

      <section className="mt-8 mb-8 p-6 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4 flex items-center text-pink-900">
          <span className="mr-2 text-2xl">⚠️</span>À prévoir par le client
        </h3>
        <ul className="space-y-3 text-pink-900 text-sm list-disc list-inside ml-2">
          <li className="pl-2">
            <strong>Hébergement et nom de domaine :</strong> pour être 100 %
            propriétaire de votre site web (je peux vous conseiller les
            meilleures options selon votre budget).
          </li>
          <li className="pl-2">
            <strong>Mentions légales et politique de confidentialité :</strong>{" "}
            à me fournir. Si vous n'en disposez pas, je peux vous mettre en
            relation avec une juriste spécialisée pour les rédiger.
          </li>
        </ul>
      </section>

      {/* Prestations supplémentaires */}
      <section className="mt-8">
        <h3 className="text-xl font-bold mb-4 ml-4">
          Prestations supplémentaires
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {prestationsData.services_complementaires.map((service: any) => (
            <Card
              key={service.id ?? Math.random()}
              title={service.title}
              className="w-full px-2 flex flex-col justify-between h-full">
              <div className="flex-grow">
                <ul className="text-white list-none mt-2 mb-2 text-sm">
                  {service.price && (
                    <li className="mt-2 mb-2 font-bold">{service.price}</li>
                  )}
                  {service.description && (
                    <li className="mt-2 mb-2">{service.description}</li>
                  )}

                  {"inclus" in service && Array.isArray(service.inclus) && (
                    <>
                      <li className="mt-4 mb-2 font-bold">
                        Inclus dans l'offre :
                      </li>
                      {service.inclus.map((inc: string, i: number) => (
                        <li key={i} className="mt-1 mb-1 ml-4">
                          • {inc}
                        </li>
                      ))}
                    </>
                  )}

                  {service.presentation &&
                    (Array.isArray(service.presentation) ? (
                      service.presentation.map((p: any, i: number) => (
                        <li key={i} className="mt-1 mb-1 ml-0 text-sm">
                          → {p.content}
                        </li>
                      ))
                    ) : (
                      <li className="mt-1 mb-1 text-sm">
                        → {service.presentation.content}
                      </li>
                    ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
