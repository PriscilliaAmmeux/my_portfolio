import Me from "../me/me";
import Manifest from "../manifest/manifest";
import CalendlyWidget from "../calendlyWidget/calendlyWidget";

export default function About() {
  return (
    <section className="pt-6 pb-6 lg:pt-10 lg:pb-10">
      <Me />
      <Manifest />
      <section className="flex justify-center">
        <CalendlyWidget />
      </section>
    </section>
  );
}
