import { FaFigma } from "react-icons/fa";
import SkillItem from "../skillItem/skillItem";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import SkillList from "@/app/components/skillList/skillList";

export default function designSkills() {
  return (
    <SkillList title="Design">
      <SkillItem Icon={SiTailwindcss} skill="Tailwindcss," />
      <SkillItem Icon={SiCss3} skill="CSS," />
      <SkillItem Icon={FaFigma} skill="Figma" />
    </SkillList>
  );
}
