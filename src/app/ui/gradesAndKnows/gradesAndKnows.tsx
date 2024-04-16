import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { FaHeadSideVirus, FaJava, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiFlutter, SiMysql, SiPostgresql } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import Article from "../components/card/card";

export default function GradesAndKnows() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
      <Article Icon={FaHeadSideVirus} title="Mes compétences">
        <ul className="text-gray-700 list-disc ml-5">
          <li className="flex items-center font-bold">
            Spécifier, concevoir et développer des logiciels ou applications web
          </li>
          <li className="flex items-center ml-10">
            Backend: <FaJava className="ml-2 mr-2" /> Java,{" "}
            <BiLogoSpringBoot className="ml-2 mr-2" />
            SpringBoot, <FaNodeJs className="ml-2 mr-2" /> Nodejs
          </li>
          <li className="flex items-center ml-10">
            Frontend: <TbBrandNextjs className="ml-2 mr-2" /> Nextjs,{" "}
            <FaReact className="ml-2 mr-2" /> React,{" "}
            <FaVuejs className="ml-2 mr-2" />
            Vue3, <SiFlutter className="ml-2 mr-2" /> Flutter
          </li>
          <li className="flex items-center pt-3 font-bold ">
            Concevoir, gérer et interroger des bases de données:{" "}
          </li>
          <li className="flex items-center ml-10">
            <SiPostgresql className="ml-2 mr-2" />
            <span className="font-normal">PostgreSQL,</span>
            <SiMysql className="ml-2 mr-2" />
            <span className="font-normal">MySQL</span>
          </li>
          <li className="flex items-center pt-3 font-bold">
            Organiser et gérer des projets informatiques en équipe:{" "}
          </li>
          <li className="flex items-center ml-10">
            <FaGithub className="ml-2 mr-2" />{" "}
            <span className="font-normal">Git</span>
          </li>

          <li className="flex items-center pt-3 font-bold">
            Conseiller et orienter le client dans son choix
          </li>
        </ul>
      </Article>

      <Article Icon={GrCertificate} title="Mes diplômes">
        <ul>
          <li className="text-gray-700 ">
            {" "}
            <span className="font-bold">
              Titre RNCP "Conceptrice et développeuse d’applications"
            </span>{" "}
            en alternance - niveau 6 - Acquis en Février 2024
          </li>
          <li className="text-gray-700 pt-3">
            {" "}
            <span className="font-bold">
              Titre RNCP "Développeuse web et web mobile"
            </span>{" "}
            - niveau 5 - Acquis en Octobre 2023
          </li>
          <li className="text-gray-700 pt-3">
            Divers certificats - E-learning - Open Class Room - Novembre 2021 à
            Septembre 2022
          </li>
          <li className="text-gray-700 pt-3">
            <span className="font-bold">BTS Assistant de Gestion PME PMI</span>{" "}
            - Lycée Duhamel Du Monceau à Pithiviers (45) - Acquis en 2008
          </li>
        </ul>
      </Article>
    </section>
  );
}
