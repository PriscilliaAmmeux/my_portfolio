import { TbBrandNextjs } from "react-icons/tb";
import SkillItem from "../skillItem/skillItem";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiCss3, SiFlutter, SiTailwindcss } from "react-icons/si";
import { BiHandicap } from "react-icons/bi";

export default function frontendSkills() {
  return (
    <li>
      <h1>Frontend:</h1>
      <ul>
        <SkillItem Icon={TbBrandNextjs} skill="Nextjs" />
        <SkillItem Icon={FaVuejs} skill="Vue3" />
        <SkillItem Icon={FaReact} skill="React" />
        <SkillItem Icon={SiFlutter} skill="Flutter" />
        <SkillItem Icon={SiTailwindcss} skill="Tailwindcss" />
        <SkillItem Icon={SiCss3} skill="CSS" />
        <SkillItem Icon={BiHandicap} skill="Accessibilité" />
      </ul>
    </li>
  );
}
