import { GrCertificate } from "react-icons/gr";
import { FaHeadSideVirus } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Card from "../../components/card/card";
import BackendSkills from "../backendSkills/backendSkills";
import FrontendSkills from "../frontendSkills/frontendSkills";
import grades from "../../../data/grades.json";
import GradesItems from "../gradesItems/gradesItems";
import { BiHandicap } from "react-icons/bi";
import DesignSkills from "../designSkills/designSkills";

export default function GradesAndKnows() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
      <Card
        className="w-full sm:w-1/2"
        Icon={FaHeadSideVirus}
        title="Mes compétences"
        color="bg-blue-100">
        <ul className="text-gray-700 list-disc ml-3">
          <h1 className="flex items-center font-bold">
            Spécifier, concevoir et développer des logiciels ou applications web
          </h1>
          <ul className="grid grid-cols-3 gap-4">
            <BackendSkills />
            <FrontendSkills />
            <DesignSkills />
          </ul>

          <h1 className="flex items-center pt-3 font-bold ">
            Concevoir, gérer et interroger des bases de données:{" "}
          </h1>
          <li className="flex items-center ml-6">
            <SiPostgresql className="ml-2 mr-2" />
            <span className="font-normal">PostgreSQL,</span>
            <SiMysql className="ml-2 mr-2" />
            <span className="font-normal">MySQL</span>
          </li>

          <h1 className="flex items-center pt-3 font-bold">
            Organiser et gérer des projets informatiques en équipe:{" "}
          </h1>
          <li className="flex items-center ml-6">
            <FaGithub className="ml-2 mr-2" />{" "}
            <span className="font-normal">Git</span>
          </li>

          <h1 className="flex items-center pt-3 font-bold">
            Conseiller et orienter le client dans son choix
          </h1>

          <h1 className="flex items-center pt-3 font-bold">
            Outils et technologies de déploiement:
          </h1>
          <li className="flex items-center ml-6">
            <span className="font-normal">Docker, Vercel</span>
          </li>

          <h1 className="flex items-center pt-3 font-bold">Tests :</h1>
          <li className="flex items-center ml-6">
            JUnit, Jest, Karaté ( Framework de tests d'API REST), Playwright.
          </li>

          <h1 className="flex items-center pt-3 font-bold">
            Accessibilité Web:
          </h1>
          <li className="flex items-center ml-6">
            Techniques et pratiques d’accessibilité (formation prévue courant
            octobre- novembre)
          </li>

          <h1 className="flex items-center pt-3 font-bold">
            Pratiques de développement durable
          </h1>
          <li className="flex items-center ml-6">
            Optimisation de la consommation énergétique des applications
          </li>
          <li className="flex items-center ml-6">
            Utilisation de services et infrastructures à faible empreinte
            carbone{" "}
          </li>
        </ul>
      </Card>

      <Card
        Icon={GrCertificate}
        title="Mes diplômes & formations"
        color="bg-blue-100">
        <ul>
          {grades.map((grades) => (
            <GradesItems
              key={grades.id}
              title={grades.title}
              description={grades.description}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}
