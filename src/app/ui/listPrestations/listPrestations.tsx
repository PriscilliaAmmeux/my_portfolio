import Card from "@/app/components/card/card";
import prestationsData from "../../../data/prestations.json";
import PromoHalloween from "../promoHalloween/promoHalloween";

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
      <PromoHalloween />

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
              className="w-full lg:w-1/3 px-2 flex flex-col justify-between h-full"
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
                          <span className="mr-2 text-pink-300">→</span>
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
                      <li className="mt-1 mb-1 text-sm text-gray-800">
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
