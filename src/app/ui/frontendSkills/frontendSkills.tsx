import { TbBrandNextjs } from "react-icons/tb";
import SkillItem from "../skillItem/skillItem";
import { FaReact, FaVuejs } from "react-icons/fa";
import {  SiFlutter } from "react-icons/si";

export default function frontendSkills() {
  return (
    <li>
      <h1>Frontend:</h1>
      <ul>
        <SkillItem Icon={TbBrandNextjs} skill="Nextjs" />
        <SkillItem Icon={FaVuejs} skill="Vue3" />
        <SkillItem Icon={FaReact} skill="React" />
        <SkillItem Icon={SiFlutter} skill="Flutter" />
      </ul>
    </li>
  );
}
