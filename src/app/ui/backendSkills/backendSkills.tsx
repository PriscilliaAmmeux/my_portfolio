import { FaJava, FaNodeJs } from "react-icons/fa";
import SkillItem from "../skillItem/skillItem";
import { BiLogoSpringBoot } from "react-icons/bi";

export default function backendSkills() {
  return (
    <li>
      <h2>Backend:</h2>
      <ul>
        <SkillItem Icon={FaJava} skill="Java" />
        <SkillItem Icon={BiLogoSpringBoot} skill="SpringBoot" />
        <SkillItem Icon={FaNodeJs} skill="Nodejs" />
      </ul>
    </li>
  );
}
