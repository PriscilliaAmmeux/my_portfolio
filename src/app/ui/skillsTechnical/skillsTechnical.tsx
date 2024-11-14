import Card from "@/app/components/card/card";
import { FaHeadSideVirus, FaGithub } from "react-icons/fa";
import { SiPostgresql, SiMysql } from "react-icons/si";
import BackendSkills from "../backendSkills/backendSkills";
import DesignSkills from "../designSkills/designSkills";
import FrontendSkills from "../frontendSkills/frontendSkills";
import SkillSection from "@/app/components/skillSection/skillSection";

export default function SkillsTechnical() {
  return (
    <Card
      className="w-full sm:w-1/2"
      Icon={FaHeadSideVirus}
      title="Mes compétences techniques"
      color="bg-blue-100">
      <ul className="text-gray-700 list-disc">
        <SkillSection title="Spécifier, concevoir et développer des logiciels ou applications web">
          <ul className="md:grid md:grid-cols-3 md:gap-3 sm:gap-1">
            <BackendSkills />
            <FrontendSkills />
            <DesignSkills />
          </ul>
        </SkillSection>

        <SkillSection title="Concevoir, gérer et interroger des bases de données">
          <SiPostgresql className="hidden sm:inline ml-2 mr-2" />
          PostgreSQL,
          <SiMysql className="hidden sm:inline ml-2 mr-2" />
          MySQL
        </SkillSection>

        <SkillSection title="Organiser et gérer des projets informatiques en équipe">
          <FaGithub className="ml-2 mr-2 hidden sm:inline" />
          Git
        </SkillSection>

        <SkillSection title="Déployer des applications web">
          Docker, Vercel
        </SkillSection>

        <SkillSection title="Tests">Karaté, Junit, Jest</SkillSection>

        <SkillSection title="Accessibilité Web">
          Techniques et pratiques d’accessibilité (formation prévue le 4
          décembre 2024)
        </SkillSection>

        <SkillSection title="Éco-conception"></SkillSection>
        <SkillSection title="SEO"></SkillSection>
      </ul>
    </Card>
  );
}
