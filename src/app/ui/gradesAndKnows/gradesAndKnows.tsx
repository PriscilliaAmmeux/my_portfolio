import { GrCertificate } from "react-icons/gr";
import { FaHeadSideVirus } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Card from "../../components/card/card";
import BackendSkills from "../../components/backendSkills/backendSkills";
import FrontendSkills from "../../components/frontendSkills/frontendSkills";
import grades from "../../../data/grades.json";
import GradesItems from "../../components/gradesItems/gradesItems";

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
          <ul className="grid grid-cols-2 gap-4">
            <BackendSkills />
            <FrontendSkills />
          </ul>

          <h2 className="flex items-center pt-3 font-bold ">
            Concevoir, gérer et interroger des bases de données:{" "}
          </h2>
          <li className="flex items-center ml-6">
            <SiPostgresql className="ml-2 mr-2" />
            <span className="font-normal">PostgreSQL,</span>
            <SiMysql className="ml-2 mr-2" />
            <span className="font-normal">MySQL</span>
          </li>
          <h3 className="flex items-center pt-3 font-bold">
            Organiser et gérer des projets informatiques en équipe:{" "}
          </h3>
          <li className="flex items-center ml-6">
            <FaGithub className="ml-2 mr-2" />{" "}
            <span className="font-normal">Git</span>
          </li>

          <h4 className="flex items-center pt-3 font-bold">
            Conseiller et orienter le client dans son choix
          </h4>
        </ul>
      </Card>

      <Card Icon={GrCertificate} title="Mes diplômes" color="bg-blue-100">
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
