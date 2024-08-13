import { FaFigma } from "react-icons/fa";
import SkillItem from "../skillItem/skillItem";
import { SiCss3, SiTailwindcss } from "react-icons/si";

export default function designSkills() {
  return (
    <li>
      <h2>Design: </h2>
      <ul>
        <SkillItem Icon={SiTailwindcss} skill="Tailwindcss" />
        <SkillItem Icon={SiCss3} skill="CSS" />
        <SkillItem Icon={FaFigma} skill="Figma" />
      </ul>
    </li>
  );
}
